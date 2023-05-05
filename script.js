// List of available characters
special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", " < ", " > ", " ? ", "@", "[", "]", " ^ ", "_", "{", "}", "~"];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var choices = [];

// password function 
function generatePassword() {
   
    numberofcharacters = parseInt(prompt("How many characters would you like your password? Between 8 and 128"));
  
    if (numberofcharacters < 8 || numberofcharacters > 128) {
      window.prompt("Please choose a valid number of characters, 8 to 128");
    } else if (isNaN(numberofcharacters)) {
      numberofcharacters = prompt("Please enter a valid number, 8 to 128");
  
       

    } 
    
    else {
        confirmnumber = confirm("Do you want your password to contain numbers?");
        confirmspecial = confirm("Do you want your password to contain special characters?");
        confirmlowercase = confirm("Do you want your password to contain Lowercase letters?");
        confirmuppercase = confirm("Do you want your password to contain Uppercase letters?");
    };

   
    if (!confirmnumber && !confirmspecial && !confirmlowercase && !confirmuppercase) {
        choices = alert("You must make at least one choice");

    }
    
    if (confirmlowercase) {
        choices= choices.concat(letters);
      }
      if (confirmuppercase) {
        choices = choices.concat(upperletters);
      }
      if (confirmnumber) {
        choices = choices.concat(number);
      }
      if (confirmspecial) {
        choices = choices.concat(special);

      }

   
    var securepassword = ""
    for (var i = 0; i < numberofcharacters; i++) {
        var random = [Math.floor(Math.random() * choices.length)];
        securepassword = securepassword + choices[random];
        
    }
    return securepassword;
};
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



