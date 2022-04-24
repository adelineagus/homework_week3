// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCase= "abcdefghijklmnopqrstuvwxyz"
var upperCase= lowerCase.toUpperCase();
var numbers= "1234567890";``
var specialChar= "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";



function generatePassword() {
  var randomPass="";
  var randomNum="";
  var passwordLength= prompt("choose password length between 8-128 characters");

  //checking whether input are 8-128 chars long and whether input is a number
  //if conditions are not met, users are being re-prompted
  while (passwordLength < 8 || passwordLength > 128||isNaN(passwordLength)===true) {
    window.alert("enter password length from 8 to 128");
    passwordLength= prompt("choose password length from 8 to 128 characters");
  }
  var validation =false;
  //validating criterias, if not confirmed, users are being prompted to re-answer criterias
  while (validation===false){
    var uppercaseCheck= confirm("criteria 1: include upper-case?")
    var lowercaseCheck= confirm("criteria 2: include lower-case?")
    var numberCheck= confirm("criteria 3: include numbers?")
    var specialcharCheck= confirm("criteria 4: include special characters?")
    
    if ((uppercaseCheck || lowercaseCheck || numberCheck || specialcharCheck) === false){
      validation=false;
      window.alert("include/select at least one criteria ")
    } else{
    validation = window.confirm("confirm the following selections: " + "upper case(" + uppercaseCheck + "), lower case("+ lowercaseCheck + "), numbers(" + numberCheck + "), special characters(" + specialcharCheck + ")");
    }
  }
  
  //running for loop until password length criteria is met
  for(randomPass.length;randomPass.length<passwordLength;){
   
    //to ensure at least one character type is selected, if statments for each criteria is created
    //stop generating random password once it's length reaches password length
    if (uppercaseCheck === true && randomPass.length<passwordLength){
      
      //picking random number 
      randomNum= Math.floor(Math.random()*upperCase.length);
      
      //selecting random char depending on random number
      randomPass+=upperCase.charAt(randomNum);
    }

    if (lowercaseCheck === true && randomPass.length<passwordLength){
      randomNum= Math.floor(Math.random()*lowerCase.length);
      randomPass+=lowerCase.charAt(randomNum);

    }
    if (numberCheck === true && randomPass.length<passwordLength){
      randomNum= Math.floor(Math.random()*numbers.length);
      randomPass+=numbers.charAt(randomNum);
    }
    if (specialcharCheck === true && randomPass.length<passwordLength){
      randomNum= Math.floor(Math.random()*specialChar.length);
      randomPass+=specialChar.charAt(randomNum);
    }
  }
  
  return randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);