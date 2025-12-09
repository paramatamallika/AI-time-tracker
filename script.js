console.log("Script loaded");

// Login functionality
document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Test credentials
    if(username === "admin" && password === "1234") {
        window.location.href = "home.html"; // redirect to Home page after login
    } else {
        alert("Invalid username or password");
    }
});
