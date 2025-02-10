// Static data for mother company dashboard
const dashboardData = {
    // All franchises data with detailed information
    franchises: [
        // North India
        { name: 'Delhi North', revenue: '₹2,25,000', nps: 9.0, region: 'north', brands: ['samsung', 'lg'], location: { lat: 28.7041, lng: 77.1025 } },
        { name: 'Lucknow South', revenue: '₹55,000', nps: 5.5, region: 'north', brands: ['whirlpool'], location: { lat: 26.8467, lng: 80.9462 } },
        { name: 'Jaipur North', revenue: '₹70,000', nps: 6.2, region: 'north', brands: ['lg', 'whirlpool'], location: { lat: 26.9124, lng: 75.7873 } },
        { name: 'Chandigarh Central', revenue: '₹1,20,000', nps: 7.8, region: 'north', brands: ['samsung', 'lg', 'whirlpool'], location: { lat: 30.7333, lng: 76.7794 } },
        { name: 'Delhi CRP', revenue: '₹2,35,000', nps: 9.1, region: 'north', brands: ['samsung', 'lg'], location: { lat: 28.7940, lng: 77.1025 } },
        { name: 'Lucknow Chowk', revenue: '₹55,500', nps: 5.4, region: 'north', brands: ['whirlpool'], location: { lat: 26.8467, lng: 80.8563 } },
        { name: 'Jaipur Old City', revenue: '₹71,000', nps: 6.3, region: 'north', brands: ['lg', 'whirlpool'], location: { lat: 26.8224, lng: 75.7872 } },
        { name: 'Chandigarh MG Road', revenue: '₹2,20,000', nps: 7.8, region: 'north', brands: ['samsung', 'lg', 'whirlpool'], location: { lat: 30.7331, lng: 76.8894 } },
        
        // South India
        { name: 'Bangalore South', revenue: '₹2,00,000', nps: 8.8, region: 'south', brands: ['samsung', 'lg'], location: { lat: 12.9716, lng: 77.5946 } },
        { name: 'Chennai Central', revenue: '₹1,75,000', nps: 8.7, region: 'south', brands: ['samsung', 'whirlpool'], location: { lat: 13.0827, lng: 80.2707 } },
        { name: 'Kochi West', revenue: '₹65,000', nps: 6.0, region: 'south', brands: ['lg'], location: { lat: 9.9312, lng: 76.2673 } },
        { name: 'Hyderabad East', revenue: '₹1,45,000', nps: 8.1, region: 'south', brands: ['samsung', 'lg', 'whirlpool'], location: { lat: 17.3850, lng: 78.4867 } },
        { name: 'Bangalore ORR', revenue: '₹2,10,000', nps: 8.4, region: 'south', brands: ['samsung', 'lg'], location: { lat: 12.8615, lng: 77.5946 } },
        { name: 'Chennai North', revenue: '₹1,65,000', nps: 8.5, region: 'south', brands: ['samsung', 'whirlpool'], location: { lat: 13.0827, lng: 80.3808 } },
        { name: 'Fort Kochi', revenue: '₹66,000', nps: 6.1, region: 'south', brands: ['lg'], location: { lat: 9.9212, lng: 76.1672 } },
        { name: 'Hyderabad HTC', revenue: '₹1,25,000', nps: 8.2, region: 'south', brands: ['samsung', 'lg', 'whirlpool'], location: { lat: 17.4851, lng: 78.4967 } },
        
        // East India
        { name: 'Kolkata Central', revenue: '₹1,35,000', nps: 7.9, region: 'east', brands: ['lg', 'whirlpool'], location: { lat: 22.5726, lng: 88.3639 } },
        { name: 'Patna East', revenue: '₹50,000', nps: 5.2, region: 'east', brands: ['whirlpool'], location: { lat: 25.5941, lng: 85.1376 } },
        { name: 'Guwahati South', revenue: '₹85,000', nps: 6.8, region: 'east', brands: ['samsung'], location: { lat: 26.1445, lng: 91.7362 } },
        { name: 'Kolkata South', revenue: '₹1,45,000', nps: 7.8, region: 'east', brands: ['lg', 'whirlpool'], location: { lat: 22.6726, lng: 88.4639 } },
        { name: 'Patna MGR', revenue: '₹60,000', nps: 6.2, region: 'east', brands: ['whirlpool'], location: { lat: 25.6941, lng: 85.1376 } },
        { name: 'Guwahati ORR', revenue: '₹88,000', nps: 6.3, region: 'east', brands: ['samsung'], location: { lat: 26.2445, lng: 91.8362 } },
        
        // West India
        { name: 'Mumbai Central', revenue: '₹2,50,000', nps: 9.2, region: 'west', brands: ['samsung', 'lg', 'whirlpool'], location: { lat: 19.0760, lng: 72.8777 } },
        { name: 'Pune West', revenue: '₹1,50,000', nps: 8.5, region: 'west', brands: ['samsung', 'lg'], location: { lat: 18.5204, lng: 73.8567 } },
        { name: 'Bhopal Central', revenue: '₹60,000', nps: 5.8, region: 'west', brands: ['whirlpool'], location: { lat: 23.2599, lng: 77.4126 } },
        { name: 'Ahmedabad North', revenue: '₹1,30,000', nps: 7.6, region: 'west', brands: ['samsung', 'whirlpool'], location: { lat: 23.1225, lng: 72.5714 } },
        { name: 'Mumbai SW', revenue: '₹2,50,000', nps: 9.2, region: 'west', brands: ['samsung', 'lg', 'whirlpool'], location: { lat: 18.9760, lng: 72.9777 } },
        { name: 'Pune HTC', revenue: '₹1,50,000', nps: 8.5, region: 'west', brands: ['samsung', 'lg'], location: { lat: 18.6204, lng: 73.7567 } },
        { name: 'Bhopal MGR', revenue: '₹60,000', nps: 5.8, region: 'west', brands: ['whirlpool'], location: { lat: 23.1599, lng: 77.5126 } },
        { name: 'Ahmedabad South', revenue: '₹1,30,000', nps: 7.6, region: 'west', brands: ['samsung', 'whirlpool'], location: { lat: 23.0225, lng: 72.6714 } }
    ],
    // Top and bottom performing franchises data
    topFranchises: [
        {
            name: 'Mumbai Central',
            revenue: '₹2,50,000',
            nps: 9.2,
            commission: '₹25,000'
        },
        {
            name: 'Delhi North',
            revenue: '₹2,25,000',
            nps: 9.0,
            commission: '₹22,500'
        },
        {
            name: 'Bangalore South',
            revenue: '₹2,00,000',
            nps: 8.8,
            commission: '₹20,000'
        },
        {
            name: 'Chennai Central',
            revenue: '₹1,75,000',
            nps: 8.7,
            commission: '₹17,500'
        },
        {
            name: 'Pune West',
            revenue: '₹1,50,000',
            nps: 8.5,
            commission: '₹15,000'
        }
    ],
    bottomFranchises: [
        {
            name: 'Patna East',
            revenue: '₹50,000',
            nps: 5.2,
            commission: '₹5,000'
        },
        {
            name: 'Lucknow South',
            revenue: '₹55,000',
            nps: 5.5,
            commission: '₹5,500'
        },
        {
            name: 'Bhopal Central',
            revenue: '₹60,000',
            nps: 5.8,
            commission: '₹6,000'
        },
        {
            name: 'Kochi West',
            revenue: '₹65,000',
            nps: 6.0,
            commission: '₹6,500'
        },
        {
            name: 'Jaipur North',
            revenue: '₹70,000',
            nps: 6.2,
            commission: '₹7,000'
        }
    ],

    // Performance metrics
    performanceMetrics: {
        nps: {
            current: 8.5,
            max: 10,
            change: 0.5,
            trend: 'up'
        },
        slaCompliance: {
            current: 95,
            change: 2,
            trend: 'up'
        },
        revenue: {
            current: '₹10,00,000',
            change: 15,
            trend: 'up'
        }
    },

    // Filter options
    filterOptions: {
        locations: [
            { value: 'all', label: 'All Locations' },
            { value: 'north', label: 'North India' },
            { value: 'south', label: 'South India' },
            { value: 'east', label: 'East India' },
            { value: 'west', label: 'West India' }
        ],
        brands: [
            { value: 'all', label: 'All Brands' },
            { value: 'samsung', label: 'Samsung' },
            { value: 'lg', label: 'LG' },
            { value: 'whirlpool', label: 'Whirlpool' }
        ]
    },

    onboardingData: {
        daily: {
            count: 3,
            trend: '+20%'
        },
        weekly: {
            count: 15,
            trend: '+10%'
        },
        monthly: {
            count: 45,
            trend: '+15%'
        },
        regionWise: {
            north: 20,
            south: 15,
            east: 5,
            west: 5
        },
        brandWise: {
            samsung: 18,
            lg: 15,
            whirlpool: 12
        },
        pincodeDistribution: {
            zero: 15,
            one: 25,
            two: 20,
            threeToFive: 12,
            moreThanFive: 8
        }
    },

    npsData : {
        detractors: 15,    // Scores 0-6
        passives: 25,      // Scores 7-8
        promoters: 60      // Scores 9-10
    }
};

