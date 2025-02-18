// Mock data for purchase orders
const purchaseOrders = [
    {
        id: 'PO001',
        vendorId: 1,
        vendorName: 'ABC Suppliers',
        createdDate: '2024-01-15',
        updatedDate: '2024-01-16',
        totalAmount: 25000,
        receivedAmount: 15000,
        status: 'partially_received',
        items: [
            {
                skuId: 'SP001',
                name: 'Samsung Washing Machine Motor',
                rate: 2500,
                quantity: 5,
                receivedQuantity: 3,
                totalAmount: 12500,
                receivedAmount: 7500
            },
            {
                skuId: 'SP002',
                name: 'LG Refrigerator Compressor',
                rate: 2500,
                quantity: 5,
                receivedQuantity: 3,
                totalAmount: 12500,
                receivedAmount: 7500
            }
        ],
        approvalComment: ''
    },
    {
        id: 'PO002',
        vendorId: 2,
        vendorName: 'XYZ Electronics',
        createdDate: '2024-01-17',
        updatedDate: '2024-01-17',
        totalAmount: 35000,
        receivedAmount: 0,
        status: 'created',
        items: [
            {
                skuId: 'SP003',
                name: 'Microwave Magnetron',
                rate: 3500,
                quantity: 10,
                receivedQuantity: 0,
                totalAmount: 35000,
                receivedAmount: 0
            }
        ],
        approvalComment: ''
    },
    {
        id: 'PO003',
        vendorId: 3,
        vendorName: 'Global Parts Inc',
        createdDate: '2024-01-16',
        updatedDate: '2024-01-18',
        totalAmount: 45000,
        receivedAmount: 45000,
        status: 'completed',
        items: [
            {
                skuId: 'SP004',
                name: 'AC Compressor Unit',
                rate: 4500,
                quantity: 10,
                receivedQuantity: 10,
                totalAmount: 45000,
                receivedAmount: 45000
            }
        ],
        approvalComment: 'Order completed successfully'
    },
    {
        id: 'PO004',
        vendorId: 4,
        vendorName: 'Tech Parts Ltd',
        createdDate: '2024-01-18',
        updatedDate: '2024-01-19',
        totalAmount: 28000,
        receivedAmount: 0,
        status: 'rejected',
        items: [
            {
                skuId: 'SP005',
                name: 'Dishwasher Control Board',
                rate: 2800,
                quantity: 10,
                receivedQuantity: 0,
                totalAmount: 28000,
                receivedAmount: 0
            }
        ],
        approvalComment: 'Budget constraints - order rejected'
    },
    {
        id: 'PO005',
        vendorId: 5,
        vendorName: 'Prime Components',
        createdDate: '2024-01-19',
        updatedDate: '2024-01-20',
        totalAmount: 52000,
        receivedAmount: 31200,
        status: 'partially_received',
        items: [
            {
                skuId: 'SP006',
                name: 'Refrigerator Thermostat',
                rate: 2600,
                quantity: 20,
                receivedQuantity: 12,
                totalAmount: 52000,
                receivedAmount: 31200
            }
        ],
        approvalComment: ''
    },
    {
        id: 'PO006',
        vendorId: 1,
        vendorName: 'ABC Suppliers',
        createdDate: '2024-01-20',
        updatedDate: '2024-01-21',
        totalAmount: 75000,
        receivedAmount: 75000,
        status: 'completed',
        items: [
            {
                skuId: 'SP007',
                name: 'Washing Machine Display Panel',
                rate: 1500,
                quantity: 50,
                receivedQuantity: 50,
                totalAmount: 75000,
                receivedAmount: 75000
            }
        ],
        approvalComment: 'Bulk order completed'
    },
    {
        id: 'PO007',
        vendorId: 2,
        vendorName: 'XYZ Electronics',
        createdDate: '2024-01-21',
        updatedDate: '2024-01-21',
        totalAmount: 42000,
        receivedAmount: 0,
        status: 'created',
        items: [
            {
                skuId: 'SP008',
                name: 'Water Dispenser Assembly',
                rate: 4200,
                quantity: 10,
                receivedQuantity: 0,
                totalAmount: 42000,
                receivedAmount: 0
            }
        ],
        approvalComment: ''
    },
    {
        id: 'PO008',
        vendorId: 3,
        vendorName: 'Global Parts Inc',
        createdDate: '2024-01-19',
        updatedDate: '2024-01-20',
        totalAmount: 96000,
        receivedAmount: 48000,
        status: 'partially_received',
        items: [
            {
                skuId: 'SP009',
                name: 'Smart TV Power Board',
                rate: 4800,
                quantity: 20,
                receivedQuantity: 10,
                totalAmount: 96000,
                receivedAmount: 48000
            }
        ],
        approvalComment: ''
    },
    {
        id: 'PO009',
        vendorId: 4,
        vendorName: 'Tech Parts Ltd',
        createdDate: '2024-01-20',
        updatedDate: '2024-01-21',
        totalAmount: 33000,
        receivedAmount: 0,
        status: 'rejected',
        items: [
            {
                skuId: 'SP010',
                name: 'Dryer Heating Element',
                rate: 3300,
                quantity: 10,
                receivedQuantity: 0,
                totalAmount: 33000,
                receivedAmount: 0
            }
        ],
        approvalComment: 'Vendor pricing too high'
    },
    {
        id: 'PO010',
        vendorId: 5,
        vendorName: 'Prime Components',
        createdDate: '2024-01-21',
        updatedDate: '2024-01-21',
        totalAmount: 150000,
        receivedAmount: 0,
        status: 'created',
        items: [
            {
                skuId: 'SP011',
                name: 'Air Conditioner PCB',
                rate: 5000,
                quantity: 30,
                receivedQuantity: 0,
                totalAmount: 150000,
                receivedAmount: 0
            }
        ],
        approvalComment: ''
    },
    {
        id: 'PO011',
        vendorId: 1,
        vendorName: 'ABC Suppliers',
        createdDate: '2024-01-20',
        updatedDate: '2024-01-21',
        totalAmount: 84000,
        receivedAmount: 84000,
        status: 'completed',
        items: [
            {
                skuId: 'SP012',
                name: 'Refrigerator Door Assembly',
                rate: 4200,
                quantity: 20,
                receivedQuantity: 20,
                totalAmount: 84000,
                receivedAmount: 84000
            }
        ],
        approvalComment: 'Order fulfilled on time'
    }
];

