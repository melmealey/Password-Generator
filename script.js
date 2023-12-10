// Assignment Code
var generateBtn = document.querySelector("#generate");

let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number = [1,2,3,4,5,6,7,8,9,0];
let specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",];

function generatePassword () { 

    let length =prompt("How many characters would you like your password to contain?");

    if (length < 8){
        alert ("Password must be at least 8 characters");
        return null;
    }

    if (length > 128){
        alert ("Password must be less than 128 characters");
        return null;
    
    }

    let hasUpper =confirm("Would you like to include Upper Case characters? Press Ok for YES or Cancel for NO");
    let hasLower =confirm("Would you like to include Lower Case characters? Press Ok for YES or Cancel for NO");
    let hasNumber =confirm("Would you like to include numbers? Press OK for YES of Cancel for NO")
    let hasSpecialCharacter =confirm("Would you like to include Special characters? Press Ok for YES or Cancel for NO");
    
    if (! (hasUpper || hasLower|| hasNumber || hasSpecialCharacter)) {
        alert ("Must select at least 1 character type");
        return null;
    }

}
 // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
//if criteria has been met
if (length >8 && <128 && (hasUpper || hasLower|| hasNumber || hasSpecialCharacter)) {
    alert "password";
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// 1. You should have a variable declared that you will be attaching your password characters to.
// 2. You should have an if condition to determine if the password length has reached the desired length. if so then break from the for loop
// 3. YOu should have a for loop that handles looping until the length of the password is met
// 4. in your loop you will be selecting cahracters from your arrays at random indexes and attaching those chaacters to the password string
