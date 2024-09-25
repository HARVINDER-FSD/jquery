// Total Sales Chart
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12'],
        datasets: [{
            label: 'Sales',
            data: [50, 70, 65, 80, 60, 75, 90, 100, 120, 130, 140, 125],
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false
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

// Market Share Chart
const marketShareCtx = document.getElementById('marketShareChart').getContext('2d');
const marketShareChart = new Chart(marketShareCtx, {
    type: 'doughnut',
    data: {
        labels: ['Samsung', 'Huawei', 'Apple'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#3498db', '#e74c3c', '#2ecc71']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
