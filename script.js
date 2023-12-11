// Function to validate the form
function validateForm() {
    // Retrieve values from form fields
    var name = document.getElementById('input-name').value;
    var email = document.getElementById('input-email').value;
    var telephone = document.getElementById('input-tel').value;
    var comments = document.getElementById('input-comment').value;

    // Check if the name field is empty
    if (name.trim() === '') {
        alert('Name cannot be empty');
        return false; // Return false to prevent form submission
    }

    // Check if the email field is empty
    if (email.trim() === '') {
        alert('Email cannot be empty');
        return false; // Return false to prevent form submission
    } else if (!isValidEmail(email)) { // Check if the email format is valid
        alert('Invalid email format');
        return false; // Return false to prevent form submission
    }

    // Check if the telephone field is empty
    if (telephone.trim() === '') {
        alert('Telephone cannot be empty');
        return false; // Return false to prevent form submission
    } else if (!isValidTelephone(telephone)) { // Check if the telephone format is valid
        alert('Invalid telephone format');
        return false; // Return false to prevent form submission
    }

    // Check if the comments field is empty
    if (comments.trim() === '') {
        alert('Comments cannot be empty');
        return false; // Return false to prevent form submission
    }

    // If all validations pass, return true to allow form submission
    return true;
}

// Function to validate email format
function isValidEmail(email) {
    // Add your email validation logic here
    // You can use a regular expression or other methods
    return true; // Return true for simplicity (modify based on actual validation)
}

// Function to validate telephone format
function isValidTelephone(telephone) {
    // Add your telephone validation logic here
    // You can use a regular expression or other methods
    return true; // Return true for simplicity (modify based on actual validation)
}
