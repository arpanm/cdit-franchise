const mockEngineersData = {
    // Summary data
    summary: {
        totalEngineers: 25,
        activeEngineers: 20,
        avgDailyServices: 8
    },

    // Available brands and categories
    brands: ['Samsung', 'LG', 'Whirlpool', 'Haier', 'Godrej', 'IFB'],
    categories: ['Refrigerator', 'Washing Machine', 'Air Conditioner', 'Microwave', 'Dishwasher'],
    languages: ['Hindi', 'English', 'Marathi', 'Bengali', 'Gujarati', 'Urdu', 'Punjabi', 'Telugu', 'Kannada', 'Tamil', 'Kashmiri'],

    // Engineers data
    engineers: [
        {
            id: 'ENG001',
            name: 'Rajesh Kumar',
            contact: '9876543210',
            brands: ['Samsung', 'LG', 'Whirlpool'],
            categories: ['Refrigerator', 'Washing Machine'],
            languages: ['Hindi', 'English', 'Marathi'],
            servicePincodes: ['400001', '400002', '400003'],
            performanceScore: 4.5,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27,29,30],
                        convenience: [1,4,8,15,16,21,23,25],
                        times: {
                            1: { start: '09:00', end: '18:00' },
                            2: { start: '09:30', end: '18:30' },
                            3: { start: '09:00', end: '18:00' },
                            4: { start: '09:00', end: '18:00' },
                            5: { start: '10:00', end: '19:30' },
                            6: { start: '09:00', end: '18:00' },
                            8: { start: '09:00', end: '18:00' },
                            9: { start: '09:30', end: '18:30' },
                            10: { start: '10:00', end: '19:00' }
                        },
                        convenienceAmount: {
                            1: 200,
                            4: 200,
                            8: 200,
                            15: 200,
                            16: 200,
                            21: 200,
                            23: 200,
                            25: 200
                        }
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
                        convenienceAllowance: 2000,
                        totalPayout: 18000,
                        servicesCount: 60,
                        sparesAmount: 80000,
                        accessoriesAmount: 50000,
                        convenienceDays: 10,
                        dailyBreakdown: [500,600,400,500,600,400,500,600,400,500,600,400,500,600,400]
                    }
                }
            }
        },
        {
            id: 'ENG002',
            name: 'Priya Singh',
            contact: '9876543211',
            brands: ['Samsung', 'LG'],
            categories: ['Air Conditioner'],
            languages: ['Bengali', 'English'],
            servicePincodes: ['400004', '400005'],
            performanceScore: 4.8,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,4,5,8,9,10,11,12,15,16,17,18,19,22,23,24,25,26,29,30],
                        convenience: [1,4,8,15,16,21,23,25],
                        times: {
                            1: { start: '09:00', end: '18:00' },
                            2: { start: '09:30', end: '18:30' },
                            3: { start: '09:00', end: '18:00' },
                            4: { start: '09:00', end: '18:00' },
                            5: { start: '10:00', end: '19:30' },
                            6: { start: '09:00', end: '18:00' },
                            8: { start: '09:00', end: '18:00' },
                            9: { start: '09:30', end: '18:30' },
                            10: { start: '10:00', end: '19:00' }
                        },
                        convenienceAmount: {
                            1: 200,
                            4: 200,
                            8: 200,
                            15: 200,
                            16: 200,
                            21: 200,
                            23: 200,
                            25: 200
                        }
                    }
                },
                services: {
                    '2024-01': {
                        completed: 50,
                        dailyBreakdown: [3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 18000,
                        spares: 30000,
                        dailyBreakdown: {
                            accessories: [600,700,800,900,600,700,800,900,600,700,800,900,600,700,800],
                            spares: [1200,1400,1000,1600,1200,1400,1000,1600,1200,1400,1000,1600,1200,1400,1000]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 15000,
                        salesCommission: 4800,
                        convenienceDeduction: 2000,
                        totalPayout: 17800,
                        dailyBreakdown: [600,700,500,600,700,500,600,700,500,600,700,500,600,700,500]
                    }
                }
            }
        },
        {
            id: 'ENG003',
            name: 'Mohammed Ali',
            contact: '9876543212',
            brands: ['Whirlpool', 'IFB'],
            categories: ['Washing Machine', 'Dishwasher'],
            languages: ['English'],
            servicePincodes: ['400006', '400007', '400008'],
            performanceScore: 4.2,
            status: 'inactive',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,4,5,8,9,10,11,12],
                        convenience: [1,4,8,15,16,21,23,25],
                        times: {
                            1: { start: '09:00', end: '18:00' },
                            2: { start: '09:30', end: '18:30' },
                            3: { start: '09:00', end: '18:00' },
                            4: { start: '09:00', end: '18:00' },
                            5: { start: '10:00', end: '19:30' },
                            6: { start: '09:00', end: '18:00' },
                            8: { start: '09:00', end: '18:00' },
                            9: { start: '09:30', end: '18:30' },
                            10: { start: '10:00', end: '19:00' }
                        },
                        convenienceAmount: {
                            1: 200,
                            4: 200,
                            8: 200,
                            15: 200,
                            16: 200,
                            21: 200,
                            23: 200,
                            25: 200
                        }
                    }
                },
                services: {
                    '2024-01': {
                        completed: 20,
                        dailyBreakdown: [2,2,2,2,2,2,2,2,2,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 8000,
                        spares: 15000,
                        dailyBreakdown: {
                            accessories: [400,500,400,500,400,500,400,500,400,500],
                            spares: [800,1000,800,1000,800,1000,800,1000,800,1000]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 6000,
                        salesCommission: 2300,
                        convenienceDeduction: 1000,
                        totalPayout: 7300,
                        dailyBreakdown: [300,400,300,400,300,400,300,400,300,400]
                    }
                }
            }
        },
        {
            id: 'ENG004',
            name: 'Anjali Sharma',
            contact: '9876543213',
            brands: ['Samsung', 'Haier', 'Godrej'],
            categories: ['Refrigerator', 'Air Conditioner'],
            languages: ['English'],
            servicePincodes: ['400009', '400010'],
            performanceScore: 4.6,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27,29,30],
                        convenience: [4,11,18,25],
                        times: {
                            1: { start: '09:00', end: '18:00' },
                            2: { start: '09:30', end: '18:30' },
                            3: { start: '09:00', end: '18:00' }
                        },
                        convenienceAmount: {
                            4: 200,
                            11: 200,
                            18: 200,
                            25: 200
                        }
                    }
                },
                services: {
                    '2024-01': {
                        completed: 48,
                        dailyBreakdown: [2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2,3,2,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 16000,
                        spares: 28000,
                        dailyBreakdown: {
                            accessories: [550,650,750,850,550,650,750,850,550,650,750,850,550,650,750],
                            spares: [1100,1300,900,1550,1100,1300,900,1550,1100,1300,900,1550,1100,1300,900]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 14400,
                        salesCommission: 4400,
                        convenienceDeduction: 2000,
                        totalPayout: 16800,
                        dailyBreakdown: [550,650,450,550,650,450,550,650,450,550,650,450,550,650,450]
                    }
                }
            }
        },
        {
            id: 'ENG005',
            name: 'Suresh Patel',
            contact: '9876543214',
            brands: ['LG', 'Whirlpool'],
            categories: ['Microwave', 'Dishwasher'],
            languages: ['English', 'Hindi'],
            servicePincodes: ['400011', '400012', '400013'],
            performanceScore: 3.9,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20],
                        convenience: [4,11,18]
                    }
                },
                services: {
                    '2024-01': {
                        completed: 35,
                        dailyBreakdown: [2,2,1,2,2,1,2,2,1,2,2,1,2,2,1]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 12000,
                        spares: 20000,
                        dailyBreakdown: {
                            accessories: [400,500,600,700,400,500,600,700,400,500,600,700,400,500,600],
                            spares: [800,1000,600,1300,800,1000,600,1300,800,1000,600,1300,800,1000,600]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 10500,
                        salesCommission: 3200,
                        convenienceDeduction: 1500,
                        totalPayout: 12200,
                        dailyBreakdown: [400,500,300,400,500,300,400,500,300,400,500,300,400,500,300]
                    }
                }
            }
        },
        {
            id: 'ENG006',
            name: 'Deepak Verma',
            contact: '9876543215',
            brands: ['Samsung', 'Godrej'],
            categories: ['Refrigerator'],
            languages: ['Marathi', 'Hindi'],
            servicePincodes: ['400014', '400015'],
            performanceScore: 4.7,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27],
                        convenience: [4,11,18,25]
                    }
                },
                services: {
                    '2024-01': {
                        completed: 42,
                        dailyBreakdown: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 14000,
                        spares: 24000,
                        dailyBreakdown: {
                            accessories: [500,600,700,800,500,600,700,800,500,600,700,800,500,600,700],
                            spares: [1000,1200,800,1400,1000,1200,800,1400,1000,1200,800,1400,1000,1200,800]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 12600,
                        salesCommission: 3800,
                        convenienceDeduction: 2000,
                        totalPayout: 14400,
                        dailyBreakdown: [500,600,400,500,600,400,500,600,400,500,600,400,500,600,400]
                    }
                }
            }
        },
        {
            id: 'ENG007',
            name: 'Kavita Reddy',
            contact: '9876543216',
            brands: ['LG', 'IFB'],
            categories: ['Washing Machine', 'Air Conditioner'],
            languages: ['Tamil'],
            servicePincodes: ['400016', '400017', '400018'],
            performanceScore: 4.4,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24],
                        convenience: [4,11,18]
                    }
                },
                services: {
                    '2024-01': {
                        completed: 38,
                        dailyBreakdown: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 13000,
                        spares: 22000,
                        dailyBreakdown: {
                            accessories: [450,550,650,750,450,550,650,750,450,550,650,750,450,550,650],
                            spares: [900,1100,700,1350,900,1100,700,1350,900,1100,700,1350,900,1100,700]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 11400,
                        salesCommission: 3500,
                        convenienceDeduction: 1500,
                        totalPayout: 13400,
                        dailyBreakdown: [450,550,350,450,550,350,450,550,350,450,550,350,450,550,350]
                    }
                }
            }
        },
        {
            id: 'ENG008',
            name: 'Rahul Gupta',
            contact: '9876543217',
            brands: ['Haier', 'Whirlpool'],
            categories: ['Microwave', 'Refrigerator'],
            languages: ['English', 'Tamil'],
            servicePincodes: ['400019', '400020'],
            performanceScore: 4.1,
            status: 'inactive',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10],
                        convenience: [4,7]
                    }
                },
                services: {
                    '2024-01': {
                        completed: 18,
                        dailyBreakdown: [2,2,2,2,2,2,2,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 7000,
                        spares: 14000,
                        dailyBreakdown: {
                            accessories: [350,450,550,650,350,450,550,650],
                            spares: [700,900,500,1150,700,900,500,1150]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 5400,
                        salesCommission: 2100,
                        convenienceDeduction: 1000,
                        totalPayout: 6500,
                        dailyBreakdown: [350,450,250,350,450,250,350,450]
                    }
                }
            }
        },
        {
            id: 'ENG009',
            name: 'Neha Kapoor',
            contact: '9876543218',
            brands: ['Samsung', 'LG', 'IFB'],
            categories: ['Dishwasher', 'Washing Machine'],
            languages: ['English'],
            servicePincodes: ['400021', '400022', '400023'],
            performanceScore: 4.9,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20,22,23,24,26,27,29,30],
                        convenience: [1,4,8,15,16,21,23,25],
                        times: {
                            1: { start: '09:00', end: '18:00' },
                            2: { start: '09:30', end: '18:30' },
                            3: { start: '09:00', end: '18:00' },
                            4: { start: '09:00', end: '18:00' },
                            5: { start: '10:00', end: '19:30' },
                            6: { start: '09:00', end: '18:00' },
                            8: { start: '09:00', end: '18:00' },
                            9: { start: '09:30', end: '18:30' },
                            10: { start: '10:00', end: '19:00' }
                        },
                        convenienceAmount: {
                            1: 200,
                            4: 200,
                            8: 200,
                            15: 200,
                            16: 200,
                            21: 200,
                            23: 200,
                            25: 200
                        }
                    }
                },
                services: {
                    '2024-01': {
                        completed: 52,
                        dailyBreakdown: [3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 19000,
                        spares: 32000,
                        dailyBreakdown: {
                            accessories: [650,750,850,950,650,750,850,950,650,750,850,950,650,750,850],
                            spares: [1300,1500,1100,1700,1300,1500,1100,1700,1300,1500,1100,1700,1300,1500,1100]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 15600,
                        salesCommission: 5100,
                        convenienceDeduction: 2000,
                        totalPayout: 18700,
                        dailyBreakdown: [650,750,550,650,750,550,650,750,550,650,750,550,650,750,550]
                    }
                }
            }
        },
        {
            id: 'ENG010',
            name: 'Vikram Malhotra',
            contact: '9876543219',
            brands: ['Godrej', 'Haier'],
            categories: ['Air Conditioner', 'Microwave'],
            languages: ['Bengali'],
            servicePincodes: ['400024', '400025', '400026'],
            performanceScore: 4.3,
            status: 'active',
            monthlyData: {
                attendance: {
                    '2024-01': {
                        present: [1,2,3,5,6,8,9,10,12,13,15,16,17,19,20],
                        convenience: [4,11,18]
                    }
                },
                services: {
                    '2024-01': {
                        completed: 40,
                        dailyBreakdown: [2,3,2,2,3,2,2,3,2,2,3,2,2,3,2]
                    }
                },
                sales: {
                    '2024-01': {
                        accessories: 14500,
                        spares: 26000,
                        dailyBreakdown: {
                            accessories: [500,600,700,800,500,600,700,800,500,600,700,800,500,600,700],
                            spares: [1000,1200,800,1400,1000,1200,800,1400,1000,1200,800,1400,1000,1200,800]
                        }
                    }
                },
                payouts: {
                    '2024-01': {
                        serviceCommission: 12000,
                        salesCommission: 4050,
                        convenienceDeduction: 1500,
                        totalPayout: 14550,
                        dailyBreakdown: [500,600,400,500,600,400,500,600,400,500,600,400,500,600,400]
                    }
                }
            }
        }
    ]
};



