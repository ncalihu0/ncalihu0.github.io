// Function to show an immediate alert when the page loads
function showAlert() {
    alert('Hello! Welcome to my website');
}

// Function to show a delayed alert after 5 seconds
function delayedAlert() {
    // Set a timeout for 5000 milliseconds (5 seconds)
    setTimeout(function () {
        alert('Have Fun with my website');
    }, 5000);
}

// Function to initiate a countdown with a specified number of seconds
function countdown(seconds) {
    // Initialize the count with the specified seconds
    var count = seconds;

    // Set up an interval that runs every 1000 milliseconds (1 second)
    var countdownInterval = setInterval(function () {
        // Update the content of the element with id 'countdown'
        document.getElementById('countdown').innerHTML = 'Countdown: ' + count + ' seconds remaining.';
        
        // Decrement the count
        count--;

        // Check if the countdown has reached 0
        if (count < 0) {
            // Stop the interval
            clearInterval(countdownInterval);

            // Update the content of the element with id 'countdown' after countdown ends
            document.getElementById('countdown').innerHTML = 'Happy to have you here!';
        }
    }, 1000); // Run every 1000 milliseconds (1 second)
}

// Call the functions as needed

// Show an immediate alert
showAlert();

// Show a delayed alert after 5 seconds
delayedAlert();

// Initiate a countdown for 20 seconds
countdown(20);
