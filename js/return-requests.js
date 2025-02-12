// Mock data for return requests
let returnRequests = [
    {
        id: 'RET001',
        franchiseName: 'Mumbai Central Franchise',
        location: 'mumbai',
        product: 'Samsung Refrigerator RT42K5068S8',
        serialNumber: 'SRF2023001',
        purchaseDate: '2023-01-15',
        returnReason: 'Defective Cooling',
        description: 'Unit not maintaining temperature properly after multiple repairs',
        requestDate: '2023-09-15',
        status: 'pending',
        contact: '+91 9876543210'
    },
    {
        id: 'RET002',
        franchiseName: 'Delhi North Franchise',
        location: 'delhi',
        product: 'LG Washing Machine WM1234',
        serialNumber: 'LWM2023002',
        purchaseDate: '2023-03-20',
        returnReason: 'Motor Malfunction',
        description: 'Machine making loud noise and stopping mid-cycle',
        requestDate: '2023-09-18',
        status: 'approved',
        contact: '+91 9876543211'
    },
    {
        id: 'RET003',
        franchiseName: 'Bangalore Tech Park',
        location: 'bangalore',
        product: 'Whirlpool AC WAC8500',
        serialNumber: 'WAC2023003',
        purchaseDate: '2023-04-10',
        returnReason: 'Not Cooling',
        description: 'AC not providing adequate cooling despite multiple service visits',
        requestDate: '2023-09-20',
        status: 'rejected',
        contact: '+91 9876543212'
    },
    {
        id: 'RET004',
        franchiseName: 'Chennai Central',
        location: 'chennai',
        product: 'Samsung TV UA55AU7700',
        serialNumber: 'STV2023004',
        purchaseDate: '2023-05-05',
        returnReason: 'Display Issues',
        description: 'Screen showing vertical lines and flickering',
        requestDate: '2023-09-22',
        status: 'pending',
        contact: '+91 9876543213'
    },
    {
        id: 'RET005',
        franchiseName: 'Mumbai West Franchise',
        location: 'mumbai',
        product: 'LG Microwave MS2595DIS',
        serialNumber: 'LMW2023005',
        purchaseDate: '2023-02-28',
        returnReason: 'Not Heating',
        description: 'Microwave not heating food properly, turntable not working',
        requestDate: '2023-09-25',
        status: 'approved',
        contact: '+91 9876543214'
    },
    {
        id: 'RET006',
        franchiseName: 'Delhi South Franchise',
        location: 'delhi',
        product: 'Whirlpool Dishwasher WFO3O33DL',
        serialNumber: 'WDW2023006',
        purchaseDate: '2023-06-15',
        returnReason: 'Water Leakage',
        description: 'Significant water leakage during operation',
        requestDate: '2023-09-28',
        status: 'pending',
        contact: '+91 9876543215'
    },
    {
        id: 'RET007',
        franchiseName: 'Bangalore Electronic City',
        location: 'bangalore',
        product: 'Samsung Refrigerator RF28R7551SR',
        serialNumber: 'SRF2023007',
        purchaseDate: '2023-07-01',
        returnReason: 'Ice Maker Defect',
        description: 'Ice maker not functioning, water dispenser leaking',
        requestDate: '2023-09-30',
        status: 'approved',
        contact: '+91 9876543216'
    },
    {
        id: 'RET008',
        franchiseName: 'Chennai North',
        location: 'chennai',
        product: 'LG Air Purifier AS330DWR0',
        serialNumber: 'LAP2023008',
        purchaseDate: '2023-03-10',
        returnReason: 'Sensor Malfunction',
        description: 'Air quality sensor showing incorrect readings',
        requestDate: '2023-10-02',
        status: 'rejected',
        contact: '+91 9876543217'
    },
    {
        id: 'RET009',
        franchiseName: 'Mumbai South Franchise',
        location: 'mumbai',
        product: 'Whirlpool Water Purifier WP2000',
        serialNumber: 'WWP2023009',
        purchaseDate: '2023-08-05',
        returnReason: 'Filter Issues',
        description: 'Water tastes bad, filter warning light always on',
        requestDate: '2023-10-05',
        status: 'pending',
        contact: '+91 9876543218'
    },
    {
        id: 'RET010',
        franchiseName: 'Delhi East Franchise',
        location: 'delhi',
        product: 'Samsung Washing Machine WW90T504DAN',
        serialNumber: 'SWM2023010',
        purchaseDate: '2023-04-20',
        returnReason: 'Door Lock Failure',
        description: 'Door not locking properly, machine won\'t start',
        requestDate: '2023-10-08',
        status: 'rejected',
        contact: '+91 9876543219'
    },
    {
        id: 'RET011',
        franchiseName: 'Bangalore South',
        location: 'bangalore',
        product: 'LG TV OLED65C1PUB',
        serialNumber: 'LTV2023011',
        purchaseDate: '2023-05-15',
        returnReason: 'Screen Burn-in',
        description: 'Visible screen burn-in affecting viewing experience',
        requestDate: '2023-10-10',
        status: 'pending',
        contact: '+91 9876543220'
    }
];


