document.addEventListener('DOMContentLoaded', function () {
  const loanTenureForm = document.getElementById('loanTenureForm');
  const interestRate = document.getElementById('interestRate');
  const emiCalculator = document.getElementById('emiCalculator');
  const usernameDisplay = document.getElementById('username');
  const logoutBtn = document.getElementById('logoutBtn');


  // Retrieve username from session storage
  const username = sessionStorage.getItem('username');

  // Display username
  if (username) {
    usernameDisplay.textContent = username;
  }

  // Logout functionality
  logoutBtn.addEventListener('click', function () {
    // Clear session storage and redirect to home page
    sessionStorage.removeItem('username');
    window.location.href = 'index.html';
  });

  // Loan tenure form submission
  loanTenureForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Loan Application Submitted Successfully!');
  });

  // for example interest rates
  const interestRates = {
    6: '8%',
    12: '9%',
    24: '10%',
    36: '11%',
    48: '12%',
    60: '13%',
    72: '14%',
    84: '15%',
    96: '16%',
    108: '17%',
    120: '18%'
  };

  const updateInterestRate = () => {
    const selectedTenure = loanTenureForm.tenure.value;
    interestRate.textContent = `Interest Rate : ${interestRates[selectedTenure]}`;
  };

  const updateEMICalculator = () => {
    const selectedTenure = loanTenureForm.tenure.value;

    // Retrieve loan from session storage
    const loanAmount = sessionStorage.getItem('loan');



    const interestRate = parseFloat(interestRates[selectedTenure].replace('%', '')) / 100;
    const monthlyInterest = interestRate / 12;
    const numberOfPayments = selectedTenure;
    const emi = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    emiCalculator.textContent = `Estimated Monthly EMI : Rs. ${emi.toFixed(2)}  Only`;
  };

  loanTenureForm.tenure.addEventListener('change', function () {
    updateInterestRate();
    updateEMICalculator();
  });


  updateInterestRate();
  updateEMICalculator();
});