let map;
let markers = [];

// Initialize map and update dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    map = L.map('india-map').setView([20.5937, 78.9629], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add initial markers
    updateMapMarkers(dashboardData.franchises);

    // Update dashboard with initial data
    updateDashboard();
});

// Update map markers based on filtered franchises
function updateMapMarkers(franchises) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Add new markers
    franchises.forEach(franchise => {
        const marker = L.marker([franchise.location.lat, franchise.location.lng])
            .bindPopup(`
                <strong>${franchise.name}</strong><br>
                Revenue: ${franchise.revenue}<br>
                NPS: ${franchise.nps}<br>
                Brands: ${franchise.brands.join(', ')}
            `);
        marker.addTo(map);
        markers.push(marker);
    });
}

// Update dashboard with data
function updateDashboard() {
    // Update NPS score
    document.getElementById('npsScore').textContent = dashboardData.performanceMetrics.nps.current;
    document.getElementById('npsChange').textContent = 
        `${dashboardData.performanceMetrics.nps.trend === 'up' ? '↑' : '↓'} ${dashboardData.performanceMetrics.nps.change}%`;

    // Update SLA compliance
    document.getElementById('slaScore').textContent = dashboardData.performanceMetrics.slaCompliance.current;
    document.getElementById('slaChange').textContent = 
        `${dashboardData.performanceMetrics.slaCompliance.trend === 'up' ? '↑' : '↓'} ${dashboardData.performanceMetrics.slaCompliance.change}%`;

    // Update revenue
    document.getElementById('revenueScore').textContent = dashboardData.performanceMetrics.revenue.current;
    document.getElementById('revenueChange').textContent = 
        `${dashboardData.performanceMetrics.revenue.trend === 'up' ? '↑' : '↓'} ${dashboardData.performanceMetrics.revenue.change}%`;

    // Update top franchises table
    const topTableBody = document.getElementById('topFranchisesTable');
    topTableBody.innerHTML = '';
    dashboardData.topFranchises.forEach(franchise => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${franchise.name}</td>
            <td>${franchise.revenue}</td>
            <td>${franchise.nps}</td>
            <td>${franchise.commission}</td>
        `;
        topTableBody.appendChild(row);
    });

    // Update bottom franchises table
    const bottomTableBody = document.getElementById('bottomFranchisesTable');
    bottomTableBody.innerHTML = '';
    dashboardData.bottomFranchises.forEach(franchise => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${franchise.name}</td>
            <td>${franchise.revenue}</td>
            <td>${franchise.nps}</td>
            <td>${franchise.commission}</td>
        `;
        bottomTableBody.appendChild(row);
    });
}

