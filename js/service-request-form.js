// Mock customer database (replace with actual API calls)
const mockCustomerDB = {
    '9902733440': {
        name: 'John Doe',
        language: 'English',
        alternatePhone: '+917890123456',
        addresses: [
            '123 Main St, City - 400001',
            '456 Park Ave, City - 400002'
        ],
        products: [
            { brand: 'Samsung', category: 'Refrigerator', model: 'RT42', serial: 'SN123', warranty: {type: 'Extended Warranty', status: 'Expired', expiryDate: '2024-12-31', freeServicesRemaining: 0  }},
            { brand: 'LG', category: 'Washing Machine', model: 'WM84', serial: 'SN456', warranty: {type: 'Braand Warranty', status: 'Active', expiryDate: '2025-08-31', freeServicesRemaining: 2  } }
        ]
    }
};

// Search customer by phone number
async function searchCustomer() {
    const phoneNumber = document.getElementById('customerSearchPhone').value;
    const customer = mockCustomerDB[phoneNumber]; // Replace with actual API call

    if (customer) {
        // Populate customer information
        document.getElementById('customerName').value = customer.name;
        document.getElementById('customerPhone').value = phoneNumber;
        document.getElementById('customerLanguage').value = customer.language || '';
        document.getElementById('customerAlternatePhone').value = customer.alternatePhone || '';

        // Show and populate address dropdown
        const addressSelect = document.getElementById('addressSelect');
        addressSelect.innerHTML = '<option value="new">Add New Address</option>';
        customer.addresses.forEach((address, index) => {
            addressSelect.innerHTML += `<option value="${index}">${address}</option>`;
        });
        document.getElementById('existingAddresses').style.display = 'block';

        // Show and populate product dropdown
        const productSelect = document.getElementById('productSelect');
        productSelect.innerHTML = '<option value="new">Add New Product</option>';
        customer.products.forEach((product, index) => {
            productSelect.innerHTML += `<option value="${index}">${product.brand} ${product.category} - ${product.model}</option>`;
        });
        document.getElementById('existingProducts').style.display = 'block';
    } else {
        // Reset form for new customer
        document.getElementById('customerName').value = '';
        document.getElementById('customerPhone').value = phoneNumber;
        document.getElementById('customerLanguage').value = '';
        document.getElementById('customerAlternatePhone').value = '';
        document.getElementById('existingAddresses').style.display = 'none';
        document.getElementById('customerAddress').value = '';
        document.getElementById('existingProducts').style.display = 'none';
        document.getElementById('productDetails').style.display = 'block';
    }
}

// Handle address selection
function handleAddressSelection() {
    const addressSelect = document.getElementById('addressSelect');
    const selectedValue = addressSelect.value;
    const phoneNumber = document.getElementById('customerPhone').value;
    const customer = mockCustomerDB[phoneNumber];

    if (selectedValue === 'new') {
        document.getElementById('customerAddress').value = '';
    } else {
        document.getElementById('customerAddress').value = customer.addresses[selectedValue];
    }
}

// Handle product selection
function handleProductSelection() {
    const productSelect = document.getElementById('productSelect');
    const selectedValue = productSelect.value;
    const phoneNumber = document.getElementById('customerPhone').value;
    const customer = mockCustomerDB[phoneNumber];
    const warrantyDetails = document.getElementById('warrantyDetails');
    const submitBtn = document.getElementById('submitRequestBtn');

    if (selectedValue === 'new') {
        // Reset product fields for new entry
        const brandSelect = document.querySelector('select[name="brand"]');
        if (brandSelect) brandSelect.value = '';
        const categorySelect = document.querySelector('select[name="category"]');
        if (categorySelect) categorySelect.value = '';
        const modelSelect = document.querySelector('input[name="model"]');
        if (modelSelect) modelSelect.value = '';
        const serialSelect = document.querySelector('input[name="serial"]');
        if (serialSelect) serialSelect.value = '';
        document.getElementById('productDetails').style.display = 'block';
        warrantyDetails.style.display = 'none';
        submitBtn.textContent = 'Create Request';
        submitBtn.classList.remove('btn-success');
        submitBtn.classList.add('btn-primary');
    } else {
        // Populate selected product details
        const product = customer.products[selectedValue];
        const brandSelect = document.querySelector('select[name="brand"]');
        if (brandSelect) brandSelect.value = product.brand;
        const categorySelect = document.querySelector('select[name="category"]');
        if (categorySelect) categorySelect.value = product.category;
        const modelSelect = document.querySelector('input[name="model"]');
        if (modelSelect) modelSelect.value = product.model;
        const serialSelect = document.querySelector('input[name="serial"]');
        if (serialSelect) serialSelect.value = product.serial;
        document.getElementById('productDetails').style.display = 'block';

        // Show and update warranty details
        warrantyDetails.style.display = 'block';
        // Simulate fetching warranty details from backend
        const mockWarrantyDetails = product.warranty;

        // Update warranty details fields
        document.getElementById('warrantyType').value = mockWarrantyDetails.type;
        document.getElementById('warrantyStatus').value = mockWarrantyDetails.status;
        document.getElementById('warrantyExpiry').value = mockWarrantyDetails.expiryDate;
        document.getElementById('freeServicesRemaining').value = mockWarrantyDetails.freeServicesRemaining;

        // Update submit button text based on free services
        if (mockWarrantyDetails.freeServicesRemaining > 0) {
            submitBtn.textContent = 'Create Free Service Request';
            submitBtn.classList.remove('btn-primary');
            submitBtn.classList.add('btn-success');
        } else {
            submitBtn.textContent = 'Send Payment Link for Service Request';
            submitBtn.classList.remove('btn-success');
            submitBtn.classList.add('btn-primary');
        }
    }
}

// Handle service request form submission
function submitServiceRequest() {
    const form = document.getElementById('addServiceRequestForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Collect form data
    const formData = new FormData(form);
    const requestData = Object.fromEntries(formData.entries());

    // Add additional metadata
    requestData.requestId = generateRequestId();
    requestData.createdDate = new Date().toISOString();
    requestData.status = 'Pending';
    requestData.slaDeadline = calculateSLADeadline(requestData.priority);

    // TODO: Replace with actual API call
    console.log('New Service Request:', requestData);

    // Show success message
    alert('Service request created successfully!');

     // Reset form for new customer
     document.getElementById('customerName').value = '';
     document.getElementById('customerPhone').value = '';
     document.getElementById('existingAddresses').style.display = 'none';
     document.getElementById('customerAddress').value = '';
     document.getElementById('existingProducts').style.display = 'none';
     document.getElementById('productDetails').style.display = 'block';

    // Close modal and reset form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addServiceRequestModal'));
    modal.hide();
    form.reset();
}

// Generate a unique request ID
function generateRequestId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `SR-${timestamp}-${random}`.toUpperCase();
}

// Calculate SLA deadline based on priority
function calculateSLADeadline(priority) {
    const now = new Date();
    switch (priority) {
        case 'High':
            return new Date(now.setHours(now.getHours() + 24)).toISOString();
        case 'Medium':
            return new Date(now.setHours(now.getHours() + 48)).toISOString();
        case 'Low':
            return new Date(now.setHours(now.getHours() + 72)).toISOString();
        default:
            return new Date(now.setHours(now.getHours() + 48)).toISOString();
    }
}