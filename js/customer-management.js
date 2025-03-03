// Customer Management JavaScript

// Mock data for testing - replace with actual API calls
let customers = [
    {
        id: 'CUST001',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+912345678900',
        alternatePhone: '+917890123456',
        language: 'English',
        address: '123 Main St',
        city: 'Howrah',
        state: 'WB',
        pincode: '710001',
        type: 'individual',
        status: 'active',
        addedBy: 'madmin'
    },
    {
        id: 'CUST002',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+919087654321',
        language: 'Hindi',
        address: '456 Oak Avenue',
        city: 'Pune',
        state: 'MA',
        pincode: '290001',
        type: 'business',
        status: 'active',
        addedBy: 'Franchise'
    },
    {
        id: 'CUST003',
        name: 'Robert Johnson',
        email: 'robert.j@example.com',
        phone: '+911223034455',
        alternatePhone: '+918765432109',
        language: 'Bengali',
        address: '789 Pine Road',
        city: 'Hyderabad',
        state: 'TL',
        pincode: '400601',
        type: 'individual',
        status: 'inactive',
        addedBy: 'madmin'
    },
    {
        id: 'CUST004',
        name: 'Sarah Williams',
        email: 'sarah.w@example.com',
        phone: '+914450566778',
        address: '321 Elm Street',
        city: 'Mumbai',
        state: 'TX',
        pincode: '207001',
        type: 'business',
        status: 'active',
        addedBy: 'Franchise'
    },
    {
        id: 'CUST005',
        name: 'Michael Brown',
        email: 'michael.b@example.com',
        phone: '+916607788990',
        alternatePhone: '+919876543210',
        address: '159 Maple Drive',
        city: 'Bangalore',
        state: 'KA',
        pincode: '565001',
        type: 'individual',
        status: 'active',
        addedBy: 'madmin'
    },
    {
        id: 'CUST006',
        name: 'Emily Davis',
        email: 'emily.d@example.com',
        phone: '+912203344556',
        address: '753 Cedar Lane',
        city: 'Nasik',
        state: 'MA',
        pincode: '219101',
        type: 'business',
        status: 'inactive',
        addedBy: 'Franchise'
    },
    {
        id: 'CUST007',
        name: 'David Wilson',
        email: 'david.w@example.com',
        phone: '+919902733440',
        alternatePhone: '+917654321098',
        address: '852 Horamavu Agara',
        city: 'Bangalore',
        state: 'KA',
        pincode: '560043',
        type: 'individual',
        status: 'active',
        addedBy: 'madmin'
    },
    {
        id: 'CUST008',
        name: 'Lisa Anderson',
        email: 'lisa.a@example.com',
        phone: '+919090011223',
        address: '951 Willow Way',
        city: 'Kolkata',
        state: 'WB',
        pincode: '702101',
        type: 'business',
        status: 'active',
        addedBy: 'Franchise'
    },
    {
        id: 'CUST009',
        name: 'Thomas Martinez',
        email: 'thomas.m@example.com',
        phone: '+913304455667',
        address: '357 Spruce Street',
        city: 'New Delhi',
        state: 'DL',
        pincode: '105201',
        type: 'individual',
        status: 'inactive',
        addedBy: 'madmin'
    },
    {
        id: 'CUST010',
        name: 'Jennifer Taylor',
        email: 'jennifer.t@example.com',
        phone: '+91556677889',
        address: '456 Redwood Road',
        city: 'Mangalore',
        state: 'KA',
        pincode: '595101',
        type: 'business',
        status: 'active',
        addedBy: 'Franchise'
    },
    {
        id: 'CUST011',
        name: 'William Garcia',
        email: 'william.g@example.com',
        phone: '+91112233445',
        address: '789 Aspen Avenue',
        city: 'Pune',
        state: 'MA',
        pincode: '273301',
        type: 'individual',
        status: 'active',
        addedBy: 'madmin'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCustomers();
});

