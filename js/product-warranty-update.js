// Mock data for dropdowns
const mockCategories = ['Electronics', 'Home Appliances', 'Kitchen Appliances', 'Mobile Devices', 'AC', 'Fridge', 'TV', 'Washing Machine', 'Microwave'];
const mockBrands = ['Samsung', 'LG', 'Apple', 'Sony', 'Whirlpool'];

// Mock warranty data
const mockWarrantyData = {
    type: 'brand',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    status: 'valid'
};

// Function to show edit modal for product and warranty information
function showEditModal() {
    // Create modal HTML
    const modalHtml = `
        <div class="modal fade" id="editProductWarrantyModal" tabindex="-1" aria-labelledby="editProductWarrantyModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editProductWarrantyModalLabel">Edit Product & Warranty Information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="editProductWarrantyForm">
                            <div class="row">
                                <!-- Product Information Section -->
                                <div class="col-md-6">
                                    <h6 class="mb-3">Product Information</h6>
                                    <div class="mb-3">
                                        <label class="form-label">Category</label>
                                        <select class="form-select" id="productCategory_edit" required>
                                            <option value="">Select Category</option>
                                            ${mockCategories.map(category => 
                                                `<option value="${category}" ${document.getElementById('productCategory')?.textContent === category ? 'selected' : ''}>${category}</option>`
                                            ).join('')}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Brand</label>
                                        <select class="form-select" id="productBrand_edit" required>
                                            <option value="">Select Brand</option>
                                            ${mockBrands.map(brand => 
                                                `<option value="${brand}" ${document.getElementById('productBrand')?.textContent === brand ? 'selected' : ''}>${brand}</option>`
                                            ).join('')}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Model</label>
                                        <input type="text" class="form-control" id="productModel_edit" value="${document.getElementById('productModel')?.textContent || ''}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Purchase Date</label>
                                        <input type="date" class="form-control" id="purchaseDate_edit" value="${document.getElementById('purchaseDate')?.textContent || ''}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Serial Number</label>
                                        <input type="text" class="form-control" id="serialNumber_edit" value="${document.getElementById('serialNumber')?.textContent || ''}" pattern="[A-Za-z0-9-]+" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Retail Store</label>
                                        <input type="text" class="form-control" id="retailStore_edit" value="${document.getElementById('retailStore')?.textContent || ''}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Purchase Invoice</label>
                                        <input type="file" class="form-control" id="purchaseInvoice" accept=".pdf,.jpg,.jpeg,.png">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Product Images</label>
                                        <input type="file" class="form-control" id="productImages" multiple accept=".jpg,.jpeg,.png">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Serial Number Photo</label>
                                        <input type="file" class="form-control" id="serialNumberPhoto" accept=".jpg,.jpeg,.png">
                                    </div>
                                </div>
                                <!-- Warranty Information Section -->
                                <div class="col-md-6">
                                    <h6 class="mb-3">Warranty Information</h6>
                                    <div class="mb-3">
                                        <label class="form-label">Warranty Type</label>
                                        <select class="form-select" id="warrantyType_edit" required>
                                            <option value="">Select Warranty Type</option>
                                            <option value="brand">Brand Warranty</option>
                                            <option value="extended">Extended Warranty</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Warranty Start Date</label>
                                        <input type="date" class="form-control" id="warrantyStartDate_edit" value="${document.getElementById('warrantyStartDate')?.textContent || ''}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Warranty End Date</label>
                                        <input type="date" class="form-control" id="warrantyEndDate_edit" value="${document.getElementById('warrantyEndDate')?.textContent || ''}" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Warranty Status</label>
                                        <select class="form-select" id="warrantyStatus_edit" required onchange="updateServicePaymentStatus()">
                                            <option value="">Select Status</option>
                                            <option value="valid">Valid</option>
                                            <option value="expired">Expired</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Warranty Documents</label>
                                        <input type="file" class="form-control" id="warrantyDocuments" multiple accept=".pdf,.jpg,.jpeg,.png">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveProductWarrantyInfo()">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to document if it doesn't exist
    if (!document.getElementById('editProductWarrantyModal')) {
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Set current values in warranty fields
    const warrantyType = document.getElementById('warrantyType')?.textContent || mockWarrantyData.type;
    const warrantyStatus = document.getElementById('warrantyStatus')?.textContent || mockWarrantyData.status;
    const warrantyStartDate = document.getElementById('warrantyStartDate')?.textContent || mockWarrantyData.startDate;
    const warrantyEndDate = document.getElementById('warrantyEndDate')?.textContent || mockWarrantyData.endDate;

    document.getElementById('warrantyType_edit').value = warrantyType.toLowerCase();
    document.getElementById('warrantyStatus_edit').value = warrantyStatus.toLowerCase();
    document.getElementById('warrantyStartDate_edit').value = warrantyStartDate;
    document.getElementById('warrantyEndDate_edit').value = warrantyEndDate;

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('editProductWarrantyModal'));
    modal.show();
}

// Function to enable editing of product and warranty information
function enableProductEditing() {
    showEditModal();
}

function enableWarrantyEditing() {
    showEditModal();
}

// Function to update service payment status based on warranty validity
function updateServicePaymentStatus() {
    const warrantyStatus = document.getElementById('warrantyStatus_edit') ? document.getElementById('warrantyStatus_edit').value : "";
    const warrantyType = document.getElementById('warrantyType_edit') ? document.getElementById('warrantyType_edit').value : "";
    const warrantyEndDate = document.getElementById('warrantyEndDate_edit') && document.getElementById('warrantyEndDate_edit').value ? new Date(document.getElementById('warrantyEndDate_edit').value) : null;
    const currentDate = new Date();

    const isWarrantyValid = warrantyStatus === 'valid' && warrantyEndDate > currentDate;
    const paymentStatusElement = document.querySelector('#paymentStatus');
    const servicePaymentStatus = document.querySelector('#servicePaymentStatus');

    if (isWarrantyValid && (warrantyType === 'brand' || warrantyType === 'extended')) {
        const freeServiceBadge = '<span class="badge bg-success">Free Service</span>';
        if (paymentStatusElement) {
            paymentStatusElement.innerHTML = freeServiceBadge;
            paymentStatusElement.setAttribute('data-status', 'free');
        }
        if (servicePaymentStatus) {
            servicePaymentStatus.innerHTML = freeServiceBadge;
            servicePaymentStatus.setAttribute('data-status', 'free');
        }
    } else {
        const paidServiceBadge = '<span class="badge bg-warning">Paid Service</span>';
        const paymentPendingBadge = '<span class="badge bg-warning">Payment Pending</span>';
        if (paymentStatusElement) {
            paymentStatusElement.innerHTML = paidServiceBadge;
            paymentStatusElement.setAttribute('data-status', 'paid');
        }
        if (servicePaymentStatus) {
            servicePaymentStatus.innerHTML = paymentPendingBadge;
            servicePaymentStatus.setAttribute('data-status', 'pending');
        }
    }
}

// Function to save product and warranty information
async function saveProductWarrantyInfo() {
    // Show loading state
    const saveButtons = document.querySelectorAll('.btn-success');
    saveButtons.forEach(btn => {
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...';
    });

    // Collect form data
    const formData = new FormData();

    // Add product information
    const productFields = ['productCategory', 'productBrand', 'productModel', 'purchaseDate', 'serialNumber', 'retailStore'];
    productFields.forEach(field => {
        if (document.getElementById(`${field}_edit`)) formData.append(field, document.getElementById(`${field}_edit`).value);
    });

    // Add warranty information
    const warrantyFields = ['warrantyType', 'warrantyStartDate', 'warrantyEndDate', 'warrantyStatus'];
    warrantyFields.forEach(field => {
        if (document.getElementById(`${field}_edit`)) formData.append(field, document.getElementById(`${field}_edit`).value);
    });

    // Add files
    const fileInputs = ['purchaseInvoice', 'productImages', 'serialNumberPhoto', 'warrantyDocuments'];
    fileInputs.forEach(input => {
        if (document.getElementById(input)) {
            const files = document.getElementById(input).files;
            for (let i = 0; i < files.length; i++) {
                formData.append(input, files[i]);
            }
        }
    });

    updateServicePaymentStatus();
    showSuccessMessage('Product and warranty information updated successfully');
    // Refresh the page or update UI
    location.reload();
}

// Helper function to show success message
function showSuccessMessage(message) {
    const alertHtml = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('afterbegin', alertHtml);
}

// Helper function to show error message
function showErrorMessage(message) {
    const alertHtml = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    document.querySelector('.container').insertAdjacentHTML('afterbegin', alertHtml);
}