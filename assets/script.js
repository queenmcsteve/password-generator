// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword () {

      //create arrays to hold each set of possible characters
      var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var upperCaseLetter = ["A", "B", "C", "D", "E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
      var digits = ["0", "1", "2", "3", "4", "5","6","7","8","9"];
      var specialCharacters = ["!", "@", "#", "$", "%","^","&","*","(",")","-","_","=","+"];

      //create a blank array to add selected character sets to 
      var holdArray = [];

      //create variables to hold user's criteria selection
      var passwordLength = prompt("Enter how many characters you want in your password (between 8 and 128, inclusive)");
              //check that user has entered a number >7 and <129
              while (passwordLength<8 || passwordLength>128) {
                var passwordLength = prompt("Error: You must enter a password length between 8 and 128 (inclusive):")
              }
      var lowercase = confirm("Do you want lower case letters in your password?");
      var uppercase = confirm("Do you want upper case letters in your password?");
      var numbers = confirm("Do you want numbers in your password?");
      var special = confirm("Do you want special characters in your password?");
              //check that user has chosen at least one character set for inclusion
              while (lowercase == false && uppercase == false && numbers == false && special == false) {
                alert("Error: You must select at least one type of character for inclusion");
                var lowercase = confirm("Do you want lower case letters in your password?");
                var uppercase = confirm("Do you want upper case letters in your password?");
                var numbers = confirm("Do you want numbers in your password?");
                var special = confirm("Do you want special characters in your password?");
              }

      //if conditions to concatenate character sets to empty holdArray
      if (lowercase) {
        holdArray = holdArray.concat(lowerCaseLetters);
      }
      if (uppercase) {
        holdArray = holdArray.concat(upperCaseLetter);
      }
      if (numbers) {
        holdArray = holdArray.concat(digits);
      }
      if (special) {
        holdArray = holdArray.concat(specialCharacters);
      }
      // console.log(holdArray);

      //empty array to hold generated password
      var generatedArray =[];

      //for loop to randomly select from holdArray and push into generatedArray
      for (i=0; i < passwordLength; i++) {
        generatedArray.push (holdArray[Math.floor(Math.random() * holdArray.length)]);
      }
      return generatedArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
