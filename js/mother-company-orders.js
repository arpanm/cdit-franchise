// Sample data structure for orders
const ordersData = {
    orders: [
        {
            id: 'ORD001',
            franchiseId: 'F001',
            franchiseName: 'Mumbai Central',
            orderDate: '2024-01-15',
            items: [
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 2, price: 2500, status: 'delivered' },
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 1, price: 3500, status: 'delivered' }
            ],
            status: 'completed',
            courier: 'BlueDart',
            trackingId: 'BD987654321'
        },
        {
            id: 'ORD002',
            franchiseId: 'F002',
            franchiseName: 'Delhi North',
            warehouse: 'Delhi North Hub',
            orderDate: '2024-01-14',
            items: [
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 3, shipment1Quantity: 1, price: 1800, status: 'delivered' },
                { id: 'ITEM004', name: 'Samsung Microwave Magnetron', quantity: 1, shipment1Quantity: 1, price: 4200, status: 'cancelled' }
            ],
            status: 'completed',
            courier: 'DTDC',
            trackingId: 'DT456789123',
            isShipmentSplit: true
        },
        {
            id: 'ORD003',
            franchiseId: 'F003',
            franchiseName: 'Bangalore East',
            warehouse: 'Bangalore East Hub',
            orderDate: '2024-01-13',
            items: [
                { id: 'ITEM005', name: 'LG TV Display Panel', quantity: 1, price: 12500, status: 'delivered' },
                { id: 'ITEM006', name: 'Whirlpool Dishwasher Pump', quantity: 2, price: 3800, status: 'processing' }
            ],
            status: 'in_progress',
            courier: 'FedEx',
            trackingId: 'FE789123456'
        },
        {
            id: 'ORD004',
            franchiseId: 'F001',
            franchiseName: 'Mumbai Central',
            warehouse: 'Mumbai Central Hub',
            orderDate: '2024-01-12',
            items: [
                { id: 'ITEM007', name: 'Samsung Refrigerator Thermostat', quantity: 2, price: 1500, status: 'processing' },
                { id: 'ITEM008', name: 'LG AC Control Board', quantity: 1, price: 4500, status: 'dispatched' }
            ],
            status: 'in_progress',
            courier: 'DTDC',
            trackingId: 'DTDC987654'
        },
        {
            id: 'ORD005',
            franchiseId: 'F002',
            franchiseName: 'Delhi North',
            warehouse: 'Delhi North Hub',
            orderDate: '2024-01-15',
            items: [
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 1, price: 2500, status: 'processing' },
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 1, price: 3500, status: 'processing' },
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 1, price: 1800, status: 'processing' }
            ],
            status: 'pending',
            courier: null,
            trackingId: null
        },
        {
            id: 'ORD006',
            franchiseId: 'F003',
            franchiseName: 'Bangalore East',
            warehouse: 'Bangalore East Hub',
            orderDate: '2024-01-14',
            items: [
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 3, price: 3500, status: 'dispatched' }
            ],
            status: 'in_progress',
            courier: null,
            trackingId: null
        },
        {
            id: 'ORD007',
            franchiseId: 'F001',
            franchiseName: 'Mumbai Central',
            warehouse: 'Mumbai Central Hub',
            orderDate: '2024-01-13',
            items: [
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 4, price: 1800, status: 'processing' }
            ],
            status: 'pending',
            courier: 'FedEx',
            trackingId: 'FE789012345'
        },
        {
            id: 'ORD008',
            franchiseId: 'F002',
            franchiseName: 'Delhi North',
            warehouse: 'Delhi North Hub',
            orderDate: '2024-01-12',
            items: [
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 2, price: 2500, status: 'delivered' }
            ],
            status: 'completed',
            courier: 'BlueDart',
            trackingId: 'BD567890123'
        },
        {
            id: 'ORD009',
            franchiseId: 'F003',
            franchiseName: 'Bangalore East',
            warehouse: 'Bangalore East Hub',
            orderDate: '2024-01-15',
            items: [
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 1, price: 3500, status: 'delivered' },
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 2, price: 1800, status: 'cancelled' }
            ],
            status: 'completed',
            courier: null,
            trackingId: null
        },
        {
            id: 'ORD010',
            franchiseId: 'F001',
            franchiseName: 'Mumbai Central',
            warehouse: 'Mumbai Central Hub',
            orderDate: '2024-01-14',
            items: [
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 3, price: 2500, status: 'cancelled' }
            ],
            status: 'completed',
            courier: null,
            trackingId: null
        },
        {
            id: 'ORD011',
            franchiseId: 'F002',
            franchiseName: 'Delhi North',
            warehouse: 'Delhi North Hub',
            orderDate: '2024-01-13',
            items: [
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 2, price: 3500, status: 'dispatched' },
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 1, price: 2500, status: 'cancelled' }
            ],
            status: 'in_progress',
            courier: 'DTDC',
            trackingId: 'DTDC456789'
        },
        {
            id: 'ORD012',
            franchiseId: 'F003',
            franchiseName: 'Bangalore East',
            warehouse: 'Bangalore East Hub',
            orderDate: '2024-01-12',
            items: [
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 5, price: 1800, status: 'processing' }
            ],
            status: 'pending',
            courier: 'FedEx',
            trackingId: 'FE234567890'
        },
        {
            id: 'ORD013',
            franchiseId: 'F001',
            franchiseName: 'Mumbai Central',
            warehouse: 'Mumbai Central Hub',
            orderDate: '2024-01-15',
            items: [
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 1, price: 2500, status: 'dispatched' },
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 3, price: 1800, status: 'dispatched' }
            ],
            status: 'in_progress',
            courier: null,
            trackingId: null
        },
        {
            id: 'ORD014',
            franchiseId: 'F002',
            franchiseName: 'Delhi North',
            warehouse: 'Delhi North Hub',
            orderDate: '2024-01-14',
            items: [
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 4, price: 3500, status: 'delivered' }
            ],
            status: 'completed',
            courier: null,
            trackingId: null
        },
        {
            id: 'ORD015',
            franchiseId: 'F003',
            franchiseName: 'Bangalore East',
            warehouse: 'Bangalore East Hub',
            orderDate: '2024-01-13',
            items: [
                { id: 'ITEM001', name: 'Samsung Washing Machine Motor', quantity: 2, price: 2500, status: 'dispatched' },
                { id: 'ITEM002', name: 'LG Refrigerator Compressor', quantity: 1, price: 3500, status: 'delivered' },
                { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', quantity: 2, price: 1800, status: 'cancelled' }
            ],
            status: 'in_progress',
            courier: 'BlueDart',
            trackingId: 'BD345678901'
        }
    ],
    franchises: [
        { id: 'F001', name: 'Mumbai Central' },
        { id: 'F002', name: 'Delhi North' },
        { id: 'F003', name: 'Bangalore East' }
    ],
    items: [
        { id: 'ITEM001', name: 'Samsung Washing Machine Motor', price: 2500 },
        { id: 'ITEM002', name: 'LG Refrigerator Compressor', price: 3500 },
        { id: 'ITEM003', name: 'Whirlpool AC Fan Motor', price: 1800 }
    ]
};

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize date range picker
    $('#dateFilter').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear',
            format: 'YYYY-MM-DD'
        }
    });

    $('#dateFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
        applyFilters();
    });

    $('#dateFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        applyFilters();
    });

    updateOrderMetrics();
    populateFranchiseDropdowns();
    populateWarehouseFilter();
    populateOrdersTable();
    
    // Initialize warehouse dropdown in new order form
    const orderWarehouse = document.getElementById('orderWarehouse');
    const warehouses = [...new Set(ordersData.orders.map(o => o.warehouse).filter(w => w))];
    orderWarehouse.innerHTML = '<option value="">Select Warehouse</option>' +
        warehouses.map(w => `<option value="${w}">${w}</option>`).join('');
    const detailWarehouse = document.getElementById('detailWarehouse');
    detailWarehouse.innerHTML = '<option value="">Select Warehouse</option>' +
        warehouses.map(w => `<option value="${w}">${w}</option>`).join('');

    // Initialize the first item row with available items
    const firstItemSelect = document.querySelector('#orderItems .order-item select');
    if (firstItemSelect) {
        firstItemSelect.innerHTML = `
            <option value="">Select Item</option>
            ${ordersData.items.map(item =>
                `<option value="${item.id}" data-price="${item.price}">${item.name}</option>`
            ).join('')}
        `;
    }
});

