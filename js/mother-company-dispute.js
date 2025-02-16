// Mock data for disputes
const mockDisputes = [
    {
        id: 'D001',
        franchiseId: 'F001',
        franchiseName: 'Franchise A',
        type: 'Payment',
        description: 'Dispute regarding delayed payment processing',
        date: '2024-02-01',
        status: 'pending',
        attachments: ['payment_screenshot.jpg', 'transaction_details.pdf'],
        resolution: null,
        rejectionReason: null,
        moreInfoRequested: null
    },
    {
        id: 'D002',
        franchiseId: 'F003',
        franchiseName: 'Franchise C',
        type: 'Credit Limit',
        description: 'Request for credit limit increase review',
        date: '2024-01-28',
        status: 'resolved',
        attachments: ['business_performance.pdf'],
        resolution: 'Credit limit increased after reviewing business performance',
        rejectionReason: null,
        moreInfoRequested: null
    },
    {
        id: 'D003',
        franchiseId: 'F004',
        franchiseName: 'Delhi North',
        type: 'Order',
        description: 'Dispute about damaged product delivery',
        date: '2024-01-25',
        status: 'rejected',
        attachments: ['damage_photos.jpg', 'delivery_receipt.pdf'],
        resolution: null,
        rejectionReason: 'Damage occurred after delivery confirmation',
        moreInfoRequested: null
    },
    {
        id: 'D004',
        franchiseId: 'F006',
        franchiseName: 'Chennai South',
        type: 'Service',
        description: 'Complaint about service quality',
        date: '2024-02-02',
        status: 'more_info',
        attachments: ['service_report.pdf'],
        resolution: null,
        rejectionReason: null,
        moreInfoRequested: 'Please provide detailed service timeline and customer feedback'
    }
];

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    setupEventListeners();
});

// Initialize dashboard components
function initializeDashboard() {
    updateDisputeSummary();
    populateFranchiseFilter();
    displayDisputes(mockDisputes);
}

// Setup event listeners
function setupEventListeners() {
    // Filter change events
    document.getElementById('statusFilter').addEventListener('change', filterDisputes);
    document.getElementById('franchiseFilter').addEventListener('change', filterDisputes);
    document.getElementById('searchFilter').addEventListener('input', filterDisputes);

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
        filterDisputes();
    });

    $('#dateRangeFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        filterDisputes();
    });
}

// Update dispute summary cards
function updateDisputeSummary() {
    const summary = mockDisputes.reduce((acc, dispute) => {
        acc[dispute.status]++;
        acc.total++;
        return acc;
    }, { pending: 0, resolved: 0, rejected: 0, more_info: 0, total: 0 });

    document.getElementById('totalDisputes').textContent = summary.total;
    document.getElementById('resolvedDisputes').textContent = summary.resolved;
    document.getElementById('pendingDisputes').textContent = summary.pending + summary.more_info;
    document.getElementById('rejectedDisputes').textContent = summary.rejected;
}

// Populate franchise filter dropdown
function populateFranchiseFilter() {
    const franchises = [...new Set(mockDisputes.map(d => d.franchiseId))];
    const select = document.getElementById('franchiseFilter');

    franchises.forEach(franchiseId => {
        const franchise = mockDisputes.find(d => d.franchiseId === franchiseId);
        const option = document.createElement('option');
        option.value = franchiseId;
        option.textContent = franchise.franchiseName;
        select.appendChild(option);
    });
}

// Filter disputes based on selected criteria
function filterDisputes() {
    const status = document.getElementById('statusFilter').value;
    const franchiseId = document.getElementById('franchiseFilter').value;
    const searchTerm = document.getElementById('searchFilter').value.toLowerCase();
    const dateRange = document.getElementById('dateRangeFilter').value;

    let filtered = mockDisputes;

    if (status) {
        filtered = filtered.filter(d => d.status === status);
    }

    if (franchiseId) {
        filtered = filtered.filter(d => d.franchiseId === franchiseId);
    }

    if (searchTerm) {
        filtered = filtered.filter(d =>
            d.id.toLowerCase().includes(searchTerm) ||
            d.franchiseName.toLowerCase().includes(searchTerm) ||
            d.description.toLowerCase().includes(searchTerm)
        );
    }

    if (dateRange) {
        const [start, end] = dateRange.split(' - ').map(date => new Date(date));
        filtered = filtered.filter(d => {
            const disputeDate = new Date(d.date);
            return disputeDate >= start && disputeDate <= end;
        });
    }

    displayDisputes(filtered);
}