// Initialize date range picker
$(document).ready(function() {
    $('#dateRangeFilter').daterangepicker({
        opens: 'left',
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('#dateRangeFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        filterRequests();
    });

    $('#dateRangeFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        filterRequests();
    });

    // Initialize other filters
    $('#statusFilter, #locationFilter').on('change', filterRequests);
    $('#searchFilter').on('input', filterRequests);

    // Initial load
    updateDashboardCounts();
    displayReturnRequests(returnRequests);
});

// Filter return requests based on selected criteria
function filterRequests() {
    const status = $('#statusFilter').val();
    const location = $('#locationFilter').val();
    const dateRange = $('#dateRangeFilter').val();
    const searchTerm = $('#searchFilter').val().toLowerCase();

    let filtered = returnRequests;

    // Apply filters
    if (status) {
        filtered = filtered.filter(request => request.status === status);
    }

    if (location) {
        filtered = filtered.filter(request => request.location === location);
    }

    if (dateRange) {
        const [start, end] = dateRange.split(' - ').map(date => new Date(date));
        filtered = filtered.filter(request => {
            const requestDate = new Date(request.requestDate);
            return requestDate >= start && requestDate <= end;
        });
    }

    if (searchTerm) {
        filtered = filtered.filter(request =>
            request.id.toLowerCase().includes(searchTerm) ||
            request.franchiseName.toLowerCase().includes(searchTerm) ||
            request.product.toLowerCase().includes(searchTerm)
        );
    }

    displayReturnRequests(filtered);
}

// Display filtered return requests in the table
function displayReturnRequests(requests) {
    const tbody = $('#returnRequestsTableBody');
    tbody.empty();

    requests.forEach(request => {
        const row = `
            <tr>
                <td>${request.id}</td>
                <td>${request.franchiseName}</td>
                <td>${request.product}<br><small class="text-muted">SN: ${request.serialNumber}</small></td>
                <td>${request.returnReason}</td>
                <td>${formatDate(request.requestDate)}</td>
                <td><span class="badge bg-${getStatusBadgeClass(request.status)}">${capitalizeFirst(request.status)}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="viewReturnDetails('${request.id}')">View Details</button>
                    ${request.status === 'pending' ? `
                        <button class="btn btn-sm btn-success me-1" onclick="handleReturnAction('approve', '${request.id}')">Approve</button>
                        <button class="btn btn-sm btn-danger" onclick="handleReturnAction('reject', '${request.id}')">Reject</button>
                    ` : ''}
                </td>
            </tr>
        `;
        tbody.append(row);
    });
}

// View return request details in modal
function viewReturnDetails(requestId) {
    const request = returnRequests.find(r => r.id === requestId);
    if (!request) return;

    // Populate modal fields
    $('#modalRequestId').text(request.id);
    $('#modalStatus').html(`<span class="badge bg-${getStatusBadgeClass(request.status)}">${capitalizeFirst(request.status)}</span>`);
    $('#modalRequestDate').text(formatDate(request.requestDate));
    $('#modalFranchiseName').text(request.franchiseName);
    $('#modalLocation').text(capitalizeFirst(request.location));
    $('#modalContact').text(request.contact);
    $('#modalProduct').text(request.product);
    $('#modalSerialNumber').text(request.serialNumber);
    $('#modalPurchaseDate').text(formatDate(request.purchaseDate));
    $('#modalReason').text(request.returnReason);
    $('#modalDescription').text(request.description);

    // Show/hide action buttons based on status
    const actionButtons = $('#modalActions').find('button[onclick^="handleReturnAction"]');
    actionButtons.toggle(request.status === 'pending');

    // Show modal
    new bootstrap.Modal(document.getElementById('returnDetailsModal')).show();
}

// Handle return request actions (approve/reject)
function handleReturnAction(action, requestId) {
    const request = returnRequests.find(r => r.id === requestId);
    if (!request) return;

    // Update request status
    request.status = action === 'approve' ? 'approved' : 'rejected';

    // Show success message
    alert(`Return request ${requestId} has been ${request.status}`);

    // Close modal if open
    const modal = bootstrap.Modal.getInstance(document.getElementById('returnDetailsModal'));
    if (modal) modal.hide();

    // Update dashboard and table
    updateDashboardCounts();
    filterRequests();
}

// Update dashboard summary counts
function updateDashboardCounts() {
    const counts = returnRequests.reduce((acc, request) => {
        acc[request.status]++;
        return acc;
    }, { pending: 0, approved: 0, rejected: 0 });

    $('#pendingCount').text(counts.pending);
    $('#approvedCount').text(counts.approved);
    $('#rejectedCount').text(counts.rejected);
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
        pending: 'warning',
        approved: 'success',
        rejected: 'danger'
    };
    return classes[status] || 'secondary';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}