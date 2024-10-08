// Load registered users from local storage
const users = JSON.parse(localStorage.getItem('users')) || {}; // Retrieve users from local storage

// Handle user login
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (users[username] && users[username] === password) {
        alert(`Welcome, ${username}!`);
        localStorage.setItem('currentUser', username); // Save the username in local storage
        window.location.href = 'input.html'; // Redirect to the input area
    } else {
        alert('Invalid credentials. Please register or try again.');
    }
});
