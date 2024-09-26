const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
const switchMode = document.getElementById('switch-mode');
const body = document.body; // Reference to body

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})

if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

// Dark mode toggle functionality
switchMode.addEventListener('change', function () {
	if (this.checked) {
		body.classList.add('dark');
	} else {
		body.classList.remove('dark');
	}
});

// Function to make numbers count up
function animateCounter(element, start, end, duration, symbol = "") {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    let timer = setInterval(function () {
        current += increment;
        element.textContent = symbol + current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Select all the elements in the box-info section that need to count up
window.onload = function() {
    let counters = document.querySelectorAll('.box-info h3');

    // Extracting values and handling currency
    let values = [1020, 2234, 2000]; // Values to count to
    let symbols = ["", "", "$"]; // Symbol for each counter (empty or $)

    counters.forEach((counter, index) => {
        let finalValue = parseInt(values[index]); // Parse the number
        animateCounter(counter, 0, finalValue, 2000, symbols[index]); // Start counter animation
    });
};
// Wait for DOM to load before rendering the chart
window.onload = function () {
    // Doughnut chart for order status
    var ctx = document.getElementById('doughnutChart').getContext('2d');
    
    var doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending', 'Processing'],
            datasets: [{
                label: 'Order Status',
                data: [5, 3, 2], // Example data for orders
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)', // Completed
                    'rgba(255, 206, 86, 0.6)',  // Pending
                    'rgba(54, 162, 235, 0.6)'   // Processing
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false, // Ensures it fills the available space
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    });

    // Animate counters for box-info (this is added to keep the counters functional)
    let counters = document.querySelectorAll('.box-info h3');
    let values = [1020, 2834, 2543]; // Final values for each counter
    let symbols = ["", "", "$"]; // Symbol for each counter

    counters.forEach((counter, index) => {
        let finalValue = parseInt(values[index]);
        animateCounter(counter, 0, finalValue, 2000, symbols[index]);
    });
};





  // Revenue Line Chart
 



// calender
document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendar = document.getElementById('calendar');
    const monthAndYear = document.getElementById('monthAndYear');
    
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
  
    // Add day headers
    function createDayHeaders() {
      for (let i = 0; i < daysOfWeek.length; i++) {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('header');
        dayHeader.innerText = daysOfWeek[i];
        calendar.appendChild(dayHeader);
      }
    }
  
    // Calculate the number of days in a month
    function daysInMonth(month, year) {
      return new Date(year, month + 1, 0).getDate();
    }
  
    // Generate the calendar based on month and year
    function generateCalendar(month, year) {
      calendar.innerHTML = '';  // Clear previous calendar
      createDayHeaders();
  
      let firstDay = new Date(year, month).getDay(); // Get the first day of the month
      let totalDays = daysInMonth(month, year);      // Get total days in the month
  
      // Display month and year
      const monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
      monthAndYear.innerText = `${monthNames[month]} ${year}`;
  
      // Add empty cells for days before the start of the month
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendar.appendChild(emptyCell);
      }
  
      // Add day cells for each day in the month
      for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.innerText = day;
  
        // Highlight today's date
        if (day === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          dayCell.classList.add('today');
        }
  
        calendar.appendChild(dayCell);
      }
    }
  
    // Navigate to the previous month
    function previousMonth() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      generateCalendar(currentMonth, currentYear);
    }
  
    // Navigate to the next month
    function nextMonth() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      generateCalendar(currentMonth, currentYear);
    }
  
    document.getElementById('prevMonth').addEventListener('click', previousMonth);
    document.getElementById('nextMonth').addEventListener('click', nextMonth);
  
    // Initialize calendar
    generateCalendar(currentMonth, currentYear);
  });
  // Line chart for Reports Snapshot (User Growth over Months)


// Chart.js Configuration
var ctx = document.getElementById('myChart') .reading (getContext('2d'));

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Users',
            data: [90, 70, 85, 60], // Adjust data to match the number of labels
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


window.onload = function() {
  let counters = document.querySelectorAll('.box-info-2 h3');

  // Extracting values and handling currency
  let values = [1000, 2234, 2000]; // Values to count to
  let symbols = ["", "", "$"]; // Symbol for each counter (empty or $)

  counters.forEach((counter, index) => {
      let finalValue = parseInt(values[index]); // Parse the number
      animateCounter(counter, 0, finalValue, 2000, symbols[index]); // Start counter animation
  });
};