// Update order metrics
function updateOrderMetrics() {
    let totalOrders = ordersData.orders.length;
    let pendingOrders = 0;
    let inProgressOrders = 0;
    let completedOrders = 0;

    ordersData.orders.forEach(order => {
        if (order.status === 'processing') {
            pendingOrders++;
        } else if (['confirmed', 'dispatched'].includes(order.status)) {
            inProgressOrders++;
        } else if (['delivered', 'cancelled'].includes(order.status)) {
            completedOrders++;
        }
    });

    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('processingOrders').textContent = pendingOrders;
    document.getElementById('inTransitOrders').textContent = inProgressOrders;
    document.getElementById('deliveredOrders').textContent = completedOrders;
}

// Populate franchise dropdowns
function populateFranchiseDropdowns() {
    const franchiseOptions = ordersData.franchises.map(f =>
        `<option value="${f.id}">${f.name}</option>`
    ).join('');

    document.getElementById('franchiseFilter').innerHTML += franchiseOptions;
    document.getElementById('orderFranchise').innerHTML = franchiseOptions;
}

// Populate orders table
function populateOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = ordersData.orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.franchiseName}</td>
            <td>${formatDate(order.orderDate)}</td>
            <td>${order.items.length} items</td>
            <td>₹${calculateOrderTotal(order)}</td>
            <td>${order.warehouse || 'Not Assigned'}</td>
            <td><span class="badge bg-${getStatusBadgeClass(order.status)}">${order.status}</span></td>
            <td>
                <button class="btn btn-sm btn-info" onclick="viewOrderDetails('${order.id}')">
                    <i class="bi bi-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Populate warehouse filter
