document.addEventListener('DOMContentLoaded', function () {
  const addressForm = document.getElementById('addressForm');
  const usernameDisplay = document.getElementById('username');
  const logoutBtn = document.getElementById('logoutBtn');
  
  // Retrieve username from session storage
  const username = sessionStorage.getItem('username');

  if (username) {
    usernameDisplay.textContent = username;
  }
  logoutBtn.addEventListener('click', function () {
    // Clear session storage and redirect to home page
    sessionStorage.removeItem('username');
    window.location.href = 'index.html';
  });

  addressForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form data
    const fullName = document.getElementById('fullName').value.trim();
    const addressLine1 = document.getElementById('addressLine1').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value.trim();

     // Validate form fields
     if (fullName === '' || addressLine1 === '' || city === '' || state === '' || zip === '' || country === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Validate ZIP/Postal Code format (optional)
    const zipRegex = /^\d{6}$/;
    if (!zipRegex.test(zip)) {
      alert('Please enter a valid ZIP/Postal Code.');
      return;
    }
    
    // If all validations pass, submit the form 
    alert('Address Details Submitted Successfully!');
    
    // Redirect the user to loan tenure page
    window.location.href = 'loantenure.html';
  });
});
