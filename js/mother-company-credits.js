// Mock data for testing
const mockFranchises = [
    { id: 'F001', name: 'Franchise A', creditLimit: 100000, creditPeriod: 30, status: 'Active' },
    { id: 'F002', name: 'Franchise B', creditLimit: 150000, creditPeriod: 0, status: 'Blocked' },
    { id: 'F003', name: 'Franchise C', creditLimit: 200000, creditPeriod: 30, status: 'Active' },
    { id: 'F004', name: 'Delhi North', creditLimit: 180000, creditPeriod: 30, status: 'Active' },
    { id: 'F005', name: 'Bangalore Central', creditLimit: 160000, creditPeriod: 0, status: 'Overdue' },
    { id: 'F006', name: 'Chennai South', creditLimit: 120000, creditPeriod: 0, status: 'Blocked' },
    { id: 'F007', name: 'Hyderabad East', creditLimit: 90000, creditPeriod: 30, status: 'Active' },
    { id: 'F008', name: 'Kolkata Central', creditLimit: 140000, creditPeriod: 45, status: 'Active' },
    { id: 'F009', name: 'Ahmedabad West', creditLimit: 75000, creditPeriod: 0, status: 'Overdue' },
    { id: 'F010', name: 'Pune East', creditLimit: 110000, creditPeriod: 45, status: 'Active' },
    { id: 'F011', name: 'Mumbai South', creditLimit: 200000, creditPeriod: 30, status: 'Active' },
    { id: 'F012', name: 'Jaipur Central', creditLimit: 85000, creditPeriod: 0, status: 'Overdue' },
    { id: 'F013', name: 'Lucknow North', creditLimit: 95000, creditPeriod: 0, status: 'Blocked' }
];