function populateWarehouseFilter() {
    const warehouses = [...new Set(ordersData.orders.map(o => o.warehouse).filter(w => w))];
    const warehouseFilter = document.getElementById('warehouseFilter');
    warehouseFilter.innerHTML = '<option value="">All Warehouses</option>' +
        warehouses.map(w => `<option value="${w}">${w}</option>`).join('');
}

// Format date
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-IN');
}

// Calculate order total
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => total + (item.quantity * item.price), 0);
}

// Get status badge class
function getStatusBadgeClass(status) {
    const classes = {
        'pending': 'secondary',
        'in_progress': 'warning',
        'completed': 'success'
    };
    return classes[status] || 'secondary';
}

// Update item price and total
function updateItemPrice(select) {
    const row = select.closest('.order-item');
    const price = select.options[select.selectedIndex].dataset.price || 0;
    const quantity = row.querySelector('input[type="number"]:not([readonly])').value || 0;
    
    row.querySelector('input[readonly]:not(.item-total)').value = price;
    row.querySelector('.item-total').value = price * quantity;
    
    updateOrderTotal();
}

// Update total price when quantity changes
function updateTotalPrice(input) {
    const row = input.closest('.order-item');
    const price = row.querySelector('input[readonly]:not(.item-total)').value || 0;
    const quantity = input.value || 0;
    
    row.querySelector('.item-total').value = price * quantity;
    updateOrderTotal();
}

// Update order total
function updateOrderTotal() {
    const total = Array.from(document.getElementsByClassName('item-total'))
        .reduce((sum, input) => sum + (Number(input.value) || 0), 0);
    document.getElementById('orderTotalAmount').textContent = `₹${total}`;
}

