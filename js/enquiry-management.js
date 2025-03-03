// Enquiry Management JavaScript

// DOM Elements
const customerPhoneInput = document.getElementById('customerPhone');
const searchCustomerBtn = document.getElementById('searchCustomer');
const customerDetailsSection = document.getElementById('customerDetails');
const customerNameInput = document.getElementById('customerName');
const customerEmailInput = document.getElementById('customerEmail');
const enquiryTypeSelect = document.getElementById('enquiryType');
const productCategorySelect = document.getElementById('productCategory');
const enquiryDetailsTextarea = document.getElementById('enquiryDetails');
const saveEnquiryBtn = document.getElementById('saveEnquiry');
const enquiryList = document.getElementById('enquiryList');
const newCommentInput = document.getElementById('newComment');
const addCommentBtn = document.getElementById('addComment');
const resolutionDetailsTextarea = document.getElementById('resolutionDetails');
const enquiryStatusSelect = document.getElementById('enquiryStatus');
const updateEnquiryBtn = document.getElementById('updateEnquiry');


// Mock Data
const mockCustomers = [
    { phone: '9876543210', name: 'John Doe', email: 'john.doe@example.com' },
    { phone: '8765432109', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { phone: '7654321098', name: 'Robert Johnson', email: 'robert.j@example.com' },
    { phone: '9902733440', name: 'Wil Rob', email: 'robert.will@example.com' }
];

const mockEnquiries = [
    {
        id: 1,
        customer: mockCustomers[0],
        type: 'product',
        productCategory: 'Electronics',
        details: 'Issue with new smartphone display',
        status: 'open',
        createdDate: '2024-01-15T10:30:00Z',
        resolution: '',
        comments: [
            { text: 'Initial assessment required', author: 'Support Team', date: '2024-01-15T10:35:00Z' }
        ]
    },
    {
        id: 2,
        customer: mockCustomers[3],
        type: 'service',
        productCategory: 'Home Appliances',
        details: 'Washing machine repair request',
        status: 'in-progress',
        createdDate: '2024-01-14T09:15:00Z',
        resolution: 'Technician scheduled for inspection',
        comments: [
            { text: 'Customer reported loud noise during spin cycle', author: 'Jane Smith', date: '2024-01-14T09:15:00Z' },
            { text: 'Scheduled technician visit for tomorrow', author: 'Service Desk', date: '2024-01-14T10:00:00Z' }
        ]
    },
    {
        id: 3,
        customer: mockCustomers[2],
        type: 'warranty',
        productCategory: 'Computers',
        details: 'Laptop warranty extension inquiry',
        status: 'resolved',
        createdDate: '2024-01-13T14:20:00Z',
        resolution: 'Extended warranty plan offered and accepted',
        comments: [
            { text: 'Requested warranty details', author: 'Robert Johnson', date: '2024-01-13T14:20:00Z' },
            { text: 'Provided warranty extension options', author: 'Support Team', date: '2024-01-13T14:45:00Z' },
            { text: 'Customer accepted premium warranty plan', author: 'Sales Team', date: '2024-01-13T16:30:00Z' }
        ]
    },
    {
        id: 4,
        customer: mockCustomers[3],
        type: 'product',
        productCategory: 'Electronics',
        details: 'Issue with new smartphone display',
        status: 'open',
        createdDate: '2024-01-15T10:30:00Z',
        resolution: '',
        comments: [
            { text: 'Initial assessment required', author: 'Support Team', date: '2024-01-15T10:35:00Z' }
        ]
    },
    {
        id: 5,
        customer: mockCustomers[1],
        type: 'service',
        productCategory: 'Home Appliances',
        details: 'Washing machine repair request',
        status: 'in-progress',
        createdDate: '2024-01-14T09:15:00Z',
        resolution: 'Technician scheduled for inspection',
        comments: [
            { text: 'Customer reported loud noise during spin cycle', author: 'Jane Smith', date: '2024-01-14T09:15:00Z' },
            { text: 'Scheduled technician visit for tomorrow', author: 'Service Desk', date: '2024-01-14T10:00:00Z' }
        ]
    },
    {
        id: 6,
        customer: mockCustomers[3],
        type: 'warranty',
        productCategory: 'Computers',
        details: 'Laptop warranty extension inquiry',
        status: 'resolved',
        createdDate: '2024-01-13T14:20:00Z',
        resolution: 'Extended warranty plan offered and accepted',
        comments: [
            { text: 'Requested warranty details', author: 'Robert Johnson', date: '2024-01-13T14:20:00Z' },
            { text: 'Provided warranty extension options', author: 'Support Team', date: '2024-01-13T14:45:00Z' },
            { text: 'Customer accepted premium warranty plan', author: 'Sales Team', date: '2024-01-13T16:30:00Z' }
        ]
    }
];


// Enquiry Management JavaScript
const productCategories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Home Appliances' },
    { id: 3, name: 'Mobile Devices' },
    { id: 4, name: 'Computers' },
    { id: 5, name: 'Audio Equipment' }
];

