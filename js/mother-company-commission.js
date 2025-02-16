// Mock data for commissions
let commissionData = [
    { id: 1, type: 'repair', itemName: 'AC Repair', category: 'ac', brands: 'samsung, lg', commissionPercentage: 10, lastUpdated: '2023-10-15', status: 'active' },
    { id: 2, type: 'installation', itemName: 'AC Installation', category: 'ac', brands: 'samsung, lg', commissionPercentage: 8, lastUpdated: '2023-10-15', status: 'active' },
    { id: 3, type: 'spare_parts', itemName: 'Compressor', category: 'refrigerator', brands: 'samsung', commissionPercentage: 15, lastUpdated: '2023-10-14', status: 'active' },
    { id: 4, type: 'accessories', itemName: 'Remote Control', category: 'tv', brands: 'bpl, lg', commissionPercentage: 20, lastUpdated: '2023-10-13', status: 'active' }
];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    updateSummaryCards();
    renderCommissionTable();
    setupEventListeners();
});

// Update summary cards
function updateSummaryCards() {
    const totalCommission = calculateTotalCommission();
    const serviceCommission = calculateCategoryCommission('service');
    const sparePartsCommission = calculateCategoryCommission('spare_parts');
    const accessoriesCommission = calculateCategoryCommission('accessories');

    document.getElementById('totalCommission').textContent = `₹${totalCommission.toFixed(2)}`;
    document.getElementById('serviceCommission').textContent = `₹${serviceCommission.toFixed(2)}`;
    document.getElementById('sparePartsCommission').textContent = `₹${sparePartsCommission.toFixed(2)}`;
    document.getElementById('accessoriesCommission').textContent = `₹${accessoriesCommission.toFixed(2)}`;
}

// Calculate total commission
function calculateTotalCommission() {
    return commissionData.reduce((total, item) => total + item.commissionPercentage, 0);
}

// Calculate category-wise commission
function calculateCategoryCommission(category) {
    return commissionData
        .filter(item => item.category === category)
        .reduce((total, item) => total + item.commissionPercentage, 0);
}

// Render commission table
function renderCommissionTable(filteredData = null) {
    const tableBody = document.querySelector('#commissionTable tbody');
    const data = filteredData || commissionData;
    
    tableBody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${capitalizeFirstLetter(item.type.replace('_', ' '))}</td>
            <td>${item.itemName}</td>
            <td>${item.category}</td>
            <td>${item.brands}</td>
            <td>${item.commissionPercentage}%</td>
            <td>${item.lastUpdated}</td>
            <td><span class="badge ${item.status === 'active' ? 'bg-success' : 'bg-danger'}">${capitalizeFirstLetter(item.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-primary me-2" onclick="editCommission(${item.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteCommission(${item.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Type filter
    document.getElementById('typeFilter').addEventListener('change', filterCommissions);

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', filterCommissions);

    // Category filter
    document.getElementById('brandFilter').addEventListener('change', filterCommissions);
    
    // Search input
    document.getElementById('searchInput').addEventListener('input', filterCommissions);
    
    // Add commission form
    document.getElementById('addCommissionForm').addEventListener('submit', handleAddCommission);
    
    // Edit commission form
    document.getElementById('editCommissionForm').addEventListener('submit', handleEditCommission);
}

// Filter commissions
function filterCommissions() {
    const typeFilter = document.getElementById('typeFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const brandFilter = document.getElementById('brandFilter').value;
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    const filteredData = commissionData.filter(item => {
        const matchesType = !typeFilter || item.type === typeFilter;
        const matchesCategory = !categoryFilter || item.category === categoryFilter;
        const matchesBrand = !brandFilter || item.brands.toLocaleLowerCase().includes(brandFilter);
        const matchesSearch = item.itemName.toLowerCase().includes(searchQuery) ||
                            item.category.toLowerCase().includes(searchQuery)||
                            item.type.toLowerCase().includes(searchQuery);
        return matchesType && matchesCategory && matchesBrand && matchesSearch;
    });
    
    renderCommissionTable(filteredData);
}

// Handle add commission
function handleAddCommission(e) {
    e.preventDefault();
    
    const newCommission = {
        id: commissionData.length + 1,
        type: document.getElementById('type').value,
        itemName: document.getElementById('itemName').value,
        category: document.getElementById('category').value,
        brands: Array.from(document.getElementById('brands').selectedOptions).map(option => option.value).join(', '),
        commissionPercentage: parseFloat(document.getElementById('commissionPercentage').value),
        lastUpdated: new Date().toISOString().split('T')[0],
        status: document.getElementById('status').value
    };
    
    commissionData.push(newCommission);
    updateSummaryCards();
    renderCommissionTable();
    
    // Close modal and reset form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addCommissionModal'));
    modal.hide();
    document.getElementById('addCommissionForm').reset();
}

// Edit commission
function editCommission(id) {
    const commission = commissionData.find(item => item.id === id);
    if (!commission) return;
    
    document.getElementById('editCommissionId').value = commission.id;
    document.getElementById('editType').value = commission.type;
    document.getElementById('editItemName').value = commission.itemName;
    document.getElementById('editCategory').value = commission.category;
    document.getElementById('editBrands').value = commission.brands;
    document.getElementById('editCommissionPercentage').value = commission.commissionPercentage;
    document.getElementById('editStatus').value = commission.status;
    
    const modal = new bootstrap.Modal(document.getElementById('editCommissionModal'));
    modal.show();
}

// Handle edit commission
function handleEditCommission(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editCommissionId').value);
    const index = commissionData.findIndex(item => item.id === id);
    
    if (index === -1) return;
    
    commissionData[index] = {
        id,
        type: document.getElementById('editType').value,
        itemName: document.getElementById('editItemName').value,
        category: document.getElementById('editCategory').value,
        brands: Array.from(document.getElementById('editBrands').selectedOptions).map(option => option.value).join(', '),
        commissionPercentage: parseFloat(document.getElementById('editCommissionPercentage').value),
        lastUpdated: new Date().toISOString().split('T')[0],
        status: document.getElementById('editStatus').value
    };
    
    updateSummaryCards();
    renderCommissionTable();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('editCommissionModal'));
    modal.hide();
}

// Delete commission
function deleteCommission(id) {
    if (!confirm('Are you sure you want to delete this commission?')) return;
    
    commissionData = commissionData.filter(item => item.id !== id);
    updateSummaryCards();
    renderCommissionTable();
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Logout function
function logout() {
    // Implement logout functionality
    window.location.href = 'login.html';
}