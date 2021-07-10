// Assignment Code - generate button 
var generateBtn = document.querySelector("#generate");

// Array of options for computer to pick from 
var lowercase = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
var numeric = ['0','1','2','3','4','5','6','7','8','9']; 
var punctuation = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '/`', '|', '}', '{', '[', ':', ';', '?', '>', '<', ',', '.', '/', '-', '=' ];

// Ask user for their input 
function userInput() {
  var length = prompt("How long would you like your password to be?") // this prompts the user for input

  if (isNaN(length)) { // if user input is not a number, then it gives them an error message 
    alert("Please enter a number."); 
    return; // this exits the window and finishes the stop 
  } 
  if (length < 8 || length > 128) { // if user don't follow perameters, alert message pops up
    alert("Please make sure your length is between 8 and 128 characters long."); 
    return; 
  }

  //prompts the user
  var usesLowercase = confirm("Would you like to use Lowercase letters in your password?"); 
  var usesUppercase = confirm("Would you like to use Uppercase letters in your password?"); 
  var usesNumeric = confirm("Would you like to use Numbers in your password?"); 
  var usesPunctuation = confirm("Would you like to use Symbols in your password?"); 
  
  //if user denies all data structures, alert message pops up
  if (usesLowercase === false && usesUppercase === false && usesNumeric === false && usesPunctuation === false ){
    alert("Please confirm at least 1 character type.");
    return; 
  }

  //created an object to store all of user's input in
  var input = { 
    length: length, 
    usesLowercase: usesLowercase, 
    usesUppercase: usesUppercase, 
    usesNumeric: usesNumeric, 
    usesPunctuation: usesPunctuation, 
  }
  
  //this returns all of the user's input
  return input; 
}; 

//gets a random character from an array and adds it to the garuanteenedCharacters array 
function getRandom(x) {
  var garuanteenedCharacter = x[Math.floor(Math.random() * x.length)];
  garuanteenedCharacters.push(garuanteenedCharacter);
  return; 
}; 

function generatePassword() {
// this passes all of the data from the userInput function into here
  var pwdInput = userInput(); 

  // these act as placeholders to hold info from the if statements 
  garuanteenedCharacters = []; 
  possibleCharacters = []; 
  results = []; 

  //if user asks for symbols 
  if (pwdInput.usesPunctuation === true) {
    var possibleCharacters = possibleCharacters.concat(punctuation);
    getRandom(punctuation);  
  }
  //if user asks for numbers 
  if (pwdInput.usesNumeric === true) {
    var possibleCharacters = possibleCharacters.concat(numeric); 
    getRandom(numeric); 
  }
  //if user asks for Uppercase letters 
  if (pwdInput.usesUppercase === true) {
    var possibleCharacters = possibleCharacters.concat(uppercase); 
    getRandom(uppercase); 
  }
  //if user asks for Lowercase letters 
  if (pwdInput.usesLowercase === true) {
    var possibleCharacters = possibleCharacters.concat(lowercase); 
    getRandom(lowercase); 
  }

  //pulls through the garuanteenedCharacters and puts it into the results array 
  for (i = 0; i < pwdInput.length; i++) {
    var resultCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]; 
    results.push(resultCharacter); 
  }

  //combine the results with random characters to create the final password 
  for (i = 0; i < garuanteenedCharacters.length; i++) {
    results[i] = garuanteenedCharacters[i]; 
  }

  //takes the commas out of the password display 
  var password = results.join(""); 
  return password; 
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button when you click the generate button, it runs the function writePassword 
generateBtn.addEventListener("click", writePassword);

