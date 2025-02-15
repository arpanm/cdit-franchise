// Mock data for engineer allocation rules
let allocationRules = [
    {
        id: 1,
        name: 'High Priority AC Service',
        categories: ['AC', 'Air Purifier'],
        brands: ['Samsung', 'LG'],
        pincodeStart: 400001,
        pincodeEnd: 400099,
        sortingCriteria: 'performance',
        status: 'active',
        engineerCriteria: {
            minPerformanceScore: 4.0,
            maxActiveJobs: 5,
            maxDistance: 10 // in km
        }
    },
    {
        id: 2,
        name: 'Regular Appliance Service',
        categories: ['Refrigerator', 'Washing Machine'],
        brands: ['Whirlpool', 'Samsung'],
        pincodeStart: 400100,
        pincodeEnd: 400199,
        sortingCriteria: 'availability',
        status: 'active',
        engineerCriteria: {
            minPerformanceScore: 3.5,
            maxActiveJobs: 8,
            maxDistance: 15 // in km
        }
    },
    {
        id: 3,
        name: 'East India AC Service',
        categories: ['AC', 'Air Purifier'],
        brands: ['Samsung', 'LG'],
        pincodeStart: 400001,
        pincodeEnd: 400099,
        sortingCriteria: 'performance',
        status: 'active',
        engineerCriteria: {
            minPerformanceScore: 4.0,
            maxActiveJobs: 5,
            maxDistance: 10 // in km
        }
    },
    {
        id: 4,
        name: 'TV Service',
        categories: ['Refrigerator', 'Washing Machine'],
        brands: ['Whirlpool', 'Samsung'],
        pincodeStart: 400100,
        pincodeEnd: 400199,
        sortingCriteria: 'availability',
        status: 'pending',
        engineerCriteria: {
            minPerformanceScore: 3.5,
            maxActiveJobs: 8,
            maxDistance: 15 // in km
        }
    }
];

// Function to save a new rule
function saveRule() {
    const form = document.getElementById('addRuleForm');
    const newRule = {
        id: allocationRules.length + 1,
        name: form.querySelector('[name="ruleName"]').value,
        categories: Array.from(form.querySelector('[name="categories"]').selectedOptions).map(opt => opt.value),
        brands: Array.from(form.querySelector('[name="brands"]').selectedOptions).map(opt => opt.value),
        sortingCriteria: form.querySelector('[name="sortingMethod"]').value,
        status: form.querySelector('[name="status"]').value,
        pincodes: form.querySelector('[name="pincodes"]').value.split(',').map(p => p.trim()),
        priority: parseInt(form.querySelector('[name="priority"]').value)
    };

    allocationRules.push(newRule);
    renderRulesTable();
    
    // Close modal and reset form
    const modal = bootstrap.Modal.getInstance(document.getElementById('addRuleModal'));
    modal.hide();
    form.reset();
}

// Mock data for categories and brands
const categories = ['AC', 'Refrigerator', 'Washing Machine', 'Air Purifier', 'Water Purifier'];
const brands = ['Samsung', 'LG', 'Whirlpool', 'Voltas', 'Blue Star'];

// Mock data for engineers
const engineers = [
    { id: 1, name: 'John Doe', category: 'ac', brand: 'LG,Samsung', rating: 4.5 },
    { id: 2, name: 'Jane Smith', category: 'refrigerator', brand: 'Samsung', rating: 4.8 },
    { id: 3, name: 'Mike Johnson', category: 'washing_machine', brand: 'BPL,LG', rating: 4.2 },
    { id: 4, name: 'Sarah Wilson', category: 'ac', brand: 'Hitachi', rating: 4.7 },
    { id: 5, name: 'Tom Brown', category: 'refrigerator', brand: 'LG,Whirepool,Samsung', rating: 4.4 }
];

// Selected engineers for the current rule
let selectedEngineers = [];

// Initialize engineer selection functionality
function initializeEngineerSelection() {
    const engineerSearch = document.getElementById('engineerSearch');
    const categoryFilter = document.getElementById('engineerCategoryFilter');
    const brandFilter = document.getElementById('engineerBrandFilter');

    // Add event listeners for filters
    engineerSearch.addEventListener('input', filterEngineers);
    categoryFilter.addEventListener('change', filterEngineers);
    brandFilter.addEventListener('change', filterEngineers);

    // Initial render of engineers list
    renderEngineersList();
}

// Filter engineers based on search and filters
function filterEngineers() {
    const searchQuery = document.getElementById('engineerSearch').value.toLowerCase();
    const categoryFilter = document.getElementById('engineerCategoryFilter').value;
    const brandFilter = document.getElementById('engineerBrandFilter').value;

    const filteredEngineers = engineers.filter(engineer => {
        const matchesSearch = engineer.name.toLowerCase().includes(searchQuery);
        const matchesCategory = !categoryFilter || engineer.category === categoryFilter;
        const matchesBrand = !brandFilter || engineer.brand.toLocaleLowerCase().includes(brandFilter);
        return matchesSearch && matchesCategory && matchesBrand;
    });

    renderEngineersList(filteredEngineers);
}

