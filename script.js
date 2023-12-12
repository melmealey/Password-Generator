
var generateBtn = document.querySelector("#generate");

//variables
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let number = [1,2,3,4,5,6,7,8,9,0];
let specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",];

//Passwrod Criteria
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

//User gets to choose
    let hasUpper =confirm("Would you like to include Upper Case characters? Press Ok for YES or Cancel for NO");
    let hasLower =confirm("Would you like to include Lower Case characters? Press Ok for YES or Cancel for NO");
    let hasNumber =confirm("Would you like to include numbers? Press OK for YES of Cancel for NO")
    let hasSpecialCharacter =confirm("Would you like to include Special characters? Press Ok for YES or Cancel for NO");
    
    if (!hasUpper && !hasLower && !hasNumber && !hasSpecialCharacter) {
        alert ("Must select at least 1 character type");
        return null;
    }

//Taking all the users choices and creating that random password
let choices= ""; 
    if (hasUpper){
        choices+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    }
    if (hasLower){
        choices+= "abcdefghijklmnopqrstuvwxyz"
    }
    if (hasNumber){
        choices+= "12345667890"
    }
    if (hasSpecialCharacter){
        choices+= "!#$%&'()*+,-./:;<=>?@" 
    }

let password = "";
    for(let i = 0; i <length; i++) {
    password += Math.floor(Math.random() * choices.length); 
    
}

console.log (password);
return password;
}

 // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
