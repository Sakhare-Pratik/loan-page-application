// Function to retrieve URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Retrieve form data from URL parameters
var fullName = getUrlParameter('fullName');
var email = getUrlParameter('email');
var pan = getUrlParameter('pan');
var loanAmount = getUrlParameter('loanAmount');

// Display form data on the page
if (fullName && email && loanAmount) {
  document.getElementById('confirmationMessage').innerHTML = `
  <p>Dear <span>${fullName.split(' ')[0]}</span>,</p>
  <p>Thank you for your inquiry. A 4 digit verification number has been sent to your email:<span>${email}</span>, please enter it in the following box and submit for confirmation.</p>
`;
}
// Function to validate OTP
let attempts = 0;
const generateRandomOTP = () => Math.floor(1000 + Math.random() * 9000);

function validateOTP() {
  const enteredOTP = document.getElementById('otp').value;
  const generatedOTP = sessionStorage.getItem('otp');

  if (enteredOTP === generatedOTP) {
    document.getElementById('otpForm').innerHTML = '<p>Validation Successful!</p>';
    alert('Application Submitted')
    // Redirect the user to the home page or perform any other action
    window.location.href = 'index.html';
  } else {
    attempts++;
    if (attempts >= 3) {
      document.getElementById('otpForm').innerHTML = '<p>Validation Failed! Too many attempts. Please try again later.</p>';
      alert('Validation Failed! Too many attempts. Please try again later.')
      // Redirect the user to the 404 page or perform any other action
      window.location.href = '404.html';
    } else {
      document.getElementById('otp').value = '';
      document.getElementById('otp').focus();
      alert('Incorrect OTP. Please try again.');
    }
  }
}

// Function to initialize OTP generation and display
window.onload = function () {
  const generatedOTP = generateRandomOTP();
  console.log('Generated OTP:', generatedOTP);
  sessionStorage.setItem('otp', generatedOTP);
};