class EngineerManagement {
    constructor() {
        this.engineersData = mockEngineersData;
        this.initializeDashboard();
    }

    initializeDashboard() {
        this.updateSummaryCards();
        this.initializeFilters();
        this.populateEngineersTable(this.engineersData.engineers);
        this.initializeAddEngineerModal();
    }

    initializeAddEngineerModal() {
        const brandsSelect = document.querySelector('#addEngineerForm select[name="brands"]');
        const categoriesSelect = document.querySelector('#addEngineerForm select[name="categories"]');

        if (brandsSelect) {
            brandsSelect.innerHTML = this.engineersData.brands.map(brand => 
                `<option value="${brand}">${brand}</option>`
            ).join('');
        }

        if (categoriesSelect) {
            categoriesSelect.innerHTML = this.engineersData.categories.map(category => 
                `<option value="${category}">${category}</option>`
            ).join('');
        }
    }

    showEditEngineer(engineerId) {
        const engineer = this.engineersData.engineers.find(eng => eng.id === engineerId);
        if (engineer) {
            // Populate form fields
            document.getElementById('editEngineerId').value = engineer.id;
            document.getElementById('editEngineerName').value = engineer.name;
            document.getElementById('editEngineerContact').value = engineer.contact;
            
            // Set selected brands
            const editBrandSelect = document.getElementById('editEngineerBrands');
            engineer.brands.forEach(brand => {
                Array.from(editBrandSelect.options).forEach(option => {
                    if (option.value === brand) option.selected = true;
                });
            });

            // Set selected categories
            const editCategorySelect = document.getElementById('editEngineerCategories');
            engineer.categories.forEach(category => {
                Array.from(editCategorySelect.options).forEach(option => {
                    if (option.value === category) option.selected = true;
                });
            });

            // Set service pincodes
            document.getElementById('editEngineerPincodes').value = engineer.servicePincodes.join(', ');

            // Show the modal
            const editModal = new bootstrap.Modal(document.getElementById('editEngineerModal'));
            editModal.show();
        }
    }

