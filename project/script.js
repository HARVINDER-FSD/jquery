// Level Chart
const levelCtx = document.getElementById('levelChart').getContext('2d');
const levelChart = new Chart(levelCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Volume',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }, {
            label: 'Service',
            data: [5, 10, 15, 20, 25, 30, 35],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
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

// Customer Fulfillment Chart
const fulfillmentCtx = document.getElementById('fulfillmentChart').getContext('2d');
const fulfillmentChart = new Chart(fulfillmentCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'This Month',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Last Month',
            data: [28, 48, 40, 19, 86, 27, 90],
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
// Function to animate numbers
const animateNumber = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Simulate data fetching
const fetchData = () => {
    return {
        totalSales: 10000,       // Example: $10k
        totalOrders: 1200,       // Example: 1200 Orders
        productsSold: 15,        // Example: 15 Products Sold
        newCustomers: 25         // Example: 25 New Customers
    };
};

// Update card content dynamically with animation
document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const data = fetchData();

        switch (index) {
            case 0:
                animateNumber(card.querySelector('p'), 0, data.totalSales, 1000);
                card.querySelector('small').innerText = "+20% from yesterday";
                break;
            case 1:
                animateNumber(card.querySelector('p'), 0, data.totalOrders, 1000);
                card.querySelector('small').innerText = "+10% from yesterday";
                break;
            case 2:
                animateNumber(card.querySelector('p'), 0, data.productsSold, 1000);
                card.querySelector('small').innerText = "+7% from yesterday";
                break;
            case 3:
                animateNumber(card.querySelector('p'), 0, data.newCustomers, 1000);
                card.querySelector('small').innerText = "+13% from yesterday";
                break;
        }
    });
});

var ctx1 = document.getElementById('profitChart').getContext('2d');
var profitChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Profit'],
        datasets: [{
            data: [80, 20],
            backgroundColor: ['#4CAF50', '#2a2a2a']
        }]
    }
});