const mockTransactions = [
    // Franchise F001 transactions
    { id: 'T001', franchiseId: 'F001', date: '2025-02-01', type: 'Purchase', amount: 25000, status: 'Paid', paymentDetails: 'IMPS-123456' },
    { id: 'T002', franchiseId: 'F001', date: '2025-01-15', type: 'Purchase', amount: 30000, status: 'Pending', paymentDetails: '-' },
    { id: 'T003', franchiseId: 'F001', date: '2024-09-20', type: 'Purchase', amount: 45000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T004', franchiseId: 'F001', date: '2024-10-05', type: 'Payment', amount: 35000, status: 'Paid', paymentDetails: 'RTGS-789012' },
    { id: 'T005', franchiseId: 'F001', date: '2024-09-15', type: 'Purchase', amount: 100000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T006', franchiseId: 'F001', date: '2024-10-10', type: 'Purchase', amount: 55000, status: 'Pending', paymentDetails: '-' },
    { id: 'T007', franchiseId: 'F001', date: '2024-09-25', type: 'Payment', amount: 75000, status: 'Paid', paymentDetails: 'NEFT-345678' },
    { id: 'T008', franchiseId: 'F001', date: '2024-10-18', type: 'Purchase', amount: 40000, status: 'Pending', paymentDetails: '-' },

    // Franchise F003 transactions
    { id: 'T009', franchiseId: 'F003', date: '2025-01-30', type: 'Purchase', amount: 60000, status: 'Paid', paymentDetails: 'IMPS-901234' },
    { id: 'T010', franchiseId: 'F003', date: '2025-02-12', type: 'Purchase', amount: 85000, status: 'Pending', paymentDetails: '-' },
    { id: 'T011', franchiseId: 'F003', date: '2024-10-20', type: 'Payment', amount: 60000, status: 'Paid', paymentDetails: 'RTGS-567890' },
    { id: 'T012', franchiseId: 'F003', date: '2025-01-28', type: 'Purchase', amount: 35000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T009', franchiseId: 'F003', date: '2025-01-30', type: 'Purchase', amount: 60000, status: 'Paid', paymentDetails: 'IMPS-901234' },
    { id: 'T010', franchiseId: 'F003', date: '2025-01-12', type: 'Purchase', amount: 85000, status: 'Pending', paymentDetails: '-' },
    { id: 'T011', franchiseId: 'F003', date: '2025-01-20', type: 'Payment', amount: 60000, status: 'Paid', paymentDetails: 'RTGS-567890' },
    { id: 'T012', franchiseId: 'F003', date: '2025-01-28', type: 'Purchase', amount: 35000, status: 'Overdue', paymentDetails: '-' },

    // Franchise F004 transactions (Delhi North)
    { id: 'T013', franchiseId: 'F004', date: '2025-02-02', type: 'Purchase', amount: 45000, status: 'Pending', paymentDetails: '-' },
    { id: 'T014', franchiseId: 'F004', date: '2025-01-18', type: 'Purchase', amount: 65000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T015', franchiseId: 'F004', date: '2024-10-08', type: 'Payment', amount: 50000, status: 'Paid', paymentDetails: 'NEFT-678901' },
    { id: 'T016', franchiseId: 'F004', date: '2024-10-15', type: 'Purchase', amount: 35000, status: 'Pending', paymentDetails: '-' },
    { id: 'T017', franchiseId: 'F004', date: '2024-09-25', type: 'Payment', amount: 40000, status: 'Paid', paymentDetails: 'IMPS-234567' },
    { id: 'T018', franchiseId: 'F004', date: '2024-09-20', type: 'Purchase', amount: 75000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T019', franchiseId: 'F004', date: '2024-10-05', type: 'Payment', amount: 55000, status: 'Paid', paymentDetails: 'RTGS-345678' },
    { id: 'T020', franchiseId: 'F004', date: '2024-10-12', type: 'Purchase', amount: 45000, status: 'Pending', paymentDetails: '-' },
    { id: 'T021', franchiseId: 'F004', date: '2024-09-28', type: 'Purchase', amount: 60000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T022', franchiseId: 'F004', date: '2024-10-18', type: 'Payment', amount: 35000, status: 'Paid', paymentDetails: 'NEFT-456789' },

    // Franchise F006 transactions (Chennai South)
    { id: 'T023', franchiseId: 'F006', date: '2025-01-15', type: 'Purchase', amount: 85000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T024', franchiseId: 'F006', date: '2024-10-01', type: 'Purchase', amount: 55000, status: 'Pending', paymentDetails: '-' },
    { id: 'T025', franchiseId: 'F006', date: '2024-10-10', type: 'Payment', amount: 45000, status: 'Paid', paymentDetails: 'IMPS-567890' },
    { id: 'T026', franchiseId: 'F006', date: '2024-09-25', type: 'Purchase', amount: 70000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T027', franchiseId: 'F006', date: '2024-10-15', type: 'Payment', amount: 30000, status: 'Paid', paymentDetails: 'RTGS-678901' },

    // Franchise F010 transactions (Pune East)
    { id: 'T028', franchiseId: 'F010', date: '2025-01-22', type: 'Purchase', amount: 40000, status: 'Pending', paymentDetails: '-' },
    { id: 'T029', franchiseId: 'F010', date: '2024-10-05', type: 'Payment', amount: 35000, status: 'Paid', paymentDetails: 'NEFT-789012' },
    { id: 'T030', franchiseId: 'F010', date: '2024-10-12', type: 'Purchase', amount: 30000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T031', franchiseId: 'F010', date: '2024-09-28', type: 'Purchase', amount: 25000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T032', franchiseId: 'F010', date: '2024-10-18', type: 'Payment', amount: 20000, status: 'Paid', paymentDetails: 'IMPS-890123' },

    // Franchise F008 transactions (Mumbai South)
    { id: 'T043', franchiseId: 'F011', date: '2025-01-20', type: 'Purchase', amount: 155000, status: 'Pending', paymentDetails: '-' },
    { id: 'T044', franchiseId: 'F011', date: '2025-02-02', type: 'Payment', amount: 145000, status: 'Paid', paymentDetails: 'RTGS-921234' },
    { id: 'T045', franchiseId: 'F011', date: '2024-11-10', type: 'Purchase', amount: 135000, status: 'Overdue', paymentDetails: '-' },
    
    // Franchise F008 transactions (Kolkata Central)
    { id: 'T033', franchiseId: 'F008', date: '2025-01-20', type: 'Purchase', amount: 55000, status: 'Pending', paymentDetails: '-' },
    { id: 'T034', franchiseId: 'F008', date: '2024-10-02', type: 'Payment', amount: 45000, status: 'Paid', paymentDetails: 'RTGS-901234' },
    { id: 'T035', franchiseId: 'F008', date: '2024-10-10', type: 'Purchase', amount: 35000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T036', franchiseId: 'F008', date: '2024-09-25', type: 'Purchase', amount: 40000, status: 'Overdue', paymentDetails: '-' },
    { id: 'T037', franchiseId: 'F008', date: '2024-10-15', type: 'Payment', amount: 30000, status: 'Paid', paymentDetails: 'NEFT-012345' }
];

// Global variables
let selectedFranchiseId = null;

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeDashboard();
    setupEventListeners();
});

// Initialize dashboard components
function initializeDashboard() {
    updateCreditOverview();
    populateFranchiseTable();
    populateFranchiseDropdowns();
}

// Setup event listeners
function setupEventListeners() {
    // Update Credit Limit Form
    document.getElementById('updateCreditLimitForm').addEventListener('submit', (e) => {
        e.preventDefault();
        updateFranchiseCredit();
    });

    // Add Payment Form
    document.getElementById('addPaymentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        addNewPayment();
    });
}

// Update credit overview cards
function updateCreditOverview() {
    const totalCredit = mockFranchises.reduce((sum, franchise) => sum + franchise.creditLimit, 0);
    const availableCredit = mockTransactions
        .filter(t => (t.type === 'Purchase'))
        .reduce((sum, t) => sum + t.amount, 0);
    const pendingAmount = mockTransactions
        .filter(t => (t.status === 'Pending' || t.status === 'Overdue'))
        .reduce((sum, t) => sum + t.amount, 0);
    const overdueAmount = mockTransactions
        .filter(t => t.status === 'Overdue')
        .reduce((sum, t) => sum + t.amount, 0);

    document.getElementById('totalCreditExtended').textContent = `₹${totalCredit.toLocaleString()}`;
    document.getElementById('availableCredit').textContent = `₹${availableCredit.toLocaleString()}`;
    document.getElementById('pendingPayments').textContent = `₹${pendingAmount.toLocaleString()}`;
    document.getElementById('overdueAmount').textContent = `₹${overdueAmount.toLocaleString()}`;
}

// Populate franchise credit management table
function populateFranchiseTable() {
    const tableBody = document.querySelector('#franchiseCreditTable tbody');
    tableBody.innerHTML = '';

    mockFranchises.forEach((franchise, index) => {
        const row = document.createElement('tr');
        const availed = mockTransactions
            .filter(t => (t.type === 'Purchase' && t.franchiseId === franchise.id))
            .reduce((sum, t) => sum + t.amount, 0);
        const paid = mockTransactions
            .filter(t => (t.type === 'Payment' && t.franchiseId === franchise.id))
            .reduce((sum, t) => sum + t.amount, 0);
        row.innerHTML = `
            <td>${franchise.id}</td>
            <td>${franchise.name}</td>
            <td>₹${franchise.creditLimit.toLocaleString()}</td>
            <td>₹${availed - paid}</td>
            <td>${franchise.creditPeriod}</td>
            <td><span class="badge ${getStatusBadgeClass(franchise.status)}">${franchise.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary me-2" onclick="viewTransactions('${franchise.id}')">View Transactions</button>
                <button class="btn btn-sm btn-warning" onclick="editCredit('${franchise.id}')">Edit Credit</button>
            </td>
        `;
        tableBody.appendChild(row);

        // Select first franchise by default
        if (index === 0) {
            viewTransactions(franchise.id);
        }
    });
}

// Get appropriate badge class based on status
function getStatusBadgeClass(status) {
    switch (status.toLowerCase()) {
        case 'active': return 'bg-success';
        case 'blocked': return 'bg-danger';
        case 'pending': return 'bg-warning';
        default: return 'bg-secondary';
    }
}

// Populate franchise dropdowns in modals
function populateFranchiseDropdowns() {
    const dropdowns = ['franchiseSelect', 'paymentFranchiseSelect'];
    dropdowns.forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = '';
        mockFranchises.forEach(franchise => {
            const option = document.createElement('option');
            option.value = franchise.id;
            option.textContent = `${franchise.name} (${franchise.id})`;
            select.appendChild(option);
        });
    });
}

// View transactions for selected franchise
function viewTransactions(franchiseId) {
    selectedFranchiseId = franchiseId;
    const selectedFranchise = mockFranchises.find(f => f.id === franchiseId);
    document.querySelector('#transactionHistoryTitle').textContent = `Transaction History - ${selectedFranchise.name}`;
    const tableBody = document.querySelector('#transactionHistoryTable tbody');
    tableBody.innerHTML = '';

    const franchiseTransactions = mockTransactions.filter(t => t.franchiseId === franchiseId).sort((function(a,b){return (new Date(a.date)).getTime() - (new Date(b.date).getTime())})).reverse();

    franchiseTransactions.forEach(transaction => {
        const row = document.createElement('tr');
        var purchaseDate = new Date(transaction.date);
        var creditPeriod = mockFranchises.find(f => f.id === transaction.franchiseId).creditLimit;
        var dueDate = new Date(purchaseDate.getTime() + (creditPeriod*24*60*60));
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${mockFranchises.find(f => f.id === transaction.franchiseId).name}</td>
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>₹${transaction.amount.toLocaleString()}</td>
            <td>${dueDate.toLocaleDateString('en-US', {year:"numeric", month:"short", day:"numeric"})}</td>
            
            <td><span class="badge ${getTransactionStatusBadgeClass(transaction.status)}">${transaction.status}</span></td>
            <td>${transaction.paymentDetails}</td>
        `;
        tableBody.appendChild(row);
    });

    // Highlight selected franchise in the credit management table
    document.querySelectorAll('#franchiseCreditTable tbody tr').forEach(row => {
        row.classList.remove('table-active');
        if (row.cells[0].textContent === franchiseId) {
            row.classList.add('table-active');
        }
    });
}

// Get appropriate badge class for transaction status
function getTransactionStatusBadgeClass(status) {
    switch (status.toLowerCase()) {
        case 'paid': return 'bg-success';
        case 'pending': return 'bg-warning text-dark';
        case 'overdue': return 'bg-danger';
        default: return 'bg-secondary';
    }
}

// Edit credit limit and period
function editCredit(franchiseId) {
    const franchise = mockFranchises.find(f => f.id === franchiseId);
    document.getElementById('franchiseSelect').value = franchiseId;
    document.getElementById('creditLimit').value = franchise.creditLimit;
    document.getElementById('creditPeriod').value = franchise.creditPeriod;
    new bootstrap.Modal(document.getElementById('updateCreditLimitModal')).show();
}

// Update franchise credit
function updateFranchiseCredit() {
    const franchiseId = document.getElementById('franchiseSelect').value;
    const creditLimit = parseFloat(document.getElementById('creditLimit').value);
    const creditPeriod = parseInt(document.getElementById('creditPeriod').value);

    const franchiseIndex = mockFranchises.findIndex(f => f.id === franchiseId);
    if (franchiseIndex !== -1) {
        mockFranchises[franchiseIndex].creditLimit = creditLimit;
        mockFranchises[franchiseIndex].creditPeriod = creditPeriod;
        // Update available credit based on the new limit
        const availed = mockTransactions
            .filter(t => (t.type === 'Purchase' && t.franchiseId === franchise.id))
            .reduce((sum, t) => sum + t.amount, 0);
        const paid = mockTransactions
            .filter(t => (t.type === 'Payment' && t.franchiseId === franchise.id))
            .reduce((sum, t) => sum + t.amount, 0);
        mockFranchises[franchiseIndex].availableCredit = availed - paid;
    }

    // Refresh the dashboard
    updateCreditOverview();
    populateFranchiseTable();
    bootstrap.Modal.getInstance(document.getElementById('updateCreditLimitModal')).hide();
}

// Add new payment
function addNewPayment() {
    const franchiseId = document.getElementById('paymentFranchiseSelect').value;
    const amount = parseFloat(document.getElementById('paymentAmount').value);
    const paymentMode = document.getElementById('paymentMode').value;
    const transactionId = document.getElementById('transactionId').value;
    const paymentDate = document.getElementById('paymentDate').value;
    const remarks = document.getElementById('paymentRemarks').value;

    const franchiseIndex = mockFranchises.findIndex(f => f.id === franchiseId);
    if (franchiseIndex !== -1) {
        // Add payment transaction
        const newTransaction = {
            id: `T${mockTransactions.length + 1}`.padStart(4, '0'),
            franchiseId,
            date: paymentDate,
            type: 'Payment',
            amount,
            dueDate: paymentDate + mockFranchises[franchiseIndex].creditPeriod,
            status: 'Paid',
            paymentDetails: `${paymentMode}-${transactionId}`
        };
        mockTransactions.push(newTransaction);

        // Update franchise available credit
        mockFranchises[franchiseIndex].availableCredit -= amount;
        // Check if we need to unblock the franchise
        const hasOverdue = mockTransactions.some(t => 
            t.franchiseId === franchiseId && t.status === 'Overdue'
        );
        if (!hasOverdue) {
            mockFranchises[franchiseIndex].status = 'Active';
        }
    }

    // Refresh the dashboard
    updateCreditOverview();
    populateFranchiseTable();
    if (selectedFranchiseId === franchiseId) {
        viewTransactions(franchiseId);
    }
    bootstrap.Modal.getInstance(document.getElementById('addPaymentModal')).hide();
    document.getElementById('addPaymentForm').reset();
}
