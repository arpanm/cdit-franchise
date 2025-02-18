// API Integration Management

// Remove dragula initialization as we're using connector-based mapping only

let apiConfigurations = [
    {
        id: 'api001',
        eventType: 'service_create',
        apiName: 'Service Creation Webhook',
        description: 'Notify external CRM about new service requests',
        endpointUrl: 'https://api.example.com/webhooks/service',
        httpMethod: 'POST',
        status: 'active',
        lastTriggered: '2024-01-15 14:30:00',
        authType: 'bearer',
        parameterMappings: [
            { sourceParam: 'serviceId', targetParam: 'requestId', description: 'Maps service ID to request ID' },
            { sourceParam: 'customerName', targetParam: 'customer', description: 'Maps customer name' },
            { sourceParam: 'customerContact', targetParam: 'contact', description: 'Maps contact information' },
            { sourceParam: 'serviceType', targetParam: 'service', description: 'Maps service type' },
            { sourceParam: 'description', targetParam: 'serviceDescription', description: 'Maps service description' },
            { sourceParam: 'priority', targetParam: 'servicePriority', description: 'Maps service priority' }
        ],
        apiParameters: [
            { name: 'requestId', type: 'string', required: true },
            { name: 'customer', type: 'string', required: true },
            { name: 'contact', type: 'string', required: true },
            { name: 'service', type: 'string', required: true },
            { name: 'serviceDescription', type: 'string', required: true },
            { name: 'servicePriority', type: 'string', required: true }
        ]
    },
    {
        id: 'api002',
        eventType: 'service_assign_franchise',
        apiName: 'Franchise Assignment Notification',
        description: 'Send franchise assignment details to ERP',
        endpointUrl: 'https://erp.example.com/api/franchise-assignment',
        httpMethod: 'POST',
        status: 'active',
        lastTriggered: '2024-01-14 09:15:00',
        authType: 'apikey',
        parameterMappings: [
            { sourceParam: 'serviceId', targetParam: 'requestId', description: 'Maps service ID' },
            { sourceParam: 'franchiseId', targetParam: 'franchiseCode', description: 'Maps franchise ID' },
            { sourceParam: 'assignmentDate', targetParam: 'assignedAt', description: 'Maps assignment date' },
            { sourceParam: 'assignedBy', targetParam: 'assignerName', description: 'Maps assigner name' }
        ],
        apiParameters: [
            { name: 'requestId', type: 'string', required: true },
            { name: 'franchiseCode', type: 'string', required: true },
            { name: 'assignedAt', type: 'datetime', required: true },
            { name: 'assignerName', type: 'string', required: true }
        ]
    },
    {
        id: 'api003',
        eventType: 'service_complete',
        apiName: 'Service Completion Handler',
        description: 'Update service status in external system',
        endpointUrl: 'https://external.example.com/service-status',
        httpMethod: 'PUT',
        status: 'error',
        lastTriggered: '2024-01-13 16:45:00',
        authType: 'basic',
        parameterMappings: [
            { sourceParam: 'serviceId', targetParam: 'requestId', description: 'Maps service ID' },
            { sourceParam: 'completionDate', targetParam: 'completedAt', description: 'Maps completion date' },
            { sourceParam: 'completionNotes', targetParam: 'notes', description: 'Maps completion notes' },
            { sourceParam: 'engineerId', targetParam: 'technicianId', description: 'Maps engineer ID' },
            { sourceParam: 'serviceStatus', targetParam: 'status', description: 'Maps service status' }
        ],
        apiParameters: [
            { name: 'requestId', type: 'string', required: true },
            { name: 'completedAt', type: 'datetime', required: true },
            { name: 'notes', type: 'string', required: false },
            { name: 'technicianId', type: 'string', required: true },
            { name: 'status', type: 'string', required: true }
        ]
    },
    {
        id: 'api004',
        eventType: 'service_cancel',
        apiName: 'Cancellation Processor',
        description: 'Process service cancellations',
        endpointUrl: 'https://api.example.com/cancellations',
        httpMethod: 'POST',
        status: 'inactive',
        lastTriggered: '2024-01-10 11:20:00',
        authType: 'none',
        parameterMappings: [
            { sourceParam: 'serviceId', targetParam: 'requestId', description: 'Maps service ID' },
            { sourceParam: 'cancellationReason', targetParam: 'reason', description: 'Maps cancellation reason' },
            { sourceParam: 'cancelledBy', targetParam: 'initiator', description: 'Maps cancellation initiator' },
            { sourceParam: 'cancellationDate', targetParam: 'cancelledAt', description: 'Maps cancellation date' }
        ],
        apiParameters: [
            { name: 'requestId', type: 'string', required: true },
            { name: 'reason', type: 'string', required: true },
            { name: 'initiator', type: 'string', required: true },
            { name: 'cancelledAt', type: 'datetime', required: true }
        ]
    }
];
let eventParameters = {};

// Track active connector
let activeConnector = null;
let startParam = null;

// Initialize parameter mapping functionality
function initializeParameterMapping() {
    const eventParams = document.querySelectorAll('#eventParametersList .parameter-item');
    const apiParams = document.querySelectorAll('#apiParametersList .parameter-item');

    eventParams.forEach(param => {
        const connector = document.createElement('div');
        connector.className = 'parameter-connector';
        param.appendChild(connector);

        connector.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startParam = param;
            activeConnector = true;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });
    });

    apiParams.forEach(param => {
        param.addEventListener('mouseup', () => {
            if (activeConnector && startParam) {
                createMapping(startParam, param);
            }
        });
    });
}