// Display filtered disputes in the table
function displayDisputes(disputes) {
    const tbody = document.getElementById('disputesTableBody');
    tbody.innerHTML = '';

    disputes.forEach(dispute => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${dispute.id}</td>
            <td>${dispute.franchiseName}</td>
            <td>${dispute.type}</td>
            <td>${dispute.description}</td>
            <td>${formatDate(dispute.date)}</td>
            <td><span class="badge ${getStatusBadgeClass(dispute.status)}">${capitalizeFirst(dispute.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="viewDisputeDetails('${dispute.id}')">View Details</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// View dispute details
function viewDisputeDetails(disputeId) {
    const dispute = mockDisputes.find(d => d.id === disputeId);
    if (!dispute) return;

    // Populate modal fields
    document.getElementById('modalDisputeId').textContent = dispute.id;
    document.getElementById('modalStatus').innerHTML = `<span class="badge ${getStatusBadgeClass(dispute.status)}">${capitalizeFirst(dispute.status)}</span>`;
    document.getElementById('modalFranchise').textContent = dispute.franchiseName;
    document.getElementById('modalDate').textContent = formatDate(dispute.date);
    document.getElementById('modalType').textContent = dispute.type;
    document.getElementById('modalDescription').textContent = dispute.description;

    // Display attachments
    const attachmentsDiv = document.getElementById('modalAttachments');
    attachmentsDiv.innerHTML = dispute.attachments.map(file => `
        <div class="mb-2">
            <i class="bi bi-file-earmark"></i>
            <a href="#" onclick="viewAttachment('${file}')">${file}</a>
        </div>
    `).join('');

    // Show/hide resolution
    const resolutionDiv = document.getElementById('modalResolution');
    if (dispute.resolution) {
        resolutionDiv.classList.remove('d-none');
        document.getElementById('modalResolutionText').textContent = dispute.resolution;
    } else {
        resolutionDiv.classList.add('d-none');
    }

    // Show/hide rejection
    const rejectionDiv = document.getElementById('modalRejection');
    if (dispute.rejectionReason) {
        rejectionDiv.classList.remove('d-none');
        document.getElementById('modalRejectionText').textContent = dispute.rejectionReason;
    } else {
        rejectionDiv.classList.add('d-none');
    }

    // Show/hide action buttons based on status
    const actionButtons = document.querySelectorAll('#modalActions button:not([data-bs-dismiss="modal"])');
    actionButtons.forEach(button => {
        button.style.display = dispute.status === 'pending' ? 'inline-block' : 'none';
    });

    // Show modal
    new bootstrap.Modal(document.getElementById('disputeDetailsModal')).show();
}

// Show resolve dispute modal
function showResolveModal() {
    document.getElementById('resolveDisputeForm').reset();
    new bootstrap.Modal(document.getElementById('resolveDisputeModal')).show();
}

// Show reject dispute modal
function showRejectModal() {
    document.getElementById('rejectDisputeForm').reset();
    new bootstrap.Modal(document.getElementById('rejectDisputeModal')).show();
}

// Resolve dispute
function resolveDispute() {
    const disputeId = document.getElementById('modalDisputeId').textContent;
    const resolution = document.getElementById('resolutionDetails').value;

    if (!resolution) {
        alert('Please provide resolution details');
        return;
    }

    const disputeIndex = mockDisputes.findIndex(d => d.id === disputeId);
    if (disputeIndex !== -1) {
        mockDisputes[disputeIndex].status = 'resolved';
        mockDisputes[disputeIndex].resolution = resolution;
    }

    // Close modals and refresh
    bootstrap.Modal.getInstance(document.getElementById('resolveDisputeModal')).hide();
    bootstrap.Modal.getInstance(document.getElementById('disputeDetailsModal')).hide();
    updateDisputeSummary();
    filterDisputes();
}

// Reject dispute
function rejectDispute() {
    const disputeId = document.getElementById('modalDisputeId').textContent;
    const reason = document.getElementById('rejectionReason').value;
    const comments = document.getElementById('rejectionComments').value;

    if (!reason || !comments) {
        alert('Please provide rejection reason and comments');
        return;
    }

    const disputeIndex = mockDisputes.findIndex(d => d.id === disputeId);
    if (disputeIndex !== -1) {
        mockDisputes[disputeIndex].status = 'rejected';
        mockDisputes[disputeIndex].rejectionReason = `${reason}: ${comments}`;
    }

    // Close modals and refresh
    bootstrap.Modal.getInstance(document.getElementById('rejectDisputeModal')).hide();
    bootstrap.Modal.getInstance(document.getElementById('disputeDetailsModal')).hide();
    updateDisputeSummary();
    filterDisputes();
}

// Request more information
function requestMoreInfo() {
    document.getElementById('moreInfoForm').reset();
    new bootstrap.Modal(document.getElementById('moreInfoModal')).show();
}

// Submit more info request
function submitMoreInfoRequest() {
    const disputeId = document.getElementById('modalDisputeId').textContent;
    const infoRequired = document.getElementById('infoRequired').value;

    if (!infoRequired) {
        alert('Please specify what information is required');
        return;
    }

    const disputeIndex = mockDisputes.findIndex(d => d.id === disputeId);
    if (disputeIndex !== -1) {
        mockDisputes[disputeIndex].status = 'more_info';
        mockDisputes[disputeIndex].moreInfoRequested = infoRequired;
    }

    // Close modals and refresh
    bootstrap.Modal.getInstance(document.getElementById('moreInfoModal')).hide();
    bootstrap.Modal.getInstance(document.getElementById('disputeDetailsModal')).hide();
    updateDisputeSummary();
    filterDisputes();
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
        pending: 'bg-warning text-dark',
        resolved: 'bg-success',
        rejected: 'bg-danger',
        more_info: 'bg-info'
    };
    return classes[status] || 'bg-secondary';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('_', ' ');
}

// Logout function
function logout() {
    window.location.href = 'login.html';
}