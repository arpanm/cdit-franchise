// Sample workflow data
const sampleWorkflows = [
    {
        id: 1,
        name: 'Service Request Processing',
        type: 'Service',
        lastModified: '2023-11-15',
        status: 'Active',
        nodes: {
            1: {
                id: 1,
                name: 'Service Request',
                type: 'service',
                pos_x: 100,
                pos_y: 100,
                data: {
                    serviceType: 'repair',
                    priority: 'high'
                }
            },
            2: {
                id: 2,
                name: 'Engineer Assignment',
                type: 'engineer',
                pos_x: 400,
                pos_y: 100,
                data: {
                    assignmentType: 'auto',
                    skillRequired: ['repair', 'diagnosis']
                }
            },
            3: {
                id: 3,
                name: 'Service Status',
                type: 'serviceState',
                pos_x: 700,
                pos_y: 100,
                data: {
                    status: 'assigned',
                    notification: true
                }
            }
        },
        connections: [
            {
                source: '1',
                target: '2',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            },
            {
                source: '2',
                target: '3',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            }
        ]
    },
    {
        id: 2,
        name: 'Order Processing Workflow',
        type: 'Order',
        lastModified: '2023-11-14',
        status: 'Active',
        nodes: {
            1: {
                id: 1,
                name: 'New Order',
                type: 'order',
                pos_x: 100,
                pos_y: 100,
                data: {
                    orderType: 'product',
                    validation: true
                }
            },
            2: {
                id: 2,
                name: 'Inventory Check',
                type: 'condition',
                pos_x: 400,
                pos_y: 100,
                data: {
                    condition: 'stock > 0',
                    branches: ['yes', 'no']
                }
            },
            3: {
                id: 3,
                name: 'Create PO',
                type: 'purchaseOrder',
                pos_x: 700,
                pos_y: 200,
                data: {
                    autoApprove: false,
                    urgent: true
                }
            },
            4: {
                id: 4,
                name: 'Order Status',
                type: 'orderState',
                pos_x: 700,
                pos_y: 100,
                data: {
                    status: 'processing',
                    notification: true
                }
            }
        },
        connections: [
            {
                source: '1',
                target: '2',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            },
            {
                source: '2',
                target: '3',
                sourceOutput: 'output_2',
                targetInput: 'input_1'
            },
            {
                source: '2',
                target: '4',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            }
        ]
    },
    {
        id: 3,
        name: 'Return Processing Workflow',
        type: 'Return',
        lastModified: '2023-11-13',
        status: 'Draft',
        nodes: {
            1: {
                id: 1,
                name: 'Return Request',
                type: 'return',
                pos_x: 100,
                pos_y: 100,
                data: {
                    returnType: 'product',
                    requireInspection: true
                }
            },
            2: {
                id: 2,
                name: 'Quality Check',
                type: 'condition',
                pos_x: 400,
                pos_y: 100,
                data: {
                    condition: 'inspection_passed',
                    branches: ['pass', 'fail']
                }
            },
            3: {
                id: 3,
                name: 'Process Refund',
                type: 'action',
                pos_x: 700,
                pos_y: 50,
                data: {
                    actionType: 'refund',
                    amount: 'full'
                }
            },
            4: {
                id: 4,
                name: 'Return Status',
                type: 'returnState',
                pos_x: 1000,
                pos_y: 100,
                data: {
                    status: 'processed',
                    notification: true
                }
            }
        },
        connections: [
            {
                source: '1',
                target: '2',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            },
            {
                source: '2',
                target: '3',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            },
            {
                source: '3',
                target: '4',
                sourceOutput: 'output_1',
                targetInput: 'input_1'
            }
        ]
    }
];

// Function to populate workflow table
function populateWorkflowTable() {
    const tableBody = document.getElementById('workflowTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    
    sampleWorkflows.forEach(workflow => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${workflow.name}</td>
            <td>${workflow.type}</td>
            <td>${workflow.lastModified}</td>
            <td><span class="badge ${workflow.status === 'Active' ? 'bg-success' : 'bg-warning'}">${workflow.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary me-2" onclick="editWorkflow(${workflow.id})">
                    <i class="bi bi-pencil me-1"></i>Edit
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteWorkflow(${workflow.id})">
                    <i class="bi bi-trash me-1"></i>Delete
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to edit workflow
function editWorkflow(workflowId) {
    const workflow = sampleWorkflows.find(w => w.id === workflowId);
    if (!workflow) return;

    // Show workflow builder
    document.getElementById('workflowList').style.display = 'none';
    document.getElementById('workflowBuilder').style.display = 'block';
    
    // Set workflow name
    document.getElementById('workflowName').value = workflow.name;

    // Clear existing canvas
    editor.clear();

    // Add nodes
    Object.values(workflow.nodes).forEach(node => {
        editor.addNode(
            node.type,
            1,  // number of inputs
            1,  // number of outputs
            node.pos_x,
            node.pos_y,
            node.type,
            node.data,
            node.name
        );
    });

    // Add connections
    workflow.connections.forEach(conn => {
        editor.addConnection(conn.source, conn.target, conn.sourceOutput, conn.targetInput);
    });
}

// Function to delete workflow
function deleteWorkflow(workflowId) {
    if (confirm('Are you sure you want to delete this workflow?')) {
        const index = sampleWorkflows.findIndex(w => w.id === workflowId);
        if (index !== -1) {
            sampleWorkflows.splice(index, 1);
            populateWorkflowTable();
        }
    }
}

// Function to show workflow list
function showWorkflowList() {
    document.getElementById('workflowBuilder').style.display = 'none';
    document.getElementById('workflowList').style.display = 'block';
}

// Function to create new workflow
function createNewWorkflow() {
    document.getElementById('workflowList').style.display = 'none';
    document.getElementById('workflowBuilder').style.display = 'block';
    document.getElementById('workflowName').value = '';
    editor.clear();
}

// Initialize table when DOM is loaded
document.addEventListener('DOMContentLoaded', populateWorkflowTable);