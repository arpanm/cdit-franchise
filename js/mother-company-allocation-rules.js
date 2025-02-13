// Mock data for allocation rules with sub-rules and logical operators
let allocationRules = [
    {
        id: 1,
        name: 'Mumbai Region Complex Allocation',
        assignedFranchises: ['franchise1', 'franchise2'],
        subRules: [
            {
                type: 'pincode',
                criteria: {
                    pincodes: ['400001', '400002', '400003']
                }
            },
            {
                operator: 'AND',
                type: 'brand',
                criteria: {
                    brands: ['samsung', 'lg']
                }
            }
        ],
        sortingRule: 'nps',
        selectedFranchise: ['franchise1', 'franchise2', 'franchise3'],
        priority: 1,
        lastUpdated: '2024-02-01',
        status: 'active'
    },
    {
        id: 2,
        name: 'Premium Brand and Service',
        assignedFranchises: ['franchise3', 'franchise4'],
        subRules: [
            {
                type: 'brand',
                criteria: {
                    brands: ['samsung']
                }
            },
            {
                operator: 'OR',
                type: 'nps',
                criteria: {
                    minScore: 4.5,
                    distribution: 'highest'
                }
            }
        ],
        sortingRule: 'roundrobin',
        selectedFranchise: ['franchise1', 'franchise2'],
        priority: 2,
        lastUpdated: '2024-02-01',
        status: 'active'
    },
    {
        id: 3,
        name: 'Regional Performance Distribution',
        assignedFranchises: ['franchise5', 'franchise6'],
        subRules: [
            {
                type: 'pincode',
                criteria: {
                    pincodes: ['400056', '400057']
                }
            },
            {
                operator: 'AND',
                type: 'nps',
                criteria: {
                    minScore: 4.0,
                    distribution: 'highest'
                }
            }
        ],
        sortingRule: 'nps',
        selectedFranchise: ['franchise2', 'franchise3'],
        priority: 3,
        lastUpdated: '2024-01-30',
        status: 'pending'
    }
];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    updateSummaryCards();
    renderRulesTable();
    setupEventListeners();
    setupSelectionRuleHandlers();
});

// Update summary cards
function updateSummaryCards() {
    document.getElementById('totalRules').textContent = allocationRules.length;
    document.getElementById('activeRules').textContent = allocationRules.filter(rule => rule.status === 'active').length;
    document.getElementById('pendingRules').textContent = allocationRules.filter(rule => rule.status === 'pending').length;
    document.getElementById('inactiveRules').textContent = allocationRules.filter(rule => rule.status === 'inactive').length;
}

// Setup event listeners
function setupEventListeners() {
    // Filter event listeners
    document.getElementById('typeFilter').addEventListener('change', filterRules);
    document.getElementById('statusFilter').addEventListener('change', filterRules);
    document.getElementById('searchInput').addEventListener('input', filterRules);

    // Form submission handlers
    document.getElementById('addRuleForm').addEventListener('submit', handleAddRule);
    document.getElementById('editRuleForm').addEventListener('submit', handleEditRule);
}

