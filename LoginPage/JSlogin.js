document.getElementById('loginBtn').addEventListener('click', () => {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorCard = document.getElementById('errorCard');

   
    // Logic: If fields are empty OR if credentials don't match (simulated)
    if (user === "" || pass === "") {
        errorCard.textContent = "Please fill in all fields";
        errorCard.style.display = "block";
    } else {
        // Simulating a failed lookup
        errorCard.textContent = "User invalid";
        errorCard.style.display = "block";
        // Redirect to doctor dashboard (successful login)
        window.location.href = "../DoctorDash/Dash.html";
    }
});


// Optional: Hide the error card when the user starts typing again
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        document.getElementById('errorCard').style.display = "none";
    });
});