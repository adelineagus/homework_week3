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
var numbers= "1234567890";
var randomNum="";

var chars="";

function generatePassword() {
  var randomPass="";
  var passwordLength= prompt("choose password length between 8-128 characters");
  while (passwordLength < 8 || passwordLength > 128 ) {
    window.alert("enter between 8 and 128");
    passwordLength= prompt("choose password length between 8-128 characters");
  }

  var uppercaseCheck= prompt("include upper-case? (Y/N)").toUpperCase();
  var lowercaseCheck= prompt("include lower-case? (Y/N)").toUpperCase();
  var numberCheck= prompt("include numbers? (Y/N)").toUpperCase();

  if (uppercaseCheck === "Y"){
    chars=chars.concat(upperCase);
  }

  if (lowercaseCheck === "Y"){
    chars=chars.concat(lowerCase);
  }

  if (numberCheck === "Y"){
    chars = chars.concat(numbers);
  }

  for(randomPass.length;randomPass.length<passwordLength;){
    if (uppercaseCheck === "Y"){
      randomNum= Math.floor(Math.random()*upperCase.length);
      randomPass+=upperCase.charAt(randomNum);
    }
    if (lowercaseCheck === "Y"){
      randomNum= Math.floor(Math.random()*lowerCase.length);
      randomPass+=lowerCase.charAt(randomNum);
    }

    if (numberCheck === "Y"){
      randomNum= Math.floor(Math.random()*numbers.length);
      randomPass+=numbers.charAt(randomNum);
    }
  }
return randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);