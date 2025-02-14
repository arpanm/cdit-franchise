// Engineer Management Data Module
export const engineersData = {
    // Summary data
    summary: {
        totalEngineers: 25,
        activeEngineers: 20,
        avgDailyServices: 8,
        totalServiceAreas: 15
    },

    // Available brands and categories
    brands: ['Samsung', 'LG', 'Whirlpool', 'Haier', 'Godrej', 'IFB'],
    categories: ['Refrigerator', 'Washing Machine', 'Air Conditioner', 'Microwave', 'Dishwasher'],

    // Engineers data
    engineers: [
        {
            id: 'ENG001',
            name: 'Rajesh Kumar',
            contact: '9876543210',
            brands: ['Samsung', 'LG', 'Whirlpool'],
            categories: ['Refrigerator', 'Washing Machine'],
            servicePincodes: ['400001', '400002', '400003'],
            performanceScore: 4.5,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27,29,30],
                        convenience: [4,11,18,25]
                    }
                },
                services: {
                    '2024-01': {
                        completed: 45,
                        dailyBreakdown: [2,3,1,2,3,2,1,2,3,2,1,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 15000,
                        spares: 25000,
                        dailyBreakdown: {
                            accessories: [500,600,700,800,500,600,700,800,500,600,700,800,500,600,700],
                            spares: [1000,1200,800,1500,1000,1200,800,1500,1000,1200,800,1500,1000,1200,800]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 12000,
                        salesCommission: 4000,
                        convenienceDeduction: 2000,
                        totalPayout: 14000,
                        dailyBreakdown: [500,600,400,500,600,400,500,600,400,500,600,400,500,600,400]
                    }
                }
            }
        },
        // Add more engineer data here
    ]
};