// Render engineers list
function renderEngineersList(engineersList = engineers) {
    const engineerListElement = document.getElementById('engineerList');
    engineerListElement.innerHTML = '';

    engineersList.forEach(engineer => {
        const isSelected = selectedEngineers.some(e => e.id === engineer.id);
        const engineerItem = document.createElement('div');
        engineerItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        engineerItem.innerHTML = `
            <div class="col">
                <input type="checkbox" class="form-check-input me-2" 
                    ${isSelected ? 'checked' : ''} 
                    onchange="toggleEngineerSelection(${engineer.id})">
                <span>${engineer.name}</span>
            </div>
            <div class="col">
                <span>${engineer.category}</span>
            </div>
            <div class="col">
                <span>${engineer.brand}</span>
            </div>
            <div class="col-auto">
                <span class="badge bg-info">${engineer.rating} ★</span>
            </div>
        `;
        engineerListElement.appendChild(engineerItem);
    });

    renderSelectedEngineers();
}

// Toggle engineer selection
function toggleEngineerSelection(engineerId) {
    const engineer = engineers.find(e => e.id === engineerId);
    const index = selectedEngineers.findIndex(e => e.id === engineerId);

    if (index === -1) {
        selectedEngineers.push(engineer);
    } else {
        selectedEngineers.splice(index, 1);
    }

    renderSelectedEngineers();
}

// Render selected engineers as tags
function renderSelectedEngineers() {
    const selectedEngineersElement = document.getElementById('selectedEngineers');
    selectedEngineersElement.innerHTML = '';

    selectedEngineers.forEach(engineer => {
        const tag = document.createElement('span');
        tag.className = 'badge bg-primary me-2 mb-2';
        tag.innerHTML = `
            ${engineer.name}
            <button type="button" class="btn-close btn-close-white" 
                onclick="toggleEngineerSelection(${engineer.id})" style="font-size: 0.5em;"></button>
        `;
        selectedEngineersElement.appendChild(tag);
    });
}

// Initialize page when document is ready
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    initializeEngineerSelection();
});

// Initialize the page
function initializePage() {
    populateDropdowns();
    setupFilters();
    renderRulesTable();
}

// Setup filter event listeners
function setupFilters() {
    const statusFilter = document.getElementById('statusFilter');
    const searchInput = document.getElementById('searchInput');

    if (statusFilter) {
        statusFilter.addEventListener('change', filterRules);
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterRules);
    }
}

// Filter rules based on selected criteria
function filterRules() {
    const statusFilter = document.getElementById('statusFilter').value;
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    const filteredRules = allocationRules.filter(rule => {
        const matchesStatus = !statusFilter || rule.status === statusFilter;
        const matchesSearch = !searchQuery || 
            rule.name.toLowerCase().includes(searchQuery) || 
            rule.categories.join(' ').toLowerCase().includes(searchQuery) ||
            rule.brands.join(' ').toLowerCase().includes(searchQuery);

        return matchesStatus && matchesSearch;
    });

    renderFilteredRules(filteredRules);
}

