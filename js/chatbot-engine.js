// Enhanced Chatbot Engine with RiveScript integration

class ChatbotEngine {
    constructor(config) {
        this.config = config;
        this.context = {
            currentTopic: null,
            lastIntent: null,
            conversationHistory: [],
            productContext: null,
            sessionStartTime: new Date(),
            currentOptions: null,
            selectedOption: null,
            conversationLevel: 1
        };
        this.similarityThreshold = 0.6;
        this.maxHistoryLength = 10;

        // Initialize RiveScript
        this.bot = new RiveScript();
        this.loadRiveScriptBrain();
    }

    // Load RiveScript brain with conversation patterns
    async loadRiveScriptBrain() {
        const brain = `
            ! version = 2.0

            + hello
            - Hello! How can I assist you today?

            + hi
            @ hello

            + hey
            @ hello

            + bye
            - Thank you for chatting with us. Have a great day!

            + goodbye
            @ bye

            + schedule service *
            - I can help you schedule a service. What type of appliance do you need service for?

            + * (tv|television|smart tv|led tv|lcd) *
            - I can help you with your TV service request. Would you like to:
            ^ Check available slots
            ^ Request urgent service
            ^ Get pricing information

            + * (refrigerator|fridge|freezer|cooler) *
            - I can help you with your refrigerator service request. Would you like to:
            ^ Check available slots
            ^ Request urgent service
            ^ Get pricing information

            + * (ac|air conditioner|air conditioning|cooling) *
            - I can help you with your AC service request. Would you like to:
            ^ Check available slots
            ^ Request urgent service
            ^ Get pricing information

            + * (washing machine|washer|laundry machine) *
            - I can help you with your washing machine service request. Would you like to:
            ^ Check available slots
            ^ Request urgent service
            ^ Get pricing information

            + * (microwave|microwave oven|oven) *
            - I can help you with your microwave service request. Would you like to:
            ^ Check available slots
            ^ Request urgent service
            ^ Get pricing information

            + [*] check available slots [*]
            - Please select your preferred time slot:
            ^ Morning (9 AM - 12 PM)
            ^ Afternoon (12 PM - 4 PM)
            ^ Evening (4 PM - 7 PM)

            + [*] (problem|issue|not working|broken) [*]
            - I understand you're having an issue. How would you like to proceed?
            ^ Troubleshooting guide
            ^ Book a technician visit
            ^ Check warranty status

            + [*] status [*]
            - What would you like to track?
            ^ Service Request
            ^ Order Status
            ^ Warranty Status

            + *
            - I'm not sure I understand. Could you please rephrase that?
        `;

        await this.bot.stream(brain);
        await this.bot.sortReplies();
    }

    // Process user message and generate response
    processMessage(message) {
        message = message.toLowerCase().trim();
        
        // Update conversation history
        this.updateConversationHistory(message);
        
        // Check for context-based responses first
        const contextualResponse = this.handleContextualResponse(message);
        if (contextualResponse) return contextualResponse;
        
        // Handle second level responses if options were previously provided
        if (this.context.currentOptions && this.context.conversationLevel === 2) {
            const selectedOption = this.findSelectedOption(message);
            if (selectedOption) {
                this.context.selectedOption = selectedOption;
                // Generate appropriate follow-up response based on selection
                const response = this.generateSecondLevelResponse(this.context.lastIntent, this.extractEntities(message), selectedOption);
                if (response !== this.getFallbackResponse()) {
                    return response;
                }
            }
        }

        // Extract entities and intents
        const entities = this.extractEntities(message);
        const intent = this.detectIntent(message);
        
        // Update context with current intent and entities
        this.updateContext('lastIntent', intent);
        if (entities.productTypes.length > 0) {
            this.updateContext('productContext', entities.productTypes[0]);
        }

        // Generate contextual response
        return this.generateResponse(intent, entities, message);
    }

