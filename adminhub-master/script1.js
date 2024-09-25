// Chart for balance
const balanceChart = document.getElementById('balanceChart').getContext('2d');
new Chart(balanceChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Balance',
      data: [50000, 52000, 49000, 51000, 50000, 52422],
      backgroundColor: 'rgba(66, 135, 245, 0.2)',
      borderColor: 'rgba(66, 135, 245, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: false
      }
    }
  }
});

// Chart for spending
const spendingChart = document.getElementById('spendingChart').getContext('2d');
new Chart(spendingChart, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Spending',
      data: [600, 650, 700, 675, 682.5],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: false
      }
    }
  }
});

// Chart for earnings
const earningsChart = document.getElementById('earningsChart').getContext('2d');
new Chart(earningsChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Earnings',
      data: [600, 630, 660, 650, 682.5],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: false
      }
    }
  }
});