// Load customers into the table
function loadCustomers() {
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = '';

    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}, ${customer.city}, ${customer.state} - ${customer.pincode}</td>
            <td><span class="badge bg-${customer.status === 'active' ? 'success' : 'danger'}">${customer.status}</span></td>
            <td>${customer.addedBy}</td>
            <td>
                <div class="btn-group btn-group-sm">
                    <button class="btn btn-primary" onclick="viewCustomerDashboard('${customer.id}')"><i class="bi bi-speedometer2"></i> Dashboard</button>
                    <button class="btn btn-info" onclick="editCustomer('${customer.id}')"><i class="bi bi-pencil"></i> Edit</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// View customer dashboard
function viewCustomerDashboard(customerId) {
    // Store the customer ID in session storage for the dashboard page
    sessionStorage.setItem('currentCustomerId', customerId);
    window.location.href = 'customer-dashboard.html';
}

// Edit customer
function showAddCustomer() {
    document.getElementById('customerModalTitle').textContent = 'Add New Customer';
    document.getElementById('customerForm').reset();
    delete document.getElementById('customerForm').dataset.customerId;

    // Display Added By information (read-only)
    const username = sessionStorage.getItem('username');
    document.getElementById('customerAddedBy').value = username ? username : 'Franchise';

    // Show the modal
    new bootstrap.Modal(document.getElementById('addCustomerModal')).show();
}

// Edit customer
function editCustomer(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;

    document.getElementById('customerModalTitle').textContent = 'Edit Customer';
    document.getElementById('customerName').value = customer.name;
    document.getElementById('customerEmail').value = customer.email;
    document.getElementById('customerPhone').value = customer.phone;
    document.getElementById('customerAlternatePhone').value = customer.alternatePhone || '';
    document.getElementById('customerType').value = customer.type;
    document.getElementById('customerAddress').value = customer.address;
    document.getElementById('customerCity').value = customer.city;
    document.getElementById('customerState').value = customer.state;
    document.getElementById('customerPincode').value = customer.pincode;
    document.getElementById('customerStatus').value = customer.status;
    document.getElementById('customerLanguage').value = customer.language || 'English';

    // Display Added By information (read-only)
    document.getElementById('customerAddedBy').value = customer.addedBy;

    // Store the customer ID for saving
    document.getElementById('customerForm').dataset.customerId = customerId;

    // Show the modal
    new bootstrap.Modal(document.getElementById('addCustomerModal')).show();
}

// Save customer (create or update)
function saveCustomer() {
    const form = document.getElementById('customerForm');
    const customerId = form.dataset.customerId;

    const customerData = {
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        alternatePhone: document.getElementById('customerAlternatePhone').value,
        language: document.getElementById('customerLanguage').value,
        type: document.getElementById('customerType').value,
        address: document.getElementById('customerAddress').value,
        city: document.getElementById('customerCity').value,
        state: document.getElementById('customerState').value,
        pincode: document.getElementById('customerPincode').value,
        status: document.getElementById('customerStatus').value,
        addedBy: customerId ? customers.find(c => c.id === customerId).addedBy : 'Franchise'
    };

    if (customerId) {
        // Update existing customer
        const index = customers.findIndex(c => c.id === customerId);
        if (index !== -1) {
            customers[index] = { ...customers[index], ...customerData };
        }
    } else {
        // Create new customer
        customerData.id = 'CUST' + (customers.length + 1).toString().padStart(3, '0');
        customers.push(customerData);
    }

    // Refresh the table
    loadCustomers();

    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addCustomerModal'));
    modal.hide();

    // Reset the form
    form.reset();
    delete form.dataset.customerId;
    document.getElementById('customerModalTitle').textContent = 'Add New Customer';
}

// Reset form when modal is closed
document.getElementById('addCustomerModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('customerForm').reset();
    document.getElementById('customerModalTitle').textContent = 'Add New Customer';
    delete document.getElementById('customerForm').dataset.customerId;
});

// Add event listener for search input
document.getElementById('customerSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#customerTableBody tr');

    rows.forEach(row => {
        const name = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const phone = row.querySelector('td:nth-child(4)').textContent.toLowerCase();
        const alternatePhone = row.querySelector('td:nth-child(5)').textContent.toLowerCase();

        if (name.includes(searchTerm) || phone.includes(searchTerm) || alternatePhone.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});