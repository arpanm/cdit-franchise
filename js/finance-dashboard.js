const FinanceData = {
    ledgerData: [
        {
            date: "2024-01-28",
            description: "Commission for Service #SR2401-056",
            category: "commission",
            credit: 3500,
            debit: 0,
            balance: 3500,
            reference: "SR2401-056"
        },
        {
            date: "2024-01-25",
            description: "Early Bird Bonus Scheme Reward",
            category: "schemes",
            credit: 2500,
            debit: 0,
            balance: 6000,
            reference: "SCH-EB-24-01"
        },
        {
            date: "2024-01-20",
            description: "Parts Return - Invoice #INV2401-032",
            category: "returns",
            credit: 1200,
            debit: 0,
            balance: 7200,
            reference: "RET2401-032"
        },
        {
            date: "2024-01-15",
            description: "Monthly Service Fee Payment",
            category: "debit",
            credit: 0,
            debit: 1500,
            balance: 5700,
            reference: "PAY2401-015"
        },
        {
            date: "2024-01-10",
            description: "Commission for Service #SR2401-023",
            category: "commission",
            credit: 2800,
            debit: 0,
            balance: 8500,
            reference: "SR2401-023"
        },
        {
            date: "2024-01-05",
            description: "Spare Parts Purchase",
            category: "debit",
            credit: 0,
            debit: 3500,
            balance: 5000,
            reference: "PO2401-005"
        }
    ],
    engineerPayoutData : [
        {
            name: "Raj Kumar",
            servicesAttended: 45,
            sparesSold: 25000,
            accessoriesSold: 15000,
            attendance: "22/25",
            conveyance: 2200,
            targetAchievement: 85
        },
        {
            name: "Amit Shah",
            servicesAttended: 38,
            sparesSold: 20000,
            accessoriesSold: 12000,
            attendance: "24/25",
            conveyance: 2400,
            targetAchievement: 92
        },
        {
            name: "Priya Patel",
            servicesAttended: 42,
            sparesSold: 28000,
            accessoriesSold: 18000,
            attendance: "23/25",
            conveyance: 2300,
            targetAchievement: 95
        }
    ],
    schemes: [
        {
            name: "Early Bird Bonus",
            type: "Commission",
            eligibility: "Complete 10 service requests before 10 AM",
            reward: "Additional 5% commission on service fees",
            validFrom: "2024-01-01",
            validTo: "2024-03-31",
            status: "Active"
        },
        {
            name: "Customer Satisfaction Champion",
            type: "Performance",
            eligibility: "Maintain 4.8+ rating for 3 months",
            reward: "₹10,000 quarterly bonus",
            validFrom: "2024-01-01",
            validTo: "2024-12-31",
            status: "Active"
        },
        {
            name: "Service Excellence",
            type: "Performance",
            eligibility: "Zero complaints for 6 months",
            reward: "₹25,000 bonus + Gold Badge",
            validFrom: "2024-01-01",
            validTo: "2024-12-31",
            status: "Active"
        },
        {
            name: "Quick Resolution",
            type: "Commission",
            eligibility: "Resolve service requests within 24 hours",
            reward: "Additional 3% commission",
            validFrom: "2024-02-01",
            validTo: "2024-04-30",
            status: "Upcoming"
        }
    ],
    serviceFunnel: {
        totalRequests: 150,
        openServices: 45,
        completedServices: 105,
        paymentsReceived: 85,
        paymentsPending: 20,
        potentialPayments: 67500
    },
    summaryCards: {
        totalCommissions: {
            amount: 25000,
            period: "This Month"
        },
        pendingReceivables: {
            amount: 12300,
            transactions: 8
        },
        serviceFeesEarned: {
            amount: 45000,
            period: "This Month"
        }
    },
    monthlyCommissions: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        commissionAgainstSales: [12000, 15000, 18000, 14000, 16000, 19000, 22000, 20000, 25000, 23000, 21000, 25000],
        paymentAgainstServices: [48000, 60000, 72000, 56000, 64000, 76000, 88000, 80000, 100000, 92000, 84000, 100000]
    },
    payoutHistory: [
        {
            date: '2024-01-15',
            transactionId: 'TRX-001',
            amount: '₹15,000',
            invoiceId: 'INV-001',
            ledgerData: [
                {
                    date: "2024-01-28",
                    description: "Commission for Service #SR2401-056",
                    category: "commission",
                    credit: 3500,
                    debit: 0,
                    balance: 3500,
                    reference: "SR2401-056"
                },
                {
                    date: "2024-01-25",
                    description: "Early Bird Bonus Scheme Reward",
                    category: "schemes",
                    credit: 2500,
                    debit: 0,
                    balance: 6000,
                    reference: "SCH-EB-24-01"
                },
                {
                    date: "2024-01-20",
                    description: "Parts Return - Invoice #INV2401-032",
                    category: "returns",
                    credit: 1200,
                    debit: 0,
                    balance: 7200,
                    reference: "RET2401-032"
                },
                {
                    date: "2024-01-15",
                    description: "Monthly Service Fee Payment",
                    category: "debit",
                    credit: 0,
                    debit: 1500,
                    balance: 5700,
                    reference: "PAY2401-015"
                },
                {
                    date: "2024-01-10",
                    description: "Commission for Service #SR2401-023",
                    category: "commission",
                    credit: 2800,
                    debit: 0,
                    balance: 8500,
                    reference: "SR2401-023"
                },
                {
                    date: "2024-01-05",
                    description: "Spare Parts Purchase",
                    category: "debit",
                    credit: 0,
                    debit: 3500,
                    balance: 5000,
                    reference: "PO2401-005"
                }
            ],
            hasCertificate: false,
            disputeStatus: 'None',
            disputeDetails: null
        },
        {
            date: '2024-01-10',
            transactionId: 'TRX-002',
            amount: '₹12,500',
            invoiceId: 'INV-002',
            hasCertificate: true,
            disputeStatus: 'Pending',
            disputeDetails: {
                type: 'Amount Mismatch',
                description: 'The received amount is less than expected',
                submittedDate: '2024-01-12'
            }
        },
        {
            date: '2024-01-05',
            transactionId: 'TRX-003',
            amount: '₹18,000',
            invoiceId: 'INV-003',
            hasCertificate: false,
            disputeStatus: 'Resolved',
            disputeDetails: {
                type: 'Payment Delay',
                description: 'Payment received after due date',
                submittedDate: '2024-01-06',
                resolvedDate: '2024-01-08',
                resolution: 'Late payment fee adjusted'
            }
        }
    ]
};