// Update shipment status
function updateShipmentStatus(shipmentType, status) {
    const orderId = document.getElementById('detailOrderId').textContent;
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    if (shipmentType === 'first') {
        order.items.forEach(item => {
            if (item.shipment1Quantity > 0) {
                item.status = status;
            }
        });
    } else if (shipmentType === 'second' && order.isShipmentSplit) {
        order.items.forEach(item => {
            if (item.quantity - (item.shipment1Quantity || 0) > 0) {
                item.secondShipmentStatus = status;
            }
        });
    }

    // Update overall order status based on shipment statuses
    updateOrderOverallStatus(order);
    populateOrdersTable();
}

// Update overall order status
function updateOrderOverallStatus(order) {
    const allDelivered = order.items.every(item => 
        item.status === 'delivered' && 
        (!order.isShipmentSplit || item.secondShipmentStatus === 'delivered'));
    
    const allCancelled = order.items.every(item => 
        item.status === 'cancelled' && 
        (!order.isShipmentSplit || item.secondShipmentStatus === 'cancelled'));
    
    if (allDelivered) {
        order.status = 'completed';
    } else if (allCancelled) {
        order.status = 'cancelled';
    } else {
        order.status = 'in_progress';
    }
}

// Add order item row
function addOrderItem() {
    const itemRow = document.createElement('div');
    itemRow.className = 'row mb-3 order-item';
    itemRow.innerHTML = `
        <div class="col-md-3">
            <label class="form-label">Item</label>
            <select class="form-select" required onchange="updateItemPrice(this)">
                <option value="">Select Item</option>
                ${ordersData.items.map(item =>
                    `<option value="${item.id}" data-price="${item.price}">${item.name}</option>`
                ).join('')}
            </select>
        </div>
        <div class="col-md-2">
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control" required min="1" onchange="updateTotalPrice(this)">
        </div>
        <div class="col-md-2">
            <label class="form-label">Unit Price</label>
            <input type="number" class="form-control" readonly>
        </div>
        <div class="col-md-3">
            <label class="form-label">Total Price</label>
            <input type="number" class="form-control item-total" readonly>
        </div>
        <div class="col-md-2 d-flex align-items-end">
            <button type="button" class="btn btn-danger" onclick="removeOrderItem(this)">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
    document.getElementById('orderItems').appendChild(itemRow);
}

// Save new order
function saveOrder() {
    const franchise = document.getElementById('orderFranchise');
    const warehouse = document.getElementById('orderWarehouse');
    
    const items = Array.from(document.getElementsByClassName('order-item')).map(row => {
        const select = row.querySelector('select');
        const quantity = row.querySelector('input[type="number"]:not([readonly])').value;
        const item = ordersData.items.find(i => i.id === select.value);
        return { ...item, quantity: parseInt(quantity), status: 'processing' };
    });

    const newOrder = {
        id: `ORD${String(ordersData.orders.length + 1).padStart(3, '0')}`,
        franchiseId: franchise.value,
        franchiseName: franchise.options[franchise.selectedIndex].text,
        warehouse: warehouse.value,
        orderDate: new Date().toISOString().split('T')[0],
        items: items,
        status: 'pending',
        courier: null,
        trackingId: null
    };

    ordersData.orders.push(newOrder);
    updateOrderMetrics();
    populateOrdersTable();
    $('#newOrderModal').modal('hide');
}

// View order details
function viewOrderDetails(orderId) {
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('detailOrderId').textContent = order.id;
    document.getElementById('detailFranchise').textContent = order.franchiseName;
    document.getElementById('detailOrderDate').textContent = formatDate(order.orderDate);
    document.getElementById('detailStatus').textContent = order.status;
    document.getElementById('detailCourier').textContent = order.courier || 'Not Assigned';
    document.getElementById('detailTrackingId').textContent = order.trackingId || 'Not Available';

    // Populate warehouse dropdown
    const warehouseSelect = document.getElementById('detailWarehouse');
    const warehouses = [...new Set(ordersData.orders.map(o => o.warehouse).filter(w => w))];
    warehouseSelect.innerHTML = '<option value="">Select Warehouse</option>' +
        warehouses.map(w => `<option value="${w}" ${w === order.warehouse ? 'selected' : ''}>${w}</option>`).join('');

    // Update warehouse on change
    warehouseSelect.onchange = function() {
        order.warehouse = this.value;
        populateOrdersTable();
    };

    // Show/hide shipment sections based on split status
    const secondShipmentSection = document.getElementById('secondShipmentSection');
    secondShipmentSection.style.display = order.isShipmentSplit ? 'block' : 'none';

    // Populate first shipment items
    const firstShipmentTable = document.getElementById('firstShipmentItemsTable');
    firstShipmentTable.innerHTML = order.items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.shipment1Quantity || item.quantity}</td>
            <td>₹${item.price}</td>
            <td>₹${item.price * (item.shipment1Quantity || item.quantity)}</td>
        </tr>
    `).join('');

    // Populate second shipment items if split
    if (order.isShipmentSplit) {
        const secondShipmentTable = document.getElementById('secondShipmentItemsTable');
        secondShipmentTable.innerHTML = order.items.map(item => {
            const remainingQty = item.quantity - (item.shipment1Quantity || 0);
            return remainingQty > 0 ? `
                <tr>
                    <td>${item.name}</td>
                    <td>${remainingQty}</td>
                    <td>₹${item.price}</td>
                    <td>₹${item.price * remainingQty}</td>
                </tr>
            ` : '';
        }).join('');
    }

    $('#orderDetailsModal').modal('show');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize date range picker
    $('#dateFilter').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear',
            format: 'YYYY-MM-DD'
        }
    });

    $('#dateFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
        applyFilters();
    });

    $('#dateFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        applyFilters();
    });

    updateOrderMetrics();
    populateFranchiseDropdowns();
    populateWarehouseFilter();
    populateOrdersTable();
    
    // Initialize the first item row with available items
    const firstItemSelect = document.querySelector('#orderItems .order-item select');
    if (firstItemSelect) {
        firstItemSelect.innerHTML = `
            <option value="">Select Item</option>
            ${ordersData.items.map(item =>
                `<option value="${item.id}" data-price="${item.price}">${item.name}</option>`
            ).join('')}
        `;
    }
});

