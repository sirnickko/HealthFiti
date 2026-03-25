// Initialize with some dummy data
let allAppointments = [
    { date: "2026-03-25", time: "09:00", patient: "John Doe", type: "Consultation", status: "Confirmed" },
    { date: "2026-03-25", time: "11:30", patient: "Jane Smith", type: "Emergency", status: "Waiting" }
];

document.addEventListener('DOMContentLoaded', () => {
    displayAppointments();
});

function displayAppointments() {
    const list = document.getElementById('fullAppointmentList');
    list.innerHTML = "";

    allAppointments.sort((a, b) => a.time.localeCompare(b.time)).forEach((appt, index) => {
        list.innerHTML += `
            <tr>
                <td>${appt.date}</td>
                <td>${appt.time}</td>
                <td>${appt.patient}</td>
                <td>${appt.type}</td>
                <td><span class="status ${appt.status.toLowerCase()}">${appt.status}</span></td>
                <td>
                    <button class="action-btn" onclick="cancelAppt(${index})">Cancel</button>
                </td>
            </tr>
        `;
    });
}

function bookAppointment() {
    const date = document.getElementById('apptDate').value;
    const time = document.getElementById('apptTime').value;
    const patient = document.getElementById('apptPatient').value;
    const type = document.getElementById('apptType').value;

    if (date && time && patient) {
        allAppointments.push({ date, time, patient, type, status: "Confirmed" });
        displayAppointments();
        // Clear inputs
        document.getElementById('apptPatient').value = "";
    } else {
        alert("Please fill in all scheduling details.");
    }
}

function cancelAppt(index) {
    if(confirm("Cancel this appointment?")) {
        allAppointments.splice(index, 1);
        displayAppointments();
    }
}