class FinanceDashboard {
    constructor() {
        this.data = FinanceData;
        this.engineerPayoutData = [
            {
                name: "Raj Kumar",
                servicesAttended: 45,
                sparesSold: 25000,
                accessoriesSold: 15000,
                attendance: "22/25",
                conveyance: 2200,
                targetAchievement: 85
            },
            {
                name: "Amit Shah",
                servicesAttended: 38,
                sparesSold: 20000,
                accessoriesSold: 12000,
                attendance: "24/25",
                conveyance: 2400,
                targetAchievement: 92
            },
            {
                name: "Priya Patel",
                servicesAttended: 42,
                sparesSold: 28000,
                accessoriesSold: 18000,
                attendance: "23/25",
                conveyance: 2300,
                targetAchievement: 95
            }
        ];
        this.initialize();
    }

    initialize() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeDashboard());
        } else {
            this.initializeDashboard();
        }

        // Add event listener for month change
        const monthSelect = document.getElementById('engineerPayoutMonth');
        if (monthSelect) {
            monthSelect.addEventListener('change', () => this.updateEngineerPayoutTable());
        }
    }

    initializeDashboard() {
        this.updateSummaryCards();
        this.initializeCommissionsTable();
        this.initializeServiceFunnelTable();
        this.updateEngineerPayoutTable();
        this.populatePayoutTable();
        this.initializeSchemesTable();
        this.initializeLedgerTable();
    }

    updateSummaryCards() {
        const { totalCommissions, pendingReceivables, serviceFeesEarned } = this.data.summaryCards;
        
        document.querySelector('.card.bg-primary h2').textContent = `₹${totalCommissions.amount.toLocaleString()}`;
        document.querySelector('.card.bg-primary small').textContent = totalCommissions.period;

        document.querySelector('.card.bg-warning h2').textContent = `₹${pendingReceivables.amount.toLocaleString()}`;
        document.querySelector('.card.bg-warning small').textContent = `From ${pendingReceivables.transactions} transactions`;

        document.querySelector('.card.bg-success h2').textContent = `₹${serviceFeesEarned.amount.toLocaleString()}`;
        document.querySelector('.card.bg-success small').textContent = serviceFeesEarned.period;
    }

    initializeCommissionsTable() {
        const tbody = document.querySelector('#commissionsTable tbody');
        const { labels, commissionAgainstSales, paymentAgainstServices } = this.data.monthlyCommissions;

        tbody.innerHTML = '';

        // Create an array of indices and sort them in reverse order
        const sortedIndices = Array.from(labels.keys()).sort((a, b) => b - a);

        sortedIndices.forEach(index => {
            const month = labels[index];
            const salesCommission = commissionAgainstSales[index];
            const servicePayment = paymentAgainstServices[index];
            const total = salesCommission + servicePayment;
            const isLastTwoMonths = index >= labels.length - 2;
            const paymentReceived = isLastTwoMonths ? Math.round(total * 0.8) : total;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${month}</td>
                <td>₹${salesCommission.toLocaleString()}</td>
                <td>₹${servicePayment.toLocaleString()}</td>
                <td>₹${total.toLocaleString()}</td>
                <td>₹${paymentReceived.toLocaleString()}</td>
                <td>₹${(total - paymentReceived).toLocaleString()}</td>
            `;
            tbody.appendChild(row);
        });
    }

    initializeServiceFunnelTable() {
        const tbody = document.querySelector('#serviceFunnelTable tbody');
        const { serviceFunnel } = this.data;
        
        tbody.innerHTML = '';

        const avgPaymentPerService = serviceFunnel.potentialPayments / serviceFunnel.openServices;
        const stages = [
            { name: 'Total Requests', value: serviceFunnel.totalRequests, indent: '', isTotal: true, color: 'blue' },
            { name: 'Open Services', value: serviceFunnel.openServices, indent: '&nbsp;&nbsp;&nbsp;&nbsp;', payment: serviceFunnel.potentialPayments, color: 'chocolate' },
            { name: 'Completed Services', value: serviceFunnel.completedServices, indent: '&nbsp;&nbsp;&nbsp;&nbsp;', color: 'blue' },
            { name: 'Payments Received', value: serviceFunnel.paymentsReceived, indent: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', payment: serviceFunnel.paymentsReceived * avgPaymentPerService, color: 'green' },
            { name: 'Payments Pending', value: serviceFunnel.paymentsPending, indent: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', payment: serviceFunnel.paymentsPending * avgPaymentPerService, color: 'red' }
        ];

        stages.forEach(stage => {
            let percentage;
            if (stage.isTotal) {
                percentage = 100;
            } else if (stage.name === 'Open Services' || stage.name === 'Completed Services') {
                percentage = (stage.value / serviceFunnel.totalRequests * 100).toFixed(1);
            } else {
                percentage = (stage.value / serviceFunnel.completedServices * 100).toFixed(1);
            }

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stage.indent}${stage.name}</td>
                <td>${stage.value}${stage.payment ? ` (₹${stage.payment.toLocaleString()})` : ''}</td>
                <td>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${percentage}%; background-color:${stage.color}" 
                             aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">
                            ${percentage}%
                        </div>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    initializeSchemesTable() {
        const tbody = document.getElementById('schemesTableBody');
        tbody.innerHTML = '';

        this.data.schemes.forEach(scheme => {
            const row = document.createElement('tr');
            const validFrom = new Date(scheme.validFrom);
            const validTo = new Date(scheme.validTo);
            const today = new Date();
            let statusClass = '';

            if (scheme.status === 'Active') {
                statusClass = 'bg-success';
            } else if (scheme.status === 'Upcoming') {
                statusClass = 'bg-info';
            } else {
                statusClass = 'bg-secondary';
            }

            row.innerHTML = `
                <td>
                    <strong>${scheme.name}</strong>
                    <div class="small text-muted">${scheme.type}</div>
                </td>
                <td>${scheme.eligibility}</td>
                <td>${scheme.reward}</td>
                <td>
                    <div>From: ${formatDate(scheme.validFrom)}</div>
                    <div>To: ${formatDate(scheme.validTo)}</div>
                </td>
                <td>
                    <span class="badge ${statusClass}">${scheme.status}</span>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    populatePayoutTable() {
        const tbody = document.getElementById('payoutTableBody');
        tbody.innerHTML = '';

        this.data.payoutHistory.forEach(payout => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${formatDate(payout.date)}</td>
                <td>${payout.transactionId}</td>
                <td>${payout.amount}</td>
                <td>
                    <a href="#" class="btn btn-sm btn-primary" onclick="downloadInvoice('${payout.invoiceId}')">
                        <i class="bi bi-download me-1"></i>Download
                    </a>
                </td>
                <td>
                    ${payout.hasCertificate ? 
                        `<a href="#" class="btn btn-sm btn-success" onclick="viewCertificate('${payout.transactionId}')">View Certificate</a>` :
                        `<div class="d-flex gap-2">
                            <input type="file" class="d-none certificate-upload" id="cert-${payout.transactionId}" 
                                accept=".pdf,.jpg,.jpeg,.png" data-transaction-id="${payout.transactionId}">
                            <button class="btn btn-sm btn-outline-primary" 
                                onclick="document.getElementById('cert-${payout.transactionId}').click()">
                                Upload Certificate
                            </button>
                        </div>`
                    }
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    initializeLedgerTable() {
        const tbody = document.getElementById('ledgerTableBody');
        const ledgerFilter = document.getElementById('ledgerFilter');
        tbody.innerHTML = '';

        let filteredData = this.data.ledgerData;
        if (ledgerFilter.value !== 'all') {
            filteredData = this.data.ledgerData.filter(item => item.category === ledgerFilter.value);
        }

        let totalCredit = 0;
        let totalDebit = 0;

        filteredData.forEach(transaction => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${formatDate(transaction.date)}</td>
                <td>${transaction.description}</td>
                <td>${transaction.category}</td>
                <td>₹${transaction.credit.toLocaleString()}</td>
                <td>₹${transaction.debit.toLocaleString()}</td>
                <td>₹${transaction.balance.toLocaleString()}</td>
                <td>${transaction.reference}</td>
            `;
            tbody.appendChild(row);

            totalCredit += transaction.credit;
            totalDebit += transaction.debit;
        });

        // Update totals
        document.getElementById('totalCredit').textContent = `₹${totalCredit.toLocaleString()}`;
        document.getElementById('totalDebit').textContent = `₹${totalDebit.toLocaleString()}`;
        document.getElementById('netBalance').textContent = `₹${(totalCredit - totalDebit).toLocaleString()}`;

        // Add filter change event listener
        ledgerFilter.addEventListener('change', () => this.initializeLedgerTable());
    }

    updateEngineerPayoutTable() {
        const tbody = document.querySelector('#engineerPayoutTable tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        let totalServices = 0;
        let totalSpares = 0;
        let totalAccessories = 0;
        let totalConveyance = 0;
        let totalPayout = 0;

        this.data.engineerPayoutData.forEach(engineer => {
            const row = document.createElement('tr');
            const payout = calculatePayout(engineer);
            totalServices += engineer.servicesAttended;
            totalSpares += engineer.sparesSold;
            totalAccessories += engineer.accessoriesSold;
            totalConveyance += engineer.conveyance;
            totalPayout += payout;

            row.innerHTML = `
                <td>${engineer.name}</td>
                <td>${engineer.servicesAttended}</td>
                <td>₹${engineer.sparesSold.toLocaleString()}</td>
                <td>₹${engineer.accessoriesSold.toLocaleString()}</td>
                <td>${engineer.attendance}</td>
                <td>₹${engineer.conveyance.toLocaleString()}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <div class="progress flex-grow-1 me-2" style="height: 8px;">
                            <div class="progress-bar ${this.getAchievementClass(engineer.targetAchievement)}" 
                                 style="width: ${engineer.targetAchievement}%"></div>
                        </div>
                        <span>${engineer.targetAchievement}%</span>
                    </div>
                </td>
                <td>₹${payout.toLocaleString()}</td>
            `;
            tbody.appendChild(row);
        });

        // Update totals
        document.getElementById('totalServices').textContent = totalServices;
        document.getElementById('totalSpares').textContent = `₹${totalSpares.toLocaleString()}`;
        document.getElementById('totalAccessories').textContent = `₹${totalAccessories.toLocaleString()}`;
        document.getElementById('totalConveyance').textContent = `₹${totalConveyance.toLocaleString()}`;
        document.getElementById('totalPayout').textContent = `₹${totalPayout.toLocaleString()}`;
    }



    getAchievementClass(percentage) {
        if (percentage >= 95) return 'bg-success';
        if (percentage >= 85) return 'bg-info';
        if (percentage >= 75) return 'bg-warning';
        return 'bg-danger';
    }
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function downloadInvoice(invoiceId) {
    console.log(`Downloading invoice: ${invoiceId}`);
    alert(`Invoice ${invoiceId} download started`);
}

function viewCertificate(transactionId) {
    // In a real application, this would fetch and display the certificate
    alert(`Viewing certificate for transaction ${transactionId}`);
}

// Open dispute modal with transaction details
function openDisputeModal() {
    // Reset form fields
    document.getElementById('disputeTransactionId').value = '';
    document.getElementById('disputeType').value = '';
    document.getElementById('disputeDescription').value = '';
    document.getElementById('disputeDocuments').value = '';
    
    const disputeModal = new bootstrap.Modal(document.getElementById('disputeModal'));
    disputeModal.show();
}

// Add event listeners for certificate uploads
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('change', function(e) {
        if (e.target && e.target.classList.contains('certificate-upload')) {
            const file = e.target.files[0];
            const transactionId = e.target.dataset.transactionId;

            if (file) {
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size should not exceed 5MB');
                    return;
                }

                // Validate file type
                const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
                if (!validTypes.includes(file.type)) {
                    alert('Please upload a PDF or image file');
                    return;
                }

                // Here you would typically upload the file to your server
                // For demo purposes, we'll just show a success message
                alert(`Certificate uploaded successfully for transaction ${transactionId}`);
                
                // Update the UI to show the certificate is uploaded
                const parentTd = e.target.closest('td');
                parentTd.innerHTML = `<a href="#" class="btn btn-sm btn-success" onclick="viewCertificate('${transactionId}')">View Certificate</a>`;
            }
        }
    });
});

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPayoutHistory();
});

// Load payout history and dispute history data
function loadPayoutHistory() {
    const tableBody = document.getElementById('payoutTableBody');
    const disputeTableBody = document.getElementById('disputeTableBody');
    tableBody.innerHTML = '';
    disputeTableBody.innerHTML = '';

    // Populate dispute history table
    FinanceData.payoutHistory.filter(payout => payout.disputeStatus !== 'None').forEach(payout => {
        if (payout.disputeDetails) {
            const disputeRow = document.createElement('tr');
            disputeRow.innerHTML = `
                <td>${payout.transactionId}</td>
                <td>${payout.disputeDetails.type}</td>
                <td>${payout.disputeDetails.description}</td>
                <td>
                    <span class="badge ${getDisputeStatusBadgeClass(payout.disputeStatus)}">
                        ${payout.disputeStatus}
                    </span>
                </td>
                <td>${formatDate(payout.disputeDetails.submittedDate)}</td>
                <td>${payout.disputeDetails.resolution || '-'}</td>
                <td>
                    ${payout.disputeStatus === 'Pending' ? 
                        `<button class="btn btn-sm btn-info" onclick="viewDisputeDetails('${payout.transactionId}')">View Details</button>` : 
                        '-'
                    }
                </td>
            `;
            disputeTableBody.appendChild(disputeRow);
        }
    });

    // Populate payout history table
    FinanceData.payoutHistory.forEach(payout => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(payout.date)}</td>
            <td>${payout.transactionId}</td>
            <td>${payout.amount}</td>
            <td>
                <a href="#" class="btn btn-sm btn-primary" onclick="downloadInvoice('${payout.invoiceId}')">
                    <i class="bi bi-download me-1"></i>Download
                </a>
            </td>
            <td>
                ${payout.hasCertificate ? 
                    `<a href="#" class="btn btn-sm btn-success" onclick="viewCertificate('${payout.transactionId}')">View Certificate</a>` :
                    `<div class="d-flex gap-2">
                        <input type="file" class="d-none certificate-upload" id="cert-${payout.transactionId}" 
                            accept=".pdf,.jpg,.jpeg,.png" data-transaction-id="${payout.transactionId}">
                        <button class="btn btn-sm btn-outline-primary" 
                            onclick="document.getElementById('cert-${payout.transactionId}').click()">
                            Upload Certificate
                        </button>
                    </div>`
                }
            </td>
            <td>
                <span class="badge ${getDisputeStatusBadgeClass(payout.disputeStatus)}">
                    ${payout.disputeStatus}
                </span>
                ${payout.disputeDetails ? 
                    `<div class="small text-muted mt-1">
                        ${payout.disputeDetails.type}<br>
                        <small>Submitted: ${formatDate(payout.disputeDetails.submittedDate)}</small>
                        ${payout.disputeDetails.resolvedDate ? 
                            `<br><small>Resolved: ${formatDate(payout.disputeDetails.resolvedDate)}</small>` : ''}
                    </div>` : ''}
            </td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="openDisputeModal('${payout.transactionId}')"
                    ${payout.disputeStatus !== 'None' ? 'disabled' : ''}>
                    Raise Dispute
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Helper function to get appropriate badge class for dispute status
function getDisputeStatusBadgeClass(status) {
    switch(status) {
        case 'Pending':
            return 'bg-warning text-dark';
        case 'Resolved':
            return 'bg-success';
        default:
            return 'bg-secondary';
    }
}

// Function to view dispute details
function viewDisputeDetails(transactionId) {
    const payout = FinanceData.payoutHistory.find(p => p.transactionId === transactionId);
    if (payout && payout.disputeDetails) {
        const modalContent = `
            <div class="modal-header">
                <h5 class="modal-title">Dispute Details - ${transactionId}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <strong>Transaction Amount:</strong> ${payout.amount}
                </div>
                <div class="mb-3">
                    <strong>Dispute Type:</strong> ${payout.disputeDetails.type}
                </div>
                <div class="mb-3">
                    <strong>Description:</strong> ${payout.disputeDetails.description}
                </div>
                <div class="mb-3">
                    <strong>Submitted Date:</strong> ${formatDate(payout.disputeDetails.submittedDate)}
                </div>
                <div class="mb-3">
                    <strong>Status:</strong> 
                    <span class="badge ${getDisputeStatusBadgeClass(payout.disputeStatus)}">
                        ${payout.disputeStatus}
                    </span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        `;

        const modalElement = document.getElementById('disputeModal');
        modalElement.querySelector('.modal-content').innerHTML = modalContent;
        const disputeModal = new bootstrap.Modal(modalElement);
        disputeModal.show();
    }
}

// Open dispute modal with transaction details
function openDisputeModal(transactionId) {
    document.getElementById('disputeTransactionId').value = transactionId;
    const disputeModal = new bootstrap.Modal(document.getElementById('disputeModal'));
    disputeModal.show();
}

// Open dispute modal with transaction details
function openDisputeModal() {
    document.getElementById('disputeTransactionId').value = transactionId;
    const disputeModal = new bootstrap.Modal(document.getElementById('disputeModal'));
    disputeModal.show();
}

// Handle dispute form submission
function submitDispute() {
    const transactionId = document.getElementById('disputeTransactionId').value;
    const disputeType = document.getElementById('disputeType').value;
    const description = document.getElementById('disputeDescription').value;
    const documents = document.getElementById('disputeDocuments').files;

    if (!disputeType || !description) {
        alert('Please fill in all required fields');
        return;
    }

    // Mock API call to submit dispute
    console.log('Submitting dispute:', {
        transactionId,
        disputeType,
        description,
        documentsCount: documents.length
    });

    // Update UI to reflect the new dispute
    const disputeIndex = FinanceData.payoutHistory.findIndex(p => p.transactionId === transactionId);
    if (disputeIndex !== -1) {
        FinanceData.payoutHistory[disputeIndex].disputeStatus = 'Pending';
        FinanceData.payoutHistory[disputeIndex].disputeDetails = {
            type: disputeType,
            description: description,
            submittedDate: new Date().toISOString().split('T')[0]
        };
        loadPayoutHistory();
    }

    // Close the modal
    const disputeModal = bootstrap.Modal.getInstance(document.getElementById('disputeModal'));
    disputeModal.hide();

    // Show success message
    alert('Dispute submitted successfully!');
}

    function getCategoryBadgeClass(category) {
        switch(category) {
            case 'commission':
                return 'bg-primary';
            case 'schemes':
                return 'bg-success';
            case 'returns':
                return 'bg-info';
            case 'debit':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }

function exportPayoutReport() {
    // Get the selected month
    const monthSelect = document.getElementById('engineerPayoutMonth');
    const selectedMonth = monthSelect.options[monthSelect.selectedIndex].text;

    // Create CSV header
    let csvContent = 'Engineer Name,Services Attended,Spares Sold (₹),Accessories Sold (₹),Attendance,Conveyance (₹),Target Achievement (%),Total Payout (₹)\n';

    // Add data rows
    FinanceData.engineerPayoutData.forEach(engineer => {
        const payout = this.calculatePayout(engineer);
        csvContent += `"${engineer.name}",${engineer.servicesAttended},${engineer.sparesSold},${engineer.accessoriesSold},"${engineer.attendance}",${engineer.conveyance},${engineer.targetAchievement},${payout}\n`;
    });

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    // Set up download link
    link.setAttribute('href', url);
    link.setAttribute('download', `Engineer_Payout_Report_${selectedMonth.replace(' ', '_')}.csv`);
    link.style.visibility = 'hidden';

    // Append link, trigger download, and cleanup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Open dispute modal with transaction details
function openDisputeModal() {
    // Reset form fields
    document.getElementById('disputeTransactionId').value = '';
    document.getElementById('disputeType').value = '';
    document.getElementById('disputeDescription').value = '';
    document.getElementById('disputeDocuments').value = '';
    
    const disputeModal = new bootstrap.Modal(document.getElementById('disputeModal'));
    disputeModal.show();
}

// Add event listeners for certificate uploads
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('change', function(e) {
        if (e.target && e.target.classList.contains('certificate-upload')) {
            const file = e.target.files[0];
            const transactionId = e.target.dataset.transactionId;

            if (file) {
                // Validate file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size should not exceed 5MB');
                    return;
                }

                // Validate file type
                const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
                if (!validTypes.includes(file.type)) {
                    alert('Please upload a PDF or image file');
                    return;
                }

                // Here you would typically upload the file to your server
                // For demo purposes, we'll just show a success message
                alert(`Certificate uploaded successfully for transaction ${transactionId}`);
                
                // Update the UI to show the certificate is uploaded
                const parentTd = e.target.closest('td');
                parentTd.innerHTML = `<a href="#" class="btn btn-sm btn-success" onclick="viewCertificate('${transactionId}')">View Certificate</a>`;
            }
        }
    });
});

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadPayoutHistory();
});

// Load payout history and dispute history data
function loadPayoutHistory() {
    const tableBody = document.getElementById('payoutTableBody');
    const disputeTableBody = document.getElementById('disputeTableBody');
    tableBody.innerHTML = '';
    disputeTableBody.innerHTML = '';

    // Populate dispute history table
    FinanceData.payoutHistory.filter(payout => payout.disputeStatus !== 'None').forEach(payout => {
        if (payout.disputeDetails) {
            const disputeRow = document.createElement('tr');
            disputeRow.innerHTML = `
                <td>${payout.transactionId}</td>
                <td>${payout.disputeDetails.type}</td>
                <td>${payout.disputeDetails.description}</td>
                <td>
                    <span class="badge ${getDisputeStatusBadgeClass(payout.disputeStatus)}">
                        ${payout.disputeStatus}
                    </span>
                </td>
                <td>${formatDate(payout.disputeDetails.submittedDate)}</td>
                <td>${payout.disputeDetails.resolution || '-'}</td>
                <td>
                    ${payout.disputeStatus === 'Pending' ? 
                        `<button class="btn btn-sm btn-info" onclick="viewDisputeDetails('${payout.transactionId}')">View Details</button>` : 
                        '-'
                    }
                </td>
            `;
            disputeTableBody.appendChild(disputeRow);
        }
    });

    // Populate payout history table
    FinanceData.payoutHistory.forEach(payout => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${formatDate(payout.date)}</td>
            <td>${payout.transactionId}</td>
            <td>${payout.amount}</td>
            <td>
                <a href="#" class="btn btn-sm btn-primary" onclick="downloadInvoice('${payout.invoiceId}')">
                    <i class="bi bi-download me-1"></i>Download
                </a>
            </td>
            <td>
                ${payout.hasCertificate ? 
                    `<a href="#" class="btn btn-sm btn-success" onclick="viewCertificate('${payout.transactionId}')">View Certificate</a>` :
                    `<div class="d-flex gap-2">
                        <input type="file" class="d-none certificate-upload" id="cert-${payout.transactionId}" 
                            accept=".pdf,.jpg,.jpeg,.png" data-transaction-id="${payout.transactionId}">
                        <button class="btn btn-sm btn-outline-primary" 
                            onclick="document.getElementById('cert-${payout.transactionId}').click()">
                            Upload Certificate
                        </button>
                    </div>`
                }
            </td>
            <td>
                <span class="badge ${getDisputeStatusBadgeClass(payout.disputeStatus)}">
                    ${payout.disputeStatus}
                </span>
                ${payout.disputeDetails ? 
                    `<div class="small text-muted mt-1">
                        ${payout.disputeDetails.type}<br>
                        <small>Submitted: ${formatDate(payout.disputeDetails.submittedDate)}</small>
                        ${payout.disputeDetails.resolvedDate ? 
                            `<br><small>Resolved: ${formatDate(payout.disputeDetails.resolvedDate)}</small>` : ''}
                    </div>` : ''}
            </td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="openDisputeModal('${payout.transactionId}')"
                    ${payout.disputeStatus !== 'None' ? 'disabled' : ''}>
                    Raise Dispute
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Helper function to get appropriate badge class for dispute status
function getDisputeStatusBadgeClass(status) {
    switch(status) {
        case 'Pending':
            return 'bg-warning text-dark';
        case 'Resolved':
            return 'bg-success';
        default:
            return 'bg-secondary';
    }
}

// Function to view dispute details
function viewDisputeDetails(transactionId) {
    const payout = FinanceData.payoutHistory.find(p => p.transactionId === transactionId);
    if (payout && payout.disputeDetails) {
        const modalContent = `
            <div class="modal-header">
                <h5 class="modal-title">Dispute Details - ${transactionId}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <strong>Transaction Amount:</strong> ${payout.amount}
                </div>
                <div class="mb-3">
                    <strong>Dispute Type:</strong> ${payout.disputeDetails.type}
                </div>
                <div class="mb-3">
                    <strong>Description:</strong> ${payout.disputeDetails.description}
                </div>
                <div class="mb-3">
                    <strong>Submitted Date:</strong> ${formatDate(payout.disputeDetails.submittedDate)}
                </div>
                <div class="mb-3">
                    <strong>Status:</strong> 
                    <span class="badge ${getDisputeStatusBadgeClass(payout.disputeStatus)}">
                        ${payout.disputeStatus}
                    </span>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        `;

        const modalElement = document.getElementById('disputeModal');
        modalElement.querySelector('.modal-content').innerHTML = modalContent;
        const disputeModal = new bootstrap.Modal(modalElement);
        disputeModal.show();
    }
}

// Open dispute modal with transaction details
function openDisputeModal(transactionId) {
    document.getElementById('disputeTransactionId').value = transactionId;
    const disputeModal = new bootstrap.Modal(document.getElementById('disputeModal'));
    disputeModal.show();
}

// Open dispute modal with transaction details
function openDisputeModal() {
    document.getElementById('disputeTransactionId').value = transactionId;
    const disputeModal = new bootstrap.Modal(document.getElementById('disputeModal'));
    disputeModal.show();
}

// Handle dispute form submission
function submitDispute() {
    const transactionId = document.getElementById('disputeTransactionId').value;
    const disputeType = document.getElementById('disputeType').value;
    const description = document.getElementById('disputeDescription').value;
    const documents = document.getElementById('disputeDocuments').files;

    if (!disputeType || !description) {
        alert('Please fill in all required fields');
        return;
    }

    // Mock API call to submit dispute
    console.log('Submitting dispute:', {
        transactionId,
        disputeType,
        description,
        documentsCount: documents.length
    });

    // Update UI to reflect the new dispute
    const disputeIndex = FinanceData.payoutHistory.findIndex(p => p.transactionId === transactionId);
    if (disputeIndex !== -1) {
        FinanceData.payoutHistory[disputeIndex].disputeStatus = 'Pending';
        FinanceData.payoutHistory[disputeIndex].disputeDetails = {
            type: disputeType,
            description: description,
            submittedDate: new Date().toISOString().split('T')[0]
        };
        loadPayoutHistory();
    }

    // Close the modal
    const disputeModal = bootstrap.Modal.getInstance(document.getElementById('disputeModal'));
    disputeModal.hide();

    // Show success message
    alert('Dispute submitted successfully!');
}

    function getCategoryBadgeClass(category) {
        switch(category) {
            case 'commission':
                return 'bg-primary';
            case 'schemes':
                return 'bg-success';
            case 'returns':
                return 'bg-info';
            case 'debit':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    }
    function calculatePayout(engineer) {
        // Base payout calculation
        const serviceBasePay = engineer.servicesAttended * 200; // ₹200 per service
        const sparesCommission = engineer.sparesSold * 0.05; // 5% commission on spares
        const accessoriesCommission = engineer.accessoriesSold * 0.08; // 8% commission on accessories
        
        // Attendance bonus (if attendance > 90%)
        const [present, total] = engineer.attendance.split('/');
        const attendancePercentage = (parseInt(present) / parseInt(total)) * 100;
        const attendanceBonus = attendancePercentage >= 90 ? 1000 : 0;

        // Target achievement bonus
        let achievementBonus = 0;
        if (engineer.targetAchievement >= 95) achievementBonus = 5000;
        else if (engineer.targetAchievement >= 85) achievementBonus = 3000;
        else if (engineer.targetAchievement >= 75) achievementBonus = 1500;

        return serviceBasePay + sparesCommission + accessoriesCommission + 
               engineer.conveyance + attendanceBonus + achievementBonus;
    }

const dashboard = new FinanceDashboard();