// Filter franchises based on selected criteria
function filterFranchises(franchises, location, brand) {
    return franchises.filter(franchise => {
        const locationMatch = location === 'all' || franchise.region === location;
        const brandMatch = brand === 'all' || franchise.brands.includes(brand);
        return locationMatch && brandMatch;
    });
}

// Calculate performance metrics for filtered franchises
function calculateMetrics(filteredFranchises) {
    const totalFranchises = filteredFranchises.length;
    if (totalFranchises === 0) return null;

    const avgNps = filteredFranchises.reduce((sum, f) => sum + f.nps, 0) / totalFranchises;
    const totalRevenue = filteredFranchises.reduce((sum, f) => sum + parseInt(f.revenue.replace(/[₹,]/g, '')), 0);

    return {
        nps: {
            current: avgNps.toFixed(1),
            max: 10,
            change: (avgNps - 7.5).toFixed(1),
            trend: avgNps >= 7.5 ? 'up' : 'down'
        },
        slaCompliance: {
            current: 95,
            change: 2,
            trend: 'up'
        },
        revenue: {
            current: '₹' + totalRevenue.toLocaleString(),
            change: 15,
            trend: 'up'
        }
    };
}

// Sort franchises by performance
function sortFranchises(franchises) {
    const sorted = [...franchises].sort((a, b) => {
        const revenueA = parseInt(a.revenue.replace(/[₹,]/g, ''));
        const revenueB = parseInt(b.revenue.replace(/[₹,]/g, ''));
        return revenueB - revenueA;
    });

    return {
        top: sorted.slice(0, 5),
        bottom: sorted.slice(-5).reverse()
    };
}

