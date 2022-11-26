// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  
  var passwordText = document.querySelector('#password');
  
  var passwordlength = (prompt("What length would you like your password to be? Enter a number between 10 & 64 please."));
  while(passwordlength <= 10 || passwordlength >= 64) {
    alert('Your password length has to be between 10 and 64.');
    passwordlength = (prompt("What length would you like your password to be? Enter a number between 10 & 64 please."));
  }

}
  passwordText.value = password;

  for (var i = 0; i <= passwordlength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordlength);
    password += password.substring(randomNumber, randomNumber +1);
   }

   document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Activate the password button 
var password=document.getElementById("password");

 function genPassword() {
    var specialCharacters =  '@','%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(' ,'}', '{', ']', '[', '~', '-', '_', '.'
    var passwordlength "<= '10' >= '64'"
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var password = "";
 for (var i = 0; i <= passwordlength; i++) {
   var randomNumber = Math.floor(Math.random() * password.length);
   password += password.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }