const mockVendors = [
    { id: 1, name: 'ABC Suppliers', contactPerson: 'John Doe', email: 'john@abc.com', phone: '1234567890', status: 'active' },
    { id: 2, name: 'XYZ Manufacturing', contactPerson: 'Jane Smith', email: 'jane@xyz.com', phone: '0987654321', status: 'active' }
];

const mockPurchaseOrders = [
    { 
        id: 'PO001', 
        vendor: 'ABC Suppliers',
        orderDate: '2023-10-10',
        totalItems: 3,
        totalAmount: 599.97,
        expectedDelivery: '2023-10-20',
        status: 'pending'
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    updateDashboardStats();
    populateVendors();
    populateVendorsTable();
    populatePoSkuList();
});




// Update dashboard statistics
function updateDashboardStats() {
    document.getElementById('activePOs').textContent = 
        mockPurchaseOrders.filter(po => po.status === 'pending').length;
    document.getElementById('pendingDeliveries').textContent = 
        mockPurchaseOrders.filter(po => po.status === 'approved').length;
}

// Populate vendor dropdown
function populateVendors() {
    const vendorSelect = document.getElementById('vendorSelect');
    if (vendorSelect) {
        vendorSelect.innerHTML = '<option value="">Select Vendor</option>';
        mockVendors.forEach(vendor => {
            const option = document.createElement('option');
            option.value = vendor.id;
            option.textContent = vendor.name;
            vendorSelect.appendChild(option);
        });
    }
}

// Populate vendors table
function populateVendorsTable() {
    const tbody = document.getElementById('vendorsTableBody');
    if (tbody) {
        tbody.innerHTML = '';
        mockVendors.forEach(vendor => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${vendor.id}</td>
                <td>${vendor.name}</td>
                <td>${vendor.contactPerson}</td>
                <td>${vendor.email}</td>
                <td>${vendor.phone}</td>
                <td><span class="badge ${vendor.status === 'active' ? 'bg-success' : 'bg-danger'}">${vendor.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-info me-1" onclick="viewVendor('${vendor.id}')">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-warning me-1" onclick="editVendor('${vendor.id}')">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteVendor('${vendor.id}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Save vendor
function saveVendor() {
    const vendorId = document.getElementById('vendorId').value;
    const vendor = {
        id: vendorId ? parseInt(vendorId) : mockVendors.length + 1,
        name: document.getElementById('vendorName').value,
        contactPerson: document.getElementById('contactPerson').value,
        email: document.getElementById('vendorEmail').value,
        phone: document.getElementById('vendorPhone').value,
        status: document.getElementById('vendorStatus').value
    };

    if (vendorId) {
        // Update existing vendor
        const index = mockVendors.findIndex(v => v.id === parseInt(vendorId));
        if (index !== -1) {
            mockVendors[index] = vendor;
        }
    } else {
        // Add new vendor
        mockVendors.push(vendor);
    }

    // Refresh vendor data
    populateVendors();
    populateVendorsTable();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('vendorModal'));
    modal.hide();
}

// View vendor details
function viewVendor(vendorId) {
    const vendor = mockVendors.find(v => v.id === vendorId);
    if (vendor) {
        document.getElementById('viewVendorId').textContent = vendor.id;
        document.getElementById('viewVendorName').textContent = vendor.name;
        document.getElementById('viewContactPerson').textContent = vendor.contactPerson;
        document.getElementById('viewVendorEmail').textContent = vendor.email;
        document.getElementById('viewVendorPhone').textContent = vendor.phone;
        document.getElementById('viewVendorStatus').textContent = vendor.status;

        const modal = new bootstrap.Modal(document.getElementById('viewVendorModal'));
        modal.show();
    }
}

// Edit vendor
function editVendor(vendorId) {
    const vendor = mockVendors.find(v => v.id === vendorId);
    if (vendor) {
        document.getElementById('vendorId').value = vendor.id;
        document.getElementById('vendorName').value = vendor.name;
        document.getElementById('contactPerson').value = vendor.contactPerson;
        document.getElementById('vendorEmail').value = vendor.email;
        document.getElementById('vendorPhone').value = vendor.phone;
        document.getElementById('vendorStatus').value = vendor.status;

        document.getElementById('vendorModalTitle').textContent = 'Edit Vendor';
        const modal = new bootstrap.Modal(document.getElementById('vendorModal'));
        modal.show();
    }
}

// Delete vendor
function deleteVendor(vendorId) {
    const vendor = mockVendors.find(v => v.id === vendorId);
    if (vendor) {
        const modal = new bootstrap.Modal(document.getElementById('deleteVendorModal'));
        modal.show();
        window.confirmDeleteVendor = () => {
            const index = mockVendors.findIndex(v => v.id === vendorId);
            if (index !== -1) {
                mockVendors.splice(index, 1);
                populateVendors();
                populateVendorsTable();
            }
            modal.hide();
        };
    }
}

// Add new item to purchase order
function addPoItem() {
    const poItems = document.getElementById('poItems');
    const newItem = document.createElement('div');
    newItem.className = 'row mb-3 po-item';
    newItem.innerHTML = `
        <div class="col-md-4">
            <label class="form-label">Item</label>
            <select class="form-select" required>
                <option value="">Select Item</option>
                ${inventoryData.map(item => `<option value="${item.skuId}">${item.skuName}</option>`).join('')}
            </select>
        </div>
        <div class="col-md-2">
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control" required min="1">
        </div>
        <div class="col-md-3">
            <label class="form-label">Unit Price</label>
            <input type="number" class="form-control" required min="0" step="0.01">
        </div>
        <div class="col-md-2">
            <label class="form-label">Total</label>
            <input type="number" class="form-control" readonly>
        </div>
        <div class="col-md-1 d-flex align-items-end">
            <button type="button" class="btn btn-danger" onclick="removePoItem(this)">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
    poItems.appendChild(newItem);
}

function populatePoSkuList() {
    const newItem = document.getElementById('poSku');
    newItem.innerHTML = `<option value="">Select Item</option>
        ${inventoryData.map(item => `<option value="${item.skuId}">${item.skuName}</option>`).join('')}
    `;
}


// Remove item from purchase order
function removePoItem(button) {
    button.closest('.po-item').remove();
    updatePoTotal();
}

// Update total price for purchase order
function updatePoTotal() {
    const items = document.getElementsByClassName('po-item');
    let total = 0;

    Array.from(items).forEach(item => {
        const quantity = parseFloat(item.querySelector('input[type="number"]:not([readonly])').value) || 0;
        const unitPrice = parseFloat(item.querySelectorAll('input[type="number"]')[1].value) || 0;
        const itemTotal = quantity * unitPrice;
        item.querySelector('input[readonly]').value = itemTotal.toFixed(2);
        total += itemTotal;
    });

    document.getElementById('poTotalAmount').value = total.toFixed(2);
}

// Submit purchase order
function submitPurchaseOrder() {
    // Implement purchase order submission logic
    alert('Purchase order submitted successfully!');
    $('#createPurchaseOrderModal').modal('hide');
}

// View item history
function viewItemHistory(itemId) {
    // Implement item history view logic
    alert(`Viewing history for item ${itemId}`);
}

// View purchase order details
function viewPurchaseOrder(poId) {
    // Implement purchase order details view logic
    alert(`Viewing purchase order ${poId}`);
}