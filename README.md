# loan-page-application
Loan Page application form website using HTML, CSS and JavaScript.
The loan page application is a web-based form designed to facilitate the submission of loan applications. It consists of two main pages: the loan application page (index.html) and the confirmation page (confirm.html). Here's a brief description of each:

A) Loan Application Page (index.html):
   1) The loan application page allows users to input their personal and financial information to apply for a loan.
   2) Users are required to fill in the following details:
      a) Full Name: Accepts alphabets and spaces only, with a minimum of two words and each word having a minimum of four characters.
      b) Email: Validates email format.
      c) PAN (Permanent Account Number): Accepts alphanumeric characters in a specific format.
      d) Loan Amount: Accepts numeric values, with a maximum of nine digits.
   3) Additionally, the loan amount field displays the amount entered in words beside it, converting the numeric value into words (e.g., "Four Lakh Fifty Thousand Rupees").
   4) Alternatively, if the conversion is not possible, it displays the estimated EMI based on the loan amount, interest rate, and tenure.
   5) The form submits only upon correct validation of all fields.
B) Confirmation Page (confirm.html):
   1) After the user submits the loan application form, the confirmation page displays a message thanking the user for their inquiry.
   2) It generates a random 4-digit verification number, logs it to the console, and sends it to the user's email.
   3) The user is prompted to enter the received OTP (One-Time Password) in a text box and click "Validate".
   4) If the entered OTP matches the generated one, a "Validation Successful!" message is displayed, and the user is redirected to the home page.
   5) If the entered OTP is incorrect, the user is prompted to re-enter it. After three unsuccessful attempts, a "Validation Failed!" message is displayed, and the user is redirected to a 404 page (optional).
Overall, the loan page application provides a user-friendly interface for submitting loan applications securely and efficiently, incorporating validation checks and confirmation steps to ensure data accuracy and integrity.