// Initialize purchase orders table
function initializePOTable() {
    const tbody = document.getElementById('poTableBody');
    tbody.innerHTML = '';

    purchaseOrders.forEach(po => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${po.id}</td>
            <td>${po.vendorName}</td>
            <td>${po.createdDate}</td>
            <td>${po.updatedDate}</td>
            <td>₹${po.totalAmount}</td>
            <td>₹${po.receivedAmount}</td>
            <td><span class="badge ${getStatusBadgeClass(po.status)}">${formatStatus(po.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-info me-1" onclick="viewPO('${po.id}')">
                    <i class="bi bi-eye"></i>
                </button>
                ${po.status === 'created' ? `
                    <button class="btn btn-sm btn-success" onclick="showApprovalModal('${po.id}')">
                        <i class="bi bi-check-circle"></i>
                    </button>
                ` : ''}
            </td>
        `;
        tbody.appendChild(row);
    });
}

// View PO details
function viewPO(poId) {
    const po = purchaseOrders.find(p => p.id === poId);
    if (!po) return;

    document.getElementById('viewPoNumber').textContent = po.id;
    document.getElementById('viewVendor').textContent = po.vendorName;
    document.getElementById('viewStatus').textContent = formatStatus(po.status);
    document.getElementById('viewCreatedDate').textContent = po.createdDate;
    document.getElementById('viewUpdatedDate').textContent = po.updatedDate;

    const itemsBody = document.getElementById('poItemsTableBody');
    itemsBody.innerHTML = '';

    po.items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.rate}</td>
            <td>${item.quantity}</td>
            <td>${item.receivedQuantity}</td>
            <td>₹${item.totalAmount}</td>
            <td>₹${item.receivedAmount}</td>
        `;
        itemsBody.appendChild(row);
    });

    new bootstrap.Modal(document.getElementById('viewPOModal')).show();
}

// Show approval modal
function showApprovalModal(poId) {
    document.getElementById('approvalPoId').value = poId;
    document.getElementById('approvalComment').value = '';
    new bootstrap.Modal(document.getElementById('approvalModal')).show();
}

// Approve PO
function approvePO() {
    const poId = document.getElementById('approvalPoId').value;
    const comment = document.getElementById('approvalComment').value;

    const po = purchaseOrders.find(p => p.id === poId);
    if (po) {
        po.status = 'approved';
        po.approvalComment = comment;
        po.updatedDate = new Date().toISOString().split('T')[0];
    }

    bootstrap.Modal.getInstance(document.getElementById('approvalModal')).hide();
    initializePOTable();
}

// Reject PO
function rejectPO() {
    const poId = document.getElementById('approvalPoId').value;
    const comment = document.getElementById('approvalComment').value;

    const po = purchaseOrders.find(p => p.id === poId);
    if (po) {
        po.status = 'rejected';
        po.approvalComment = comment;
        po.updatedDate = new Date().toISOString().split('T')[0];
    }

    bootstrap.Modal.getInstance(document.getElementById('approvalModal')).hide();
    initializePOTable();
}

// Helper functions
function getStatusBadgeClass(status) {
    const statusClasses = {
        created: 'bg-primary',
        approved: 'bg-success',
        rejected: 'bg-danger',
        partially_received: 'bg-warning',
        completed: 'bg-info'
    };
    return statusClasses[status] || 'bg-secondary';
}

function formatStatus(status) {
    return status.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', () => {
    initializePOTable();
});