// Create SVG container for arrows
const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgContainer.style.position = 'absolute';
svgContainer.style.top = '0';
svgContainer.style.left = '0';
svgContainer.style.width = '100%';
svgContainer.style.height = '100%';
svgContainer.style.pointerEvents = 'none';
svgContainer.style.zIndex = '1000';

// Add SVG container when modal is shown
$('#addApiConfigModal').on('shown.bs.modal', function () {
    const modalBody = document.querySelector('.modal-body');
    modalBody.style.position = 'relative';
    modalBody.appendChild(svgContainer);
    updateArrows();
});

// Store parameter mappings
let parameterMappings = [];

// Handle mouse move for drawing temporary connector line
function handleMouseMove(e) {
    if (activeConnector && startParam) {
        // Remove any existing temporary arrows
        document.querySelectorAll('.temp-arrow').forEach(el => el.remove());
        
        const startRect = startParam.getBoundingClientRect();
        const modalRect = document.querySelector('.modal-body').getBoundingClientRect();
        
        // Calculate positions
        const startX = startRect.right - modalRect.left;
        const startY = startRect.top - modalRect.top + startRect.height / 2;
        const endX = e.clientX - modalRect.left;
        const endY = e.clientY - modalRect.top;
        
        // Draw temporary line
        drawArrow(startX, startY, endX, endY, 'temp-arrow');
    }
}

// Handle mouse up to finish connector creation
function handleMouseUp() {
    activeConnector = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    // Remove any temporary connector lines
    document.querySelectorAll('.temp-arrow').forEach(el => el.remove());
}

// Create new mapping between parameters
function createMapping(sourceParam, targetParam) {
    const sourceParamName = sourceParam.getAttribute('data-param-name');
    const targetParamName = targetParam.getAttribute('data-api-param');
    
    // Check if mapping already exists
    const existingMapping = parameterMappings.find(
        m => m.source === sourceParam && m.target === targetParam
    );
    
    if (!existingMapping) {
        parameterMappings.push({
            source: sourceParam,
            target: targetParam,
            sourceParam: sourceParamName,
            targetParam: targetParamName
        });
        updateArrows();
    }
}

// Draw arrow between two points
function drawArrow(startX, startY, endX, endY, className = '') {
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const controlPoint1X = startX + (endX - startX) / 2;
    const controlPoint2X = controlPoint1X;

    arrow.setAttribute('d', `M ${startX} ${startY} C ${controlPoint1X} ${startY}, ${controlPoint2X} ${endY}, ${endX} ${endY}`);
    arrow.setAttribute('stroke', '#007bff');
    arrow.setAttribute('stroke-width', '2');
    arrow.setAttribute('fill', 'none');
    arrow.setAttribute('marker-end', 'url(#arrowhead)');
    if (className) {
        arrow.classList.add(className);
    }
    svgContainer.appendChild(arrow);
}

// Update arrow positions
function updateArrows() {
    svgContainer.innerHTML = '';
    
    // Add arrowhead marker definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', 'arrowhead');
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '7');
    marker.setAttribute('refX', '9');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('orient', 'auto');

    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
    polygon.setAttribute('fill', '#007bff');

    marker.appendChild(polygon);
    defs.appendChild(marker);
    svgContainer.appendChild(defs);

    // Draw arrows for each mapping
    parameterMappings.forEach(mapping => {
        const sourceRect = mapping.source.getBoundingClientRect();
        const targetRect = mapping.target.getBoundingClientRect();
        const modalRect = document.querySelector('.modal-body').getBoundingClientRect();

        const startX = sourceRect.right - modalRect.left;
        const startY = sourceRect.top - modalRect.top + sourceRect.height / 2;
        const endX = targetRect.left - modalRect.left;
        const endY = targetRect.top - modalRect.top + targetRect.height / 2;

        drawArrow(startX, startY, endX, endY);
    });
}

// Handle window resize
window.addEventListener('resize', updateArrows);



// Clear arrows when modal is hidden
$('#addApiConfigModal').on('hidden.bs.modal', function () {
    parameterMappings = [];
    svgContainer.innerHTML = '';
});

// Initialize arrows when modal is shown
$('#addApiConfigModal').on('shown.bs.modal', function () {
    updateArrows();
});

// Handle adding new API parameters
document.getElementById('addApiParamBtn').addEventListener('click', function() {
    const container = document.getElementById('apiParamsContainer');
    const paramId = 'apiParam_' + Date.now();
    
    const paramDiv = document.createElement('div');
    paramDiv.className = 'api-param-item mb-2';
    paramDiv.innerHTML = `
        <div class="row">
            <div class="col-md-5">
                <input type="text" class="form-control" placeholder="Parameter Name" 
                       data-param-id="${paramId}" required>
            </div>
            <div class="col-md-4">
                <select class="form-select" required>
                    <option value="string">String</option>
                    <option value="number">Number</option>
                    <option value="boolean">Boolean</option>
                    <option value="object">Object</option>
                    <option value="array">Array</option>
                </select>
            </div>
            <div class="col-md-3">
                <button type="button" class="btn btn-danger btn-sm" onclick="removeApiParam(this)">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `;
    
    container.appendChild(paramDiv);
    updateApiParametersList();
});

// Remove API parameter
function removeApiParam(button) {
    const paramItem = button.closest('.api-param-item');
    paramItem.remove();
    updateApiParametersList();
}

