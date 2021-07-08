// Assignment Code - generate button 
var generateBtn = document.querySelector("#generate");

var lowercase = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
var numeric = ['0','1','2','3','4','5','6','7','8','9']; 
var punctuation = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '/`', '|', '}', '{', '[', ':', ';', '?', '>', '<', ',', '.', '/', '-', '=' ];

function userInput() {
  var length = prompt("Please enter your Password Length.")

  if (isNaN(length)) {
    alert("Please enter a number."); 
    return; 
  } 
  if (length < 8 || length > 128) {
    alert("Please make sure your length is between 8 and 128 characters long."); 
    return; 
  }
  var usesLowercase = confirm("Would you like to use lowercase letters in your password?"); 
  var usesUppercase = confirm("Would you like to use Uppercase letters in your password?"); 
  var usesNumeric = confirm("Would you like to use numbers in your password?"); 
  var usesPunctuation = confirm("Would you like to use symbols in your password?"); 
  if (usesLowercase === false && usesUppercase === false && usesNumeric === false && usesPunctuation === false ){
    alert("Please confirm at least 1 character type."); 
    return; 
  }
  var input = {
    length: length, 
    usesLowercase: usesLowercase, 
    usesUppercase: usesUppercase, 
    usesNumeric: usesNumeric, 
    usesPunctuation: usesPunctuation, 
  }
  console.log(input)
  return input; 
  
}

function generatePassword() {
  var pwdInput = userInput(); 
  //store empty arrays = results, possible characters to use, garuateened characters based on users choices 
  // create if statesments = if pwdInput. usesLowercase, then inside .concat (method that adds the different arrays together)
  // google concat 
  // for loops using the length 
  // Math.floor(Math.random() * str.length +1) = don't put it in a for loop 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button when you click the generate button, it runs the function writePassword 
generateBtn.addEventListener("click", writePassword);
