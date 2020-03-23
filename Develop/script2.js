// Assignment Code - the variable generateBtn is gettting the button by its id, "generate"
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button, writePassword will be the series of events below to generate a password
  generateBtn.addEventListener("click", writePassword);

// Write password to the #password input - alerting the user their password must be at least 8 characters in length
  function writePassword() {
  alert("Your password must be at least 8 characters in length, but no more than 128 characters");

  var password = prompt("How many letters would you like your password to be?");

  console.log(password)


// //   Write password to the password input - alerting the user their password must be at least 8 characters in length
//    if (confirmQ) {
//      prompt("How many upper case letters would you like in your password? (You will need at least 2");
//    } 
  
// //   If the user dost accept that their password must be at least 8 characters in length, then the alert below will show
//   else {
//     alert("You are unable to set up a password at this time.");
//   } 
}


// console.log(upperLetters)

  // How to I get the user to only be able to enter upper case letters and at least 2?
  // upperLetters = Math.floor(Math.random() * 128) + 8  


 

 


  // lenght must be a certain length
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password")
  // passwordText.value = password;


  // prompt("Your new password is " + password)