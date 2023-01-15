// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Function to prompt user for password options
function getPasswordOptions(){
let pwdLength = parseInt (
  prompt("How long password you want to have?")
)
alert(pwdLength);
if(isNaN(pwdLength) === true){
  alert('You must enter numeric value between 10 and 64')
  return;
}
if(pwdLength < 10){
  alert('Password lenght must be at least 10 characters')
  return;
}
if(pwdLength > 64){
  alert('Password lenght must be maximum of 64 characters')
  return;
}
let includeSpecialCharacters = confirm(
  'Click Ok to include special characters, press cancel to not include them'
)
let includeNumericCharacters = confirm(
  'Click Ok to include numbers, press cancel to not include them'
)
let includeLowerCasedCharacters = confirm(
  'Click Ok to include lower cased characters, press cancel to not include them'
)
let includeUpperCasedCharacters = confirm(
  'Click Ok to include upper cased characters, press cancel to not include them'
)
if (includeSpecialCharacters === false &&
  includeNumericCharacters === false &&
  includeLowerCasedCharacters === false &&
  includeUpperCasedCharacters === false) {
    alert('Password can not be generated without any character types selected, please select at least one type of characters')
    return;
  }
let passwordOptions = {
  pwdLength: pwdLength,
  includeSpecialCharacters: includeSpecialCharacters,
  includeNumericCharacters: includeNumericCharacters,
  includeLowerCasedCharacters: includeLowerCasedCharacters,
  includeUpperCasedCharacters: includeUpperCasedCharacters
}
return passwordOptions;
}
// Function for getting a random element from an array
function getRandom(arr) {
let randomSet = Math.floor(Math.random() * arr.length);
let randomElement = arr[randomSet];
return randomElement;
}
// Function to generate password with user input
function generatePassword() {
let options = getPasswordOptions();
let pwdGenerationResult = [];
let possibleCharacters = [];
let guaranteedCharacters = [];
if(options.includeSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  guaranteedCharacters.push(getRandom(specialCharacters))
}
if(options.includeNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters)
  guaranteedCharacters.push(getRandom(numericCharacters))
}
if(options.includeLowerCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
  guaranteedCharacters.push(getRandom(lowerCasedCharacters))
}
if(options.includeUpperCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
  guaranteedCharacters.push(getRandom(upperCasedCharacters))
}
console.log(possibleCharacters)
console.log(guaranteedCharacters)
for(let i = 0; i < options.pwdLength; i++){
  var generated = getRandom(possibleCharacters);
  pwdGenerationResult.push(generated);
}
return pwdGenerationResult.join("")
}
// console.log(pwdGenerationResult)
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);