// Region coordinates for map centering
const regionCoordinates = {
    all: { lat: 20.5937, lng: 78.9629, zoom: 4 },
    north: { lat: 28.7041, lng: 77.1025, zoom: 6 },
    south: { lat: 12.9716, lng: 77.5946, zoom: 6 },
    east: { lat: 22.5726, lng: 88.3639, zoom: 6 },
    west: { lat: 19.0760, lng: 72.8777, zoom: 6 }
};

// Add event listeners for filters
function applyFilters() {
    const location = document.getElementById('locationFilter').value;
    const brand = document.getElementById('brandFilter').value;
    const timeframe = document.getElementById('timeframeFilter').value;

    // Filter franchises based on criteria
    const filteredFranchises = filterFranchises(dashboardData.franchises, location, brand);
    
    // Calculate new metrics
    const metrics = calculateMetrics(filteredFranchises);
    if (!metrics) return;

    // Update performance metrics
    dashboardData.performanceMetrics = metrics;

    // Sort and update top/bottom franchises
    const { top, bottom } = sortFranchises(filteredFranchises);
    dashboardData.topFranchises = top;
    dashboardData.bottomFranchises = bottom;

    // Update the dashboard
    updateDashboard();

    // Update map markers
    updateMapMarkers(filteredFranchises);

    // Update map view based on selected region
    const regionView = regionCoordinates[location] || regionCoordinates.all;
    map.setView([regionView.lat, regionView.lng], regionView.zoom);
}

// Implement logout function
function logout() {
    // Add logout logic here
    window.location.href = 'login.html';
}

