document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const patientName = e.target.parentElement.parentElement.cells[1].innerText;
        alert("Opening medical records for: " + patientName);
    });
});
// 1. Our Data Store
let appointments = [
    { id: 1, time: "09:00 AM", name: "John Doe", reason: "Routine Checkup", status: "Waiting" },
    { id: 2, time: "10:30 AM", name: "Jane Smith", reason: "Fever & Chills", status: "Confirmed" }
];

// 2. Initialize the Dashboard
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    updateStats();
});

// 3. Function to Render the Table
function renderTable() {
    const tableBody = document.getElementById('appointmentList');
    tableBody.innerHTML = ""; // Clear current rows

    appointments.forEach((appt, index) => {
        const row = `
            <tr>
                <td>${appt.time}</td>
                <td>${appt.name}</td>
                <td>${appt.reason}</td>
                <td><span class="status ${appt.status.toLowerCase()}">${appt.status}</span></td>
                <td>
                    <button class="action-btn" onclick="editPatient(${index})">Edit</button>
                    <button class="action-btn" style="background:#ffcccc" onclick="deletePatient(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// 4. Function to Update Total Records
function updateStats() {
    const totalPatientsElement = document.querySelector('.stat-card:nth-child(1) .value');
    // Using appointments.length to dynamically update the "124" in your screenshot
    totalPatientsElement.innerText = appointments.length;
}

// 5. Admin Function: Edit Patient
function editPatient(index) {
    const newName = prompt("Enter new patient name:", appointments[index].name);
    const newStatus = prompt("Enter new status (Waiting/Confirmed/Completed):", appointments[index].status);

    if (newName && newStatus) {
        appointments[index].name = newName;
        appointments[index].status = newStatus;
        renderTable(); // Redraw table with new info
    }
}

// 6. Admin Function: Delete Patient
function deletePatient(index) {
    if (confirm("Are you sure you want to remove this record?")) {
        appointments.splice(index, 1); // Remove from array
        renderTable();
        updateStats(); // Update the counter
    }
}

// 7. Admin Function: Add New Record (Example)
function addNewPatient(time, name, reason, status) {
    appointments.push({ id: Date.now(), time, name, reason, status });
    renderTable();
    updateStats();
}
function handleAddPatient() {
    const time = document.getElementById('newTime').value;
    const name = document.getElementById('newName').value;
    const reason = document.getElementById('newReason').value;

    if (time && name && reason) {
        // This calls the function from the previous script
        addNewPatient(time, name, reason, "Waiting");
        
        // Clear inputs after adding
        document.getElementById('newTime').value = "";
        document.getElementById('newName').value = "";
        document.getElementById('newReason').value = "";
    } else {
        alert("Please fill all fields to register a patient.");
    }
}