// Global variables
let customerData = null;
let chatHistory = [];
let serviceRequests = [];

// Chatbot configuration
const chatbotConfig = {
    greetings: ['hello', 'hi', 'hey', 'greetings'],
    farewells: ['bye', 'goodbye', 'see you', 'thanks'],
    keywords: {
        service: ['service', 'repair', 'maintenance', 'fix', 'broken', 'not working'],
        warranty: ['warranty', 'guarantee', 'coverage', 'protection'],
        order: ['order', 'purchase', 'buy', 'delivery'],
        payment: ['payment', 'pay', 'bill', 'invoice', 'cost'],
        status: ['status', 'track', 'progress', 'update']
    },
    responses: {
        greeting: 'Hello! How can I assist you today?',
        farewell: 'Thank you for chatting with us. Have a great day!',
        default: 'I apologize, but I\'m not sure I understand. Could you please rephrase your question?',
        service: 'For service-related inquiries, I can help you with:\n1. Checking service request status\n2. Scheduling a new service\n3. Technical support\nWhat would you like to know more about?',
        warranty: 'I can help you with warranty-related questions:\n1. Check warranty status\n2. Warranty renewal\n3. Coverage details\nPlease let me know what you need.',
        order: 'For order-related assistance, I can help with:\n1. Order status\n2. Place new order\n3. Order history\nWhat information do you need?',
        payment: 'I can assist you with payment-related matters:\n1. Payment status\n2. Payment methods\n3. Invoice details\nHow can I help you?',
        status: 'I can help you check the status of your:\n1. Service requests\n2. Orders\n3. Warranty\nWhich one would you like to know about?'
    }
};

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    loadCustomerData();
    initializeServiceRequestsTable();
    initializeOrdersTable();
    loadWarrantyCards();
    loadKnowledgeBaseArticles();
    setupChatbot();
    
    // Add event listener for knowledge base search
    document.getElementById('kbSearch').addEventListener('input', function() {
        loadKnowledgeBaseArticles(this.value);
    });
});

