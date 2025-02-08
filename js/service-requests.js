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
        customer: 'James Miller',
        brand: 'Whirlpool',
        paymentStatus: 'Free',
        serviceType: 'Installation',
        status: 'Completed',
        createdDate: '2025-01-13',
        slaDeadline: '2025-01-15',
        engineer: 'David Fix',
        location: 'Bangalore',
        phone: '9876543218'
    },
    {
        id: 'SR010',
        customer: 'Emily Davis',
        brand: 'Samsung',
        paymentStatus: 'Payment Pending',
        serviceType: 'Repair',
        status: 'Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Mumbai',
        phone: '9876543219'
    },
    {
        id: 'SR011',
        customer: 'William Taylor',
        brand: 'LG',
        paymentStatus: 'Free',
        serviceType: 'Installation',
        status: 'In Progress',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-16',
        engineer: 'Lisa Tech',
        location: 'Delhi',
        phone: '9876543220'
    },
    {
        id: 'SR012',
        customer: 'Emma White',
        brand: 'Whirlpool',
        paymentStatus: 'Paid',
        serviceType: 'Repair',
        status: 'Completed',
        createdDate: '2025-01-13',
        slaDeadline: '2025-01-15',
        engineer: 'Robert Fix',
        location: 'Bangalore',
        phone: '9876543221'
    },
    {
        id: 'SR013',
        customer: 'Daniel Clark',
        brand: 'Samsung',
        paymentStatus: 'Free',
        serviceType: 'Maintenance',
        status: 'Pending',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Mumbai',
        phone: '9902733440'
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