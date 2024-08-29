 // Initialize charts
 const ctxSales = document.getElementById('salesChart').getContext('2d');
 const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
 const ctxPerformance = document.getElementById('performanceChart').getContext('2d');

 const salesChart = new Chart(ctxSales, {
     type: 'line',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
         datasets: [{
             label: 'Sales',
             data: [10, 20, 30, 25, 40, 45],
             backgroundColor: 'rgba(26, 188, 156, 0.2)',
             borderColor: 'rgba(26, 188, 156, 1)',
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         scales: {
             x: {
                 beginAtZero: true
             },
             y: {
                 beginAtZero: true
             }
         }
     }
 });

 const revenueChart = new Chart(ctxRevenue, {
     type: 'bar',
     data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
         datasets: [{
             label: 'Revenue',
             data: [5000, 6000, 7000, 8000, 9000, 10000],
             backgroundColor: 'rgba(52, 152, 219, 0.2)',
             borderColor: 'rgba(52, 152, 219, 1)',
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         scales: {
             x: {
                 beginAtZero: true
             },
             y: {
                 beginAtZero: true
             }
         }
     }
 });

 const performanceChart = new Chart(ctxPerformance, {
     type: 'pie',
     data: {
         labels: ['A', 'B', 'C', 'D'],
         datasets: [{
             label: 'Performance',
             data: [30, 25, 20, 25],
             backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e74c3c'],
             borderColor: '#fff',
             borderWidth: 1
         }]
     },
     options: {
         responsive: true
     }
 });

 // Burger Menu Toggle
 $('.burger-menu').click(function() {
     $('.sidebar').toggleClass('show');
 });