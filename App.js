// This function will be available to any page that links this script
function logout() {
    if (confirm("Are you sure you want to logout?")) {
        // Since all your files are in the 'LoginPage' folder now:
        window.location.href = "../LoginPage/Login.html"; 
    }
}

// Optional: Add a helper to highlight the active sidebar link automatically
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.sidebar li');
    
    links.forEach(link => {
        // If the text in the <li> matches the page name, make it active
        if (link.innerText.toLowerCase().includes(currentPage.split('.')[0].toLowerCase())) {
            link.classList.add('active');
        }
    });
});