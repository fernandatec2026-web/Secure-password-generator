// Add click event listeners to buttons
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);

// Function to generate the password
function generatePassword() {
  // Get user-selected options
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  // Define character sets
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // Combine selected character sets
  let allChars = '';
  if (includeUppercase) allChars += upperChars;
  if (includeLowercase) allChars += lowerChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  // Alert if no option is selected
  if (allChars === '') {
    alert('Please select at least one option!');
    return;
  }

  // Generate password randomly
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  // Display password in output field
  document.getElementById('passwordOutput').value = password;
}

// Function to copy the generated password
function copyPassword() {
  const password = document.getElementById('passwordOutput');
  if (password.value === '') {
    alert('No password to copy!');
    return;
  }
  password.select();
  document.execCommand('copy'); // Copies the selected text to clipboard
  alert('Password copied to clipboard!');
}