// Setup selection rule handlers
function setupSelectionRuleHandlers() {
    const addSelectionRuleBtn = document.getElementById('addSelectionRule');
    const selectionRulesContainer = document.getElementById('selectionRulesContainer');
    let ruleCount = 0;

    addSelectionRuleBtn.addEventListener('click', () => {
        const ruleDiv = document.createElement('div');
        ruleDiv.className = 'selection-rule mb-3 border p-3';
        ruleDiv.dataset.ruleId = ruleCount++;

        ruleDiv.innerHTML = `
            <div class="d-flex justify-content-between mb-2">
                <h6>Selection Rule ${ruleCount}</h6>
                <button type="button" class="btn btn-danger btn-sm remove-rule">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
            <div class="mb-3">
                <label class="form-label">Rule Type</label>
                <select class="form-select rule-type" required>
                    <option value="">Select Type</option>
                    <option value="pincode">Pincode</option>
                    <option value="brand">Brand</option>
                    <option value="nps">NPS</option>
                    <option value="manual">Manual</option>
                </select>
            </div>
            <div class="rule-criteria"></div>
            ${ruleCount > 0 ? `
                <div class="mb-3">
                    <label class="form-label">Logical Operator</label>
                    <select class="form-select rule-operator" required>
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select>
                </div>
            ` : ''}
        `;

        // Add event listener for rule type change
        const ruleTypeSelect = ruleDiv.querySelector('.rule-type');
        ruleTypeSelect.addEventListener('change', (e) => {
            const criteriaDiv = ruleDiv.querySelector('.rule-criteria');
            criteriaDiv.innerHTML = '';

            switch(e.target.value) {
                case 'pincode':
                    criteriaDiv.innerHTML = `
                        <div class="mb-3">
                            <label class="form-label">Pincodes (comma-separated)</label>
                            <input type="text" class="form-control" placeholder="e.g. 400001, 400002" required>
                        </div>
                    `;
                    break;
                case 'brand':
                    criteriaDiv.innerHTML = `
                        <div class="mb-3">
                            <label class="form-label">Brands</label>
                            <select class="form-select" multiple required>
                                <option value="samsung">Samsung</option>
                                <option value="lg">LG</option>
                                <option value="whirlpool">Whirlpool</option>
                            </select>
                        </div>
                    `;
                    break;
                case 'nps':
                    criteriaDiv.innerHTML = `
                        <div class="mb-3">
                            <label class="form-label">Minimum NPS Score</label>
                            <input type="number" class="form-control" step="0.1" min="0" max="5" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Distribution Method</label>
                            <select class="form-select" required>
                                <option value="highest">Highest NPS First</option>
                                <option value="balanced">Balanced Distribution</option>
                            </select>
                        </div>
                    `;
                    break;
                case 'manual':
                    criteriaDiv.innerHTML = `
                        <div class="mb-3">
                            <label class="form-label">Distribution Method</label>
                            <select class="form-select" required>
                                <option value="loadBased">Load Based</option>
                                <option value="roundRobin">Round Robin</option>
                            </select>
                        </div>
                    `;
                    break;
            }
        });

        // Add event listener for remove button
        const removeBtn = ruleDiv.querySelector('.remove-rule');
        removeBtn.addEventListener('click', () => {
            ruleDiv.remove();
        });

        selectionRulesContainer.appendChild(ruleDiv);
    });
}

// Filter rules based on selected criteria
function filterRules() {
    const typeFilter = document.getElementById('typeFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    const filteredRules = allocationRules.filter(rule => {
        const matchesType = !typeFilter || rule.type === typeFilter;
        const matchesStatus = !statusFilter || rule.status === statusFilter;
        const matchesSearch = !searchQuery || 
            rule.name.toLowerCase().includes(searchQuery) || 
            rule.criteria.toString().toLowerCase().includes(searchQuery);

        return matchesType && matchesStatus && matchesSearch;
    });

    renderRulesTable(filteredRules);
}

