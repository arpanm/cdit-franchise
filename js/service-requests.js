// Sample service request data
const serviceRequests = [
    {
        id: 'SR001',
        customer: 'John Doe',
        brand: 'Samsung',
        paymentStatus: 'Payment Pending',
        serviceType: 'Installation',
        status: 'Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Mumbai',
        phone: '9876543210'
    },
    {
        id: 'SR002',
        customer: 'Jane Smith',
        brand: 'LG',
        paymentStatus: 'Paid',
        serviceType: 'Repair',
        status: 'In Progress',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-16',
        engineer: 'Mike Tech',
        location: 'Delhi',
        phone: '9902733440'
    },
    {
        id: 'SR003',
        customer: 'Robert Wilson',
        brand: 'Whirlpool',
        paymentStatus: 'Free',
        serviceType: 'Maintenance',
        status: 'Completed',
        createdDate: '2025-01-13',
        slaDeadline: '2025-01-15',
        engineer: 'Sarah Fix',
        location: 'Bangalore',
        phone: '9876543212'
    },
    {
        id: 'SR004',
        customer: 'Mary Johnson',
        brand: 'Samsung',
        paymentStatus: 'Paid',
        serviceType: 'Repair',
        status: 'Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Mumbai',
        phone: '9876543213'
    },
    {
        id: 'SR005',
        customer: 'David Brown',
        brand: 'LG',
        paymentStatus: 'Free',
        serviceType: 'Installation',
        status: 'In Progress',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-16',
        engineer: 'John Tech',
        location: 'Delhi',
        phone: '9876543214'
    },
    {
        id: 'SR006',
        customer: 'Lisa Anderson',
        brand: 'Whirlpool',
        paymentStatus: 'Paid',
        serviceType: 'Repair',
        status: 'Completed',
        createdDate: '2025-01-13',
        slaDeadline: '2025-01-15',
        engineer: 'Mike Fix',
        location: 'Bangalore',
        phone: '9876543215'
    },
    {
        id: 'SR007',
        customer: 'Michael Lee',
        brand: 'Samsung',
        paymentStatus: 'Payment Pending',
        serviceType: 'Installation',
        status: 'Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Mumbai',
        phone: '9876543216'
    },
    {
        id: 'SR008',
        customer: 'Sarah Wilson',
        brand: 'LG',
        paymentStatus: 'Free',
        serviceType: 'Maintenance',
        status: 'In Progress',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-16',
        engineer: 'Sarah Tech',
        location: 'Delhi',
        phone: '9876543217'
    },
    {
        id: 'SR009',
        customer: 'Emily Chen',
        brand: 'Samsung',
        paymentStatus: 'Paid',
        serviceType: 'Repair',
        status: 'Escalated',
        createdDate: '2025-01-16',
        slaDeadline: '2025-01-18',
        engineer: 'Alex Tech',
        location: 'Pune',
        phone: '9876543217'
    },
    {
        id: 'SR010',
        customer: 'Raj Patel',
        brand: 'Whirlpool',
        paymentStatus: 'Payment Pending',
        serviceType: 'Installation',
        status: 'On Hold',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Chennai',
        phone: '9876543218'
    },
    {
        id: 'SR011',
        customer: 'Priya Singh',
        brand: 'LG',
        paymentStatus: 'Refunded',
        serviceType: 'Maintenance',
        status: 'Cancelled',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-16',
        engineer: 'Sarah Fix',
        location: 'Hyderabad',
        phone: '9876543219'
    },
    {
        id: 'SR012',
        customer: 'Tom Wilson',
        brand: 'Samsung',
        paymentStatus: 'Partially Paid',
        serviceType: 'Emergency Repair',
        status: 'In Progress',
        createdDate: '2025-01-17',
        slaDeadline: '2025-01-18',
        engineer: 'Mike Tech',
        location: 'Kolkata',
        phone: '9876543220'
    },
    {
        id: 'SR013',
        customer: 'Anita Kumar',
        brand: 'LG',
        paymentStatus: 'Free',
        serviceType: 'Warranty Claim',
        status: 'Pending Approval',
        createdDate: '2025-01-16',
        slaDeadline: '2025-01-19',
        engineer: null,
        location: 'Ahmedabad',
        phone: '9876543221'
    },
    {
        id: 'SR014',
        customer: 'James Carter',
        brand: 'Whirlpool',
        paymentStatus: 'Paid',
        serviceType: 'Part Replacement',
        status: 'Parts Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-18',
        engineer: 'John Tech',
        location: 'Bangalore',
        phone: '9876543222'
    },
    {
        id: 'SR015',
        customer: 'Meera Shah',
        brand: 'Samsung',
        paymentStatus: 'Payment Pending',
        serviceType: 'Installation',
        status: 'Scheduled',
        createdDate: '2025-01-18',
        slaDeadline: '2025-01-20',
        engineer: 'Alex Tech',
        location: 'Mumbai',
        phone: '9876543223'
    },
    {
        id: 'SR016',
        customer: 'Chris Anderson',
        brand: 'LG',
        paymentStatus: 'Paid',
        serviceType: 'Annual Maintenance',
        status: 'Completed',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-17',
        engineer: 'Sarah Fix',
        location: 'Delhi',
        phone: '9876543224'
    },
    {
        id: 'SR017',
        customer: 'Sanjay Gupta',
        brand: 'Whirlpool',
        paymentStatus: 'Under Warranty',
        serviceType: 'Repair',
        status: 'Quality Check',
        createdDate: '2025-01-16',
        slaDeadline: '2025-01-19',
        engineer: 'Mike Fix',
        location: 'Chennai',
        phone: '9876543225'
    },
    {
        id: 'SR018',
        customer: 'Linda Martinez',
        brand: 'Samsung',
        paymentStatus: 'COD',
        serviceType: 'Troubleshooting',
        status: 'Customer Review Pending',
        createdDate: '2025-01-17',
        slaDeadline: '2025-01-20',
        engineer: 'John Tech',
        location: 'Pune',
        phone: '9876543226'
    }
];