    generateResponse(intent, entities, message) {
        // Reset conversation if restart is requested
        if (message.includes('restart') || message.includes('start over')) {
            this.resetConversation();
            return 'Let\'s start over. How can I help you today?';
        }

        // First level response generation
        if (entities.productTypes.length > 0) {
            const product = entities.productTypes[0];
            let response = '';
            let options = [];

            switch (intent) {
                case 'schedule':
                    options = ['Check available slots', 'Request urgent service', 'Get pricing information'];
                    response = `I can help you schedule a service for your ${product}. Please select one of the following options:\n`;
                    break;
                case 'problem':
                    options = ['Troubleshooting guide', 'Book a technician visit', 'Check warranty status'];
                    response = `I understand you're having an issue with your ${product}. How would you like to proceed?\n`;
                    break;
                case 'status':
                    options = ['Track current request', 'View service history', 'Check warranty status'];
                    response = `I'll help you check the status of your ${product} service. What would you like to know?\n`;
                    break;
            }

            if (options.length > 0) {
                this.context.currentOptions = options;
                this.context.conversationLevel = 2;
                return response + options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');
            }
        }

        // Default first level responses
        let response = '';
        let options = [];

        switch (intent) {
            case 'schedule':
                options = ['TV/Display', 'Refrigerator', 'AC', 'Washing Machine', 'Microwave'];
                response = 'Which appliance would you like to schedule service for?\n';
                break;
            case 'problem':
                options = ['Report New Issue', 'Track Existing Issue', 'Emergency Support'];
                response = 'How can I assist you with your issue?\n';
                break;
            case 'status':
                options = ['Service Request', 'Order Status', 'Warranty Status'];
                response = 'What would you like to track?\n';
                break;
            default:
                return this.getFallbackResponse();
        }

        if (options.length > 0) {
            this.context.currentOptions = options;
            this.context.conversationLevel = 2;
            return response + options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');
        }

        return this.getFallbackResponse();
    }

    // Find exact matches in predefined responses
    findExactMatch(message) {
        // Check for greetings
        if (this.config.greetings.some(greeting => message.includes(greeting))) {
            return this.config.responses.greeting;
        }

        // Check for farewells
        if (this.config.farewells.some(farewell => message.includes(farewell))) {
            return this.config.responses.farewell;
        }

        // Check for exact keyword matches
        for (const [category, keywords] of Object.entries(this.config.keywords)) {
            if (keywords.some(keyword => message.includes(keyword))) {
                return this.config.responses[category];
            }
        }

        return null;
    }

    // Find similar matches using cosine similarity
    findSimilarMatch(message) {
        const words = message.split(' ');
        let bestMatch = { score: 0, response: null };

        // Compare with each category's keywords
        for (const [category, keywords] of Object.entries(this.config.keywords)) {
            for (const keyword of keywords) {
                const similarity = this.calculateSimilarity(words, keyword.split(' '));
                if (similarity > this.similarityThreshold && similarity > bestMatch.score) {
                    bestMatch = { score: similarity, response: this.config.responses[category] };
                }
            }
        }

        return bestMatch.response;
    }

    // Calculate cosine similarity between two sets of words
    calculateSimilarity(words1, words2) {
        const vector1 = this.createVector(words1);
        const vector2 = this.createVector(words2);
        
        const dotProduct = Object.keys(vector1).reduce((sum, word) => {
            return sum + (vector1[word] * (vector2[word] || 0));
        }, 0);

        const magnitude1 = Math.sqrt(Object.values(vector1).reduce((sum, count) => sum + count * count, 0));
        const magnitude2 = Math.sqrt(Object.values(vector2).reduce((sum, count) => sum + count * count, 0));

        return dotProduct / (magnitude1 * magnitude2) || 0;
    }

    // Create word frequency vector
    createVector(words) {
        return words.reduce((vector, word) => {
            vector[word] = (vector[word] || 0) + 1;
            return vector;
        }, {});
    }

    // Extract entities from message
    extractEntities(message) {
        const entities = {
            dates: message.match(/\b\d{1,2}[-/]\d{1,2}[-/]\d{2,4}\b/g) || [],
            times: message.match(/\b\d{1,2}:\d{2}\b/g) || [],
            numbers: message.match(/\b\d+\b/g) || [],
            productTypes: this.extractProductTypes(message),
        };
        return entities;
    }

    // Extract product types from message with variations
    extractProductTypes(message) {
        const productTypes = {
            'tv': ['tv', 'television', 'smart tv', 'led tv', 'lcd'],
            'refrigerator': ['refrigerator', 'fridge', 'freezer', 'cooler'],
            'ac': ['ac', 'air conditioner', 'air conditioning', 'cooling'],
            'washing machine': ['washing machine', 'washer', 'laundry machine'],
            'microwave': ['microwave', 'microwave oven', 'oven']
        };
        
        let found = [];
        for (const [mainType, variations] of Object.entries(productTypes)) {
            if (variations.some(variant => message.includes(variant))) {
                found.push(mainType);
            }
        }
        return found;
    }

    // Update conversation history
    updateConversationHistory(message) {
        this.context.conversationHistory.push({
            message,
            timestamp: new Date()
        });
        
        // Keep history within limit
        if (this.context.conversationHistory.length > this.maxHistoryLength) {
            this.context.conversationHistory.shift();
        }
    }

    // Update context
    updateContext(key, value) {
        this.context[key] = value;
    }