// Render rules table
function renderRulesTable(rules = allocationRules) {
    const tableBody = document.querySelector('#rulesTable tbody');
    tableBody.innerHTML = '';

    rules.forEach(rule => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rule.name}</td>
            <td>${formatCriteria(rule.subRules)}</td>
            <td>${rule.sortingRule}</td>
            <td>${rule.selectedFranchise}</td>
            <td>${rule.priority}</td>
            <td>${rule.lastUpdated}</td>
            <td><span class="badge bg-${getStatusBadgeClass(rule.status)}">${rule.status}</span></td>
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

// Format criteria for display
function formatCriteria(rules) {
    var displayStr = [];
    rules.forEach(rule => {
        if (!rule.criteria) return;
        
        switch(rule.type) {
            case 'pincode':
                if (rule.criteria.pincodes) {
                    displayStr.push(`Pincodes: ${rule.criteria.pincodes.join(', ')}`);
                }
                break;
            case 'brand':
                if (rule.criteria.brands) {
                    displayStr.push(`Brands: ${rule.criteria.brands.join(', ')}`);
                }
                break;
            case 'nps':
                if (rule.criteria.minScore !== undefined) {
                    displayStr.push(`Min NPS: ${rule.criteria.minScore}${rule.criteria.distribution ? ', ' + rule.criteria.distribution : ''}`);
                }
                break;
            case 'manual':
                if (rule.criteria.method) {
                    displayStr.push(`Method: ${rule.criteria.method}`);
                }
                break;
        }
    });
    return displayStr.join(' | ');
}

// Get appropriate badge class for status
function getStatusBadgeClass(status) {
    switch(status) {
        case 'active': return 'success';
        case 'pending': return 'warning';
        case 'inactive': return 'danger';
        default: return 'secondary';
    }
}

// Handle add rule form submission
function handleAddRule(event) {
    event.preventDefault();
    var selectedFranchise = getSelectedFranchises();
    var addRuleForm = document.getElementById('addRuleForm');

    // Get form values
    const ruleName = document.getElementById('ruleName').value;
    const sortingMethod = document.getElementById('sortingMethod').value;
    const rulePriority = parseInt(document.getElementById('rulePriority').value);
    const ruleStatus = document.getElementById('ruleStatus').value;

    // Get selection rules
    const selectionRules = [];
    const ruleElements = document.querySelectorAll('.selection-rule');
    ruleElements.forEach((ruleElement, index) => {
        const ruleType = ruleElement.querySelector('.rule-type').value;
        const criteriaDiv = ruleElement.querySelector('.rule-criteria');
        let criteria = {};

        switch(ruleType) {
            case 'pincode':
                const pincodes = criteriaDiv.querySelector('input').value.split(',').map(p => p.trim());
                criteria = { pincodes };
                break;
            case 'brand':
                const brands = Array.from(criteriaDiv.querySelector('select').selectedOptions).map(opt => opt.value);
                criteria = { brands };
                break;
            case 'nps':
                const minScore = parseFloat(criteriaDiv.querySelector('input').value);
                const distribution = criteriaDiv.querySelector('select').value;
                criteria = { minScore, distribution };
                break;
            case 'manual':
                const method = criteriaDiv.querySelector('select').value;
                criteria = { method };
                break;
        }

        const rule = {
            type: ruleType,
            criteria
        };

        // Add operator for rules after the first one
        if (index > 0) {
            rule.operator = ruleElement.querySelector('.rule-operator').value;
        }

        selectionRules.push(rule);
    });

    // Create new rule object
    const newRule = {
        id: allocationRules.length + 1,
        name: ruleName,
        assignedFranchises: selectedFranchise,
        subRules: selectionRules,
        sortingRule: sortingMethod,
        selectedFranchise: selectedFranchise,
        priority: rulePriority,
        lastUpdated: new Date().toISOString().split('T')[0],
        status: ruleStatus
    };

    // Add new rule to array
    allocationRules.push(newRule);

    // Update UI
    updateSummaryCards();
    renderRulesTable();

    // Reset form and close modal
    addRuleForm.reset();
    const addModal = bootstrap.Modal.getInstance(document.getElementById('addRuleModal'));
    addModal.hide();
}

// Handle edit rule form submission
function handleEditRule(event) {
    event.preventDefault();
    // Implementation for editing existing rule
    // This will be implemented based on the form data structure
}

// Edit rule
function editRule(ruleId) {
    const rule = allocationRules.find(r => r.id === ruleId);
    if (!rule) return;

    // Populate basic rule information
    document.getElementById('editRuleName').value = rule.name;
    document.getElementById('editSortingMethod').value = rule.sortingRule;
    document.getElementById('editRulePriority').value = rule.priority;
    document.getElementById('editRuleStatus').value = rule.status;

    // Clear existing selection rules
    const selectionRulesContainer = document.getElementById('editSelectionRulesContainer');
    selectionRulesContainer.innerHTML = '';

    if (rule.selectedFranchise) {
        rule.selectedFranchise.forEach(franchise => {
            document.getElementById(`franchise-${franchise}`).checked = true;
        });
    }


    // Add existing sub-rules
    rule.subRules.forEach((subRule, index) => {
        const ruleDiv = document.createElement('div');
        ruleDiv.className = 'selection-rule mb-3 border p-3';
        ruleDiv.dataset.ruleId = index;

        ruleDiv.innerHTML = `
            <div class="d-flex justify-content-between mb-2">
                <h6>Selection Rule ${index + 1}</h6>
                <button type="button" class="btn btn-danger btn-sm remove-rule">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
            <div class="mb-3">
                <label class="form-label">Rule Type</label>
                <select class="form-select rule-type" required>
                    <option value="">Select Type</option>
                    <option value="pincode" ${subRule.type === 'pincode' ? 'selected' : ''}>Pincode</option>
                    <option value="brand" ${subRule.type === 'brand' ? 'selected' : ''}>Brand</option>
                    <option value="nps" ${subRule.type === 'nps' ? 'selected' : ''}>NPS</option>
                    <option value="manual" ${subRule.type === 'manual' ? 'selected' : ''}>Manual</option>
                </select>
            </div>
            <div class="rule-criteria"></div>
            ${index > 0 ? `
                <div class="mb-3">
                    <label class="form-label">Logical Operator</label>
                    <select class="form-select rule-operator" required>
                        <option value="AND" ${subRule.operator === 'AND' ? 'selected' : ''}>AND</option>
                        <option value="OR" ${subRule.operator === 'OR' ? 'selected' : ''}>OR</option>
                    </select>
                </div>
            ` : ''}
        `;

        // Add event listener for rule type change
        const ruleTypeSelect = ruleDiv.querySelector('.rule-type');
        ruleTypeSelect.addEventListener('change', (e) => {
            const criteriaDiv = ruleDiv.querySelector('.rule-criteria');
            updateRuleCriteria(e.target.value, criteriaDiv, subRule.criteria);
        });

        // Trigger change event to populate criteria
        ruleTypeSelect.dispatchEvent(new Event('change'));

        // Add event listener for remove button
        const removeBtn = ruleDiv.querySelector('.remove-rule');
        removeBtn.addEventListener('click', () => {
            ruleDiv.remove();
        });

        selectionRulesContainer.appendChild(ruleDiv);
    });

    // Show the edit modal
    const editModal = new bootstrap.Modal(document.getElementById('editRuleModal'));
    editModal.show();
}

// Helper function to update rule criteria based on type
function updateRuleCriteria(type, criteriaDiv, existingCriteria = {}) {
    criteriaDiv.innerHTML = '';

    switch(type) {
        case 'pincode':
            criteriaDiv.innerHTML = `
                <div class="mb-3">
                    <label class="form-label">Pincodes (comma-separated)</label>
                    <input type="text" class="form-control" value="${existingCriteria.pincodes ? existingCriteria.pincodes.join(', ') : ''}" placeholder="e.g. 400001, 400002" required>
                </div>
            `;
            break;
        case 'brand':
            criteriaDiv.innerHTML = `
                <div class="mb-3">
                    <label class="form-label">Brands</label>
                    <select class="form-select" multiple required>
                        <option value="samsung" ${existingCriteria.brands && existingCriteria.brands.includes('samsung') ? 'selected' : ''}>Samsung</option>
                        <option value="lg" ${existingCriteria.brands && existingCriteria.brands.includes('lg') ? 'selected' : ''}>LG</option>
                        <option value="whirlpool" ${existingCriteria.brands && existingCriteria.brands.includes('whirlpool') ? 'selected' : ''}>Whirlpool</option>
                    </select>
                </div>
            `;
            break;
        case 'nps':
            criteriaDiv.innerHTML = `
                <div class="mb-3">
                    <label class="form-label">Minimum NPS Score</label>
                    <input type="number" class="form-control" step="0.1" min="0" max="5" value="${existingCriteria.minScore || ''}" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Distribution Method</label>
                    <select class="form-select" required>
                        <option value="highest" ${existingCriteria.distribution === 'highest' ? 'selected' : ''}>Highest NPS First</option>
                        <option value="balanced" ${existingCriteria.distribution === 'balanced' ? 'selected' : ''}>Balanced Distribution</option>
                    </select>
                </div>
            `;
            break;
        case 'manual':
            criteriaDiv.innerHTML = `
                <div class="mb-3">
                    <label class="form-label">Distribution Method</label>
                    <select class="form-select" required>
                        <option value="loadBased" ${existingCriteria.method === 'loadBased' ? 'selected' : ''}>Load Based</option>
                        <option value="roundRobin" ${existingCriteria.method === 'roundRobin' ? 'selected' : ''}>Round Robin</option>
                    </select>
                </div>
            `;
            break;
    }
}
