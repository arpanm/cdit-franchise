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

// Product Categories Data (to be replaced with API call)
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
        const response = await fetch(`/api/customers/search?phone=${phoneNumber}`);
        const customer = await response.json();

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
        const response = await fetch('/api/enquiries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enquiryData)
        });

        if (response.ok) {
            alert('Enquiry created successfully');
            location.reload();
        } else {
            throw new Error('Failed to create enquiry');
        }
    } catch (error) {
        console.error('Error creating enquiry:', error);
        alert('Error creating enquiry');
    }
});

// Load Enquiries
async function loadEnquiries() {
    try {
        // Replace with actual API call
        const response = await fetch('/api/enquiries');
        const enquiries = await response.json();

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

// View Enquiry Details
async function viewEnquiry(id) {
    try {
        // Replace with actual API call
        const response = await fetch(`/api/enquiries/${id}`);
        const enquiry = await response.json();

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
        const response = await fetch(`/api/enquiries/${enquiryId}/comments`);
        const comments = await response.json();

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
        const response = await fetch(`/api/enquiries/${currentEnquiryId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: commentText,
                date: new Date().toISOString()
            })
        });

        if (response.ok) {
            newCommentInput.value = '';
            loadComments(currentEnquiryId);
        } else {
            throw new Error('Failed to add comment');
        }
    } catch (error) {
        console.error('Error adding comment:', error);
        alert('Error adding comment');
    }
});

// Update Enquiry
updateEnquiryBtn.addEventListener('click', async () => {
    try {
        // Replace with actual API call
        const response = await fetch(`/api/enquiries/${currentEnquiryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resolution: resolutionDetailsTextarea.value,
                status: enquiryStatusSelect.value
            })
        });

        if (response.ok) {
            alert('Enquiry updated successfully');
            location.reload();
        } else {
            throw new Error('Failed to update enquiry');
        }
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