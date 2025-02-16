// Service Management for Mother Company Admin

// Mock data for service requests
let serviceRequests = [
    {
        id: 'SR001',
        customer: 'John Doe',
        brand: 'Samsung',
        paymentStatus: 'Payment Pending',
        serviceType: 'Installation',
        priority: 'High',
        status: 'Pending',
        assignedFranchise: null,
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
        priority: 'Medium',
        status: 'Assigned',
        assignedFranchise: 'City Electronics',
        createdDate: '2025-01-14',
        slaDeadline: '2025-01-16',
        engineer: null,
        location: 'Delhi',
        phone: '9902733440'
    },
    {
        id: 'SR003',
        customer: 'John Doe',
        brand: 'Samsung',
        paymentStatus: 'Payment Pending',
        serviceType: 'Installation',
        status: 'Pending',
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
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
        priority: 'Medium',
        assignedFranchise: 'City Electronics',
        createdDate: '2025-01-15',
        slaDeadline: '2025-01-17',
        engineer: null,
        location: 'Mumbai',
        phone: '9902733440'
    }
];

// Mock data for franchises
let franchises = [
    { id: 'F001', name: 'City Electronics' },
    { id: 'F002', name: 'Metro Appliances' },
    { id: 'F003', name: 'Urban Services' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadServiceRequests();
    populateFranchiseDropdown();
    setupEventListeners();
});

// Load service requests into the table
function loadServiceRequests() {
    const tableBody = document.getElementById('serviceRequestsTable');
    const bulkAssignBtn = document.getElementById('bulkAssignBtn');
    tableBody.innerHTML = '';

    serviceRequests.forEach(request => {
        const row = document.createElement('tr');
        const isCompleted = request.status === 'Completed';
        row.innerHTML = `
            <td><input type="checkbox" class="service-checkbox" value="${request.id}" ${isCompleted ? 'disabled' : ''}></td>
            <td>${request.id}</td>
            <td>${request.customer}</td>
            <td>${request.brand || 'N/A'}</td>
            <td><span class="badge ${getPaymentStatusBadgeClass(request.paymentStatus)}">${request.paymentStatus || 'Pending'}</span></td>
            <td>${request.serviceType}</td>
            <td><span class="badge ${getPriorityBadgeClass(request.priority)}">${request.priority}</span></td>
            <td><span class="badge ${getStatusBadgeClass(request.status)}">${request.status}</span></td>
            <td class="${isOverdueSLA(request.slaDeadline) ? 'text-danger fw-bold' : ''}">${request.slaDeadline || 'N/A'}</td>
            <td>${request.location || 'N/A'}</td>
            <td>${request.assignedFranchise || '-'}</td>
            <td>${request.createdDate}</td>
            <td>
                <button class="btn btn-primary btn-sm" ${isCompleted ? 'disabled' : ''} onclick="showAssignFranchiseModal('${request.id}')">Assign</button>
                <button class="btn btn-info btn-sm ms-1" onclick="viewServiceDetails('${request.id}')">View</button>
            </td>
        `;

        tableBody.append(row);
    });

    // Add event listeners for checkboxes
    document.querySelectorAll('.service-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedBoxes = document.querySelectorAll('.service-checkbox:checked');
            bulkAssignBtn.disabled = checkedBoxes.length === 0;
        });
    });
}

// Populate franchise dropdown in the assign franchise modal
function populateFranchiseDropdown() {
    const select = document.querySelector('#assignFranchiseForm select[name="franchise"]');
    franchises.forEach(franchise => {
        const option = document.createElement('option');
        option.value = franchise.id;
        option.textContent = franchise.name;
        select.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Select all services checkbox
    document.getElementById('selectAllServices').addEventListener('change', function() {
        const checkboxes = document.getElementsByClassName('service-checkbox');
        Array.from(checkboxes).forEach(checkbox => {
            checkbox.checked = this.checked;
        });
        updateExportButton();
    });

    // Individual checkbox changes
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('service-checkbox')) {
            updateExportButton();
        }
    });

    // Update export button state
    function updateExportButton() {
        const checkedBoxes = document.getElementsByClassName('service-checkbox');
        const checkedCount = Array.from(checkedBoxes).filter(cb => cb.checked).length;
        document.getElementById('exportServicesBtn').disabled = checkedCount === 0;
    }
}

