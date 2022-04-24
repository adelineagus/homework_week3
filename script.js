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
var randomNum="";
var validation =false;

function generatePassword() {
  var randomPass="";
  var passwordLength= prompt("choose password length between 8-128 characters");

  //checking whether input are 8-128 chars long and whether input is a number
  //if conditions are not met, users are being re-prompted
  while (passwordLength < 8 || passwordLength > 128||isNaN(passwordLength)===true) {
    window.alert("enter password length from 8 to 128");
    passwordLength= prompt("choose password length from 8 to 128 characters");
  }

  //validating criterias, if not confirmed, users are being prompted to re-answer criterias
  while (validation===false){
    var uppercaseCheck= prompt("include upper-case? (Y/N)").toUpperCase();
    var lowercaseCheck= prompt("include lower-case? (Y/N)").toUpperCase();
    var numberCheck= prompt("include numbers? (Y/N)").toUpperCase();
    var specialcharCheck= prompt("include special characters? (Y/N)").toUpperCase();
    
    validation = window.confirm("confirm the following : " + "upper case(" + uppercaseCheck + "), lower case("+ lowercaseCheck + "), numbers(" + numberCheck + "), special characters(" + specialcharCheck + ")");
  
  }
  //running for loop until password length criteria is met
  for(randomPass.length;randomPass.length<passwordLength;){
    //to ensure at least one character type is selected, if statments for each criteria is created
    //stop generating random password once it's length reaches password length
    if (uppercaseCheck === "Y" && randomPass.length<passwordLength){
      //picking random number 
      randomNum= Math.floor(Math.random()*upperCase.length);
      //selecting random char depending on random number
      randomPass+=upperCase.charAt(randomNum);
    }
    if (lowercaseCheck === "Y"&& randomPass.length<passwordLength){
      randomNum= Math.floor(Math.random()*lowerCase.length);
      randomPass+=lowerCase.charAt(randomNum);

    }
    if (numberCheck === "Y" && randomPass.length<passwordLength){
      randomNum= Math.floor(Math.random()*numbers.length);
      randomPass+=numbers.charAt(randomNum);
    }
    if (specialcharCheck === "Y" && randomPass.length<passwordLength){
      randomNum= Math.floor(Math.random()*specialChar.length);
      randomPass+=specialChar.charAt(randomNum);
    }
  }
return randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);