// Update order metrics
function updateOrderMetrics() {
    let totalOrders = ordersData.orders.length;
    let pendingOrders = 0;
    let inProgressOrders = 0;
    let completedOrders = 0;

    ordersData.orders.forEach(order => {
        if (order.status === 'processing') {
            pendingOrders++;
        } else if (['confirmed', 'dispatched'].includes(order.status)) {
            inProgressOrders++;
        } else if (['delivered', 'cancelled'].includes(order.status)) {
            completedOrders++;
        }
    });

    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('processingOrders').textContent = pendingOrders;
    document.getElementById('inTransitOrders').textContent = inProgressOrders;
    document.getElementById('deliveredOrders').textContent = completedOrders;
}

// Populate franchise dropdowns
function populateFranchiseDropdowns() {
    const franchiseOptions = ordersData.franchises.map(f =>
        `<option value="${f.id}">${f.name}</option>`
    ).join('');

    document.getElementById('franchiseFilter').innerHTML += franchiseOptions;
    document.getElementById('orderFranchise').innerHTML = franchiseOptions;
}

// Populate orders table
function populateOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = ordersData.orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.franchiseName}</td>
            <td>${formatDate(order.orderDate)}</td>
            <td>${order.items.length} items</td>
            <td>₹${calculateOrderTotal(order)}</td>
            <td>${order.warehouse || 'Not Assigned'}</td>
            <td><span class="badge bg-${getStatusBadgeClass(order.status)}">${order.status}</span></td>
            <td>
                <button class="btn btn-sm btn-info" onclick="viewOrderDetails('${order.id}')">
                    <i class="bi bi-eye"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Populate warehouse filter
