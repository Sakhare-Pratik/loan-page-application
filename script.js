// Function to convert number to words
function numberToWords(number) {

  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  // Function to convert single-digit or double-digit number to words
  function convertToWords(num) {
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    const digit = num % 10;
    const tenDigit = Math.floor(num / 10);
    return tens[tenDigit] + (digit ? ' ' + units[digit] : '');
  }

  // Function to convert three-digit number to words
  function convertThreeDigitToWords(num) {
    const hundredDigit = Math.floor(num / 100);
    const remainingTwoDigit = num % 100;
    let words = '';
    if (hundredDigit) {
      words += units[hundredDigit] + ' Hundred';
      if (remainingTwoDigit) {
        words += ' and ';
      }
    }
    if (remainingTwoDigit) {
      words += convertToWords(remainingTwoDigit);
    }
    return words;
  }

  // Convert crore, lakh, thousand, and remaining numbers to words
  const crore = Math.floor(number / 10000000);
  const lakh = Math.floor((number % 10000000) / 100000);
  const thousand = Math.floor((number % 100000) / 1000);
  const remaining = number % 1000;

  let words = '';
  if (crore) {
    words += convertThreeDigitToWords(crore) + ' Crore ';
  }
  if (lakh) {
    words += convertThreeDigitToWords(lakh) + ' Lakh ';
  }
  if (thousand) {
    words += convertThreeDigitToWords(thousand) + ' Thousand ';
  }
  if (remaining) {
    words += convertThreeDigitToWords(remaining);
  }
  return words + ' Rupees Only';
}

// // Function to calculate estimated EMI
// function calculateEMI(amount) {
//   const principal = parseFloat(amount);

//   const interestRate = 8.5 / 100; // 8.5%
//   const tenureInYears = 15;
//   const numberOfPayments = tenureInYears * 12;
//   const monthlyInterestRate = interestRate / 12;

//   const emi = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

//   return emi.toFixed(2);

// };
// Update loan amount in words when the loan amount input changes
document.getElementById('loanAmount').addEventListener('input', function () {
  var loanAmount = this.value;
  var loanAmountWords = numberToWords(loanAmount);
  document.getElementById('loanAmountInWords').textContent = loanAmountWords || '';
});
//  Function to handle form submission
document.getElementById('loanForm').addEventListener('submit',
  function (event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var pan = document.getElementById('pan').value;
    var loanAmount = document.getElementById('loanAmount').value;


    // Validate Full Name (minimum two words each with minimum 4 characters each)
    var fullNamePattern = /[A-Za-z]{4,} [A-Za-z]{4,}/;
    if (!fullNamePattern.test(fullName)) {
      alert('Please enter a valid full name (minimum two words with minimum 4 characters each)');
      return;
    }
    // Validate Email
    var emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate PAN (Alphanumeric, must be in format ABCDE1234F)
    var panPattern = /[A-Za-z0-9]{10}/;
    if (!panPattern.test(pan)) {
      alert('Please enter a valid PAN number in format ABCDE1234F');
      return;
    }

    // Validate Loan Amount (numeric, maximum of 9 digits)
    var loanAmountPattern = /^[1-9]\d{0,8}$/;
    if (!loanAmountPattern.test(loanAmount)) {
      alert('Please enter a valid loan amount (maximum of 9 digits)');
      return;
    }

    // Display loan amount in words or calculate estimated EMI
    var loanAmountDisplay = numberToWords(loanAmount)
      || 'Estimated EMI: ' + calculateEMI(loanAmount);
    document.getElementById('loanAmountInWords').textContent = loanAmountDisplay;





    // Pass form data to confirm.html using URL parameters
    window.location.href = 'confirm.html?fullName=' + encodeURIComponent(fullName) +
      '&email=' + encodeURIComponent(email) +
      '&pan=' + encodeURIComponent(pan) +
      '&loanAmount=' + encodeURIComponent(loanAmount);

  });


