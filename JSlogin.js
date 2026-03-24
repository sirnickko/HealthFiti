document.getElementById('loginBtn').addEventListener('click', () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorCard = document.getElementById('errorCard');
    window.location.href = "Dash.html";

    // Logic: If fields are empty OR if credentials don't match (simulated)
    if (user === "" || pass === "") {
        errorCard.textContent = "Please fill in all fields";
        errorCard.style.display = "block";
    } else {
        // Simulating a failed lookup
        errorCard.textContent = "User invalid";
        errorCard.style.display = "block";
    }
});
document.getElementById('signupBtn').addEventListener('click', () => {
    window.location.href = "Sign Up Page.html";
});

// Optional: Hide the error card when the user starts typing again
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        document.getElementById('errorCard').style.display = "none";
    });
});