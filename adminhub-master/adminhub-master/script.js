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

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
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
    let values = [1020, 2834, 2543]; // Values to count to
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
                borderWidth: 1
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







