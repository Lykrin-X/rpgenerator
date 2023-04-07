// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var lettersLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var lettersUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var symbols = ['!','@','#','$','%','^','&','*','(',')','=','+','-','?','~','/'];

  var maximumPassword = 128

  var minimumPassword = 8

  var passwordOptions = [];
  var passCompleted = [];

  var sizePassword = prompt("Choose a number between 8 and 128 for password length:");
    if(sizePassword < minimumPassword || sizePassword > maximumPassword){
      alert("Must be a valid number between 8 and 128. Please try again.")
      return null;
    } 
    else if(isNaN(sizePassword)){
        alert("Numerical value required");
        return null;
      }
    else if(sizePassword % 1 != 0){
        alert("Value cannot contain decimals");
        return null;
      }
  var digits = confirm("Should this password contain numbers? Click okay for yes, cancel for no.");
    if(digits === true){
      passwordOptions = passwordOptions.concat(numbers)
    }

  var sigils = confirm("Should this password contain symbols(!,@,$)? Click okay for yes, cancel for no.");
    if(sigils === true){
      passwordOptions = passwordOptions.concat(symbols)
    }

  var miniscule = confirm("Should this password contain lowercase letters? Click okay for yes, cancel for no.");
    if(miniscule === true){
      passwordOptions = passwordOptions.concat(lettersLower)
    }

  var capital = confirm("Should this password contain uppercase letters? Click okay for yes, cancel for no.");
    if(capital === true){
      passwordOptions = passwordOptions.concat(lettersUpper)
    }
    console.log(passwordOptions);
  for(var i = 0; i < sizePassword; i++){
    passCompleted.push(passwordOptions[Math.floor(Math.random()*passwordOptions.length)]);
  }

  console.log(passwordOptions);
  return passCompleted.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
