// Tab switching
function switchTab(tabIndex) {
    document.querySelectorAll('.section').forEach((sec, i) => {
      sec.style.display = (i === tabIndex) ? 'block' : 'none';
    });
    document.querySelectorAll('.tab').forEach((t, i) => {
      t.classList.toggle('active', i === tabIndex);
    });
  }

  // Show status message
  function showMessage(text, type = 'success') {
    const status = document.getElementById('status');
    status.innerHTML = `<div class="message ${type}">${text}</div>`;
    
    setTimeout(() => {
      status.innerHTML = '';
    }, 5000);
  }

  // Appointment form
  document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const doctor = document.getElementById('doctor').value;
    if (!doctor) return;
    
    showMessage(`✅ Appointment with <strong>${doctor}</strong> booked successfully!<br/>Check your email for confirmation.`, 'success');
    
    // Reset form
    this.reset();
  });

  // Symptom report form
  document.getElementById('symptomForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showMessage('✅ Your symptom report has been sent to the doctor.<br>They will contact you soon.', 'success');
    this.reset();
  });

  // Set default tab
  window.onload = () => {
    // You can pre-fill today's date
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) dateInput.value = today;
};