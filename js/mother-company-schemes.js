// Mock data for schemes
const mockSchemes = [
    {
        id: 'SCH001',
        name: 'Early Bird Bonus',
        type: 'Commission',
        eligibility: 'Complete 10 service requests before 10 AM',
        reward: 'Additional 5% commission on service fees',
        validFrom: '2024-01-01',
        validTo: '2024-03-31',
        status: 'running',
        attachments: ['scheme_details.pdf', 'terms.pdf']
    },
    {
        id: 'SCH002',
        name: 'Customer Satisfaction Champion',
        type: 'Performance',
        eligibility: 'Maintain 4.8+ rating for 3 months',
        reward: '₹10,000 quarterly bonus',
        validFrom: '2024-01-01',
        validTo: '2024-12-31',
        status: 'running',
        attachments: ['performance_metrics.pdf']
    },
    {
        id: 'SCH003',
        name: 'Summer Service Special',
        type: 'Seasonal',
        eligibility: 'Minimum 20 AC services in summer months',
        reward: 'Extra 8% commission on AC services',
        validFrom: '2024-04-01',
        validTo: '2024-06-30',
        status: 'upcoming',
        attachments: ['summer_scheme.pdf']
    },
    {
        id: 'SCH004',
        name: 'Winter Maintenance Drive',
        type: 'Seasonal',
        eligibility: 'Complete 15 heater maintenance services',
        reward: 'Flat ₹500 bonus per service',
        validFrom: '2023-12-01',
        validTo: '2024-01-31',
        status: 'past',
        attachments: ['winter_scheme.pdf', 'bonus_structure.pdf']
    }
];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    setupEventListeners();
});

// Initialize dashboard components
function initializeDashboard() {
    updateSchemeSummary();
    displaySchemes(mockSchemes);
}

// Setup event listeners
function setupEventListeners() {
    // Filter change events
    document.getElementById('statusFilter').addEventListener('change', filterSchemes);
    document.getElementById('searchFilter').addEventListener('input', filterSchemes);

    // Date range picker initialization
    $('#dateRangeFilter').daterangepicker({
        opens: 'left',
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('#dateRangeFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        filterSchemes();
    });

    $('#dateRangeFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        filterSchemes();
    });

    // File input change event
    document.getElementById('schemeAttachments').addEventListener('change', handleFileSelection);
}

// Update scheme summary cards
function updateSchemeSummary() {
    const summary = {
        total: mockSchemes.length,
        running: mockSchemes.filter(s => s.status === 'running').length,
        upcoming: mockSchemes.filter(s => s.status === 'upcoming').length,
        past: mockSchemes.filter(s => s.status === 'past').length
    };

    document.getElementById('totalSchemes').textContent = summary.total;
    document.getElementById('runningSchemes').textContent = summary.running;
    document.getElementById('upcomingSchemes').textContent = summary.upcoming;
    document.getElementById('pastSchemes').textContent = summary.past;
}

// Filter schemes based on selected criteria
function filterSchemes() {
    const status = document.getElementById('statusFilter').value;
    const searchTerm = document.getElementById('searchFilter').value.toLowerCase();
    const dateRange = document.getElementById('dateRangeFilter').value;

    let filtered = mockSchemes;

    if (status) {
        filtered = filtered.filter(s => s.status === status);
    }

    if (searchTerm) {
        filtered = filtered.filter(s =>
            s.name.toLowerCase().includes(searchTerm) ||
            s.type.toLowerCase().includes(searchTerm) ||
            s.eligibility.toLowerCase().includes(searchTerm) ||
            s.reward.toLowerCase().includes(searchTerm)
        );
    }

    if (dateRange) {
        const [start, end] = dateRange.split(' - ').map(date => new Date(date));
        filtered = filtered.filter(s => {
            const validFrom = new Date(s.validFrom);
            const validTo = new Date(s.validTo);
            return validFrom >= start && validTo <= end;
        });
    }

    displaySchemes(filtered);
}