    initializeFilters() {
        // Populate brand filter
        const brandFilter = document.getElementById('brandFilter');
        this.engineersData.brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });

        // Populate category filter
        const categoryFilter = document.getElementById('categoryFilter');
        this.engineersData.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });


        this.populateLocationFilter();

        // Add event listeners for filters
        ['brandFilter', 'categoryFilter', 'locationFilter', 'statusFilter'].forEach(filterId => {
            document.getElementById(filterId).addEventListener('change', () => this.filterEngineers());
        });
    }



    populateLocationFilter() {
        const locationFilter = document.getElementById('locationFilter');
        if (!locationFilter) return;

        // Get unique locations from engineers
        const uniqueLocations = [...new Set(this.engineersData.engineers.map(engineer => engineer.servicePincodes).flat())];

        // Sort locations alphabetically
        uniqueLocations.sort();

        // Clear existing options except the first one (All Locations)
        while (locationFilter.options.length > 1) {
            locationFilter.remove(1);
        }

        // Add location options
        uniqueLocations.forEach(location => {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationFilter.appendChild(option);
        });
    }

    filterEngineers() {
        const brand = document.getElementById('brandFilter').value;
        const category = document.getElementById('categoryFilter').value;
        const status = document.getElementById('statusFilter').value;
        const location = document.getElementById('locationFilter').value;

        const filteredEngineers = this.engineersData.engineers.filter(engineer => {
            const brandMatch = !brand || engineer.brands.includes(brand);
            const categoryMatch = !category || engineer.categories.includes(category);
            const statusMatch = !status || engineer.status === status;
            const locationMatch =!location || engineer.servicePincodes.includes(location);
            return brandMatch && categoryMatch && statusMatch && locationMatch;
        });

        this.populateEngineersTable(filteredEngineers);
    }

    updateSummaryCards() {
        document.getElementById('totalEngineers').textContent = this.engineersData.summary.totalEngineers;
        document.getElementById('activeEngineers').textContent = this.engineersData.summary.activeEngineers;
        document.getElementById('avgDailyServices').textContent = this.engineersData.summary.avgDailyServices;
    }

    populateEngineersTable(engineers) {
        const tableBody = document.querySelector('#engineersTable tbody');
        if (!tableBody) return;

        tableBody.innerHTML = engineers.map(engineer => `
            <tr>
                <td>${engineer.name}</td>
                <td>${engineer.brands.join(', ')}</td>
                <td>${engineer.categories.join(', ')}</td>
                <td>${engineer.servicePincodes.join(', ')}</td>
                <td>
                    <div class="progress" style="height: 20px;">
                        <div class="progress-bar bg-success" role="progressbar" 
                             style="width: ${engineer.performanceScore * 20}%;" 
                             aria-valuenow="${engineer.performanceScore}" 
                             aria-valuemin="0" 
                             aria-valuemax="5">
                            ${engineer.performanceScore}
                        </div>
                    </div>
                </td>
                <td>
                    <span class="badge ${engineer.status === 'active' ? 'bg-success' : 'bg-danger'}">
                        ${engineer.status}
                    </span>
                </td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="window.engineerManagement.showEngineerDetails('${engineer.id}')">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-warning me-1" onclick="editEngineer('${engineer.id}')">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteEngineer('${engineer.id}')">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    showEngineerDetails(engineerId) {
        const engineer = this.engineersData.engineers.find(eng => eng.id === engineerId);
        if (!engineer) return;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('engineerDetailsModal'));
        modal.show();

        // Store the current engineer ID
        this.currentEngineerId = engineerId;

        // Add event listener for month change
        document.getElementById('engineerDetailsMonth').addEventListener('change', (e) => {
            this.updateEngineerDetails(engineer, e.target.value);
        });

        // Initial render with default month
        this.updateEngineerDetails(engineer, '2024-01');
    }


    updateEngineerDetails(engineer, month) {
        // Render all components with the selected month
        this.renderAttendanceCalendar(engineer, month);
        this.renderConvenienceCalendar(engineer, month);
        this.renderServicesChart(engineer, month);
        this.renderSalesData(engineer, month);
        this.renderPayoutsTable(engineer, month);
    }
    renderAttendanceCalendar(engineer, month) {
        const attendanceDiv = document.getElementById('attendanceCalendar');
        const monthData = engineer.monthlyData?.attendance?.[month] || { present: [], times: {} };

        const calendar = document.createElement('div');
        calendar.className = 'calendar-grid';
        
        // Create calendar grid
        const daysInMonth = 31; // For January 2024
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            if (monthData.present?.includes(day)) {
                dayDiv.classList.add('present');
                const times = monthData.times?.[day] || { start: '09:00', end: '18:00' };
                dayDiv.innerHTML = `
                    <div class="day-number">${day}</div>
                    <div class="time-details">
                        <small>${times.start} - ${times.end}</small>
                    </div>
                `;
            } else {
                dayDiv.textContent = day;
            }
            calendar.appendChild(dayDiv);
        }

        attendanceDiv.innerHTML = '';
        attendanceDiv.appendChild(calendar);
    }

    renderServicesChart(engineer, month) {
        const ctx = document.getElementById('servicesChart');
        // Destroy existing chart if it exists
        if (this.servicesChart instanceof Chart) {
            this.servicesChart.destroy();
        }
        const monthData = engineer.monthlyData?.services?.[month] || {
            completed: 0,
            dailyBreakdown: Array(31).fill(0)
        };

        this.servicesChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Array.from({length: monthData.dailyBreakdown.length}, (_, i) => i + 1),
                datasets: [{
                    label: 'Services Completed',
                    data: monthData.dailyBreakdown,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    renderSalesData(engineer, month) {
        const salesDiv = document.getElementById('salesData');
        const monthData = engineer.monthlyData?.sales?.[month] || {
            accessories: 0,
            spares: 0,
            dailyBreakdown: {
                accessories: Array(31).fill(0),
                spares: Array(31).fill(0)
            }
        };

        salesDiv.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <h5>Accessories Sales: ₹${monthData.accessories}</h5>
                    <canvas id="accessoriesChart"></canvas>
                </div>
                <div class="col-md-6">
                    <h5>Spares Sales: ₹${monthData.spares}</h5>
                    <canvas id="sparesChart"></canvas>
                </div>
            </div>
        `;

        // Create charts for accessories and spares
        this.createSalesChart('accessoriesChart', 'Accessories', monthData.dailyBreakdown.accessories);
        this.createSalesChart('sparesChart', 'Spares', monthData.dailyBreakdown.spares);
    }

    createSalesChart(canvasId, label, data) {
        const ctx = document.getElementById(canvasId);
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: data.length}, (_, i) => i + 1),
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: label === 'Accessories' ? 'rgba(75, 192, 192, 1)' : 'rgba(153, 102, 255, 1)',
                    tension: 0.1
                }]
            }
        });
    }

    renderConvenienceCalendar(engineer, month) {
        const convenienceDiv = document.getElementById('convenienceCalendar');
        const monthData = engineer.monthlyData?.attendance?.[month] || { convenience: [], convenienceAmount: {} };

        const calendar = document.createElement('div');
        calendar.className = 'calendar-grid';
        
        // Create calendar grid
        const daysInMonth = 31;
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            if (monthData.convenience?.includes(day)) {
                dayDiv.classList.add('convenience');
                const amount = monthData.convenienceAmount?.[day] || 200;
                dayDiv.innerHTML = `
                    <div class="day-number">${day}</div>
                    <div class="convenience-amount">
                        <small>₹${amount}</small>
                    </div>
                `;
            } else {
                dayDiv.textContent = day;
            }
            calendar.appendChild(dayDiv);
        }

        convenienceDiv.innerHTML = '';
        convenienceDiv.appendChild(calendar);
    }

    renderPayoutsTable(engineer, month) {
        const payoutsDiv = document.getElementById('payoutsTable');
        const monthData = engineer.monthlyData.payouts[month];

        const serviceBreakup = `₹200 × ${monthData.servicesCount} services`;
        const salesBreakup = `${monthData.sparesAmount} × 5% + ${monthData.accessoriesAmount} × 8%`;
        const convenienceBreakup = `₹200 × ${monthData.convenienceDays} days`;

        payoutsDiv.innerHTML = `
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Breakup</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Service Commission</td>
                            <td>₹${monthData.serviceCommission}</td>
                            <td><small class="text-muted">${serviceBreakup}</small></td>
                        </tr>
                        <tr>
                            <td>Sales Commission</td>
                            <td>₹${monthData.salesCommission}</td>
                            <td><small class="text-muted">${salesBreakup}</small></td>
                        </tr>
                        <tr>
                            <td>Convenience Allowance</td>
                            <td>₹${monthData.convenienceAllowance}</td>
                            <td><small class="text-muted">${convenienceBreakup}</small></td>
                        </tr>
                        <tr class="table-info">
                            <td><strong>Total Payout</strong></td>
                            <td><strong>₹${monthData.totalPayout}</strong></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

}

// Engineer detail view function
function viewEngineerDetails(engineerId) {
    const engineer = window.engineerManagement.engineersData.engineers.find(eng => eng.id === engineerId);
    if (engineer) {
        const modalHTML = `
            <div class="modal fade" id="engineerDetailsModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Engineer Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <strong>Name:</strong> ${engineer.name}
                            </div>
                            <div class="mb-3">
                                <strong>Contact:</strong> ${engineer.contact}
                            </div>
                            <div class="mb-3">
                                <strong>Brands:</strong> ${engineer.brands.join(', ')}
                            </div>
                            <div class="mb-3">
                                <strong>Categories:</strong> ${engineer.categories.join(', ')}
                            </div>
                            <div class="mb-3">
                                <strong>Service Areas:</strong> ${engineer.servicePincodes.join(', ')}
                            </div>
                            <div class="mb-3">
                                <strong>Performance Score:</strong> ${engineer.performanceScore}
                            </div>
                            <div class="mb-3">
                                <strong>Status:</strong> ${engineer.status}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('engineerDetailsModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add new modal to the document
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('engineerDetailsModal'));
        modal.show();
    }

}