// Load Product Categories
function loadProductCategories() {
    productCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        productCategorySelect.appendChild(option);
    });
}

// Search Customer
searchCustomerBtn.addEventListener('click', async () => {
    const phoneNumber = customerPhoneInput.value;
    if (!phoneNumber) {
        alert('Please enter a phone number');
        return;
    }

    try {
        // Replace with actual API call
        const customer = mockCustomers.find(c => c.phone === phoneNumber);

        if (customer) {
            customerNameInput.value = customer.name;
            customerEmailInput.value = customer.email;
            customerDetailsSection.classList.remove('d-none');
        } else {
            customerDetailsSection.classList.remove('d-none');
            customerNameInput.value = '';
            customerEmailInput.value = '';
        }
    } catch (error) {
        console.error('Error searching customer:', error);
        alert('Error searching customer');
    }
});

// Save New Enquiry
saveEnquiryBtn.addEventListener('click', async () => {
    const enquiryData = {
        customer: {
            phone: customerPhoneInput.value,
            name: customerNameInput.value,
            email: customerEmailInput.value
        },
        type: enquiryTypeSelect.value,
        productCategory: productCategorySelect.value,
        details: enquiryDetailsTextarea.value,
        status: 'open',
        createdDate: new Date().toISOString()
    };

    try {
        // Replace with actual API call
        mockEnquiries.push(enquiryData);

        alert('Enquiry created successfully');
        location.reload();
    } catch (error) {
        console.error('Error creating enquiry:', error);
        alert('Error creating enquiry');
    }
});

// Load Enquiries
async function loadEnquiries() {
    try {
        // Replace with actual API call
        const enquiries = mockEnquiries;

        enquiryList.innerHTML = '';
        enquiries.forEach(enquiry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${enquiry.id}</td>
                <td>${enquiry.customer.name}</td>
                <td>${enquiry.type}</td>
                <td>${enquiry.productCategory}</td>
                <td><span class="badge bg-${getStatusBadgeColor(enquiry.status)}">${enquiry.status}</span></td>
                <td>${new Date(enquiry.createdDate).toLocaleDateString()}</td>
                <td>
                    <button class="btn btn-sm btn-info" onclick="viewEnquiry(${enquiry.id})">
                        <i class="bi bi-eye"></i>
                    </button>
                </td>
            `;
            enquiryList.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading enquiries:', error);
    }
}

// Filter Elements
const filterStatus = document.getElementById('filterStatus');
const filterCustomer = document.getElementById('filterCustomer');
const applyFiltersBtn = document.getElementById('applyFilters');
const resetFiltersBtn = document.getElementById('resetFilters');

// Filter Functionality
function applyFilters() {
    const filteredEnquiries = mockEnquiries.filter(enquiry => {
        // Status Filter
        if (filterStatus.value && enquiry.status !== filterStatus.value) {
            return false;
        }

        // Customer Filter
        if (filterCustomer.value) {
            const searchTerm = filterCustomer.value.toLowerCase();
            const customerMatch = enquiry.customer.name.toLowerCase().includes(searchTerm) ||
                                enquiry.customer.phone.includes(searchTerm);
            if (!customerMatch) {
                return false;
            }
        }
        return true;
    });

    displayEnquiries(filteredEnquiries);
}

// Reset Filters
function resetFilters() {
    filterStatus.value = '';
    filterCustomer.value = '';
    displayEnquiries(mockEnquiries);
}

// Event Listeners
applyFiltersBtn.addEventListener('click', applyFilters);
resetFiltersBtn.addEventListener('click', resetFilters);

// Display Enquiries
function displayEnquiries(enquiries) {
    enquiryList.innerHTML = '';
    enquiries.forEach(enquiry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${enquiry.id}</td>
            <td>${enquiry.customer.name}</td>
            <td>${enquiry.type}</td>
            <td>${enquiry.productCategory}</td>
            <td><span class="badge bg-${getStatusBadgeColor(enquiry.status)}">${enquiry.status}</span></td>
            <td>${new Date(enquiry.createdDate).toLocaleDateString()}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewEnquiryDetails(${enquiry.id})">
                    <i class="bi bi-eye"></i>
                </button>
            </td>
        `;
        enquiryList.appendChild(row);
    });
}

