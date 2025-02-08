// Finance Dashboard Data Module
export const FinanceData = {
    // Service funnel data
    serviceFunnel: {
        totalRequests: 150,
        openServices: 45,
        completedServices: 105,
        paymentsReceived: 85,
        paymentsPending: 20,
        potentialPayments: 67500  // Estimated at ₹1,500 per open service
    },
    // Summary cards data
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

    // Monthly commission data
    monthlyCommissions: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        spares: [12000, 15000, 18000, 14000, 16000, 19000, 22000, 20000, 25000, 23000, 21000, 25000],
        warranties: [8000, 10000, 12000, 9000, 11000, 13000, 15000, 14000, 16000, 15000, 14000, 16000]
    },

    // Payout history data
    payoutHistory: [
        {
            date: '2024-01-15',
            serviceFees: 15000,
            sparesCommission: 8000,
            warrantyCommission: 2000
        },
        {
            date: '2024-01-01',
            serviceFees: 12000,
            sparesCommission: 6000,
            warrantyCommission: 1500
        },
        {
            date: '2023-12-15',
            serviceFees: 18000,
            sparesCommission: 9000,
            warrantyCommission: 2500
        }
    ]
};