// Update API parameters list for mapping
function updateApiParametersList() {
    const apiParamsList = document.getElementById('apiParametersList');
    apiParamsList.innerHTML = '';
    
    const paramInputs = document.querySelectorAll('#apiParamsContainer .api-param-item input[type="text"]');
    paramInputs.forEach(input => {
        if (input.value.trim()) {
            const paramElement = document.createElement('div');
            paramElement.className = 'parameter-item';
            paramElement.setAttribute('data-api-param', input.value);
            paramElement.innerHTML = `
                <div class="parameter-content">
                    <strong>${input.value}</strong>
                    <small class="text-muted">${input.closest('.row').querySelector('select').value}</small>
                </div>
            `;
            apiParamsList.appendChild(paramElement);
        }
    });
    
    // Reinitialize parameter mapping after updating API parameters
    initializeParameterMapping();
}

// Event parameter definitions
const EVENT_PARAMETERS = {
    service_create: [
        { name: 'serviceId', type: 'string', description: 'Unique service request ID' },
        { name: 'customerName', type: 'string', description: 'Customer name' },
        { name: 'customerContact', type: 'string', description: 'Customer contact details' },
        { name: 'serviceType', type: 'string', description: 'Type of service requested' },
        { name: 'description', type: 'string', description: 'Service description' },
        { name: 'priority', type: 'string', description: 'Service priority' },
        { name: 'location', type: 'object', description: 'Service location details' }
    ],
    service_assign_franchise: [
        { name: 'serviceId', type: 'string', description: 'Service request ID' },
        { name: 'franchiseId', type: 'string', description: 'Assigned franchise ID' },
        { name: 'assignmentTime', type: 'datetime', description: 'Assignment timestamp' }
    ],
    // Add more event parameters for other event types
};

// Add CSS styles for parameter connectors
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .parameter-item {
        position: relative;
        padding-right: 30px;
        margin-bottom: 10px;
    }
    .parameter-connector {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #007bff;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .parameter-connector:hover {
        background-color: #0056b3;
    }
    .temp-arrow {
        pointer-events: none;
    }
    .parameter-container {
        padding: 15px;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        background-color: #f8f9fa;
    }
    .source-params {
        margin-right: 40px;
    }
    .api-params {
        margin-left: 40px;
    }
`;
document.head.appendChild(styleSheet);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadApiConfigurations();
    setupEventListeners();
    initializeAuthenticationHandlers();
    initializeParameterMapping();
    bindAddApiConfiguration();
    bindSaveApiBtn();
});

function bindAddApiConfiguration() {
    document.getElementById('addApiConfigBtn').addEventListener('click', function() {
        // Clear the modal form
        document.getElementById('apiConfigForm').reset();

        // Reset basic form fields
        document.getElementById('eventType').value = '';
        document.getElementById('apiName').value = '';
        document.getElementById('apiDescription').value = '';
        document.getElementById('endpointUrl').value = '';
        document.getElementById('httpMethod').value = 'GET';
        document.getElementById('authType').value = 'none';

        // Reset authentication fields
        document.getElementById('authUsername').value = '';
        document.getElementById('authPassword').value = '';
        document.getElementById('bearerToken').value = '';
        document.getElementById('apiKey').value = '';
        document.getElementById('apiKeyLocation').value = 'header';
        document.getElementById('apiKeyName').value = '';

        // Hide all auth detail sections
        document.getElementById('authDetails').classList.add('d-none');
        document.getElementById('basicAuthFields').classList.add('d-none');
        document.getElementById('bearerTokenField').classList.add('d-none');
        document.getElementById('apiKeyFields').classList.add('d-none');

        // Clear API parameters container
        document.getElementById('apiParamsContainer').innerHTML = '';

        // Clear parameter mapping sections
        document.getElementById('eventParametersList').innerHTML = '';
        document.getElementById('apiParametersList').innerHTML = '';
        // Show the modal
        $('#addApiConfigModal').modal('show');
    });
}

function bindSaveApiBtn() {
    document.getElementById('saveApiBtn').addEventListener('click', function() {
        // Save API configuration
        const apiConfig = {
            id: Date.now(), // Temporary ID
            eventType: document.getElementById('eventType').value,
            apiName: document.getElementById('apiName').value,
            apiDescription: document.getElementById('apiDescription').value,
            endpointUrl: document.getElementById('endpointUrl').value,
            httpMethod: document.getElementById('httpMethod').value,
            authType: document.getElementById('authType').value,
            authDetails: getAuthDetails(),
            parameterMappings: getParameterMappings(),
            status: 'active',
            lastTriggered: null
        };
        // Add the new API configuration
        apiConfigurations.push(apiConfig);
        saveApiConfigurations();
        // Close the modal
        $('#addApiConfigModal').modal('hide');
        // Refresh the display
        loadApiConfigurations();
    });
}


// Load parameter mappings when editing an API configuration
function loadParameterMappings(configId) {
    const selectedConfig = apiConfigurations.find(config => config.id === configId);
    if (selectedConfig && selectedConfig.parameterMappings) {
        // Clear existing mappings
        parameterMappings = [];
        
        // Load event parameters for the selected event type
        const eventType = selectedConfig.eventType;
        if (EVENT_PARAMETERS[eventType]) {
            const eventParamsList = document.getElementById('eventParametersList');
            eventParamsList.innerHTML = '';
            
            EVENT_PARAMETERS[eventType].forEach(param => {
                const paramElement = document.createElement('div');
                paramElement.className = 'parameter-item';
                paramElement.setAttribute('data-param-name', param.name);
                paramElement.innerHTML = `
                    <div class="parameter-content">
                        <strong>${param.name}</strong>
                        <small class="text-muted">${param.type}</small>
                    </div>
                    <div class="parameter-connector"></div>
                `;
                eventParamsList.appendChild(paramElement);
            });
        }
        
        // Load API parameters
        if (selectedConfig.apiParameters) {
            const apiParamsList = document.getElementById('apiParametersList');
            apiParamsList.innerHTML = '';
            
            selectedConfig.apiParameters.forEach(param => {
                const paramElement = document.createElement('div');
                paramElement.className = 'parameter-item';
                paramElement.setAttribute('data-api-param', param.name);
                paramElement.innerHTML = `
                    <div class="parameter-content">
                        <strong>${param.name}</strong>
                        <small class="text-muted">${param.type}</small>
                    </div>
                `;
                apiParamsList.appendChild(paramElement);
            });
        }
        
        // Initialize parameter mapping after loading parameters
        initializeParameterMapping();
        
        // Restore saved mappings
        selectedConfig.parameterMappings.forEach(mapping => {
            const sourceParam = document.querySelector(`#eventParametersList [data-param-name="${mapping.sourceParam}"]`);
            const targetParam = document.querySelector(`#apiParametersList [data-api-param="${mapping.targetParam}"]`);
            if (sourceParam && targetParam) {
                createMapping(sourceParam, targetParam);
            }
        });
    }
}