function populateWarehouseFilter() {
    const warehouseData = [
        { id: 'W001', name: 'Mumbai Central Hub' },
        { id: 'W002', name: 'Delhi North Hub' },
        { id: 'W003', name: 'Bangalore East Hub' }
    ];

    const warehouses = [...new Set(ordersData.orders.map(o => o.warehouse).filter(w => w))];
    const warehouseFilter = document.getElementById('warehouseFilter');
    warehouseFilter.innerHTML = '<option value="">All Warehouses</option>' +
        warehouses.map(w => `<option value="${w}">${w}</option>`).join('');
}

// Format date
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-IN');
}

// Calculate order total
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => total + (item.quantity * item.price), 0);
}

// Get status badge class
function getStatusBadgeClass(status) {
    const classes = {
        'pending': 'secondary',
        'in_progress': 'warning',
        'completed': 'success'
    };
    return classes[status] || 'secondary';
}

// Add order item row
function addOrderItem() {
    const itemRow = document.createElement('div');
    itemRow.className = 'row mb-3 order-item';
    itemRow.innerHTML = `
        <div class="col-md-4">
            <label class="form-label">Item</label>
            <select class="form-select" required onchange="updateItemPrice(this)">
                <option value="">Select Item</option>
                ${ordersData.items.map(item =>
                    `<option value="${item.id}" data-price="${item.price}">${item.name}</option>`
                ).join('')}
            </select>
        </div>
        <div class="col-md-3">
            <label class="form-label">Quantity</label>
            <input type="number" class="form-control" required min="1">
        </div>
        <div class="col-md-3">
            <label class="form-label">Price</label>
            <input type="number" class="form-control" readonly>
        </div>
        <div class="col-md-2 d-flex align-items-end">
            <button type="button" class="btn btn-danger" onclick="removeOrderItem(this)">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `;
    document.getElementById('orderItems').appendChild(itemRow);
}

// Remove order item row
function removeOrderItem(button) {
    button.closest('.order-item').remove();
}

// Update item price
function updateItemPrice(select) {
    const price = select.options[select.selectedIndex].dataset.price;
    select.closest('.order-item').querySelector('input[type="number"][readonly]').value = price;
}

// Save new order
function saveOrder() {
    const franchise = document.getElementById('orderFranchise');
    const items = Array.from(document.getElementsByClassName('order-item')).map(row => {
        const select = row.querySelector('select');
        const quantity = row.querySelector('input[type="number"]:not([readonly])').value;
        const item = ordersData.items.find(i => i.id === select.value);
        return { ...item, quantity: parseInt(quantity) };
    });

    const newOrder = {
        id: `ORD${String(ordersData.orders.length + 1).padStart(3, '0')}`,
        franchiseId: franchise.value,
        franchiseName: franchise.options[franchise.selectedIndex].text,
        orderDate: new Date().toISOString().split('T')[0],
        items: items.map(item => ({ ...item, status: 'processing' })),
        status: 'processing',
        courier: null,
        trackingId: null
    };

    ordersData.orders.push(newOrder);
    updateOrderMetrics();
    populateOrdersTable();
    $('#newOrderModal').modal('hide');
}