// Display filtered schemes in the table
function displaySchemes(schemes) {
    const tbody = document.getElementById('schemesTableBody');
    tbody.innerHTML = '';

    schemes.forEach(scheme => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${scheme.name}</td>
            <td>${scheme.type}</td>
            <td>${scheme.eligibility}</td>
            <td>${scheme.reward}</td>
            <td>${formatDate(scheme.validFrom)}</td>
            <td>${formatDate(scheme.validTo)}</td>
            <td><span class="badge ${getStatusBadgeClass(scheme.status)}">${capitalizeFirst(scheme.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-info me-2" onclick="viewScheme('${scheme.id}')">View</button>
                <button class="btn btn-sm btn-warning me-2" onclick="editScheme('${scheme.id}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteScheme('${scheme.id}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// View scheme details
function viewScheme(schemeId) {
    const scheme = mockSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    document.getElementById('viewSchemeName').textContent = scheme.name;
    document.getElementById('viewSchemeType').textContent = scheme.type;
    document.getElementById('viewEligibility').textContent = scheme.eligibility;
    document.getElementById('viewReward').textContent = scheme.reward;
    document.getElementById('viewValidFrom').textContent = formatDate(scheme.validFrom);
    document.getElementById('viewValidTo').textContent = formatDate(scheme.validTo);
    document.getElementById('viewStatus').className = `badge ${getStatusBadgeClass(scheme.status)}`;
    document.getElementById('viewStatus').textContent = capitalizeFirst(scheme.status);

    // Display attachments
    const attachmentsDiv = document.getElementById('viewAttachments');
    attachmentsDiv.innerHTML = scheme.attachments.map(file => `
        <div class="mb-2">
            <i class="bi bi-file-earmark"></i>
            <a href="#" onclick="viewAttachment('${file}')">${file}</a>
        </div>
    `).join('');

    new bootstrap.Modal(document.getElementById('viewSchemeModal')).show();
}

// Edit scheme
function editScheme(schemeId) {
    const scheme = mockSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    document.getElementById('schemeId').value = scheme.id;
    document.getElementById('schemeName').value = scheme.name;
    document.getElementById('schemeType').value = scheme.type;
    document.getElementById('eligibility').value = scheme.eligibility;
    document.getElementById('reward').value = scheme.reward;
    document.getElementById('validFrom').value = scheme.validFrom;
    document.getElementById('validTo').value = scheme.validTo;

    // Display existing attachments
    displayAttachments(scheme.attachments);

    document.getElementById('schemeModalTitle').textContent = 'Edit Scheme';
    new bootstrap.Modal(document.getElementById('addSchemeModal')).show();
}

// Delete scheme
function deleteScheme(schemeId) {
    const scheme = mockSchemes.find(s => s.id === schemeId);
    if (!scheme) return;

    // Store the scheme ID to be deleted
    document.getElementById('deleteSchemeModal').dataset.schemeId = schemeId;
    new bootstrap.Modal(document.getElementById('deleteSchemeModal')).show();
}

// Confirm delete scheme
function confirmDeleteScheme() {
    const schemeId = document.getElementById('deleteSchemeModal').dataset.schemeId;
    const index = mockSchemes.findIndex(s => s.id === schemeId);
    
    if (index !== -1) {
        mockSchemes.splice(index, 1);
        updateSchemeSummary();
        filterSchemes();
    }

    bootstrap.Modal.getInstance(document.getElementById('deleteSchemeModal')).hide();
}

// Save scheme (create or update)
function saveScheme() {
    const schemeId = document.getElementById('schemeId').value;
    const scheme = {
        id: schemeId || `SCH${(mockSchemes.length + 1).toString().padStart(3, '0')}`,
        name: document.getElementById('schemeName').value,
        type: document.getElementById('schemeType').value,
        eligibility: document.getElementById('eligibility').value,
        reward: document.getElementById('reward').value,
        validFrom: document.getElementById('validFrom').value,
        validTo: document.getElementById('validTo').value,
        status: determineSchemeStatus(document.getElementById('validFrom').value, document.getElementById('validTo').value),
        attachments: getAttachments()
    };

    if (!validateSchemeForm(scheme)) return;

    const index = mockSchemes.findIndex(s => s.id === schemeId);
    if (index !== -1) {
        mockSchemes[index] = scheme;
    } else {
        mockSchemes.push(scheme);
    }

    updateSchemeSummary();
    filterSchemes();
    bootstrap.Modal.getInstance(document.getElementById('addSchemeModal')).hide();
    document.getElementById('schemeForm').reset();
    document.getElementById('attachmentsList').innerHTML = '';
}

// Handle file selection
function handleFileSelection(event) {
    const files = Array.from(event.target.files);
    displayAttachments(files.map(f => f.name));
}

// Display attachments in the form
function displayAttachments(files) {
    const attachmentsList = document.getElementById('attachmentsList');
    attachmentsList.innerHTML = files.map(file => `
        <div class="mb-2">
            <i class="bi bi-file-earmark"></i>
            ${file}
        </div>
    `).join('');
}

// Get current attachments
function getAttachments() {
    const fileInput = document.getElementById('schemeAttachments');
    const files = Array.from(fileInput.files).map(f => f.name);
    return files.length > 0 ? files : (mockSchemes.find(s => s.id === document.getElementById('schemeId').value)?.attachments || []);
}

// Validate scheme form
function validateSchemeForm(scheme) {
    if (!scheme.name || !scheme.type || !scheme.eligibility || !scheme.reward || !scheme.validFrom || !scheme.validTo) {
        alert('Please fill in all required fields');
        return false;
    }

    const validFrom = new Date(scheme.validFrom);
    const validTo = new Date(scheme.validTo);

    if (validFrom > validTo) {
        alert('Valid From date must be before Valid To date');
        return false;
    }

    return true;
}

// Determine scheme status based on dates
function determineSchemeStatus(validFrom, validTo) {
    const now = new Date();
    const start = new Date(validFrom);
    const end = new Date(validTo);

    if (now < start) return 'upcoming';
    if (now > end) return 'past';
    return 'running';
}

// View attachment (mock function)
function viewAttachment(filename) {
    alert(`Viewing attachment: ${filename}`);
}

// Utility functions
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getStatusBadgeClass(status) {
    const classes = {
        running: 'bg-success',
        upcoming: 'bg-info',
        past: 'bg-secondary'
    };
    return classes[status] || 'bg-secondary';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Toggle sidebar
function toggleSidebar() {
    document.querySelector('.admin-sidebar').classList.toggle('collapsed');
}

// Logout function
function logout() {
    window.location.href = 'login.html';
}