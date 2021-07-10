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

function generatePassword() {
// this passes all of the data from the userInput function into here
  var pwdInput = userInput(); 

  // these act as placeholders to hold info from the if and if else statements 
  garuanteenedCharacters = []; 
  possibleCharacters = []; 
  result = []; 

  //if user asks for symbols 
  if (pwdInput.usesPunctuation === true) {
    var possibleCharacters = possibleCharacters.concat(punctuation); 
    var garuanteenedCharacter = punctuation[Math.floor(Math.random() * punctuation.length)]; 
    garuanteenedCharacters.push(garuanteenedCharacter); 
  }
  //if user asks for numbers 
  if (pwdInput.usesNumeric === true) {
    var possibleCharacters = possibleCharacters.concat(numeric); 
    var garuanteenedCharacter = numeric[Math.floor(Math.random() * numeric.length)]; 
    garuanteenedCharacters.push(garuanteenedCharacter); 
  }
  //if user asks for Uppercase letters 
  if (pwdInput.usesUppercase === true) {
    var possibleCharacters = possibleCharacters.concat(uppercase); 
    var garuanteenedCharacter = uppercase[Math.floor(Math.random() * uppercase.length)]; 
    garuanteenedCharacters.push(garuanteenedCharacter);
  }
  //if user asks for Lowercase letters 
  if (pwdInput.usesLowercase === true) {
    var possibleCharacters = possibleCharacters.concat(lowercase); 
    var garuanteenedCharacter = lowercase[Math.floor(Math.random() * lowercase.length)]; 
    garuanteenedCharacters.push(garuanteenedCharacter);
  }
  //for loop needs to go here 
  return; 
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button when you click the generate button, it runs the function writePassword 
generateBtn.addEventListener("click", writePassword);



//store empty arrays = results, possible characters to use, garuateened characters based on users choices 
  // create if statesments = if pwdInput. usesLowercase, then inside .concat (method that adds the different arrays together)
  // google concat **once user agrees to the any of the data types, it concats or adds the arrays together 
  // for loops using the length 
  // Math.floor(Math.random() * str.length +1) = don't put it in a for loop 


//created function to generate a random character 
// function garuanteedCharacters(options) {
//   var index = Math.floor(Math.random() * options.length)
//   var garuanteedCharacters = options[index]; 
// }


// if (usesPunctuation === true) {
    
  // } else if (usesNumeric === true) {
  //   var possibleCharacters = lowercase.concat(numeric); 
  //   var garuanteenedCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]; 
  // } else if (usesUppercase === true) {
  //   var possibleCharacters = lowercase.concat(uppercase); 
  //   var garuanteenedCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]; 
  // } else {
  //   var garuanteenedCharacters = lowercase[Math.floor(Math.random() * lowercase.length)]; 
  // }


// if (usesNumeric === true && usesPunctuation === true) {
  //   var numericAndPunctuation = lowercaseAndNumeric.concat(punctuation); 
  // }
  
  // if (usesUppercase === true && usesNumeric === true) {
  //   var uppercaseAndNumeric = lowercaseAndNumeric.concat(uppercase); 
  // }
  
  // if (usesUppercase === true && usesPunctuation === true) {
  //   var uppercaseAndPunctuation = lowercaseAndNumeric.concat(punctuation); 
  // }

  // if (usesUppercase === true && usesPunctuation === true && usesNumeric === true && usesLowercase === true) {
  //   var possibleCharacters = lowercaseAndNumeric.concat(uppercaseAndPunctuation); 
  //   var garuanteenedCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  // }
  // if (usesLowercase === true && usesUppercase === true && usesNumeric === true) {
  //   var possibleCharacters = uppercase.concat(numeric); 
  //   var garuanteenedCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  // }
  // if (usesLowercase === true && usesUppercase === true) {
  //   var possibleCharacters = uppercase.concat(lowercase);  
  //   var garuanteenedCharacters = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
  // } 
  // if (usesLowercase === true) {
  //   var garuanteenedCharacters = lowercase[Math.floor(Math.random() * lowercase.length)]; // this selects 1 letter to be used for the final password
  // }