// Load customer data
async function loadCustomerData() {
    try {
        // TODO: Replace with actual API call
        customerData = {
            name: 'John Doe',
            activeServiceRequests: 2,
            pendingOrders: 1,
            activeWarranties: 3,
            pendingPayments: 1
        };
        updateDashboardStats();
    } catch (error) {
        console.error('Error loading customer data:', error);
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    document.getElementById('customerName').textContent = customerData.name;
    document.getElementById('activeServiceRequests').textContent = customerData.activeServiceRequests;
    document.getElementById('pendingOrders').textContent = customerData.pendingOrders;
    document.getElementById('activeWarranties').textContent = customerData.activeWarranties;
    document.getElementById('pendingPayments').textContent = customerData.pendingPayments;
}

// Initialize service requests table
function initializeServiceRequestsTable(filterStatus = '') {
    // Add event listener for status filter
    const serviceStatusFilter = document.querySelector('.btn-group .btn-outline-primary');
    if (serviceStatusFilter) {
        serviceStatusFilter.addEventListener('click', function() {
            const status = this.textContent.trim();
            initializeServiceRequestsTable(status === 'All' ? '' : status);
            
            // Update active state of buttons
            document.querySelectorAll('.btn-group .btn-outline-primary').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
    }
    // TODO: Replace with actual API call
    serviceRequests = [
        {
            id: 'SR001',
            type: 'Repair',
            status: 'In Progress',
            date: '2023-12-01',
            engineer: 'Mike Smith',
            description: 'TV display showing vertical lines and color distortion',
            priority: 'High',
            product: 'Samsung 55" Smart TV',
            modelNo: 'UA55TU8000',
            serialNo: 'SN2023TV8875',
            purchaseDate: '2022-08-15',
            warrantyStatus: 'In Warranty',
            address: '123 Park Street, Bangalore 560001',
            contactNo: '+91 9876543210',
            preferredTime: '10:00 AM - 2:00 PM',
            notes: 'Customer reported issue started after power surge',
            serviceHistory: [
                {
                    date: '2023-12-01 09:30 AM',
                    status: 'Created',
                    remarks: 'Service request registered via customer portal'
                },
                {
                    date: '2023-12-01 10:15 AM',
                    status: 'Assigned',
                    remarks: 'Assigned to Engineer Mike Smith'
                },
                {
                    date: '2023-12-01 02:30 PM',
                    status: 'In Progress',
                    remarks: 'Engineer en route to customer location'
                }
            ],
            documents: [
                {
                    type: 'Purchase Invoice',
                    date: '2022-08-15',
                    fileNo: 'INV2022081534'
                },
                {
                    type: 'Warranty Card',
                    date: '2022-08-15',
                    fileNo: 'WAR2022081534'
                }
            ]
        },
        {
            id: 'SR002',
            type: 'Installation',
            status: 'Completed',
            date: '2023-11-15',
            engineer: 'John Davis'
        },
        {
            id: 'SR003',
            type: 'Maintenance',
            status: 'Completed',
            date: '2023-11-01',
            engineer: 'Sarah Wilson'
        },
        {
            id: 'SR004',
            type: 'Repair',
            status: 'Completed',
            date: '2023-10-20',
            engineer: 'Tom Brown'
        }
    ];

    const tbody = document.querySelector('#serviceRequestsTable tbody');
    // Filter service requests based on status
    const filteredRequests = filterStatus
        ? serviceRequests.filter(request => request.status === filterStatus)
        : serviceRequests;

    tbody.innerHTML = filteredRequests.map(request => `
        <tr>
            <td>${request.id}</td>
            <td>${request.type}</td>
            <td><span class="badge ${request.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${request.status}</span></td>
            <td>${request.date}</td>
            <td>${request.engineer}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewServiceDetails('${request.id}')">View Details</button>
            </td>
        </tr>
    `).join('');

    // Update mobile view
    const mobileView = document.getElementById('serviceRequestsMobile');
    mobileView.innerHTML = filteredRequests.map(request => `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="card-subtitle text-muted">${request.id}</h6>
                    <span class="badge ${request.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${request.status}</span>
                </div>
                <h5 class="card-title">${request.type}</h5>
                <p class="card-text">
                    <small class="text-muted">Date: ${request.date}</small><br>
                    <small class="text-muted">Engineer: ${request.engineer}</small>
                </p>
                <button class="btn btn-primary w-100" onclick="viewServiceDetails('${request.id}')">View Details</button>
            </div>
        </div>
    `).join('');
}

// Initialize orders table
function initializeOrdersTable(filterStatus = '') {
    // Mock data for testing
    const mockOrders = [
        { id: 'ORD001', items: 'Spare Parts x2', amount: '$150', status: 'Processing', date: '2023-10-15', actions: ['view', 'track'] },
        { id: 'ORD002', items: 'Service Kit', amount: '$75', status: 'Delivered', date: '2023-10-14', actions: ['view'] }
    ];

    // Add event listener for status filter
    const orderStatusFilter = document.getElementById('orderStatusFilter');
    if (orderStatusFilter) {
        orderStatusFilter.addEventListener('change', function() {
            initializeOrdersTable(this.value);
        });
    }
    // TODO: Replace with actual API call
    const orders = [
        {
            id: 'ORD001',
            items: 'Spare Parts (2)',
            amount: '1500.00',
            status: 'Pending',
            date: '2023-12-01'
        },
        {
            id: 'ORD002',
            items: 'Filter Kit',
            amount: '750.00',
            status: 'Completed',
            date: '2023-11-20'
        },
        {
            id: 'ORD003',
            items: 'Maintenance Kit',
            amount: '2000.00',
            status: 'Completed',
            date: '2023-11-10'
        },
        {
            id: 'ORD004',
            items: 'Replacement Parts',
            amount: '1800.00',
            status: 'Completed',
            date: '2023-10-25'
        },
        {
            id: 'ORD005',
            items: 'Service Package',
            amount: '2500.00',
            status: 'Completed',
            date: '2023-10-15'
        }
    ];

    const tbody = document.querySelector('#ordersTable tbody');
    // Filter orders based on status
    const filteredOrders = filterStatus
        ? orders.filter(order => order.status === filterStatus)
        : orders;

    tbody.innerHTML = filteredOrders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.items}</td>
            <td>${order.amount}</td>
            <td><span class="badge ${order.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${order.status}</span></td>
            <td>${order.date}</td>
            <td>
                
                ${order.status === 'Pending' ? 
                    `<button class="btn btn-sm btn-success" onclick="makePayment('${order.id}')">Pay</button>` 
                    : 
                    `<button class="btn btn-sm btn-primary" onclick="viewOrderDetails('${order.id}')" title="Download Invoice"><i class="bi bi-download"></i></button>`
                }
            </td>
        </tr>
    `).join('');

    // Update mobile view
    const mobileView = document.getElementById('ordersMobile');
    mobileView.innerHTML = filteredOrders.map(order => `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="card-subtitle text-muted">${order.id}</h6>
                    <span class="badge ${order.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${order.status}</span>
                </div>
                <h5 class="card-title">${order.items}</h5>
                <p class="card-text">
                    <small class="text-muted">Amount: ${order.amount}</small><br>
                    <small class="text-muted">Date: ${order.date}</small>
                </p>
                ${order.status === 'Pending' ? 
                    `<button class="btn btn-success w-100" onclick="makePayment('${order.id}')">Pay Now</button>` 
                    : 
                    `<button class="btn btn-primary w-100" onclick="viewOrderDetails('${order.id}')">View Invoice</button>`
                }
            </div>
        </div>
    `).join('');
}

// Load warranty cards
function loadWarrantyCards() {
    // TODO: Replace with actual API call
    const warranties = [
        {
            id: 'W001',
            productName: 'Smart TV',
            warrantyType: 'Extended Warranty',
            status: 'Active',
            expiryDate: '2024-12-31'
        },
        {
            id: 'W002',
            productName: 'Refrigerator',
            warrantyType: 'Standard Warranty',
            status: 'Expired',
            expiryDate: '2023-11-30'
        },
        {
            id: 'W003',
            productName: 'Washing Machine',
            warrantyType: 'Extended Warranty',
            status: 'Active',
            expiryDate: '2024-06-30'
        },
        {
            id: 'W004',
            productName: 'Air Conditioner',
            warrantyType: 'Standard Warranty',
            status: 'Expired',
            expiryDate: '2023-10-15'
        }
    ];

    const container = document.getElementById('warrantyCards');
    container.innerHTML = warranties.map(warranty => `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h6 class="card-title">${warranty.productName}</h6>
                    <p class="card-text">
                        <small class="text-muted">${warranty.warrantyType}</small><br>
                        Status: <span class="badge ${warranty.status === 'Expired' ? 'bg-danger' : 'bg-success'}">${warranty.status}</span><br>
                        Expires: ${warranty.expiryDate}
                    </p>
                    ${warranty.status === 'Expired' ? `<button class="btn btn-sm btn-primary" onclick="handleWarrantyRenewal('${warranty.id}')">Renew Warranty</button>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Load knowledge base articles
function loadKnowledgeBaseArticles(searchQuery = '') {
    // TODO: Replace with actual API call
    const articles = [
        {
            title: 'Common TV Problems',
            category: 'Troubleshooting',
            excerpt: 'Learn about common TV issues and how to fix them.'
        },
        {
            title: 'Appliance Maintenance Tips',
            category: 'Maintenance',
            excerpt: 'Essential tips for maintaining your home appliances.'
        },
        {
            title: 'Energy Saving Guide',
            category: 'Tips & Tricks',
            excerpt: 'How to reduce energy consumption of your appliances.'
        },
        {
            title: 'Warranty Benefits Explained',
            category: 'Warranty',
            excerpt: 'Understanding the benefits of extended warranty coverage.'
        },
        {
            title: 'Smart Home Integration',
            category: 'Technology',
            excerpt: 'Connect and control your appliances with smart home systems.'
        },
        {
            title: 'Troubleshooting AC Issues',
            category: 'Troubleshooting',
            excerpt: 'Common air conditioner problems and solutions.'
        }
    ];

    // Filter articles based on search query
    const filteredArticles = searchQuery
        ? articles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : articles;

    const container = document.getElementById('kbArticles');
    container.innerHTML = filteredArticles.map(article => `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h6 class="card-title">${article.title}</h6>
                    <p class="card-text">
                        <small class="text-muted">${article.category}</small><br>
                        ${article.excerpt}
                    </p>
                    <button class="btn btn-sm btn-primary" onclick="viewArticle('${article.title}')">Read More</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup chatbot
function setupChatbot() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatModal = document.getElementById('chatbotModal');

    // Remove restart button from header and add to footer
    const modalFooter = chatModal.querySelector('.modal-footer');
    if (modalFooter) {
        const restartButton = document.createElement('button');
        restartButton.className = 'btn btn-outline-secondary me-2';
        restartButton.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i> Restart';
        restartButton.onclick = () => {
            chatbotEngine.resetConversation();
            chatMessages.innerHTML = '';
            addChatMessage('bot', 'Hello! How can I help you today?');
        };
        modalFooter.insertBefore(restartButton, modalFooter.lastElementChild);
    }

    // Initialize chatbot engine with config
    chatbotEngine = new ChatbotEngine(chatbotConfig);

    // Add welcome message
    addChatMessage('bot', 'Hello! How can I help you today?');

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Initialize chatbot engine
let chatbotEngine;

// Process user message and generate response
function processMessage(message) {
    return chatbotEngine.processMessage(message);
}

// Send chat message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (message) {
        addChatMessage('user', message);
        chatInput.value = '';

        // Process the message and get response
        const response = processMessage(message);
        
        // Add slight delay to simulate processing
        setTimeout(() => {
            addChatMessage('bot', response);
        }, 500);
    }
}

// Add chat message to display
function addChatMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message mb-2`;
    messageDiv.innerHTML = `
        <div class="message-content p-2 ${sender === 'bot' ? 'bg-light' : 'bg-primary text-white'} rounded">
            ${message}
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// View service request details
function viewServiceDetails(requestId) {
    // Find the service request details from the mock data
    const request = serviceRequests.find(req => req.id === requestId);
    if (!request) return;

    // Helper function to safely update element text content
    const safeSetText = (elementId, text) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text || '';
        }
    };

    // Update modal content with service request details
    safeSetText('modalRequestId', request.id);
    safeSetText('modalServiceType', request.type);
    safeSetText('modalStatus', request.status);
    safeSetText('modalCreatedDate', request.date);
    safeSetText('modalEngineerName', request.engineer);
    safeSetText('modalProduct', request.product);
    safeSetText('modalSerialNumber', request.serialNo);
    safeSetText('modalIssueDescription', request.description);
    safeSetText('modalExpectedVisit', request.expectedVisit || 'Not scheduled yet');

    // Show/hide tracking section based on status
    const trackingSection = document.getElementById('serviceTrackingSection');
    if (trackingSection) {
        updateTrackingFlow(request.status);
    }

    // Update service history
    const historyContainer = document.querySelector('#modalServiceHistory tbody');
    if (historyContainer && request.serviceHistory) {
        historyContainer.innerHTML = request.serviceHistory.map(history => `
            <tr>
                <td>${history.date}</td>
                <td>${history.status}</td>
                <td>${history.remarks}</td>
                <td><span class="badge ${history.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${history.status}</span></td>
            </tr>
        `).join('');
    }

    // Update documents list
    const documentsContainer = document.getElementById('modalAttachments');
    if (documentsContainer && request.documents) {
        documentsContainer.innerHTML = request.documents.map(doc => `
            <div class="document-item d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h6 class="mb-0">${doc.type}</h6>
                    <small class="text-muted">Date: ${doc.date}</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" onclick="downloadDocument('${doc.fileNo}')">Download</button>
            </div>
        `).join('');
    }

    // Show the modal using Bootstrap
    const serviceDetailsModal = new bootstrap.Modal(document.getElementById('serviceDetailsModal'));
    serviceDetailsModal.show();
}

