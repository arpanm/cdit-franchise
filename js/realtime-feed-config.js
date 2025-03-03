// Real-time Data Feed Configuration Management

class RealtimeFeedConfig {
    constructor() {
        this.configs = {
            brands: null,
            categories: null,
            products: null,
            warranty: null
        };
    }

    // Save configuration for a master data type
    saveConfig(type, config) {
        this.configs[type] = {
            ...config,
            timestamp: new Date().toISOString()
        };
        // In real implementation, this would save to backend
        console.log(`Saved ${type} configuration:`, this.configs[type]);
        return true;
    }

    // Get configuration for a master data type
    getConfig(type) {
        return this.configs[type];
    }

    // Validate Kafka configuration
    validateKafkaConfig(config) {
        const required = ['topic', 'bootstrapServers', 'securityProtocol'];
        return required.every(field => config[field] && config[field].trim() !== '');
    }

    // Test Kafka connection
    async testConnection(config) {
        // In real implementation, this would test the Kafka connection
        console.log('Testing Kafka connection:', config);
        return new Promise(resolve => {
            setTimeout(() => resolve(true), 1000);
        });
    }
}

// Initialize the configuration manager
const realtimeFeedConfig = new RealtimeFeedConfig();

// Handle configuration modal events
function updateSecurityFields(protocol) {
    const saslFields = document.querySelectorAll('.sasl-field');
    const sslFields = document.querySelectorAll('.ssl-field');
    
    saslFields.forEach(field => {
        field.style.display = (protocol.includes('SASL')) ? 'block' : 'none';
    });
    
    sslFields.forEach(field => {
        field.style.display = (protocol.includes('SSL')) ? 'block' : 'none';
    });
}

function openConfigModal(type) {
    const config = realtimeFeedConfig.getConfig(type);
    document.getElementById('feedType').value = type;
    if (config) {
        // Populate existing configuration
        document.getElementById('kafkaTopic').value = config.topic || '';
        document.getElementById('bootstrapServers').value = config.bootstrapServers || '';
        document.getElementById('securityProtocol').value = config.securityProtocol || 'PLAINTEXT';
        document.getElementById('saslMechanism').value = config.saslMechanism || 'PLAIN';
        document.getElementById('username').value = config.username || '';
        document.getElementById('password').value = config.password || '';
        document.getElementById('sslKeystoreLocation').value = config.sslKeystoreLocation || '';
        document.getElementById('sslKeystorePassword').value = config.sslKeystorePassword || '';
        document.getElementById('sslTruststoreLocation').value = config.sslTruststoreLocation || '';
        document.getElementById('sslTruststorePassword').value = config.sslTruststorePassword || '';
        document.getElementById('messageFormat').value = config.messageFormat || 'JSON';
        document.getElementById('attributeMapping').value = config.attributeMapping ? JSON.stringify(config.attributeMapping, null, 2) : generateDefaultAttributeMapping(type);
    } else {
        // Reset form for new configuration
        document.getElementById('realtimeFeedForm').reset();
        // Set default attribute mapping for new configuration
        document.getElementById('attributeMapping').value = generateDefaultAttributeMapping(type);
        document.getElementById('messageFormat').addEventListener('change', () => {
            const type = document.getElementById('feedType').value;
            document.getElementById('attributeMapping').value = generateDefaultAttributeMapping(type);
        });
    }
    
    // Initialize security fields visibility
    const protocol = document.getElementById('securityProtocol').value;
    updateSecurityFields(protocol);
    
    // Add event listener for security protocol changes
    document.getElementById('securityProtocol').addEventListener('change', (e) => {
        updateSecurityFields(e.target.value);
    });
    
    new bootstrap.Modal(document.getElementById('realtimeFeedModal')).show();
}

function generateDefaultAttributeMapping(type) {
    const defaultMapping = {};
    const messageFormat = document.getElementById('messageFormat').value;
    
    if (MASTER_DATA_ATTRIBUTES[type]) {
        if (messageFormat === 'JSON') {
            MASTER_DATA_ATTRIBUTES[type].forEach(attr => {
                defaultMapping[attr.name] = '';
            });
            return JSON.stringify(defaultMapping, null, 2);
        } else if (messageFormat === 'AVRO') {
            const avroSchema = {
                type: 'record',
                name: `${type}Record`,
                fields: MASTER_DATA_ATTRIBUTES[type].map(attr => ({
                    name: attr.name,
                    type: 'string'
                }))
            };
            return JSON.stringify(avroSchema, null, 2);
        }
    }
    return JSON.stringify(defaultMapping, null, 2);
}

// Save configuration
function saveRealtimeFeedConfig() {
    const type = document.getElementById('feedType').value;
    const securityProtocol = document.getElementById('securityProtocol').value;
    
    const config = {
        topic: document.getElementById('kafkaTopic').value,
        bootstrapServers: document.getElementById('bootstrapServers').value,
        securityProtocol: securityProtocol,
        messageFormat: document.getElementById('messageFormat').value,
        attributeMapping: JSON.parse(document.getElementById('attributeMapping').value || '{}')
    };
    
    // Add SASL configuration if protocol includes SASL
    if (securityProtocol.includes('SASL')) {
        config.saslMechanism = document.getElementById('saslMechanism').value;
        config.username = document.getElementById('username').value;
        config.password = document.getElementById('password').value;
    }
    
    // Add SSL configuration if protocol includes SSL
    if (securityProtocol.includes('SSL')) {
        config.sslKeystoreLocation = document.getElementById('sslKeystoreLocation').value;
        config.sslKeystorePassword = document.getElementById('sslKeystorePassword').value;
        config.sslTruststoreLocation = document.getElementById('sslTruststoreLocation').value;
        config.sslTruststorePassword = document.getElementById('sslTruststorePassword').value;
    };

    if (!realtimeFeedConfig.validateKafkaConfig(config)) {
        alert('Please fill in all required fields');
        return;
    }

    realtimeFeedConfig.testConnection(config)
        .then(success => {
            if (success) {
                realtimeFeedConfig.saveConfig(type, config);
                bootstrap.Modal.getInstance(document.getElementById('realtimeFeedModal')).hide();
                alert('Configuration saved successfully!');
            } else {
                alert('Failed to connect to Kafka. Please check your configuration.');
            }
        })
        .catch(error => {
            alert('Error testing connection: ' + error.message);
        });
}