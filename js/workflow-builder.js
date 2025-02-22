// Workflow Builder JavaScript

let editor;
let selectedNode = null;
let nodeTypes = null;

// Initialize the workflow builder
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Drawflow to be loaded
    const initializeWorkflow = () => {
        try {
            if (typeof Drawflow === 'undefined') {
                throw new Error('Drawflow library not loaded');
            }

            const container = document.getElementById('drawflow');
            if (!container) {
                throw new Error('Workflow container not found');
            }

            // Initialize DrawFlow with proper configuration
            editor = new Drawflow(container);
            editor.reroute = true;
            editor.curvature = 0.3;
            editor.start();

            // Only proceed with setup if initialization was successful
            if (editor) {
                // Register node types
                nodeTypes = registerNodeTypes();
                // Setup drag and drop
                setupDragAndDrop();
                // Add event listeners
                setupEventListeners();
            }
        } catch (error) {
            console.error('Workflow initialization error:', error);
            // Retry initialization after a delay if Drawflow is not loaded
            if (error.message === 'Drawflow library not loaded') {
                setTimeout(initializeWorkflow, 500);
            }
        }
    };

    // Attempt to initialize
    initializeWorkflow();
});

// Register available node types
function registerNodeTypes() {
    const types = {
        state: {
            html: `
                <div class="node-entity p-2">
                    <i class="bi bi-circle me-2"></i>
                    <span class="node-title">State</span>
                </div>
            `,
            config: {
                state: '',
                states: ['Created', 'In Progress', 'Completed', 'Cancelled'],
                conditions: {}
            }
        },
        service: {
            html: `
                <div class="node-entity p-2">
                    <i class="bi bi-tools me-2"></i>
                    <span class="node-title">Service</span>
                </div>
            `,
            config: {
                serviceId: '',
                customerName: '',
                contactNumber: '',
                productType: '',
                issueDescription: '',
                priority: 'Medium',
                location: '',
                expectedResolutionTime: '',
                assignedEngineer: '',
                status: 'New'
            }
        },
        order: {
            html: `
                <div class="node-entity p-2">
                    <i class="bi bi-cart me-2"></i>
                    <span class="node-title">Order</span>
                </div>
            `,
            config: {
                orderId: '',
                customerName: '',
                items: [],
                totalAmount: '',
                shippingAddress: '',
                paymentStatus: '',
                orderStatus: 'Created',
                deliveryDate: ''
            }
        },
        return: {
            html: `
                <div class="node-entity p-2">
                    <i class="bi bi-arrow-return-left me-2"></i>
                    <span class="node-title">Return</span>
                </div>
            `,
            config: {
                returnId: '',
                orderId: '',
                reason: '',
                items: [],
                status: 'Pending',
                returnDate: '',
                approvalStatus: ''
            }
        },
        engineer: {
            html: `
                <div class="node-entity p-2">
                    <i class="bi bi-person-gear me-2"></i>
                    <span class="node-title">Engineer</span>
                </div>
            `,
            config: {
                engineerId: '',
                name: '',
                specialization: [],
                location: '',
                availability: 'Available',
                currentLoad: 0,
                skills: []
            }
        },
        purchaseOrder: {
            html: `
                <div class="node-entity p-2">
                    <i class="bi bi-file-earmark-text me-2"></i>
                    <span class="node-title">Purchase Order</span>
                </div>
            `,
            config: {
                poNumber: '',
                vendorName: '',
                items: [],
                totalAmount: '',
                requestDate: '',
                status: 'Draft',
                approvalStatus: ''
            }
        },
        serviceState: {
            html: `
                <div class="node-trigger p-2">
                    <i class="bi bi-tools-fill me-2"></i>
                    <span class="node-title">Service State</span>
                </div>
            `,
            config: {
                triggerType: 'service',
                state: '',
                states: ['Created', 'Updated', 'Assigned', 'In Progress', 'On Hold', 'Completed', 'Closed', 'SLA Breached'],
                conditions: {}
            }
        },
        orderState: {
            html: `
                <div class="node-trigger p-2">
                    <i class="bi bi-cart-fill me-2"></i>
                    <span class="node-title">Order State</span>
                </div>
            `,
            config: {
                triggerType: 'order',
                state: '',
                states: ['Created', 'Confirmed', 'Processing', 'Dispatched', 'Delivered', 'Cancelled'],
                conditions: {}
            }
        },
        returnState: {
            html: `
                <div class="node-trigger p-2">
                    <i class="bi bi-arrow-return-left-fill me-2"></i>
                    <span class="node-title">Return State</span>
                </div>
            `,
            config: {
                triggerType: 'return',
                state: '',
                states: ['Created', 'Approved', 'Rejected', 'In Transit', 'Received', 'Refunded'],
                conditions: {}
            }
        },
        engineerState: {
            html: `
                <div class="node-trigger p-2">
                    <i class="bi bi-person-gear-fill me-2"></i>
                    <span class="node-title">Engineer State</span>
                </div>
            `,
            config: {
                triggerType: 'engineer',
                state: '',
                states: ['Available', 'Assigned', 'On Leave', 'Busy'],
                conditions: {}
            }
        },
        purchaseOrderState: {
            html: `
                <div class="node-trigger p-2">
                    <i class="bi bi-file-earmark-text-fill me-2"></i>
                    <span class="node-title">PO State</span>
                </div>
            `,
            config: {
                triggerType: 'purchaseOrder',
                state: '',
                states: ['Created', 'Submitted', 'Approved', 'Rejected', 'Items Received'],
                conditions: {}
            }
        },
        condition: {
            html: `
                <div class="node-condition p-2">
                    <i class="bi bi-diamond me-2"></i>
                    <span class="node-title">Condition</span>
                </div>
            `,
            config: {
                condition: '',
                trueLabel: 'Yes',
                falseLabel: 'No'
            }
        },
        email: {
            html: `
                <div class="node-email p-2">
                    <i class="bi bi-envelope me-2"></i>
                    <span class="node-title">Send Email</span>
                </div>
            `,
            config: {
                template: '',
                to: '',
                subject: '',
                variables: []
            }
        },
        action: {
            html: `
                <div class="node-action p-2">
                    <i class="bi bi-lightning me-2"></i>
                    <span class="node-title">Action</span>
                </div>
            `,
            config: {
                actionType: '',
                parameters: {}
            }
        }
    };

    // Register each node type with DrawFlow
    Object.entries(types).forEach(([type, config]) => {
        editor.registerNode(type, config);
    });

    return types;
}