// Helper function for status badge colors
function getStatusBadgeColor(status) {
    switch(status) {
        case 'open': return 'warning';
        case 'in-progress': return 'info';
        case 'resolved': return 'success';
        case 'closed': return 'secondary';
        default: return 'primary';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProductCategories();
    displayEnquiries(mockEnquiries);
});

// Global variable to store current enquiry ID
let currentEnquiryId = null;

// View Enquiry Details
async function viewEnquiry(id) {
    try {
        // Store the current enquiry ID
        currentEnquiryId = id;
        
        // Replace with actual API call
        const enquiry = mockEnquiries.find(e => e.id === id);

        document.getElementById('enquiryInfo').innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h6>Customer Information</h6>
                    <p>Name: ${enquiry.customer.name}<br>
                    Phone: ${enquiry.customer.phone}<br>
                    Email: ${enquiry.customer.email}</p>
                    
                    <h6>Enquiry Information</h6>
                    <p>Type: ${enquiry.type}<br>
                    Product Category: ${enquiry.productCategory}<br>
                    Status: ${enquiry.status}</p>
                    
                    <h6>Details</h6>
                    <p>${enquiry.details}</p>
                </div>
            </div>
        `;

        loadComments(id);
        resolutionDetailsTextarea.value = enquiry.resolution || '';
        enquiryStatusSelect.value = enquiry.status;

        const modal = new bootstrap.Modal(document.getElementById('enquiryDetailsModal'));
        modal.show();
    } catch (error) {
        console.error('Error loading enquiry details:', error);
        alert('Error loading enquiry details');
    }
}

// Load Comments
async function loadComments(enquiryId) {
    try {
        // Replace with actual API call
        const comments = mockEnquiries.find(e => e.id === enquiryId).comments || [];

        const commentsList = document.getElementById('commentsList');
        commentsList.innerHTML = '';

        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'card mb-2';
            commentElement.innerHTML = `
                <div class="card-body">
                    <p class="mb-1">${comment.text}</p>
                    <small class="text-muted">
                        By ${comment.author} on ${new Date(comment.date).toLocaleString()}
                    </small>
                </div>
            `;
            commentsList.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

// Add Comment
addCommentBtn.addEventListener('click', async () => {
    const commentText = newCommentInput.value;
    if (!commentText) {
        alert('Please enter a comment');
        return;
    }

    try {
        // Replace with actual API call
        mockEnquiries.find(e => e.id === currentEnquiryId).comments.push({
            text: commentText,
            author: 'User',
            date: new Date().toISOString()
        });

        newCommentInput.value = '';
        loadComments(currentEnquiryId);
    } catch (error) {
        console.error('Error adding comment:', error);
        alert('Error adding comment');
    }
});

// Update Enquiry
updateEnquiryBtn.addEventListener('click', async () => {
    try {
        // Replace with actual API call
        const enquiry = mockEnquiries.find(e => e.id === currentEnquiryId);
        enquiry.resolution = resolutionDetailsTextarea.value;
        enquiry.status = enquiryStatusSelect.value;

        alert('Enquiry updated successfully');
        location.reload();
    } catch (error) {
        console.error('Error updating enquiry:', error);
        alert('Error updating enquiry');
    }
});

// Helper Functions
function getStatusBadgeColor(status) {
    const colors = {
        'open': 'primary',
        'in-progress': 'warning',
        'resolved': 'success',
        'closed': 'secondary'
    };
    return colors[status] || 'primary';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProductCategories();
    loadEnquiries();
});