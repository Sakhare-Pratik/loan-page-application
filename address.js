document.addEventListener('DOMContentLoaded', function () {
  const addressForm = document.getElementById('addressForm');

  addressForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form data
    const fullName = document.getElementById('fullName').value.trim();
    const addressLine1 = document.getElementById('addressLine1').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value.trim();

    // // Validate form fields
    // if (fullName === '' || addressLine1 === '' || city === '' || state === '' || zip === '' || country === '') {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    // Validate ZIP/Postal Code format (optional)
    const zipRegex = /^\d{6}$/;
    if (!zipRegex.test(zip)) {
      alert('Please enter a valid ZIP/Postal Code.');
      return;
    }
    // Store Full Name in session storage
    sessionStorage.setItem('username', fullName);

    // If all validations pass, submit the form (or perform further processing)
    alert('Address details submitted successfully!');
    addressForm.reset();
    // Reset form after submission
    // Redirect the user to loan tenure page
    window.location.href = 'loantenure.html';
  });
});