// Setup drag and drop functionality
function setupDragAndDrop() {
    const nodeItems = document.querySelectorAll('.node-item');
    const canvas = document.getElementById('drawflow');
    
    if (!canvas || !editor) return;
    
    nodeItems.forEach(item => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('node-type', item.dataset.nodeType);
            e.dataTransfer.effectAllowed = 'copy';
        });
    });
    
    canvas.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    });

    canvas.addEventListener('drop', (e) => {
        e.preventDefault();
        const nodeType = e.dataTransfer.getData('node-type');
        if (!nodeType || !editor) return;
        
        const rect = canvas.getBoundingClientRect();
        const zoom = editor.zoom || 1;
        
        const pos = {
            x: (e.clientX - rect.left) / zoom - (editor.pos_x || 0),
            y: (e.clientY - rect.top) / zoom - (editor.pos_y || 0)
        };
        
        addNode(nodeType, pos.x, pos.y);
    });
}

// Add a new node to the canvas
function addNode(type, x, y) {
    if (!nodeTypes || !nodeTypes[type]) {
        console.error('Node type not registered:', type);
        return;
    }

    try {
        // Create a temporary container to parse HTML string into DOM elements
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = nodeTypes[type].html;
        const nodeElement = tempContainer.firstElementChild;

        // Deep clone the config to ensure each node has its own config object
        const config = JSON.parse(JSON.stringify(nodeTypes[type].config || {}));

        // Add default states array for state-type nodes
        if (type === 'state' || type.endsWith('State')) {
            config.states = nodeTypes[type].config.states || [];
        }

        const nodeId = editor.addNode(
            type,
            1, // inputs
            1, // outputs
            x,
            y,
            type, // class
            { config }, // data
            nodeElement.outerHTML,
            false
        );

        // Update node visual after adding
        const node = editor.getNodeFromId(nodeId);
        if (node) {
            // Ensure node has proper data structure
            if (!node.data) node.data = {};
            if (!node.data.config) node.data.config = config;
            updateNodeVisual(node);
        }

        return nodeId;
    } catch (error) {
        console.error('Error adding node:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Node selection
    editor.on('nodeSelected', function(nodeId) {
        selectedNode = editor.getNodeFromId(nodeId);
        openConfigDrawer(selectedNode);
    });

    // Node connection
    editor.on('connectionCreated', function(connection) {
        console.log('Connection created:', connection);
    });

    // Node removal
    editor.on('nodeRemoved', function(nodeId) {
        if (selectedNode && selectedNode.id === nodeId) {
            closeConfigDrawer();
        }
    });
}

// Configuration drawer functions
function openConfigDrawer(node) {
    const drawer = document.getElementById('configDrawer');
    const configForm = document.getElementById('nodeConfig');
    
    // Generate configuration form based on node type
    configForm.innerHTML = generateConfigForm(node);
    
    drawer.classList.add('open');
}

function closeConfigDrawer() {
    const drawer = document.getElementById('configDrawer');
    drawer.classList.remove('open');
    selectedNode = null;
}

function updateNodeConfig(key, value) {
    if (!selectedNode || !selectedNode.data) return;
    
    // Ensure config object exists
    if (!selectedNode.data.config) {
        selectedNode.data.config = {};
    }
    
    // Update the config value
    selectedNode.data.config[key] = value;
    
    // Update the node's visual representation
    updateNodeVisual(selectedNode);
    
    // Update the configuration in the editor
    editor.updateNodeDataFromId(selectedNode.id, selectedNode.data);
}

function updateNodeVisual(node) {
    if (!node || !node.data || !node.data.config) return;
    
    // Update node title or other visual elements based on configuration
    const nodeElement = document.querySelector(`[id="node-${node.id}"]`);
    if (nodeElement) {
        const titleElement = nodeElement.querySelector('.node-title');
        if (titleElement) {
            // Update title based on node type and config
            switch (node.class) {
                case 'state':
                    if (node.data.config.state) {
                        titleElement.textContent = `State: ${node.data.config.state}`;
                    }
                    break;
                case 'service':
                    if (node.data.config.serviceId) {
                        titleElement.textContent = `Service: ${node.data.config.serviceId}`;
                    }
                    break;
                case 'order':
                    if (node.data.config.orderId) {
                        titleElement.textContent = `Order: ${node.data.config.orderId}`;
                    }
                    break;
                // Add other node types as needed
            }
        }
    }
}

function generateConfigForm(node) {
    const config = node.data.config || {};
    let form = '';

    if (!node || !node.class) {
        console.error('Invalid node data');
        return '';
    }

    switch (node.class) {
        case 'state':
            form = `
                <div class="mb-3">
                    <label class="form-label">State</label>
                    <select class="form-control" onchange="updateNodeConfig('state', this.value)">
                        <option value="">Select State</option>
                        ${(config.states || []).map(state => 
                            `<option value="${state}" ${config.state === state ? 'selected' : ''}>${state}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
            break;
        case 'service':
            form = `
                <div class="mb-3">
                    <label class="form-label">Service ID</label>
                    <input type="text" class="form-control" value="${config.serviceId || ''}" onchange="updateNodeConfig('serviceId', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Customer Name</label>
                    <input type="text" class="form-control" value="${config.customerName || ''}" onchange="updateNodeConfig('customerName', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Contact Number</label>
                    <input type="text" class="form-control" value="${config.contactNumber || ''}" onchange="updateNodeConfig('contactNumber', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Product Type</label>
                    <input type="text" class="form-control" value="${config.productType || ''}" onchange="updateNodeConfig('productType', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Issue Description</label>
                    <textarea class="form-control" onchange="updateNodeConfig('issueDescription', this.value)">${config.issueDescription || ''}</textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Priority</label>
                    <select class="form-control" onchange="updateNodeConfig('priority', this.value)">
                        <option value="Low" ${config.priority === 'Low' ? 'selected' : ''}>Low</option>
                        <option value="Medium" ${config.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                        <option value="High" ${config.priority === 'High' ? 'selected' : ''}>High</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Location</label>
                    <input type="text" class="form-control" value="${config.location || ''}" onchange="updateNodeConfig('location', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Expected Resolution Time</label>
                    <input type="datetime-local" class="form-control" value="${config.expectedResolutionTime || ''}" onchange="updateNodeConfig('expectedResolutionTime', this.value)">
                </div>
            `;
            break;

        case 'order':
            form = `
                <div class="mb-3">
                    <label class="form-label">Order ID</label>
                    <input type="text" class="form-control" value="${config.orderId || ''}" onchange="updateNodeConfig('orderId', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Customer Name</label>
                    <input type="text" class="form-control" value="${config.customerName || ''}" onchange="updateNodeConfig('customerName', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Total Amount</label>
                    <input type="number" class="form-control" value="${config.totalAmount || ''}" onchange="updateNodeConfig('totalAmount', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Shipping Address</label>
                    <textarea class="form-control" onchange="updateNodeConfig('shippingAddress', this.value)">${config.shippingAddress || ''}</textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Payment Status</label>
                    <select class="form-control" onchange="updateNodeConfig('paymentStatus', this.value)">
                        <option value="Pending" ${config.paymentStatus === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Paid" ${config.paymentStatus === 'Paid' ? 'selected' : ''}>Paid</option>
                        <option value="Failed" ${config.paymentStatus === 'Failed' ? 'selected' : ''}>Failed</option>
                    </select>
                </div>
            `;
            break;

        case 'return':
            form = `
                <div class="mb-3">
                    <label class="form-label">Return ID</label>
                    <input type="text" class="form-control" value="${config.returnId || ''}" onchange="updateNodeConfig('returnId', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Order ID</label>
                    <input type="text" class="form-control" value="${config.orderId || ''}" onchange="updateNodeConfig('orderId', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Reason</label>
                    <textarea class="form-control" onchange="updateNodeConfig('reason', this.value)">${config.reason || ''}</textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">Return Date</label>
                    <input type="date" class="form-control" value="${config.returnDate || ''}" onchange="updateNodeConfig('returnDate', this.value)">
                </div>
            `;
            break;

        case 'engineer':
            form = `
                <div class="mb-3">
                    <label class="form-label">Engineer ID</label>
                    <input type="text" class="form-control" value="${config.engineerId || ''}" onchange="updateNodeConfig('engineerId', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control" value="${config.name || ''}" onchange="updateNodeConfig('name', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">State</label>
                    <select class="form-control" onchange="updateNodeConfig('state', this.value)">
                        ${config.states ? config.states.map(state => `<option value="${state}" ${config.state === state ? 'selected' : ''}>${state}</option>`).join('') : ''}
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Conditions</label>
                    <textarea class="form-control" onchange="updateNodeConfig('conditions', JSON.parse(this.value))">${config.conditions ? JSON.stringify(config.conditions, null, 2) : ''}</textarea>
                </div>
            `;
            break;

        case 'condition':
            form = `
                <div class="mb-3">
                    <label class="form-label">Condition</label>
                    <textarea class="form-control" onchange="updateNodeConfig('condition', this.value)">${config.condition || ''}</textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label">True Label</label>
                    <input type="text" class="form-control" value="${config.trueLabel || 'Yes'}" onchange="updateNodeConfig('trueLabel', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">False Label</label>
                    <input type="text" class="form-control" value="${config.falseLabel || 'No'}" onchange="updateNodeConfig('falseLabel', this.value)">
                </div>
            `;
            break;

        case 'email':
            form = `
                <div class="mb-3">
                    <label class="form-label">Template</label>
                    <select class="form-control" onchange="updateNodeConfig('template', this.value)">
                        <option value="">Select Template</option>
                        <option value="service_request" ${config.template === 'service_request' ? 'selected' : ''}>Service Request</option>
                        <option value="order_confirmation" ${config.template === 'order_confirmation' ? 'selected' : ''}>Order Confirmation</option>
                        <option value="status_update" ${config.template === 'status_update' ? 'selected' : ''}>Status Update</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">To</label>
                    <input type="email" class="form-control" value="${config.to || ''}" onchange="updateNodeConfig('to', this.value)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Subject</label>
                    <input type="text" class="form-control" value="${config.subject || ''}" onchange="updateNodeConfig('subject', this.value)">
                </div>
            `;
            break;

        case 'action':
            form = `
                <div class="mb-3">
                    <label class="form-label">Action Type</label>
                    <select class="form-control" onchange="updateNodeConfig('actionType', this.value)">
                        <option value="">Select Action</option>
                        <option value="update_status" ${config.actionType === 'update_status' ? 'selected' : ''}>Update Status</option>
                        <option value="assign_engineer" ${config.actionType === 'assign_engineer' ? 'selected' : ''}>Assign Engineer</option>
                        <option value="create_task" ${config.actionType === 'create_task' ? 'selected' : ''}>Create Task</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Parameters</label>
                    <textarea class="form-control" onchange="updateNodeConfig('parameters', JSON.parse(this.value))">${config.parameters ? JSON.stringify(config.parameters, null, 2) : '{}'}</textarea>
                </div>
            `;
            break;
    }

    return form;
}

// Update node configuration
function updateNodeConfig(key, value) {
    if (!selectedNode || !selectedNode.data.config) return;
    selectedNode.data.config[key] = value;
    
    // Update node visual if needed
    updateNodeVisual(selectedNode);
}

// Update node visual representation
function updateNodeVisual(node) {
    try {
        const config = node.data.config;
        // Create a temporary container to parse the HTML string
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = node.html;
        const nodeElement = tempContainer.firstElementChild;

        if (nodeElement) {
            const titleElement = nodeElement.querySelector('.node-title');
            if (titleElement && config.name) {
                titleElement.textContent = config.name;
                // Update the node's HTML with the modified content
                node.html = nodeElement.outerHTML;
            }
        }
    } catch (error) {
        console.error('Error updating node visual:', error);
    }
}

// Workflow management functions
function createNewWorkflow() {
    document.getElementById('workflowList').style.display = 'none';
    document.getElementById('workflowBuilder').style.display = 'block';
    editor.clear(); // Clear any existing workflow
}

function showWorkflowList() {
    document.getElementById('workflowBuilder').style.display = 'none';
    document.getElementById('workflowList').style.display = 'block';
}

function saveWorkflow() {
    const name = document.getElementById('workflowName').value;
    if (!name) {
        alert('Please enter a workflow name');
        return;
    }

    const workflow = {
        name: name,
        data: editor.export(),
        lastModified: new Date().toISOString(),
        status: 'active'
    };

    // Save workflow data (implement API call here)
    console.log('Saving workflow:', workflow);

    // Return to workflow list
    showWorkflowList();
}

// Load existing workflow
function loadWorkflow(workflowId) {
    // Implement API call to fetch workflow data
    // For now, using mock data
    const mockWorkflow = {
        name: 'Test Workflow',
        data: {/* workflow data */}
    };

    document.getElementById('workflowName').value = mockWorkflow.name;
    editor.import(mockWorkflow.data);

    document.getElementById('workflowList').style.display = 'none';
    document.getElementById('workflowBuilder').style.display = 'block';
}