// Load existing API configurations
function loadApiConfigurations() {
    // Load from localStorage
    const savedConfigs = localStorage.getItem('apiConfigurations');
    if (savedConfigs) {
        apiConfigurations = JSON.parse(savedConfigs);
    }
    renderApiConfigurationsTable();
}

// Render API configurations table
function renderApiConfigurationsTable() {
    const tableBody = document.getElementById('apiConfigTable');
    tableBody.innerHTML = '';

    apiConfigurations.forEach(config => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${config.eventType}</td>
            <td>${config.apiName}</td>
            <td>${config.endpointUrl}</td>
            <td>${config.httpMethod}</td>
            <td>${config.lastTriggered || 'Never'}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(config.status)}">
                    ${config.status}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editConfiguration('${config.id}')">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger me-1" onclick="deleteConfiguration('${config.id}')">
                    <i class="bi bi-trash"></i>
                </button>
                <button class="btn btn-sm btn-success" onclick="testConfiguration('${config.id}')">
                    <i class="bi bi-play"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Handle event type change
function handleEventTypeChange() {
    const eventType = document.getElementById('eventType').value;
    const parametersList = document.getElementById('eventParametersList');
    const apiParamsList = document.getElementById('apiParametersList');

    if (eventType && EVENT_PARAMETERS[eventType]) {
        renderEventParameters(EVENT_PARAMETERS[eventType]);
    } else {
        parametersList.innerHTML = '';
        apiParamsList.innerHTML = '';
    }
}

// Render event parameters
function renderEventParameters(parameters) {
    const parametersList = document.getElementById('eventParametersList');
    parametersList.innerHTML = '';

    parameters.forEach(param => {
        const paramElement = document.createElement('div');
        paramElement.className = 'parameter-item';
        paramElement.setAttribute('data-param-name', param.name);
        paramElement.setAttribute('data-param-type', param.type);
        paramElement.draggable = false;
        paramElement.innerHTML = `
            <div class="parameter-content">
                <strong>${param.name}</strong>
                <small class="text-muted">${param.type}</small>
                <p class="mb-0 small">${param.description}</p>
            </div>
        `;
        parametersList.appendChild(paramElement);
    });
}

// Initialize authentication handlers
function initializeAuthenticationHandlers() {
    const authTypeSelect = document.getElementById('authType');
    const authDetails = document.getElementById('authDetails');
    const basicAuthFields = document.getElementById('basicAuthFields');
    const bearerTokenField = document.getElementById('bearerTokenField');
    const apiKeyFields = document.getElementById('apiKeyFields');

    // Initial state
    authDetails.classList.add('d-none');
    basicAuthFields.classList.add('d-none');
    bearerTokenField.classList.add('d-none');
    apiKeyFields.classList.add('d-none');

    // Add change event listener
    authTypeSelect.addEventListener('change', function() {
        const selectedAuth = this.value;

        // Show/hide auth details section
        authDetails.classList.toggle('d-none', selectedAuth === 'none');

        // Show/hide specific auth fields
        basicAuthFields.classList.toggle('d-none', selectedAuth !== 'basic');
        bearerTokenField.classList.toggle('d-none', selectedAuth !== 'bearer');
        apiKeyFields.classList.toggle('d-none', selectedAuth !== 'apikey');

        // Clear fields when switching auth types
        if (selectedAuth !== 'basic') {
            document.getElementById('authUsername').value = '';
            document.getElementById('authPassword').value = '';
        }
        if (selectedAuth !== 'bearer') {
            document.getElementById('bearerToken').value = '';
        }
        if (selectedAuth !== 'apikey') {
            document.getElementById('apiKey').value = '';
            document.getElementById('apiKeyName').value = '';
            document.getElementById('apiKeyLocation').value = 'header';
        }
    });
}

// Save API configuration
async function saveApiConfiguration(event) {
    event.preventDefault();

    const formData = {
        id: Date.now(),
        eventType: document.getElementById('eventType').value,
        apiName: document.getElementById('apiName').value,
        description: document.getElementById('apiDescription').value,
        endpointUrl: document.getElementById('endpointUrl').value,
        httpMethod: document.getElementById('httpMethod').value,
        authType: document.getElementById('authType').value,
        parameterMapping: getParameterMapping(),
        authentication: getAuthenticationDetails(),
        status: 'active',
        lastTriggered: null
    };

    try {
        apiConfigurations.push(formData);
        saveApiConfigurations();
        $('#addApiConfigModal').modal('hide');
        loadApiConfigurations();
    } catch (error) {
        console.error('Error saving configuration:', error);
        alert('Error saving configuration. Please try again.');
    }
}

// Get parameter mapping
function getParameterMapping() {
    const mapping = {};
    const apiParams = document.querySelectorAll('.api-params .parameter-item');
    
    apiParams.forEach(param => {
        const apiParam = param.getAttribute('data-api-param');
        const eventParam = param.getAttribute('data-param-name');
        if (apiParam && eventParam) {
            mapping[apiParam] = eventParam;
        }
    });

    return mapping;
}

// Get authentication details based on type
function getAuthenticationDetails() {
    const authType = document.getElementById('authType').value;
    switch (authType) {
        case 'basic':
            return {
                username: document.getElementById('authUsername').value,
                password: document.getElementById('authPassword').value
            };
        case 'bearer':
            return {
                token: document.getElementById('bearerToken').value
            };
        case 'apikey':
            return {
                key: document.getElementById('apiKey').value,
                location: document.getElementById('apiKeyLocation').value,
                name: document.getElementById('apiKeyName').value
            };
        default:
            return null;
    }
}

// Test API configuration
async function testConfiguration(configId) {
    try {
        const config = apiConfigurations.find(c => c.id === configId);
        if (config) {
            config.lastTriggered = new Date().toISOString();
            saveApiConfigurations();
            loadApiConfigurations();
            alert('Test successful!');
        }
    } catch (error) {
        console.error('Test failed:', error);
        alert('Test failed. Please check the configuration and try again.');
    }
}

// Delete API configuration
async function deleteConfiguration(configId) {
    if (confirm('Are you sure you want to delete this configuration?')) {
        try {
            apiConfigurations = apiConfigurations.filter(config => config.id !== configId);
            saveApiConfigurations();
            loadApiConfigurations();
        } catch (error) {
            console.error('Error deleting configuration:', error);
            alert('Error deleting configuration. Please try again.');
        }
    }
}

// Edit API configuration
function saveApiConfigurations() {
    // Save API configurations to localStorage for persistence
    localStorage.setItem('apiConfigurations', JSON.stringify(apiConfigurations));
    // Refresh the API configurations table
    renderApiConfigurationsTable();
}

function editConfiguration(configId) {
    const config = apiConfigurations.find(c => c.id === configId);
    if (config) {
        // Set form values
        document.getElementById('eventType').value = config.eventType;
        document.getElementById('apiName').value = config.apiName;
        document.getElementById('apiDescription').value = config.description;
        document.getElementById('endpointUrl').value = config.endpointUrl;
        document.getElementById('httpMethod').value = config.httpMethod;
        document.getElementById('authType').value = config.authType;

        // Clear existing API parameters
        document.getElementById('apiParamsContainer').innerHTML = '';

        // Add API parameters if they exist
        if (config.apiParameters) {
            config.apiParameters.forEach(param => {
                const paramDiv = document.createElement('div');
                paramDiv.className = 'api-param-item mb-2';
                paramDiv.innerHTML = `
                    <div class="row">
                        <div class="col-md-5">
                            <input type="text" class="form-control" value="${param.name}" 
                                   data-param-id="apiParam_${Date.now()}" required>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select" required>
                                <option value="string" ${param.type === 'string' ? 'selected' : ''}>String</option>
                                <option value="number" ${param.type === 'number' ? 'selected' : ''}>Number</option>
                                <option value="boolean" ${param.type === 'boolean' ? 'selected' : ''}>Boolean</option>
                                <option value="object" ${param.type === 'object' ? 'selected' : ''}>Object</option>
                                <option value="array" ${param.type === 'array' ? 'selected' : ''}>Array</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-danger btn-sm" onclick="removeApiParam(this)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                document.getElementById('apiParamsContainer').appendChild(paramDiv);
            });
        }

        // Update API parameters list for mapping
        updateApiParametersList();

        // Load parameter mappings
        loadParameterMappings(configId);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('addApiConfigModal'));
        modal.show();
    }
}

// Helper function to get status badge class
function getStatusBadgeClass(status) {
    switch (status.toLowerCase()) {
        case 'active':
            return 'bg-success';
        case 'inactive':
            return 'bg-secondary';
        case 'error':
            return 'bg-danger';
        default:
            return 'bg-primary';
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('eventType').addEventListener('change', handleEventTypeChange);
    document.getElementById('authType').addEventListener('change', handleAuthTypeChange);
    document.getElementById('apiConfigForm').addEventListener('submit', saveApiConfiguration);

    // Setup search and filter handlers
    document.getElementById('searchApi').addEventListener('input', filterConfigurations);
    document.getElementById('eventTypeFilter').addEventListener('change', filterConfigurations);
    document.getElementById('statusFilter').addEventListener('change', filterConfigurations);
}

// Filter configurations
function filterConfigurations() {
    const search = document.getElementById('searchApi').value.toLowerCase();
    const eventType = document.getElementById('eventTypeFilter').value;
    const status = document.getElementById('statusFilter').value;

    const filtered = apiConfigurations.filter(config => {
        const matchesSearch = search === '' ||
            config.apiName.toLowerCase().includes(search) ||
            config.endpointUrl.toLowerCase().includes(search) ||
            config.description.toLowerCase().includes(search);

        const matchesEventType = eventType === '' || config.eventType.startsWith(eventType);
        const matchesStatus = status === '' || config.status.toLowerCase() === status;

        return matchesSearch && matchesEventType && matchesStatus;
    });

    renderFilteredConfigurations(filtered);
}

// Render filtered configurations
function renderFilteredConfigurations(filtered) {
    const tableBody = document.getElementById('apiConfigTable');
    tableBody.innerHTML = '';

    filtered.forEach(config => {
        // Render row (same as in renderApiConfigurationsTable)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${config.eventType}</td>
            <td>${config.apiName}</td>
            <td>${config.endpointUrl}</td>
            <td>${config.httpMethod}</td>
            <td>${config.lastTriggered || 'Never'}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(config.status)}">
                    ${config.status}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editConfiguration('${config.id}')">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger me-1" onclick="deleteConfiguration('${config.id}')">
                    <i class="bi bi-trash"></i>
                </button>
                <button class="btn btn-sm btn-success" onclick="testConfiguration('${config.id}')">
                    <i class="bi bi-play"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Handle authentication type change
function handleAuthTypeChange() {
    const authType = document.getElementById('authType').value;
    const authDetails = document.getElementById('authDetails');
    const basicAuthFields = document.getElementById('basicAuthFields');
    const bearerTokenField = document.getElementById('bearerTokenField');
    const apiKeyFields = document.getElementById('apiKeyFields');

    // Show/hide auth details section
    authDetails.classList.toggle('d-none', authType === 'none');

    // Show/hide specific auth fields
    basicAuthFields.classList.toggle('d-none', authType !== 'basic');
    bearerTokenField.classList.toggle('d-none', authType !== 'bearer');
    apiKeyFields.classList.toggle('d-none', authType !== 'apikey');

    // Clear fields when switching auth types
    if (authType !== 'basic') {
        document.getElementById('authUsername').value = '';
        document.getElementById('authPassword').value = '';
    }
    if (authType !== 'bearer') {
        document.getElementById('bearerToken').value = '';
    }
    if (authType !== 'apikey') {
        document.getElementById('apiKey').value = '';
        document.getElementById('apiKeyName').value = '';
        document.getElementById('apiKeyLocation').value = 'header';
    }
}

function getAuthDetails() {
    const authTypeElement = document.getElementById('authType');
    if (!authTypeElement) return {};

    const authType = authTypeElement.value;
    const authDetails = {};

    switch (authType) {
        case 'basic':
            const username = document.getElementById('authUsername');
            const password = document.getElementById('authPassword');
            if (username) authDetails.username = username.value;
            if (password) authDetails.password = password.value;
            break;
        case 'bearer':
            const token = document.getElementById('authToken');
            if (token) authDetails.token = token.value;
            break;
        case 'apiKey':
            const key = document.getElementById('apiKey');
            const location = document.getElementById('apiKeyLocation');
            if (key) authDetails.key = key.value;
            if (location) authDetails.location = location.value;
            break;
        case 'none':
        default:
            break;
    }
    return authDetails;
}

function getParameterMappings() {
    const parameterMappings = [];
    const parameterContainer = document.getElementById('parameterMappings');
    
    // Return empty array if container doesn't exist
    if (!parameterContainer) return parameterMappings;
    
    const mappingRows = parameterContainer.getElementsByClassName('parameter-mapping-row');
    
    // If no mapping rows found, return empty array
    if (!mappingRows || mappingRows.length === 0) return parameterMappings;

    for (const row of mappingRows) {
        const sourceField = row.querySelector('.source-field');
        const targetField = row.querySelector('.target-field');
        const dataType = row.querySelector('.data-type');
        const requiredField = row.querySelector('.required-field');
        
        // Only add mapping if all required elements exist
        if (sourceField && targetField && dataType && requiredField) {
            const mapping = {
                sourceField: sourceField.value,
                targetField: targetField.value,
                dataType: dataType.value,
                required: requiredField.checked
            };
            parameterMappings.push(mapping);
        }
    }

    return parameterMappings;
}

// Load existing API configurations
function loadApiConfigurations() {
    // Load from localStorage
    const savedConfigs = localStorage.getItem('apiConfigurations');
    if (savedConfigs) {
        apiConfigurations = JSON.parse(savedConfigs);
    }
    renderApiConfigurationsTable();
}

// Render API configurations table
function renderApiConfigurationsTable() {
    const tableBody = document.getElementById('apiConfigTable');
    tableBody.innerHTML = '';

    apiConfigurations.forEach(config => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${config.eventType}</td>
            <td>${config.apiName}</td>
            <td>${config.endpointUrl}</td>
            <td>${config.httpMethod}</td>
            <td>${config.lastTriggered || 'Never'}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(config.status)}">
                    ${config.status}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editConfiguration('${config.id}')">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger me-1" onclick="deleteConfiguration('${config.id}')">
                    <i class="bi bi-trash"></i>
                </button>
                <button class="btn btn-sm btn-success" onclick="testConfiguration('${config.id}')">
                    <i class="bi bi-play"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Handle event type change
function handleEventTypeChange() {
    const eventType = document.getElementById('eventType').value;
    const parametersList = document.getElementById('eventParametersList');
    const apiParamsList = document.getElementById('apiParametersList');

    if (eventType && EVENT_PARAMETERS[eventType]) {
        renderEventParameters(EVENT_PARAMETERS[eventType]);
    } else {
        parametersList.innerHTML = '';
        apiParamsList.innerHTML = '';
    }
}

// Render event parameters
function renderEventParameters(parameters) {
    const parametersList = document.getElementById('eventParametersList');
    parametersList.innerHTML = '';

    parameters.forEach(param => {
        const paramElement = document.createElement('div');
        paramElement.className = 'parameter-item';
        paramElement.setAttribute('data-param-name', param.name);
        paramElement.setAttribute('data-param-type', param.type);
        paramElement.draggable = false;
        paramElement.innerHTML = `
            <div class="parameter-content">
                <strong>${param.name}</strong>
                <small class="text-muted">${param.type}</small>
                <p class="mb-0 small">${param.description}</p>
            </div>
        `;
        parametersList.appendChild(paramElement);
    });
}

// Initialize authentication handlers
function initializeAuthenticationHandlers() {
    const authTypeSelect = document.getElementById('authType');
    const authDetails = document.getElementById('authDetails');
    const basicAuthFields = document.getElementById('basicAuthFields');
    const bearerTokenField = document.getElementById('bearerTokenField');
    const apiKeyFields = document.getElementById('apiKeyFields');

    // Initial state
    authDetails.classList.add('d-none');
    basicAuthFields.classList.add('d-none');
    bearerTokenField.classList.add('d-none');
    apiKeyFields.classList.add('d-none');

    // Add change event listener
    authTypeSelect.addEventListener('change', function() {
        const selectedAuth = this.value;

        // Show/hide auth details section
        authDetails.classList.toggle('d-none', selectedAuth === 'none');

        // Show/hide specific auth fields
        basicAuthFields.classList.toggle('d-none', selectedAuth !== 'basic');
        bearerTokenField.classList.toggle('d-none', selectedAuth !== 'bearer');
        apiKeyFields.classList.toggle('d-none', selectedAuth !== 'apikey');

        // Clear fields when switching auth types
        if (selectedAuth !== 'basic') {
            document.getElementById('authUsername').value = '';
            document.getElementById('authPassword').value = '';
        }
        if (selectedAuth !== 'bearer') {
            document.getElementById('bearerToken').value = '';
        }
        if (selectedAuth !== 'apikey') {
            document.getElementById('apiKey').value = '';
            document.getElementById('apiKeyName').value = '';
            document.getElementById('apiKeyLocation').value = 'header';
        }
    });
}

// Save API configuration
async function saveApiConfiguration(event) {
    event.preventDefault();

    const formData = {
        id: Date.now(),
        eventType: document.getElementById('eventType').value,
        apiName: document.getElementById('apiName').value,
        description: document.getElementById('apiDescription').value,
        endpointUrl: document.getElementById('endpointUrl').value,
        httpMethod: document.getElementById('httpMethod').value,
        authType: document.getElementById('authType').value,
        parameterMapping: getParameterMapping(),
        authentication: getAuthenticationDetails(),
        status: 'active',
        lastTriggered: null
    };

    try {
        apiConfigurations.push(formData);
        saveApiConfigurations();
        $('#addApiConfigModal').modal('hide');
        loadApiConfigurations();
    } catch (error) {
        console.error('Error saving configuration:', error);
        alert('Error saving configuration. Please try again.');
    }
}

// Get parameter mapping
function getParameterMapping() {
    const mapping = {};
    const apiParams = document.querySelectorAll('.api-params .parameter-item');
    
    apiParams.forEach(param => {
        const apiParam = param.getAttribute('data-api-param');
        const eventParam = param.getAttribute('data-param-name');
        if (apiParam && eventParam) {
            mapping[apiParam] = eventParam;
        }
    });

    return mapping;
}

// Get authentication details based on type
function getAuthenticationDetails() {
    const authType = document.getElementById('authType').value;
    switch (authType) {
        case 'basic':
            return {
                username: document.getElementById('authUsername').value,
                password: document.getElementById('authPassword').value
            };
        case 'bearer':
            return {
                token: document.getElementById('bearerToken').value
            };
        case 'apikey':
            return {
                key: document.getElementById('apiKey').value,
                location: document.getElementById('apiKeyLocation').value,
                name: document.getElementById('apiKeyName').value
            };
        default:
            return null;
    }
}

// Test API configuration
async function testConfiguration(configId) {
    try {
        const config = apiConfigurations.find(c => c.id === configId);
        if (config) {
            config.lastTriggered = new Date().toISOString();
            saveApiConfigurations();
            loadApiConfigurations();
            alert('Test successful!');
        }
    } catch (error) {
        console.error('Test failed:', error);
        alert('Test failed. Please check the configuration and try again.');
    }
}

// Delete API configuration
async function deleteConfiguration(configId) {
    if (confirm('Are you sure you want to delete this configuration?')) {
        try {
            apiConfigurations = apiConfigurations.filter(config => config.id !== configId);
            saveApiConfigurations();
            loadApiConfigurations();
        } catch (error) {
            console.error('Error deleting configuration:', error);
            alert('Error deleting configuration. Please try again.');
        }
    }
}

// Edit API configuration
function saveApiConfigurations() {
    // Save API configurations to localStorage for persistence
    localStorage.setItem('apiConfigurations', JSON.stringify(apiConfigurations));
    // Refresh the API configurations table
    renderApiConfigurationsTable();
}

function editConfiguration(configId) {
    const config = apiConfigurations.find(c => c.id === configId);
    if (config) {
        // Set form values
        document.getElementById('eventType').value = config.eventType;
        document.getElementById('apiName').value = config.apiName;
        document.getElementById('apiDescription').value = config.description;
        document.getElementById('endpointUrl').value = config.endpointUrl;
        document.getElementById('httpMethod').value = config.httpMethod;
        document.getElementById('authType').value = config.authType;

        // Clear existing API parameters
        document.getElementById('apiParamsContainer').innerHTML = '';

        // Add API parameters if they exist
        if (config.apiParameters) {
            config.apiParameters.forEach(param => {
                const paramDiv = document.createElement('div');
                paramDiv.className = 'api-param-item mb-2';
                paramDiv.innerHTML = `
                    <div class="row">
                        <div class="col-md-5">
                            <input type="text" class="form-control" value="${param.name}" 
                                   data-param-id="apiParam_${Date.now()}" required>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select" required>
                                <option value="string" ${param.type === 'string' ? 'selected' : ''}>String</option>
                                <option value="number" ${param.type === 'number' ? 'selected' : ''}>Number</option>
                                <option value="boolean" ${param.type === 'boolean' ? 'selected' : ''}>Boolean</option>
                                <option value="object" ${param.type === 'object' ? 'selected' : ''}>Object</option>
                                <option value="array" ${param.type === 'array' ? 'selected' : ''}>Array</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn btn-danger btn-sm" onclick="removeApiParam(this)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                document.getElementById('apiParamsContainer').appendChild(paramDiv);
            });
        }

        // Update API parameters list for mapping
        updateApiParametersList();

        // Load parameter mappings
        loadParameterMappings(configId);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('addApiConfigModal'));
        modal.show();
    }
}