// View order details
function viewOrderDetails(orderId) {
    // TODO: Implement order details view
    console.log('Viewing order:', orderId);
}

// Make payment
function makePayment(orderId) {
    // TODO: Implement payment gateway integration
    console.log('Processing payment for order:', orderId);
}

// Renew warranty
function renewWarranty(productName) {
    // Initialize the modal with Bootstrap
    const warrantyModal = new bootstrap.Modal(document.getElementById('extendedWarrantyModal'));
    // Call the function to populate warranty plans
    populateWarrantyPlans();
    // Show the modal
    warrantyModal.show();
}

// View knowledge base article
function viewArticle(articleTitle) {
    // TODO: Implement article view
    console.log('Viewing article:', articleTitle);
}

// Submit new service request
function submitServiceRequest() {
    const form = document.getElementById('newServiceRequestForm');
    //if (!form.checkValidity()) {
    //    form.reportValidity();
    //    return;
    //}

    // Collect form data
    const formData = new FormData(form);
    const requestData = Object.fromEntries(formData.entries());

    // Add additional metadata
    // requestData.requestId = generateRequestId();
    requestData.createdDate = new Date().toISOString();
    requestData.status = 'Pending';

    // TODO: Replace with actual API call
    console.log('New Service Request:', requestData);

    // Show success message
    alert('Service request created successfully!');

    // Close modal using Bootstrap modal instance
    const modal = bootstrap.Modal.getInstance(document.getElementById('newServiceRequestModal'));
    modal.hide();

    // Reset form
    form.reset();
}