// Engineer edit function
function editEngineer(engineerId) {
    const engineer = window.engineerManagement.engineersData.engineers.find(eng => eng.id === engineerId);
    if (engineer) {
        const modalHTML = `
            <div class="modal fade" id="editEngineerModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Engineer</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="editEngineerForm">
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-control" name="name" value="${engineer.name}" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Contact</label>
                                    <input type="text" class="form-control" name="contact" value="${engineer.contact}" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Brands</label>
                                    <select class="form-select" name="brands" multiple required>
                                        ${window.engineerManagement.engineersData.brands.map(brand => 
                                            `<option value="${brand}" ${engineer.brands.includes(brand) ? 'selected' : ''}>${brand}</option>`
                                        ).join('')}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Categories</label>
                                    <select class="form-select" name="categories" multiple required>
                                        ${window.engineerManagement.engineersData.categories.map(category => 
                                            `<option value="${category}" ${engineer.categories.includes(category) ? 'selected' : ''}>${category}</option>`
                                        ).join('')}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Languages</label>
                                    <select class="form-select" name="languages" multiple required>
                                        ${window.engineerManagement.engineersData.languages.map(language => 
                                            `<option value="${language}" ${engineer.languages.includes(language) ? 'selected' : ''}>${language}</option>`
                                        ).join('')}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Service Pincodes</label>
                                    <input type="text" class="form-control" name="servicePincodes" value="${engineer.servicePincodes.join(', ')}" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Status</label>
                                    <select class="form-select" name="status" required>
                                        <option value="active" ${engineer.status === 'active' ? 'selected' : ''}>Active</option>
                                        <option value="inactive" ${engineer.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onclick="saveEngineerChanges('${engineerId}')">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('editEngineerModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add new modal to the document
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('editEngineerModal'));
        modal.show();
    }
}

// Save engineer changes
function saveEngineerChanges(engineerId) {
    const form = document.getElementById('editEngineerForm');
    const formData = new FormData(form);
    const engineer = window.engineerManagement.engineersData.engineers.find(eng => eng.id === engineerId);

    if (engineer) {
        engineer.name = formData.get('name');
        engineer.contact = formData.get('contact');
        engineer.brands = Array.from(formData.getAll('brands'));
        engineer.categories = Array.from(formData.getAll('categories'));
        engineer.servicePincodes = formData.get('servicePincodes').split(',').map(pincode => pincode.trim());
        engineer.status = formData.get('status');

        // Update the table
        window.engineerManagement.populateEngineersTable(window.engineerManagement.engineersData.engineers);

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('editEngineerModal'));
        modal.hide();
    }
}

// Delete engineer function
function deleteEngineer(engineerId) {
    if (confirm('Are you sure you want to delete this engineer?')) {
        const index = window.engineerManagement.engineersData.engineers.findIndex(eng => eng.id === engineerId);
        if (index !== -1) {
            window.engineerManagement.engineersData.engineers.splice(index, 1);
            window.engineerManagement.engineersData.summary.totalEngineers--;
            if (window.engineerManagement.engineersData.engineers[index]?.status === 'active') {
                window.engineerManagement.engineersData.summary.activeEngineers--;
            }
            window.engineerManagement.initializeDashboard();
        }
    }
}

// Add New Engineer function
function addNewEngineer() {
    const modalHTML = `
        <div class="modal fade" id="addEngineerModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Engineer</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="addEngineerForm">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" name="name" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Contact</label>
                                <input type="text" class="form-control" name="contact" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Brands</label>
                                <select class="form-select" name="brands" multiple required>
                                    ${window.engineerManagement.engineersData.brands.map(brand => 
                                        `<option value="${brand}">${brand}</option>`
                                    ).join('')}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Categories</label>
                                <select class="form-select" name="categories" multiple required>
                                    ${window.engineerManagement.engineersData.categories.map(category => 
                                        `<option value="${category}">${category}</option>`
                                    ).join('')}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Service Pincodes</label>
                                <input type="text" class="form-control" name="servicePincodes" placeholder="Enter comma-separated pincodes" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <select class="form-select" name="status" required>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveNewEngineer()">Add Engineer</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('addEngineerModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add new modal to the document
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('addEngineerModal'));
    modal.show();
}

// Save new engineer function
function saveNewEngineer() {
    const form = document.getElementById('addEngineerForm');
    const formData = new FormData(form);

    const newEngineer = {
        id: 'ENG' + (window.engineerManagement.engineersData.engineers.length + 1).toString().padStart(3, '0'),
        name: formData.get('name'),
        contact: formData.get('contact'),
        brands: Array.from(formData.getAll('brands')),
        categories: Array.from(formData.getAll('categories')),
        servicePincodes: formData.get('pincodes').split(',').map(pincode => pincode.trim()),
        performanceScore: 0,
        status: 'active'
    };
    // Add the new engineer to the data
    window.engineerManagement.engineersData.engineers.push(newEngineer);
    window.engineerManagement.engineersData.summary.totalEngineers++;
    if (newEngineer.status === 'active') {
        window.engineerManagement.engineersData.summary.activeEngineers++;
    }

    // Update the dashboard
    window.engineerManagement.initializeDashboard();

    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addEngineerModal'));
    modal.hide();
}

// Initialize the dashboard when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.engineerManagement = new EngineerManagement();
});