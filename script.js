// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '{', '}', '[', ']', '|', '/', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?']

// Write password to the #password input
function writePassword() {
  var chars = []
  var passLength = window.prompt("Choose password length: enter a numeric value between 8 and 128.")
  if (isNaN(passLength)) {
    window.alert("Error: Password length must be entered as a numeric value.");
    return;
  }
  if (passLength > 128 || passLength < 8) {
    window.alert("Error: Password length must be between 8 and 128.");
    return;
  }
  var askLower = window.confirm("Use lowercase letters?");
  if (askLower) {
    chars = chars.concat(lower);
    console.log(chars);
  }
  var askUpper = window.confirm("Use uppercase letters?");
  if (askUpper) {
    chars = chars.concat(upper);
    console.log(chars);
  }
  var askNumber = window.confirm("Use numbers?");
  if (askNumber) {
    chars = chars.concat(numbers);
    console.log(chars);
  }
  var askSpec = window.confirm("Use special characters?");
  if (askSpec) {
    chars = chars.concat(specChars);
    console.log(chars);
  }

  // var password = generatePassword();
  // function generatePassword () {};
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);