function updateTrackingFlow(currentStatus) {

    // Get all tracking steps and progress bar
    const steps = document.querySelectorAll('.timeline-step');
    const progressBar = document.querySelector('#serviceProgressBar');
    const trackingSection = document.querySelector('#serviceTrackingSection');
    
    // Show tracking section
    if (trackingSection) {
        trackingSection.style.display = 'block';
    }

    // Reset all steps to inactive state
    steps.forEach(step => {
        step.classList.remove('active', 'completed');
        const icon = step.querySelector('.step-icon');
        if (icon) icon.classList.remove('active', 'completed');
    });

    // Define the order of tracking steps and their corresponding progress percentages
    const stepOrder = ['Received', 'Assigned', 'In Progress', 'Completed'];
    const stepProgress = {
        'Received': 25,
        'Assigned': 50,
        'In Progress': 75,
        'Completed': 100
    };
    
    // Find the current status from history
    const currentStepIndex = stepOrder.indexOf(currentStatus);

    // Calculate progress percentage based on current status
    const progressPercentage = stepProgress[currentStatus] || 0;

    // Update progress bar
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute('aria-valuenow', progressPercentage);
        progressBar.textContent = `${progressPercentage}%`;

        // Update progress bar color based on status
        progressBar.className = 'progress-bar progress-bar-striped progress-bar-animated';
        if (currentStatus === 'Completed') {
            progressBar.classList.add('bg-success');
        } else if (currentStatus === 'In Progress') {
            progressBar.classList.add('bg-info');
        } else {
            progressBar.classList.add('bg-primary');
        }
    }

    // Update steps based on current status
    steps.forEach((step, index) => {
        if (index < currentStepIndex) {
            // Previous steps are completed
            step.classList.add('completed');
            const icon = step.querySelector('.step-icon');
            if (icon) icon.classList.add('completed');
        } else if (index === currentStepIndex) {
            // Current step is active
            step.classList.add('active');
            const icon = step.querySelector('.step-icon');
            if (icon) icon.classList.add('active');
        }
    });
}

// View customer dashboard
function viewOrderDashboard() {
    // Store the customer ID in session storage for the dashboard page
    window.location.href = 'order-tracking.html';
}