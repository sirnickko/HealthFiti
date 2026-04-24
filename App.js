//function for locking out user from logging in from url
function checkAccess(requiredRole) {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const userRole = sessionStorage.getItem('userRole');

    if (!isLoggedIn) {
        // Not logged in at all? Back to login page.
        window.location.href = "../LoginPage/Login.html";
    } else if (requiredRole && userRole !== requiredRole) {
        // Logged in but wrong role? Deny access.
        alert("Access Denied: You do not have permission to view this page.");
        window.location.href = "../LoginPage/Login.html";
    }
}

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
// Central Navigation Function
function navigateTo(page) {
    const routes = {
        'dashboard': '../DoctorDash/Dash.html',
        'appointments': '../Appointments/Appointments.html',
        'prescriptions': '../PrescriptionsDash/Prescriptions.html',
        'patients': '../PatientDash/Patient.html',
        'login': '../LoginPage/Login.html',
        'signup': '../SignUp/Sign Up Page.html'
    };

    const target = routes[page.toLowerCase()];

    if (target) {
        window.location.href = target;
    } else {
        console.error("Route not found: " + page);
    }
}
const mockDatabase = [
        { user: "ian_kimani", pass: "doc123", role: "DOCTOR" },
        { user: "john_doe", pass: "pat123", role: "PATIENT" }
    ];

const foundUser = mockDatabase.find(u => u.user === user && u.pass === pass);

if (foundUser) {
        // 2. CREATE A SESSION (This is the security layer)
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userRole', foundUser.role);
        
        // 3. Redirect based on the HIDDEN role
        if (foundUser.role === "DOCTOR") {
            navigateTo('dashboard');
        } else {
            navigateTo('patientdashboard');
        }
    } else {
        showError("Invalid credentials.");
    }


