const engineersData = {
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

class EngineerManager {
    constructor() {
        this.engineers = engineersData.engineers;
        this.initializeSummaryCards();
        this.initializeFilters();
        this.renderEngineersTable();
        this.setupEventListeners();
    }

    initializeSummaryCards() {
        const { summary } = engineersData;
        document.getElementById('totalEngineers').textContent = summary.totalEngineers;
        document.getElementById('activeEngineers').textContent = summary.activeEngineers;
        document.getElementById('avgDailyServices').textContent = summary.avgDailyServices;
        document.getElementById('totalServiceAreas').textContent = summary.totalServiceAreas;
    }

    initializeFilters() {
        // Populate brand filter
        const brandFilter = document.getElementById('brandFilter');
        engineersData.brands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });

        // Populate category filter
        const categoryFilter = document.getElementById('categoryFilter');
        engineersData.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        // Add event listeners for filters
        ['brandFilter', 'categoryFilter', 'locationFilter', 'statusFilter'].forEach(filterId => {
            document.getElementById(filterId).addEventListener('change', () => this.filterEngineers());
        });
    }

    filterEngineers() {
        const brand = document.getElementById('brandFilter').value;
        const category = document.getElementById('categoryFilter').value;
        const status = document.getElementById('statusFilter').value;

        const filteredEngineers = this.engineers.filter(engineer => {
            const brandMatch = !brand || engineer.brands.includes(brand);
            const categoryMatch = !category || engineer.categories.includes(category);
            const statusMatch = !status || engineer.status === status;
            return brandMatch && categoryMatch && statusMatch;
        });

        this.renderEngineersTable(filteredEngineers);
    }

    renderEngineersTable(engineers = this.engineers) {
        const tbody = document.querySelector('#engineersTable tbody');
        tbody.innerHTML = engineers.map(engineer => `
            <tr>
                <td>${engineer.name}</td>
                <td>${engineer.brands.join(', ')}</td>
                <td>${engineer.categories.join(', ')}</td>
                <td>${engineer.servicePincodes.join(', ')}</td>
                <td>
                    <div class="progress" style="height: 20px;">
                        <div class="progress-bar" role="progressbar" 
                             style="width: ${(engineer.performanceScore/5)*100}%"
                             aria-valuenow="${engineer.performanceScore}" 
                             aria-valuemin="0" aria-valuemax="5">
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
                    <button class="btn btn-sm btn-info me-2" onclick="engineerManager.showEngineerDetails('${engineer.id}')">
                        View Details
                    </button>
                    <button class="btn btn-sm ${engineer.status === 'active' ? 'btn-danger' : 'btn-success'}" 
                            onclick="engineerManager.toggleEngineerStatus('${engineer.id}')">
                        ${engineer.status === 'active' ? 'Block' : 'Unblock'}
                    </button>
                </td>
            </tr>
        `).join('');
    }

    showEngineerDetails(engineerId) {
        const engineer = this.engineers.find(eng => eng.id === engineerId);
        if (!engineer) return;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('engineerDetailsModal'));
        modal.show();

        // Render attendance calendar
        this.renderAttendanceCalendar(engineer);

        // Render services chart
        this.renderServicesChart(engineer);

        // Render sales data
        this.renderSalesData(engineer);

        // Render payouts table
        this.renderPayoutsTable(engineer);
    }

    renderAttendanceCalendar(engineer) {
        const attendanceDiv = document.getElementById('attendanceCalendar');
        const currentMonth = '2024-01'; // In real app, this would be dynamic
        const monthData = engineer.monthlyData.attendance[currentMonth];

        const calendar = document.createElement('div');
        calendar.className = 'calendar-grid';
        
        // Create calendar grid
        const daysInMonth = 31; // For January 2024
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            if (monthData.present.includes(day)) {
                dayDiv.classList.add('present');
            } else if (monthData.convenience.includes(day)) {
                dayDiv.classList.add('convenience');
            }
            dayDiv.textContent = day;
            calendar.appendChild(dayDiv);
        }

        attendanceDiv.innerHTML = '';
        attendanceDiv.appendChild(calendar);
    }

    renderServicesChart(engineer) {
        const ctx = document.getElementById('servicesChart');
        const monthData = engineer.monthlyData.services['2024-01'];

        new Chart(ctx, {
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

    renderSalesData(engineer) {
        const salesDiv = document.getElementById('salesData');
        const monthData = engineer.monthlyData.sales['2024-01'];

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

    renderPayoutsTable(engineer) {
        const payoutsDiv = document.getElementById('payoutsTable');
        const monthData = engineer.monthlyData.payouts['2024-01'];

        payoutsDiv.innerHTML = `
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Service Commission</td>
                            <td>₹${monthData.serviceCommission}</td>
                        </tr>
                        <tr>
                            <td>Sales Commission</td>
                            <td>₹${monthData.salesCommission}</td>
                        </tr>
                        <tr>
                            <td>Convenience Deduction</td>
                            <td>-₹${monthData.convenienceDeduction}</td>
                        </tr>
                        <tr class="table-info">
                            <td><strong>Total Payout</strong></td>
                            <td><strong>₹${monthData.totalPayout}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    toggleEngineerStatus(engineerId) {
        const engineer = this.engineers.find(eng => eng.id === engineerId);
        if (engineer) {
            engineer.status = engineer.status === 'active' ? 'blocked' : 'active';
            this.renderEngineersTable();
        }
    }

    setupEventListeners() {
        // Handle new engineer form submission
        document.getElementById('saveEngineer').addEventListener('click', () => {
            const form = document.getElementById('addEngineerForm');
            const formData = new FormData(form);
            
            const newEngineer = {
                id: `ENG${String(this.engineers.length + 1).padStart(3, '0')}`,
                name: formData.get('name'),
                contact: formData.get('contact'),
                brands: Array.from(formData.getAll('brands')),
                categories: Array.from(formData.getAll('categories')),
                servicePincodes: formData.get('pincodes').split(',').map(p => p.trim()),
                performanceScore: 0,
                status: 'active',
                monthlyData: {
                    attendance: {},
                    services: {},
                    sales: {},
                    payouts: {}
                }
            };

            this.engineers.push(newEngineer);
            this.renderEngineersTable();

            // Close modal and reset form
            const modal = bootstrap.Modal.getInstance(document.getElementById('addEngineerModal'));
            modal.hide();
            form.reset();
        });
    }
}

// Initialize the engineer manager
const engineerManager = new EngineerManager();
window.engineerManager = engineerManager; // Make it accessible globally for event handlers