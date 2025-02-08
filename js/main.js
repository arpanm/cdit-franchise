// DOM Elements
const serviceRequestsTable = document.querySelector('#service-requests table tbody');
const assignButtons = document.querySelectorAll('.btn-primary');
const detailButtons = document.querySelectorAll('.btn-info');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    updateDashboardStats();
});

// Initialize Event Listeners
function initializeEventListeners() {
    assignButtons.forEach(button => {
        button.addEventListener('click', handleAssign);
    });

    detailButtons.forEach(button => {
        button.addEventListener('click', handleDetails);
    });
}

// Handle Assign Button Click
function handleAssign(event) {
    const row = event.target.closest('tr');
    if (!row || !row.cells || !row.cells[0]) {
        console.error('Could not find service request row');
        return;
    }
    const requestId = row.cells[0].textContent;
    // Show the engineer assignment modal
    engineerManager.showAssignmentModal();
    console.log(`Opening assignment modal for request ${requestId}`);
}

// Handle Details Button Click
function handleDetails(event) {
    const row = event.target.closest('tr');
    const requestId = row.cells[0].textContent;
    // TODO: Implement details view functionality
    console.log(`Viewing details for request ${requestId}`);
}

// Update Dashboard Statistics
function updateDashboardStats() {
    // TODO: Implement real-time dashboard updates
    // This would typically fetch data from an API
    console.log('Updating dashboard statistics');
}

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}