// View order details
function viewOrderDetails(orderId) {
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('detailOrderId').textContent = order.id;
    document.getElementById('detailFranchise').textContent = order.franchiseName;
    document.getElementById('detailOrderDate').textContent = formatDate(order.orderDate);
    document.getElementById('detailStatus').textContent = order.status;
    document.getElementById('detailCourier').textContent = order.courier || 'Not assigned';
    document.getElementById('detailTrackingId').textContent = order.trackingId || 'Not available';

    // Show/hide shipment sections based on split status
    const secondShipmentSection = document.getElementById('secondShipmentSection');
    secondShipmentSection.style.display = order.isShipmentSplit ? 'block' : 'none';

    // Populate first shipment items
    const firstShipmentTable = document.getElementById('firstShipmentItemsTable');
    firstShipmentTable.innerHTML = order.items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.shipment1Quantity || item.quantity}</td>
            <td>₹${item.price}</td>
            <td>₹${item.price * (item.shipment1Quantity || item.quantity)}</td>
        </tr>
    `).join('');

    // Populate second shipment items if split
    if (order.isShipmentSplit) {
        const secondShipmentTable = document.getElementById('secondShipmentItemsTable');
        secondShipmentTable.innerHTML = order.items.map(item => {
            const remainingQty = item.quantity - (item.shipment1Quantity || 0);
            return remainingQty > 0 ? `
                <tr>
                    <td>${item.name}</td>
                    <td>${remainingQty}</td>
                    <td>₹${item.price}</td>
                    <td>₹${item.price * remainingQty}</td>
                </tr>
            ` : '';
        }).join('');
    }

    $('#orderDetailsModal').modal('show');
}

// Update item quantity (short pick)
function updateItemQuantity(orderId, itemId, newQuantity) {
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    const item = order.items.find(i => i.id === itemId);
    if (!item) return;

    item.quantity = parseInt(newQuantity);
    if (item.quantity === 0) {
        order.items = order.items.filter(i => i.id !== itemId);
    }

    populateOrdersTable();
}

// Update courier details
function updateCourierDetails() {
    const orderId = document.getElementById('detailOrderId').textContent;
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    const courier = prompt('Enter courier name:');
    const trackingId = prompt('Enter tracking ID:');

    if (courier && trackingId) {
        order.courier = courier;
        order.trackingId = trackingId;
        order.status = 'dispatched';
        
        document.getElementById('detailCourier').textContent = courier;
        document.getElementById('detailTrackingId').textContent = trackingId;
        document.getElementById('detailStatus').textContent = 'dispatched';
        
        updateOrderMetrics();
        populateOrdersTable();
    }
}

// Update item status
function updateItemStatus(orderId, itemId, newStatus) {
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    const item = order.items.find(i => i.id === itemId);
    if (!item) return;

    // Instead of updating individual item status, update the entire shipment status
    order.status = newStatus;
    order.items.forEach(item => {
        if (item.status !== 'cancelled') {
            item.status = newStatus;
        }
    });

    // Update UI
    document.getElementById('detailStatus').textContent = order.status;
    updateOrderMetrics();
    populateOrdersTable();
}

// Update order status
function updateOrderStatus() {
    const orderId = document.getElementById('detailOrderId').textContent;
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    const statusFlow = {
        'processing': 'confirmed',
        'confirmed': 'dispatched',
        'dispatched': 'delivered',
        'cancelled': 'cancelled'
    };

    if (statusFlow[order.status]) {
        const newStatus = statusFlow[order.status];
        // Update shipment status and all items together
        order.status = newStatus;
        order.items.forEach(item => {
            if (item.status !== 'cancelled') {
                item.status = newStatus;
            }
        });
        
        document.getElementById('detailStatus').textContent = order.status;
        viewOrderDetails(orderId);
        updateOrderMetrics();
        populateOrdersTable();
    }
}

function splitShipment() {
    const orderId = document.getElementById('detailOrderId').textContent;
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;

    // Populate first shipment items
    const firstShipmentTable = document.getElementById('firstShipmentItems');
    firstShipmentTable.innerHTML = order.items.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>
                <input type="number" class="form-control form-control-sm ship-qty"
                    min="0" max="${item.quantity}" value="${item.quantity}"
                    onchange="updateSecondShipment()">
            </td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removeFromFirstShipment(this)">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');

    // Initialize second shipment items (empty initially)
    updateSecondShipment();

    // Hide order details modal and show split shipment modal
    $('#orderDetailsModal').modal('hide');
    $('#splitShipmentModal').modal('show');
}

function updateSecondShipment() {
    const firstShipmentRows = document.querySelectorAll('#firstShipmentItems tr');
    const secondShipmentTable = document.getElementById('secondShipmentItems');
    const orderId = document.getElementById('detailOrderId').textContent;
    const order = ordersData.orders.find(o => o.id === orderId);

    if (!order) return;

    secondShipmentTable.innerHTML = Array.from(firstShipmentRows).map((row, index) => {
        const item = order.items[index];
        const shipQty = parseInt(row.querySelector('.ship-qty')?.value || 0);
        const remainingQty = item.quantity - shipQty;

        return remainingQty > 0 ? `
            <tr>
                <td>${item.name}</td>
                <td>${remainingQty}</td>
            </tr>
        ` : '';
    }).join('');
}

function removeFromFirstShipment(button) {
    const row = button.closest('tr');
    const shipQtyInput = row.querySelector('.ship-qty');
    shipQtyInput.value = 0;
    updateSecondShipment();
}

function generateOrderId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `ORD-${timestamp}-${random}`.toUpperCase();
}

function confirmSplitShipment() {
    const orderId = document.getElementById('detailOrderId').textContent;
    const order = ordersData.orders.find(o => o.id === orderId);
    if (!order) return;
    order.isShipmentSplit = true;

    const firstShipmentRows = document.querySelectorAll('#firstShipmentItems tr');
    const firstShipmentItems = Array.from(firstShipmentRows).map((row, index) => {
        const shipQty = parseInt(row.querySelector('.ship-qty').value);
        return {
            ...order.items[index],
            quantity: order.items[index].quantity,
            shipment1Quantity: shipQty
        };
    }).filter(item => item.quantity > 0);

    const secondShipmentItems = order.items.map((item, index) => {
        const shipQty = parseInt(firstShipmentRows[index].querySelector('.ship-qty').value);
        const remainingQty = item.quantity - shipQty;
        return {
            ...item,
            quantity: remainingQty
        };
    }).filter(item => item.quantity > 0);

    // Create second shipment
    if (secondShipmentItems.length > 0) {
        const secondShipment = {
            id: generateOrderId(),
            franchiseName: order.franchiseName,
            orderDate: new Date(),
            status: 'processing',
            items: secondShipmentItems,
            warehouse: order.warehouse
        };
        ordersData.orders.push(secondShipment);
    }

    // Update original order with first shipment items
    order.items = firstShipmentItems;

    // Close modal and refresh
    $('#splitShipmentModal').modal('hide');
    updateOrderMetrics();
    populateOrdersTable();
    viewOrderDetails(orderId);
}

// Apply filters
function applyFilters() {
    const dateRange = $('#dateFilter').val();
    const status = document.getElementById('statusFilter').value;
    const warehouse = document.getElementById('warehouseFilter').value;
    const franchise = document.getElementById('franchiseFilter').value;

    let filteredOrders = [...ordersData.orders];

    // Apply date range filter
    if (dateRange) {
        const [startDate, endDate] = dateRange.split(' - ');
        filteredOrders = filteredOrders.filter(order => {
            const orderDate = new Date(order.orderDate);
            return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
        });
    }

    // Apply status filter
    if (status) {
        filteredOrders = filteredOrders.filter(order => order.status === status);
    }

    // Apply warehouse filter
    if (warehouse) {
        filteredOrders = filteredOrders.filter(order => order.warehouse === warehouse);
    }

    // Apply franchise filter
    if (franchise) {
        filteredOrders = filteredOrders.filter(order => order.franchiseId === franchise);
    }

    // Update the table with filtered orders
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = filteredOrders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.franchiseName}</td>
            <td>${formatDate(order.orderDate)}</td>
            <td>${order.items.length} items</td>
            <td>₹${calculateOrderTotal(order)}</td>
            <td>${order.warehouse || 'Not Assigned'}</td>
            <td><span class="badge bg-${getStatusBadgeClass(order.status)}">${order.status}</span></td>
            <td>
                <button class="btn btn-sm btn-info me-2" onclick="viewOrderDetails('${order.id}')">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-primary" onclick="updateOrderStatus('${order.id}')">
                    <i class="bi bi-arrow-clockwise"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Export orders
function exportOrders() {
    const csvContent = [
        ['Order ID', 'Franchise', 'Order Date', 'Items', 'Total Amount', 'Status'].join(','),
        ...ordersData.orders.map(order => [
            order.id,
            order.franchiseName,
            order.orderDate,
            order.items.length,
            calculateOrderTotal(order),
            order.warehouse,
            order.status
        ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'orders_export.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}