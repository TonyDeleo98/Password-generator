// Assignment code here 
// code for "Generate Password" button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Character type arrays
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specChars = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '{', '}', '[', ']', '|', '/', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?'];

// Function initiated by clicking "Generate Password" button
function writePassword() {
  var chars = [];
  var newPassword = [];
  var check;

  // Function for verifying character type inclusion in generated password
  function checker() {
    var test = false;
    for (var j = 0; j < check.length; j++) {
      if (newPassword.includes(check[j])) {
        test = true;
      };
    };
    if (!test) {
      generatePassword();
      return;
    };
  }

  // Password length prompt
  var passLength = window.prompt("Choose password length: enter a numeric value between 8 and 128.");
  if (passLength.toLowerCase() === "bojangles"){
    window.alert("*************  YOU CAN'T SAY 'BOJANGLES'!!!  *************");
    return;
  }
  if (isNaN(passLength)) {
    window.alert("Error: Password length must be entered as a numeric value.");
    return;
  }
  if (passLength > 128 || passLength < 8) {
    window.alert("Error: Password length must be between 8 and 128.");
    return;
  }
  
  // Character type confirm windows
  var askLower = window.confirm("Use lowercase letters?");
  if (askLower) {
    chars = chars.concat(lower);
  }
  var askUpper = window.confirm("Use uppercase letters?");
  if (askUpper) {
    chars = chars.concat(upper);
  }
  var askNumber = window.confirm("Use numbers?");
  if (askNumber) {
    chars = chars.concat(numbers);
  }
  var askSpec = window.confirm("Use special characters?");
  if (askSpec) {
    chars = chars.concat(specChars);
  }
  if (!askLower && !askUpper && !askNumber && !askSpec) {
    window.alert("Error: At least one character type must be selected.");
    return;
  }

  // Password generation function
  function generatePassword () {
    for (var i = 0; i < passLength; i++) {
      newPassword[i] = chars[Math.floor(Math.random() * chars.length)];
    };
    if (askLower) {
      check = lower;
      checker();
    };
    if (askUpper) {
      check = upper;
      checker();
    };
    if (askNumber) {
      check = numbers;
      checker();
    };
    if (askSpec) {
      check = specChars;
      checker();
    };
    return newPassword.join('');
  };

  // Starter code for displaying generated password in the browser
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}