    // Reset conversation context
    resetConversation() {
        this.context = {
            currentTopic: null,
            lastIntent: null,
            conversationHistory: [],
            productContext: null,
            sessionStartTime: new Date(),
            currentOptions: null,
            selectedOption: null,
            conversationLevel: 1
        };
    }

    // Find selected option from user message
    findSelectedOption(message) {
        if (!this.context.currentOptions) return null;

        // Check for numeric selection (improved to handle single digits better)
        const numericMatch = message.match(/^\s*(\d+)\s*$/);
        if (numericMatch) {
            const index = parseInt(numericMatch[1]) - 1;
            if (index >= 0 && index < this.context.currentOptions.length) {
                return this.context.currentOptions[index];
            }
        }

        // Enhanced text matching
        const normalizedMessage = message.toLowerCase().trim();
        return this.context.currentOptions.find(option => {
            const normalizedOption = option.toLowerCase();
            return normalizedMessage === normalizedOption || 
                   normalizedMessage.includes(normalizedOption) ||
                   // Add fuzzy matching for better text recognition
                   this.calculateSimilarity(normalizedMessage.split(' '), normalizedOption.split(' ')) > this.similarityThreshold;
        });
    }

    // Generate second level response based on selected option
    generateSecondLevelResponse(intent, entities, selectedOption) {
        // Handle scheduling flow
        if (intent === 'schedule') {
            // If a product type is selected from first level
            if (this.context.currentOptions.includes('TV/Display') && selectedOption) {
                this.context.productContext = selectedOption.toLowerCase();
                return `I can help you schedule a service for your ${selectedOption}. Would you like to:\n1. Check available slots\n2. Request urgent service\n3. Get pricing information`;
            }

            // Handle second level options for scheduling
            switch (selectedOption) {
                case 'Check available slots':
                    this.context.conversationLevel = 3;
                    this.context.currentOptions = ['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 7 PM)'];
                    return 'Please select your preferred time slot:\n1. Morning (9 AM - 12 PM)\n2. Afternoon (12 PM - 4 PM)\n3. Evening (4 PM - 7 PM)';
                case 'Request urgent service':
                    this.context.conversationLevel = 3;
                    return 'Our emergency service team will contact you within 30 minutes. Please provide your contact number.';
                case 'Get pricing information':
                    this.context.conversationLevel = 3;
                    this.context.currentOptions = ['Standard Service', 'Emergency Service'];
                    return 'Here are our service rates:\nStandard service visit: ₹500\nEmergency service: ₹1000\n\nWould you like to proceed with booking?\n1. Standard Service\n2. Emergency Service';
            }
        }

        // Handle problem reporting flow
        if (intent === 'problem') {
            switch (selectedOption) {
                case 'Troubleshooting guide':
                    this.context.conversationLevel = 3;
                    return 'I\'ll guide you through basic troubleshooting steps. First, please tell me what specific issue you\'re experiencing.';
                case 'Book a technician visit':
                    this.context.conversationLevel = 3;
                    this.context.currentOptions = ['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 7 PM)'];
                    return 'I\'ll help you schedule a technician visit. Please select your preferred time slot:\n1. Morning (9 AM - 12 PM)\n2. Afternoon (12 PM - 4 PM)\n3. Evening (4 PM - 7 PM)';
                case 'Check warranty status':
                    this.context.conversationLevel = 3;
                    return 'Please provide your product\'s serial number to check its warranty status.';
            }
        }

        // Handle status check flow
        if (intent === 'status') {
            switch (selectedOption) {
                case 'Track current request':
                    this.context.conversationLevel = 3;
                    return 'Please provide your service request ID to check its current status.';
                case 'View service history':
                    this.context.conversationLevel = 3;
                    return 'I\'ll show you your service history. Please provide your registered phone number.';
                case 'Check warranty status':
                    this.context.conversationLevel = 3;
                    return 'Please provide your product\'s serial number to check its warranty status.';
            }
        }

        return this.getFallbackResponse();
    }

