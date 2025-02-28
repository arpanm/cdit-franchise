// Function to toggle shipments visibility
function toggleShipments(button) {
    const shipmentsContainer = button.closest('.order-card').querySelector('.shipments-container');
    const icon = button.querySelector('i');
    if (shipmentsContainer.style.display === 'none') {
        shipmentsContainer.style.display = 'block';
        icon.classList.replace('bi-chevron-down', 'bi-chevron-up');
    } else {
        shipmentsContainer.style.display = 'none';
        icon.classList.replace('bi-chevron-up', 'bi-chevron-down');
    }
}

// Function to show serial numbers modal
function showSerialNumbers(article, description, quantity) {
    // Update modal content
    document.getElementById('modalArticleName').textContent = article;
    document.getElementById('modalArticleDescription').textContent = description;
    
    // Clear existing serial numbers
    const serialNumbersList = document.getElementById('serialNumbersList');
    serialNumbersList.innerHTML = '';
    
    // Generate dummy serial numbers for demonstration
    for (let i = 1; i <= quantity; i++) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `SN${String(i).padStart(8, '0')}`;
        serialNumbersList.appendChild(li);
    }
    
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('serialNumbersModal'));
    modal.show();
}

// Function to apply filters
function applyFilters() {
    const searchTerm = document.getElementById('searchOrder').value.toLowerCase();
    const status = document.getElementById('statusFilter').value;
    const dateRange = document.getElementById('dateFilter').value;
    
    // Convert date range string to start and end dates
    let startDate = null;
    let endDate = null;
    if (dateRange) {
        const [start, end] = dateRange.split(' - ');
        startDate = new Date(start);
        endDate = new Date(end);
    }
    
    // Filter orders based on criteria
    const filteredOrders = sampleOrders.filter(order => {
        // Filter by order ID
        if (searchTerm && !order.id.toLowerCase().includes(searchTerm)) {
            return false;
        }
        
        // Filter by status
        if (status && status !== 'All' && order.status.toLowerCase() !== status.toLowerCase()) {
            return false;
        }
        
        // Filter by date range
        if (startDate && endDate) {
            const orderDate = new Date(order.date);
            if (orderDate < startDate || orderDate > endDate) {
                return false;
            }
        }
        
        return true;
    });
    
    // Update the display with filtered orders
    populateOrders(filteredOrders);
}

// Initialize date range picker when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize date range picker
    const dateFilter = document.getElementById('dateFilter');
    if (dateFilter) {
        $(dateFilter).daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $(dateFilter).on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
            applyFilters();
        });

        $(dateFilter).on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
            applyFilters();
        });
    }
    
    // Initialize orders and add event listeners
    populateOrders(sampleOrders);
    
    // Add event listeners for other filters
    document.getElementById('searchOrder').addEventListener('input', applyFilters);
    document.getElementById('statusFilter').addEventListener('change', applyFilters);
});

// Function to populate orders
function populateOrders(orders) {
    const container = document.getElementById('ordersContainer');
    const orderTemplate = document.getElementById('orderTemplate');
    const shipmentTemplate = document.getElementById('shipmentTemplate');
    
    // Check if required elements exist
    if (!container || !orderTemplate || !shipmentTemplate) {
        console.error('Required DOM elements not found for order population');
        return;
    }
    
    container.innerHTML = '';
    
    orders.forEach(order => {
        const orderNode = orderTemplate.content.cloneNode(true);
        
        // Set order details
        const orderIdElement = orderNode.querySelector('.order-id');
        if (orderIdElement) orderIdElement.textContent = order.id;
        
        const statusBadge = document.createElement('span');
        statusBadge.className = `badge bg-${getStatusColor(order.status)} ms-2`;
        statusBadge.textContent = order.status;
        
        const orderHeader = orderNode.querySelector('.order-id').parentNode;
        const orderDate = orderNode.querySelector('.order-date');
        
        if (orderHeader && statusBadge && orderDate && orderDate.parentNode === orderHeader) {
            orderHeader.insertBefore(statusBadge, orderDate);
        } else if (orderHeader && statusBadge) {
            orderHeader.appendChild(statusBadge);
        }
        
        if (orderDate) orderDate.textContent = order.date;
        
        const shipmentsContainer = orderNode.querySelector('.shipments-container');
        
        // Track assigned articles to calculate open articles later
        const assignedArticles = new Map();
        
        order.shipments.forEach(shipment => {
            const shipmentNode = shipmentTemplate.content.cloneNode(true);
            
            // Set shipment details
            shipmentNode.querySelector('.shipment-id').textContent = shipment.id;
            const statusBadge = shipmentNode.querySelector('.shipment-status');
            statusBadge.textContent = shipment.status;
            statusBadge.classList.add(`bg-${getStatusColor(shipment.status)}`);
            
            if (shipment.invoice) {
                const invoiceLink = shipmentNode.querySelector('.invoice-link');
                invoiceLink.href = shipment.invoice;
                invoiceLink.style.display = 'inline-block';
            }
            
            const articlesList = shipmentNode.querySelector('.articles-list');
            
            shipment.articles.forEach(article => {
                // Track assigned articles
                const key = `${article.name}-${article.description}`;
                assignedArticles.set(key, (assignedArticles.get(key) || 0) + article.quantity);
                
                const row = document.createElement('tr');
                const isTrackable = ['dispatched', 'delivered'].includes(shipment.status.toLowerCase());
                row.innerHTML = `
                    <td>${article.name}</td>
                    <td>${article.description}</td>
                    <td>
                        ${isTrackable ? 
                            `<a href="#" onclick="showSerialNumbers('${article.name}', '${article.description}', ${article.quantity}); return false;">
                                ${article.quantity}
                            </a>` : 
                            article.quantity
                        }
                    </td>
                `;
                articlesList.appendChild(row);
            });
            
            shipmentsContainer.appendChild(shipmentNode);
        });
        
        // Add open articles section
        if (order.articles) {
            const openArticlesContainer = document.createElement('div');
            openArticlesContainer.className = 'card mt-3';
            openArticlesContainer.innerHTML = `
                <div class="card-header bg-light">
                    <h6 class="mb-0">Open Articles</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Article</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody class="articles-list">
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            
            const openArticlesList = openArticlesContainer.querySelector('.articles-list');
            
            order.articles.forEach(article => {
                const key = `${article.name}-${article.description}`;
                const assignedQuantity = assignedArticles.get(key) || 0;
                const openQuantity = article.quantity - assignedQuantity;
                
                if (openQuantity > 0) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${article.name}</td>
                        <td>${article.description}</td>
                        <td>${openQuantity}</td>
                    `;
                    openArticlesList.appendChild(row);
                }
            });
            
            if (openArticlesList.children.length > 0) {
                orderNode.querySelector('.shipments-container').appendChild(openArticlesContainer);
            }
        }
        
        container.appendChild(orderNode);
    });
}

