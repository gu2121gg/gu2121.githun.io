// script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    var isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });

    // Get input values
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Validate username
    if (username === '') {
        document.getElementById('username-error').style.display = 'block';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    }

    // Check if credentials are correct
    if (username !== 'gu2121' || password !== '2121') {
        document.getElementById('auth-error').style.display = 'block';
        isValid = false;
    }

    // If credentials are correct, redirect to another page
    if (isValid) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        window.location.href = 'MinhaCentral.html'; // Redirect to the new page
    }
});