    // Get fallback response
    getFallbackResponse() {
        const fallbackResponses = [
            'I\'m sorry, I didn\'t quite understand that. Could you please rephrase?',
            'I\'m not sure I follow. Could you provide more details?',
            'I didn\'t catch that. Would you mind explaining differently?',
            'I\'m having trouble understanding. Could you try again?'
        ];
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    // Handle contextual responses based on conversation history
    handleContextualResponse(message) {
        const history = this.context.conversationHistory;
        const lastIntent = this.context.lastIntent;
        const productContext = this.context.productContext;

        // Follow-up on product context
        if (productContext && message.includes('yes')) {
            if (lastIntent === 'schedule') {
                return 'Great! I\'ll help you schedule a service appointment for your ' + productContext + '. What date and time works best for you?';
            } else if (lastIntent === 'problem') {
                return 'I\'ll help you troubleshoot your ' + productContext + '. Can you describe what\'s not working correctly?';
            }
        }

        // Handle follow-up questions
        if (history.length >= 2) {
            const lastMessage = history[history.length - 2].message;
            if (lastMessage.includes('time') && message.match(/\b\d{1,2}(:\d{2})?\s*(am|pm)?\b/i)) {
                return 'I\'ll note down your preferred time. Could you also confirm your contact number for the service appointment?';
            }
        }

        return null;
    }

    // Detect intent from message
    detectIntent(message) {
        const intents = {
            schedule: /\b(schedule|book|appointment|visit|new service)\b/i,
            inquire: /\b(what|how|when|where|why|who)\b/i,
            problem: /\b(problem|issue|error|not working|broken)\b/i,
            status: /\b(status|track|progress|update)\b/i,
        };

        // Check if we're in a second-level conversation
        if (this.context.conversationLevel === 2 && this.context.currentOptions) {
            const selectedOption = this.findSelectedOption(message);
            if (selectedOption) {
                // Maintain the current intent if an option is selected
                return this.context.lastIntent || 'general';
            }
        }

        // Check for intent patterns
        for (const [intent, pattern] of Object.entries(intents)) {
            if (pattern.test(message)) {
                return intent;
            }
        }

        return 'general';
    }

    // Generate contextual response based on intent and entities
    generateResponse(intent, entities, message) {
        // Reset conversation if restart is requested
        if (message && message.toLowerCase().includes('restart') || message.toLowerCase().includes('start over')) {
            this.resetConversation();
            return 'Let\'s start over. How can I help you today?';
        }

        // Handle second level responses if options were previously provided
        if (this.context.currentOptions && this.context.conversationLevel === 2) {
            const selectedOption = this.findSelectedOption(message);
            if (selectedOption) {
                this.context.selectedOption = selectedOption;
                // Maintain the conversation context
                const response = this.generateSecondLevelResponse(intent, entities, selectedOption);
                if (response !== this.getFallbackResponse()) {
                    return response;
                }
            } else if (message.toLowerCase().includes('service') || 
                       message.toLowerCase().includes('schedule') ||
                       message.toLowerCase().includes('appointment')) {
                // Reset context for new service request
                this.context.conversationLevel = 1;
                this.context.currentOptions = null;
                intent = 'schedule';
            } else {
                // Keep the current options visible if selection wasn't understood
                return 'Please select one of the following options:\n' + 
                       this.context.currentOptions.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');
            }
        }

        // First level response generation
        if (entities.productTypes.length > 0) {
            const product = entities.productTypes[0];
            let response = '';
            let options = [];

            switch (intent) {
                case 'schedule':
                    options = ['Check available slots', 'Request urgent service', 'Get pricing information'];
                    response = `I can help you schedule a service for your ${product}. Please select one of the following options:\n`;
                    break;
                case 'problem':
                    options = ['Troubleshooting guide', 'Book a technician visit', 'Check warranty status'];
                    response = `I understand you're having an issue with your ${product}. How would you like to proceed?\n`;
                    break;
                case 'status':
                    options = ['Track current request', 'View service history', 'Check warranty status'];
                    response = `I'll help you check the status of your ${product} service. What would you like to know?\n`;
                    break;
            }

            if (options.length > 0) {
                this.context.currentOptions = options;
                this.context.conversationLevel = 2;
                return response + options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');
            }
        }

        // Default first level responses
        let response = '';
        let options = [];

        switch (intent) {
            case 'schedule':
                options = ['TV/Display', 'Refrigerator', 'AC', 'Washing Machine', 'Microwave'];
                response = 'Which appliance would you like to schedule service for?\n';
                break;
            case 'inquire':
                options = ['Product Information', 'Service Charges', 'Warranty Details', 'Operating Hours'];
                response = 'What information would you like to know about?\n';
                break;
            case 'problem':
                options = ['Report New Issue', 'Track Existing Issue', 'Emergency Support'];
                response = 'How can I assist you with your issue?\n';
                break;
            case 'status':
                options = ['Service Request', 'Order Status', 'Warranty Status'];
                response = 'What would you like to track?\n';
                break;
            default:
                return this.getFallbackResponse();
        }

        if (options.length > 0) {
            this.context.currentOptions = options;
            this.context.conversationLevel = 2;
            return response + options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');
        }

        return this.getFallbackResponse();
    }
}

// Export the ChatbotEngine class
window.ChatbotEngine = ChatbotEngine;