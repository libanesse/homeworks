// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var passwordText = document.querySelector("#password");
    var pswLength = parseInt(prompt("Enter Length"));
    var includeSpecial = confirm("Include Special letters");
    var includeUpper = confirm("Include Upper case letters");
    var includeLower = confirm("Include lower case letters");
    var includeNumber = confirm("Include Numbers");
    var specialChars = "!@#$%^&*()_?><";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "1234567890";
    var allChars = "";
    var genpassword = "";
    if (includeSpecial) {
        allChars += specialChars;
    }
    if (includeUpper) {
        allChars += upperChars;
    }
    if (includeLower) {
        allChars += lowerChars;
    }
    if (includeNumber) {
        allChars += numberChars;
    }
    for (let i = 1; i <= pswLength; i++) {
        var index = Math.floor(Math.random() * allChars.length);
        genpassword += allChars[index];
    }
    passwordText.value = genpassword;


}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