// Function to export selected services to Excel
function exportSelectedServices() {
    const checkboxes = document.getElementsByClassName('service-checkbox');
    const selectedServices = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => serviceRequests.find(sr => sr && sr.id === cb.value))
        .filter(service => service !== undefined);

    if (selectedServices.length === 0) {
        alert('Please select at least one service to export');
        return;
    }

    // Create CSV content
    const headers = ['Service ID', 'Customer Name', 'Service Type', 'Priority', 'Status', 'Assigned Franchise', 'Created Date', 'Location', 'Phone'];
    const csvContent = [
        headers.join(','),
        ...selectedServices.map(service => [
            service.id,
            `"${service.customerName || service.customer || 'N/A'}"`,
            service.serviceType || 'N/A',
            service.priority || 'N/A',
            service.status || 'N/A',
            `"${service.assignedFranchise || 'Not Assigned'}"`,
            service.createdDate || 'N/A',
            `"${service.location || 'N/A'}"`,
            service.phone || 'N/A'
        ].join(','))
    ].join('\n');

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `service_requests_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Show assign franchise modal
function showAssignFranchiseModal(serviceId) {
    // Store selected service ID for assignment
    document.getElementById('assignFranchiseForm').dataset.serviceId = serviceId;
    const modal = new bootstrap.Modal(document.getElementById('assignFranchiseModal'));
    modal.show();
}

// Assign franchise to service(s)
function assignFranchise() {
    const form = document.getElementById('assignFranchiseForm');
    const franchiseId = form.franchise.value;
    const franchiseName = franchises.find(f => f.id === franchiseId)?.name;
    const note = form.note.value;

    // Get selected service IDs
    const selectedServices = Array.from(document.getElementsByClassName('service-checkbox'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // If no checkboxes are selected, use the service ID from the modal
    if (selectedServices.length === 0 && form.dataset.serviceId) {
        selectedServices.push(form.dataset.serviceId);
    }

    // Update service requests
    selectedServices.forEach(serviceId => {
        const service = serviceRequests.find(s => s.id === serviceId);
        if (service) {
            service.assignedFranchise = franchiseName;
            service.status = 'Assigned';
        }
    });

    // Reload table and close modal
    loadServiceRequests();
    bootstrap.Modal.getInstance(document.getElementById('assignFranchiseModal')).hide();
    form.reset();
}

// View service details
function viewServiceDetails(serviceId) {
    window.location.href = `service-details.html?id=${serviceId}`;
}

// Function to check if SLA deadline is overdue
function isOverdueSLA(deadline) {
    if (!deadline) return false;
    const now = new Date();
    const slaDate = new Date(deadline);
    return now > slaDate;
}

// Utility functions for badge classes
function getPriorityBadgeClass(priority) {
    const classes = {
        'High': 'bg-danger',
        'Medium': 'bg-warning',
        'Low': 'bg-info'
    };
    return classes[priority] || 'bg-secondary';
}

function getPaymentStatusBadgeClass(status) {
    const classes = {
        'Initiate': 'bg-secondary',
        'PendingOnPg': 'bg-warning',
        'Success': 'bg-success',
        'Failed': 'bg-danger'
    };
    return classes[status] || 'bg-secondary';
}

function getStatusBadgeClass(status) {
    const classes = {
        'Pending': 'bg-warning',
        'Assigned': 'bg-primary',
        'In Progress': 'bg-info',
        'Completed': 'bg-success',
        'Cancelled': 'bg-danger'
    };
    return classes[status] || 'bg-secondary';
}

// Logout function
function logout() {
    // Implement logout logic here
    window.location.href = 'login.html';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date range picker
    $('#dateRangeFilter').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    // Handle date range picker events
    $('#dateRangeFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        applyFilters();
    });

    $('#dateRangeFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        applyFilters();
    });

    // Add event listeners for filters
    document.getElementById('locationFilter').addEventListener('change', applyFilters);
    document.getElementById('brandFilter').addEventListener('change', applyFilters);
    document.getElementById('statusFilter').addEventListener('change', applyFilters);
    document.getElementById('searchFilter').addEventListener('input', applyFilters);

    // Initialize table with all data
    updateServiceRequestsTable(serviceRequests);
});

// Filter service requests based on selected criteria
$(document).ready(function() {
    // Initialize date range picker
    $('#dateRangeFilter').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('#dateRangeFilter').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        applyFilters();
    });

    $('#dateRangeFilter').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        applyFilters();
    });
});

function applyFilters() {
    const location = document.getElementById('locationFilter').value;
    const brand = document.getElementById('brandFilter').value;
    const status = document.getElementById('statusFilter').value;
    const dateRange = document.getElementById('dateRangeFilter').value;
    const search = document.getElementById('searchFilter').value.toLowerCase();

    const filteredRequests = serviceRequests.filter(request => {
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

    updateServiceRequestsTable(filteredRequests);
}

function updateServiceRequestsTable(filteredRequests) {
    const tbody = $('#serviceRequestsTable');
    tbody.empty();

    filteredRequests.forEach(request => {
        const row = $('<tr>');
        row.append(`<td><input type="checkbox" class="service-checkbox"></td>`);
        row.append(`<td>${request.id}</td>`);
        row.append(`<td>${request.customer}</td>`);
        row.append(`<td>${request.brand}</td>`);

        // Payment Status badge
        const paymentStatusClass = {
            'Payment Pending': 'bg-warning',
            'Paid': 'bg-success',
            'Free': 'bg-success'
        }[request.paymentStatus] || 'bg-secondary';

        row.append(`<td><span class="badge ${paymentStatusClass}">${request.paymentStatus}</span></td>`);
        row.append(`<td>${request.serviceType || 'N/A'}</td>`);
        row.append(`<td>${request.priority || 'Normal'}</td>`);
        
        // Status badge
        const statusClass = {
            'Pending': 'bg-warning',
            'In Progress': 'bg-primary',
            'Completed': 'bg-success'
        }[request.status] || 'bg-secondary';

        row.append(`<td><span class="badge ${statusClass}">${request.status}</span></td>`);

        // SLA deadline with highlighting
        const slaCell = $('<td>');
        if (request.status !== 'Completed' && new Date(request.slaDeadline) < new Date()) {
            slaCell.addClass('text-danger fw-bold');
        }
        slaCell.text(request.slaDeadline);
        row.append(slaCell);

        row.append(`<td>${request.location}</td>`);
        row.append(`<td>${request.assignedFranchise || '-'}</td>`);
        row.append(`<td>${request.createdDate}</td>`);
        row.append(`<td>
            <button class="btn btn-primary btn-sm" 
                ${request.assignedFranchise ? 'disabled' : ''}
                onclick="showAssignFranchiseModal('${request.id}')">Assign</button>
            <button class="btn btn-info btn-sm ms-1" 
                onclick="viewServiceDetails('${request.id}')">View</button>
        </td>`);

        tbody.append(row);
    });

    // Update bulk assign button state
    const hasUnassigned = filteredRequests.some(request => !request.assignedFranchise);
    $('#bulkAssignBtn').prop('disabled', !hasUnassigned);
}