// Function to update onboarding metrics
function updateOnboardingMetrics() {
    // Update count displays
    document.getElementById('dailyOnboardingCount').textContent = dashboardData.onboardingData.daily.count;
    document.getElementById('weeklyOnboardingCount').textContent = dashboardData.onboardingData.weekly.count;
    document.getElementById('monthlyOnboardingCount').textContent = dashboardData.onboardingData.monthly.count;

    // Update trends
    document.getElementById('dailyOnboardingTrend').textContent = dashboardData.onboardingData.daily.trend;
    document.getElementById('weeklyOnboardingTrend').textContent = dashboardData.onboardingData.weekly.trend;
    document.getElementById('monthlyOnboardingTrend').textContent = dashboardData.onboardingData.monthly.trend;

    // Initialize region-wise chart
    const regionCtx = document.getElementById('regionOnboardingChart').getContext('2d');
    new Chart(regionCtx, {
        type: 'bar',
        data: {
            labels: ['North', 'South', 'East', 'West'],
            datasets: [{
                label: 'Franchises Onboarded',
                data: [
                    dashboardData.onboardingData.regionWise.north,
                    dashboardData.onboardingData.regionWise.south,
                    dashboardData.onboardingData.regionWise.east,
                    dashboardData.onboardingData.regionWise.west
                ],
                backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 
                                'rgba(255, 206, 86, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 
                            'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Initialize brand-wise chart
    const brandCtx = document.getElementById('brandOnboardingChart').getContext('2d');
    new Chart(brandCtx, {
        type: 'pie',
        data: {
            labels: ['Samsung', 'LG', 'Whirlpool'],
            datasets: [{
                data: [
                    dashboardData.onboardingData.brandWise.samsung,
                    dashboardData.onboardingData.brandWise.lg,
                    dashboardData.onboardingData.brandWise.whirlpool
                ],
                backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    updateOnboardingMetrics();
});

// Sample service data
const serviceData = {
    services: [
        { id: 1, status: 'created', date: '2024-01-15', region: 'north', brand: 'samsung' },
        { id: 2, status: 'closed', date: '2024-01-15', region: 'south', brand: 'lg' },
        { id: 3, status: 'pending', date: '2024-01-16', region: 'east', brand: 'whirlpool' },
        { id: 4, status: 'created', date: '2024-01-16', region: 'west', brand: 'samsung' },
        { id: 5, status: 'closed', date: '2024-01-15', region: 'north', brand: 'lg' },
        { id: 6, status: 'pending', date: '2024-01-16', region: 'south', brand: 'whirlpool' }
    ],
    daily: {
        created: 25,
        closed: 18,
        pending: 7
    },
    weekly: {
        created: 145,
        closed: 128,
        pending: 17
    },
    monthly: {
        created: 580,
        closed: 542,
        pending: 38
    }
};

function calculateServiceMetrics(startDate, endDate) {
    const filteredServices = serviceData.services.filter(service => {
        const serviceDate = new Date(service.date);
        return serviceDate >= startDate && serviceDate <= endDate;
    });

    return {
        created: filteredServices.filter(s => s.status === 'created').length,
        closed: filteredServices.filter(s => s.status === 'closed').length,
        pending: filteredServices.filter(s => s.status === 'pending').length
    };
}

function updateServiceMetrics() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - 7);
    
    const monthStart = new Date(today);
    monthStart.setMonth(today.getMonth() - 1);

    const dailyMetrics = calculateServiceMetrics(yesterday, today);
    const weeklyMetrics = calculateServiceMetrics(weekStart, today);
    const monthlyMetrics = calculateServiceMetrics(monthStart, today);

    document.getElementById('dailyCreatedServices').textContent = dailyMetrics.created;
    document.getElementById('dailyClosedServices').textContent = dailyMetrics.closed;
    document.getElementById('dailyPendingServices').textContent = dailyMetrics.pending;

    document.getElementById('weeklyCreatedServices').textContent = weeklyMetrics.created;
    document.getElementById('weeklyClosedServices').textContent = weeklyMetrics.closed;
    document.getElementById('weeklyPendingServices').textContent = weeklyMetrics.pending;

    document.getElementById('monthlyCreatedServices').textContent = monthlyMetrics.created;
    document.getElementById('monthlyClosedServices').textContent = monthlyMetrics.closed;
    document.getElementById('monthlyPendingServices').textContent = monthlyMetrics.pending;

    updateServiceCharts();
}

function updateServiceCharts() {
    if (window.regionChart) window.regionChart.destroy();
    if (window.brandChart) window.brandChart.destroy();

    const regionData = {
        labels: ['North', 'South', 'East', 'West'],
        datasets: [
            {
                label: 'Done Within SLA',
                data: [24, 29, 19, 26],
                backgroundColor: '#4BC0C0',
                stack: 'Stack 0'
            },
            {
                label: 'Done Outside SLA',
                data: [2, 2, 1, 1],
                backgroundColor: '#FF6384',
                stack: 'Stack 0'
            },
            {
                label: 'Pending Within SLA',
                data: [5, 4, 3, 2],
                backgroundColor: '#FFD700',
                stack: 'Stack 0'
            },
            {
                label: 'Pending Outside SLA',
                data: [5, 4, 3, 2],
                backgroundColor: '#FF9900',
                stack: 'Stack 0'
            }
        ]
    };

    const brandData = {
        labels: ['Samsung', 'LG', 'Whirlpool'],
        datasets: [{
            label: 'Services',
            data: [40, 35, 25],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    const regionCtx = document.getElementById('regionServiceChart').getContext('2d');
    window.regionChart = new Chart(regionCtx, {
        type: 'bar',
        data: regionData,
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true,
                    position: 'top'
                },
                title: { display: false }
            },
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            }
        }
    });

    const brandCtx = document.getElementById('brandServiceChart').getContext('2d');
    window.brandChart = new Chart(brandCtx, {
        type: 'doughnut',
        data: brandData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateServiceMetrics();
});

// Initialize service performance metrics
function initializeServiceMetrics() {
    // Update daily metrics
    document.getElementById('dailyCreatedServices').textContent = serviceData.daily.created;
    document.getElementById('dailyClosedServices').textContent = serviceData.daily.closed;
    document.getElementById('dailyPendingServices').textContent = serviceData.daily.pending;

    // Update weekly metrics
    document.getElementById('weeklyCreatedServices').textContent = serviceData.weekly.created;
    document.getElementById('weeklyClosedServices').textContent = serviceData.weekly.closed;
    document.getElementById('weeklyPendingServices').textContent = serviceData.weekly.pending;

    // Update monthly metrics
    document.getElementById('monthlyCreatedServices').textContent = serviceData.monthly.created;
    document.getElementById('monthlyClosedServices').textContent = serviceData.monthly.closed;
    document.getElementById('monthlyPendingServices').textContent = serviceData.monthly.pending;
}

// Call initialization when the document is ready
document.addEventListener('DOMContentLoaded', initializeServiceMetrics);

// Initialize NPS distribution chart
function initNPSDistributionChart() {
    // Initialize pincode distribution chart
    const pincodeCtx = document.getElementById('pincodeDistributionChart').getContext('2d');
    new Chart(pincodeCtx, {
        type: 'bar',
        data: {
            labels: ['0', '1', '2', '3-5', 'More than 5'],
            datasets: [{
                label: 'Number of Franchises',
                data: [
                    dashboardData.onboardingData.pincodeDistribution.zero,
                    dashboardData.onboardingData.pincodeDistribution.one,
                    dashboardData.onboardingData.pincodeDistribution.two,
                    dashboardData.onboardingData.pincodeDistribution.threeToFive,
                    dashboardData.onboardingData.pincodeDistribution.moreThanFive
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Pincodes'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Franchises per Pincode'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribution of Franchises across Pincodes'
                }
            }
        }
    });
    const ctx = document.getElementById('npsDistributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Detractors (0-6)', 'Passives (7-8)', 'Promoters (9-10)'],
            datasets: [{
                data: Object.values(dashboardData.npsData),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initNPSDistributionChart);