// Render filtered rules
function renderFilteredRules(rules) {
    const tableBody = document.querySelector('#rulesTable tbody');
    tableBody.innerHTML = '';

    rules.forEach(rule => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rule.name}</td>
            <td>
                <div><strong>Categories:</strong> ${rule.categories.join(', ')}</div>
                <div><strong>Brands:</strong> ${rule.brands.join(', ')}</div>
                <div><strong>Pincodes:</strong> ${rule.pincodeStart}-${rule.pincodeEnd}</div>
            </td>
            <td>${formatSortingCriteria(rule.sortingCriteria)}</td>
            <td>
                <div><strong>Min Score:</strong> ${rule.engineerCriteria.minPerformanceScore}</div>
                <div><strong>Max Jobs:</strong> ${rule.engineerCriteria.maxActiveJobs}</div>
                <div><strong>Max Distance:</strong> ${rule.engineerCriteria.maxDistance}km</div>
            </td>
            <td>${rule.id}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td><span class="badge bg-${rule.status === 'active' ? 'success' : 'warning'}">${rule.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editRule(${rule.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteRule(${rule.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate category and brand dropdowns
function populateDropdowns() {
    const categorySelect = document.querySelector('select[name="categories"]');
    const brandSelect = document.querySelector('select[name="brands"]');

    if (!categorySelect || !brandSelect) {
        console.error('Could not find category or brand select elements');
        return;
    }

    // Clear existing options
    categorySelect.innerHTML = '';
    brandSelect.innerHTML = '';

    // Populate categories
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    // Populate brands
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
}

// Render rules table
function renderRulesTable() {
    const tableBody = document.querySelector('#rulesTable tbody');
    tableBody.innerHTML = '';

    allocationRules.forEach(rule => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rule.name}</td>
            <td>
                <div><strong>Categories:</strong> ${rule.categories.join(', ')}</div>
                <div><strong>Brands:</strong> ${rule.brands.join(', ')}</div>
                <div><strong>Pincodes:</strong> ${rule.pincodeStart}-${rule.pincodeEnd}</div>
            </td>
            <td>${formatSortingCriteria(rule.sortingCriteria)}</td>
            <td>
                <div><strong>Min Score:</strong> ${rule.engineerCriteria.minPerformanceScore}</div>
                <div><strong>Max Jobs:</strong> ${rule.engineerCriteria.maxActiveJobs}</div>
                <div><strong>Max Distance:</strong> ${rule.engineerCriteria.maxDistance}km</div>
            </td>
            <td>${rule.id}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td><span class="badge bg-${rule.status === 'active' ? 'success' : 'warning'}">${rule.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary me-1" onclick="editRule(${rule.id})">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteRule(${rule.id})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Format sorting criteria for display
function formatSortingCriteria(criteria) {
    switch (criteria) {
        case 'availability': return 'Engineer Availability';
        case 'proximity': return 'Location Proximity';
        case 'performance': return 'Performance Score';
        default: return criteria;
    }
}

// Save new or update existing rule
function saveRule() {
    const form = document.getElementById('addRuleForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const ruleData = {
        id: allocationRules.length + 1,
        name: form.querySelector('[name="ruleName"]').value,
        categories: Array.from(form.querySelector('[name="categories"]').selectedOptions).map(opt => opt.value),
        brands: Array.from(form.querySelector('[name="brands"]').selectedOptions).map(opt => opt.value),
        sortingCriteria: form.querySelector('[name="sortingMethod"]').value,
        status: form.querySelector('[name="status"]').value,
        engineerCriteria: {
            minPerformanceScore: 3.5,
            maxActiveJobs: 5,
            maxDistance: 10
        },
        selectedEngineers: selectedEngineers.map(engineer => ({
            id: engineer.id,
            name: engineer.name,
            category: engineer.category
        }))
    };

    const existingRuleIndex = allocationRules.findIndex(r => r.id === ruleData.id);
    if (existingRuleIndex !== -1) {
        allocationRules[existingRuleIndex] = ruleData;
    } else {
        allocationRules.push(ruleData);
    }

    renderRulesTable();
    bootstrap.Modal.getInstance(document.getElementById('addRuleModal')).hide();
    resetForm();
}

// Edit existing rule
function editRule(ruleId) {
    const rule = allocationRules.find(r => r.id === ruleId);
    if (!rule) return;

    const form = document.getElementById('addRuleForm');
    form.querySelector('[name="ruleName"]').value = rule.name;
    form.querySelector('[name="ruleName"]').dataset.ruleId = rule.id;

    // Set selected categories
    const categorySelect = form.querySelector('[name="categories"]');
    Array.from(categorySelect.options).forEach(option => {
        option.selected = rule.categories.includes(option.value);
    });

    // Set selected brands
    const brandSelect = form.querySelector('[name="brands"]');
    Array.from(brandSelect.options).forEach(option => {
        option.selected = rule.brands.includes(option.value);
    });

    // Set pincodes
    form.querySelector('[name="pincodes"]').value = rule.pincodes ? rule.pincodes.join(', ') : '';
    
    // Set sorting method and status
    form.querySelector('[name="sortingMethod"]').value = rule.sortingCriteria || '';
    form.querySelector('[name="status"]').value = rule.status || 'active';
    form.querySelector('[name="priority"]').value = rule.priority || 1;

    document.querySelector('#addRuleModal .modal-title').textContent = 'Edit Allocation Rule';
    new bootstrap.Modal(document.getElementById('addRuleModal')).show();
}

// Delete rule
function deleteRule(ruleId) {
    if (confirm('Are you sure you want to delete this rule?')) {
        allocationRules = allocationRules.filter(r => r.id !== ruleId);
        renderRulesTable();
    }
}

// Reset form
function resetForm() {
    document.getElementById('addRuleForm').reset();
    const ruleNameInput = document.querySelector('[name="ruleName"]');
    if (ruleNameInput && ruleNameInput.dataset) {
        ruleNameInput.dataset.ruleId = '';
    }
    document.querySelector('#addRuleModal .modal-title').textContent = 'Add Allocation Rule';
}