// Initialize filters and table when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date range picker
    $('#dateRangeFilter').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('#dateRangeFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
        updateTable();
    });

    $('#dateRangeFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        updateTable();
    });

    // Add event listeners for other filters
    $('#locationFilter, #brandFilter, #statusFilter, #searchFilter').on('change keyup', function() {
        updateTable();
    });

    // Handle checkbox selection and bulk assign button
    const serviceTable = document.getElementById('serviceRequestsTable');
    const assignButton = document.querySelector('button[data-action="assign"]');
    const mainCheckbox = serviceTable.querySelector('thead input[type="checkbox"]');

    // Function to update assign button state
    function updateAssignButtonState() {
        const checkedBoxes = serviceTable.querySelectorAll('tbody input[type="checkbox"]:checked');
        assignButton.disabled = checkedBoxes.length === 0;
    }

    // Handle main checkbox
    mainCheckbox.addEventListener('change', function() {
        const checkboxes = serviceTable.querySelectorAll('tbody input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = this.checked);
        updateAssignButtonState();
    });

    // Handle individual checkboxes
    serviceTable.querySelector('tbody').addEventListener('change', function(e) {
        if (e.target.type === 'checkbox') {
            const allCheckboxes = serviceTable.querySelectorAll('tbody input[type="checkbox"]');
            const checkedBoxes = serviceTable.querySelectorAll('tbody input[type="checkbox"]:checked');
            mainCheckbox.checked = checkedBoxes.length === allCheckboxes.length;
            mainCheckbox.indeterminate = checkedBoxes.length > 0 && checkedBoxes.length < allCheckboxes.length;
            updateAssignButtonState();
        }
    });

    // Initial table population
    updateTable();
});

// Function to filter service requests
function filterServiceRequests() {
    const location = $('#locationFilter').val();
    const brand = $('#brandFilter').val();
    const status = $('#statusFilter').val();
    const dateRange = $('#dateRangeFilter').val();
    const search = $('#searchFilter').val().toLowerCase();

    return serviceRequests.filter(request => {
        // Location filter
        if (location !== 'All Locations' && request.location !== location) return false;

        // Brand filter
        if (brand !== 'All Brands' && request.brand !== brand) return false;

        // Status filter
        if (status !== 'All Status' && request.status !== status) return false;

        // Date range filter
        if (dateRange) {
            const [startDate, endDate] = dateRange.split(' - ');
            const requestDate = new Date(request.createdDate);
            if (requestDate < new Date(startDate) || requestDate > new Date(endDate)) return false;
        }

        // Search filter (ID or Phone)
        if (search && !request.id.toLowerCase().includes(search) && 
            !request.phone.toLowerCase().includes(search)) return false;

        return true;
    });
}

// Function to update the table
function updateTable() {
    const filteredRequests = filterServiceRequests();
    const tbody = $('#serviceRequestsTable tbody');
    tbody.empty();

    filteredRequests.forEach(request => {
        const row = $('<tr>');
        row.append(`<td><input type="checkbox" class="form-check-input"></td>`);
        row.append(`<td>${request.id}</td>`);
        row.append(`<td>${request.customer}</td>`);
        row.append(`<td>${request.brand}</td>`);

        // Payment Status badge
        const paymentStatusClass = {
            'Payment Pending': 'bg-warning',
            'Paid': 'bg-success',
            'Free': 'bg-success'
        }[request.paymentStatus];

        row.append(`<td><span class="badge ${paymentStatusClass}">${request.paymentStatus}</span></td>`);
        row.append(`<td>${request.serviceType || 'N/A'}</td>`);
        
        // Status badge
        const statusClass = {
            'Pending': 'bg-warning',
            'In Progress': 'bg-primary',
            'Completed': 'bg-success'
        }[request.status];

        row.append(`<td><span class="badge ${statusClass}">${request.status}</span></td>`);

        row.append(`<td>${request.createdDate}</td>`);

        // SLA deadline with highlighting for non-completed requests
        const slaCell = $('<td>');
        if (request.status !== 'Completed' && new Date(request.slaDeadline) < new Date()) {
            slaCell.addClass('text-danger fw-bold');
        }
        slaCell.text(request.slaDeadline);
        row.append(slaCell);

        row.append(`<td>${request.location}</td>`);
        row.append(`<td>${request.engineer || '-'}</td>`);        
        row.append(`<td>
            <button class="btn btn-primary btn-sm" 
                ${request.engineer ? 'disabled' : ''}
                onclick="engineerManager.showAssignmentModal()">Assign</button>
            <button class="btn btn-info btn-sm ms-1" 
                onclick="window.location.href='service-details.html?id=${request.id}'">View</button>
        </td>`);

        tbody.append(row);
    });

    // Update bulk assign button state
    const hasUnassigned = filteredRequests.some(request => !request.engineer);
    $('button[data-action="assign"]').prop('disabled', !hasUnassigned);
}