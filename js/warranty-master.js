// Mock warranty data with brand and category information
const warranties = [
    { id: 1, type: 'Standard', duration: 12, category: 'Electronics', brand: 'Samsung', description: 'Basic warranty for Samsung electronics', status: 'active' },
    { id: 2, type: 'Extended', duration: 24, category: 'Home Appliances', brand: 'LG', description: 'Extended coverage for LG home appliances', status: 'active' },
    { id: 3, type: 'Premium', duration: 36, category: 'Kitchen Appliances', brand: 'Whirlpool', description: 'Premium warranty for Whirlpool kitchen appliances', status: 'active' },
    { id: 4, type: 'Basic', duration: 12, category: 'Electronics', brand: 'Sony', description: 'Basic warranty for Sony electronics', status: 'active' },
    { id: 5, type: 'Extended Plus', duration: 30, category: 'Home Appliances', brand: 'Bosch', description: 'Extended plus coverage for Bosch appliances', status: 'active' },
    { id: 6, type: 'Premium Plus', duration: 48, category: 'Kitchen Appliances', brand: 'Panasonic', description: 'Premium plus warranty for Panasonic kitchen appliances', status: 'active' },
    { id: 7, type: 'Standard', duration: 18, category: 'Electronics', brand: 'Philips', description: 'Standard warranty for Philips electronics', status: 'active' },
    { id: 8, type: 'Basic Plus', duration: 15, category: 'Home Appliances', brand: 'Haier', description: 'Basic plus coverage for Haier appliances', status: 'active' },
    { id: 9, type: 'Ultimate', duration: 60, category: 'Kitchen Appliances', brand: 'Samsung', description: 'Ultimate warranty for Samsung kitchen appliances', status: 'active' },
    { id: 10, type: 'Premium', duration: 36, category: 'Electronics', brand: 'LG', description: 'Premium warranty for LG electronics', status: 'active' }
];

// Function to populate warranty table
function populateWarrantyTable() {
    const tableBody = document.querySelector('#warrantyTable tbody');
    tableBody.innerHTML = '';

    warranties.forEach(warranty => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${warranty.type}</td>
            <td>${warranty.duration} months</td>
            <td>${warranty.category}</td>
            <td>${warranty.brand}</td>
            <td><span class="badge bg-${warranty.status === 'active' ? 'success' : 'danger'}">${warranty.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary me-2" onclick="editWarranty(${warranty.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteWarranty(${warranty.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to populate category dropdown
function populateCategoryDropdown() {
    const categorySelect = document.getElementById('warrantyCategory');
    categorySelect.innerHTML = '<option value="0">Select Category</option>';
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Function to populate brand dropdown
function populateBrandDropdown() {
    const brandSelect = document.getElementById('warrantyBrand');
    brandSelect.innerHTML = '<option value="0">Select Brand</option>';
    
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand.name;
        option.textContent = brand.name;
        brandSelect.appendChild(option);
    });
}

// Function to edit warranty
function editWarranty(id) {
    const warranty = warranties.find(w => w.id === id);
    if (warranty) {
        document.getElementById('warrantyId').value = warranty.id;
        document.getElementById('warrantyType').value = warranty.type;
        document.getElementById('warrantyDuration').value = warranty.duration;
        document.getElementById('warrantyCategory').value = warranty.category;
        document.getElementById('warrantyBrand').value = warranty.brand;
        document.getElementById('warrantyDescription').value = warranty.description;
        document.getElementById('warrantyStatus').value = warranty.status;
        
        const modal = new bootstrap.Modal(document.getElementById('warrantyModal'));
        modal.show();
    }
}

// Function to save warranty
function saveWarranty() {
    const warrantyId = document.getElementById('warrantyId').value;
    const warrantyData = {
        id: warrantyId ? parseInt(warrantyId) : warranties.length + 1,
        type: document.getElementById('warrantyType').value,
        duration: parseInt(document.getElementById('warrantyDuration').value),
        category: document.getElementById('warrantyCategory').value,
        brand: document.getElementById('warrantyBrand').value,
        description: document.getElementById('warrantyDescription').value,
        status: document.getElementById('warrantyStatus').value
    };

    if (warrantyId) {
        // Update existing warranty
        const index = warranties.findIndex(w => w.id === parseInt(warrantyId));
        if (index !== -1) {
            warranties[index] = warrantyData;
        }
    } else {
        // Add new warranty
        warranties.push(warrantyData);
    }

    // Refresh table and close modal
    populateWarrantyTable();
    const modal = bootstrap.Modal.getInstance(document.getElementById('warrantyModal'));
    modal.hide();
}

// Function to delete warranty
function deleteWarranty(id) {
    if (confirm('Are you sure you want to delete this warranty?')) {
        const index = warranties.findIndex(w => w.id === id);
        if (index !== -1) {
            warranties.splice(index, 1);
            populateWarrantyTable();
        }
    }
}

// Initialize warranty management
document.addEventListener('DOMContentLoaded', () => {
    populateWarrantyTable();
    populateCategoryDropdown();
    populateBrandDropdown();

    // Reset form when modal is hidden
    document.getElementById('warrantyModal').addEventListener('hidden.bs.modal', () => {
        document.getElementById('warrantyForm').reset();
        document.getElementById('warrantyId').value = '';
    });
});