// Helper function to get status color
function getStatusColor(status) {
    const colors = {
        'pending': 'warning',
        'processing': 'info',
        'in progress': 'info',
        'dispatched': 'primary',
        'delivered': 'success',
        'completed': 'success'
    };
    return colors[status.toLowerCase()] || 'secondary';
}

// Sample data for testing
const sampleOrders = [
    {
        id: 'ORD011',
        date: '2025-02-23',
        status: 'In Progress',
        articles: [
            { name: 'Laptop', description: 'Dell XPS 13', quantity: 15 },
            { name: 'Mouse', description: 'Wireless Mouse', quantity: 10 }
        ],
        shipments: [
            {
                id: 'SHP001',
                status: 'Delivered',
                invoice: '3214',
                articles: [
                    { name: 'Laptop', description: 'Dell XPS 13', quantity: 5 },
                    { name: 'Mouse', description: 'Wireless Mouse', quantity: 3 }
                ]
            },
            {
                id: 'SHP002',
                status: 'Processing',
                articles: [
                    { name: 'Laptop', description: 'Dell XPS 13', quantity: 4 },
                    { name: 'Mouse', description: 'Wireless Mouse', quantity: 2 }
                ]
            }
        ]
    },
    {
        id: 'ORD101',
        date: '2025-02-16',
        status: 'In Progress',
        articles: [
            { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 10 }
        ],
        shipments: [
            {
                id: 'SHP003',
                status: 'Dispatched',
                articles: [
                    { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 4 }
                ]
            },
            {
                id: 'SHP004',
                status: 'Processing',
                articles: [
                    { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 3 }
                ]
            },
            ,
            {
                id: 'SHP004',
                status: 'Pending',
                articles: [
                    { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 3 }
                ]
            }
        ]
    },
    {
        id: 'ORD102',
        date: '2025-01-19',
        status: 'Pending',
        articles: [
            { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 15 }
        ],
        shipments: [
        ]
    },
    {
        id: 'ORD222',
        date: '2025-01-02',
        status: 'Completed',
        articles: [
            { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 10 },
            { name: 'Monitor', description: '27" 4K Display', quantity: 15 },
            { name: 'Mouse', description: 'Wireless Mouse', quantity: 10 }
        ],
        shipments: [
            {
                id: 'SHP003',
                status: 'Delivered',
                invoice: '1214',
                articles: [
                    { name: 'Keyboard', description: 'Mechanical Keyboard', quantity: 10 },
                    { name: 'Monitor', description: '27" 4K Display', quantity: 15 },
                    { name: 'Mouse', description: 'Wireless Mouse', quantity: 10 }
                ]
            }
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Ensure all required elements are present before initializing
    const requiredElements = [
        'ordersContainer',
        'orderTemplate',
        'shipmentTemplate',
        'searchOrder',
        'statusFilter',
        'dateFilter'
    ];
    
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    if (missingElements.length > 0) {
        console.error('Missing required DOM elements:', missingElements);
        return;
    }
    
    populateOrders(sampleOrders);
});