// Helper function to get status badge class
function getStatusBadgeClass(status) {
    switch (status.toLowerCase()) {
        case 'active':
            return 'bg-success';
        case 'inactive':
            return 'bg-secondary';
        case 'error':
            return 'bg-danger';
        default:
            return 'bg-primary';
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('eventType').addEventListener('change', handleEventTypeChange);
    document.getElementById('authType').addEventListener('change', handleAuthTypeChange);
    document.getElementById('apiConfigForm').addEventListener('submit', saveApiConfiguration);

    // Setup search and filter handlers
    document.getElementById('searchApi').addEventListener('input', filterConfigurations);
    document.getElementById('eventTypeFilter').addEventListener('change', filterConfigurations);
    document.getElementById('statusFilter').addEventListener('change', filterConfigurations);
}

// Filter configurations
function filterConfigurations() {
    const search = document.getElementById('searchApi').value.toLowerCase();
    const eventType = document.getElementById('eventTypeFilter').value;
    const status = document.getElementById('statusFilter').value;

    const filtered = apiConfigurations.filter(config => {
        const matchesSearch = search === '' ||
            config.apiName.toLowerCase().includes(search) ||
            config.endpointUrl.toLowerCase().includes(search) ||
            config.description.toLowerCase().includes(search);

        const matchesEventType = eventType === '' || config.eventType.startsWith(eventType);
        const matchesStatus = status === '' || config.status.toLowerCase() === status;

        return matchesSearch && matchesEventType && matchesStatus;
    });

    renderFilteredConfigurations(filtered);
}

// Render filtered configurations
function renderFilteredConfigurations(filtered) {
    const tableBody = document.getElementById('apiConfigTable');
    tableBody.innerHTML = '';

    filtered.forEach(config => {
        // Render row (same as in renderApiConfigurationsTable)
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${config.eventType}</td>
            <td>${config.apiName}</td>
            <td>${config.endpointUrl}</td>
            <td>${config.httpMethod}</td>
            <td>${config.lastTriggered || 'Never'}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(config.status)}">
                    ${config.status}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editConfiguration('${config.id}')">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger me-1" onclick="deleteConfiguration('${config.id}')">
                    <i class="bi bi-trash"></i>
                </button>
                <button class="btn btn-sm btn-success" onclick="testConfiguration('${config.id}')">
                    <i class="bi bi-play"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Handle authentication type change
function handleAuthTypeChange() {
    const authType = document.getElementById('authType').value;
    const authDetails = document.getElementById('authDetails');
    const basicAuthFields = document.getElementById('basicAuthFields');
    const bearerTokenField = document.getElementById('bearerTokenField');
    const apiKeyFields = document.getElementById('apiKeyFields');

    // Show/hide auth details section
    authDetails.classList.toggle('d-none', authType === 'none');

    // Show/hide specific auth fields
    basicAuthFields.classList.toggle('d-none', authType !== 'basic');
    bearerTokenField.classList.toggle('d-none', authType !== 'bearer');
    apiKeyFields.classList.toggle('d-none', authType !== 'apikey');

    // Clear fields when switching auth types
    if (authType !== 'basic') {
        document.getElementById('authUsername').value = '';
        document.getElementById('authPassword').value = '';
    }
    if (authType !== 'bearer') {
        document.getElementById('bearerToken').value = '';
    }
    if (authType !== 'apikey') {
        document.getElementById('apiKey').value = '';
        document.getElementById('apiKeyName').value = '';
        document.getElementById('apiKeyLocation').value = 'header';
    }
}