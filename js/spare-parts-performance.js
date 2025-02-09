// Spare Parts & Accessories Performance Data
const sparePartsData = {
    daily: {
        orders: 45,
        delivered: 38,
        returned: 2
    },
    weekly: {
        orders: 315,
        delivered: 290,
        returned: 12
    },
    monthly: {
        orders: 1250,
        delivered: 1180,
        returned: 45
    },
    regionWise: {
        north: { orders: 450, delivered: 425, returned: 15 },
        south: { orders: 380, delivered: 360, returned: 12 },
        east: { orders: 220, delivered: 205, returned: 8 },
        west: { orders: 200, delivered: 190, returned: 10 }
    },
    brandWise: {
        samsung: 480,
        lg: 420,
        whirlpool: 350
    }
};

// Update Daily Metrics
function updateDailyMetrics() {
    document.getElementById('dailyOrderCount').textContent = sparePartsData.daily.orders;
    document.getElementById('dailyDeliveredCount').textContent = sparePartsData.daily.delivered;
    document.getElementById('dailyReturnedCount').textContent = sparePartsData.daily.returned;
}

// Update Weekly Metrics
function updateWeeklyMetrics() {
    document.getElementById('weeklyOrderCount').textContent = sparePartsData.weekly.orders;
    document.getElementById('weeklyDeliveredCount').textContent = sparePartsData.weekly.delivered;
    document.getElementById('weeklyReturnedCount').textContent = sparePartsData.weekly.returned;
}

// Update Monthly Metrics
function updateMonthlyMetrics() {
    document.getElementById('monthlyOrderCount').textContent = sparePartsData.monthly.orders;
    document.getElementById('monthlyDeliveredCount').textContent = sparePartsData.monthly.delivered;
    document.getElementById('monthlyReturnedCount').textContent = sparePartsData.monthly.returned;
}

// Region-wise Order Distribution Chart
function createRegionOrderChart() {
    const ctx = document.getElementById('regionOrderChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['North', 'South', 'East', 'West'],
            datasets: [
                {
                    label: 'Orders',
                    data: Object.values(sparePartsData.regionWise).map(r => r.orders),
                    backgroundColor: 'rgba(75, 192, 192, 0.5)'
                },
                {
                    label: 'Delivered',
                    data: Object.values(sparePartsData.regionWise).map(r => r.delivered),
                    backgroundColor: 'rgba(54, 162, 235, 0.5)'
                },
                {
                    label: 'Returned',
                    data: Object.values(sparePartsData.regionWise).map(r => r.returned),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)'
                }
            ]
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
}

// Brand-wise Order Distribution Chart
function createBrandOrderChart() {
    const ctx = document.getElementById('brandOrderChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Samsung', 'LG', 'Whirlpool'],
            datasets: [{
                data: Object.values(sparePartsData.brandWise),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(255, 206, 86, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Order Status Distribution Chart
function createOrderStatusChart() {
    const total = sparePartsData.monthly.orders;
    const delivered = sparePartsData.monthly.delivered;
    const returned = sparePartsData.monthly.returned;
    const pending = total - delivered - returned;

    const ctx = document.getElementById('orderStatusChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Delivered', 'Pending', 'Returned'],
            datasets: [{
                data: [delivered, pending, returned],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(255, 99, 132, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Initialize all charts and metrics
function initializeSpareParts() {
    updateDailyMetrics();
    updateWeeklyMetrics();
    updateMonthlyMetrics();
    createRegionOrderChart();
    createBrandOrderChart();
    createOrderStatusChart();
}

// Call initialization when document is ready
document.addEventListener('DOMContentLoaded', initializeSpareParts);