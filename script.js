
let hasUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let hasLower = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let hasNumber = [1,2,3,4,5,6,7,8,9,0];
let hasSpecialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",];

    

let buttonClick =document.getElementById("generate")
buttonClick.addEventListener("click", passwordGenerator);
function passwordGenerator () {
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
    
    // if ()
    // alert ("Must select at least 1 character type")
    // return null
   
    

}



// const passwordGenerator = (event) => {
//     event.preventDefault()

//     let choice=prompt("Do you want to use Upper Case Letters? Press OK for Yes, and Cancel for No")
//    const buttonClick =document.querySelector("button")
    
//     const hasLength >8, <128; 
//     const upperCase "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerCase "abcdefghijklmnopqrstuvwxyz";
//     const hasNumber "1234567890";
//     const hasSpecialCharacter "!@#$%^&*()=+-?<>";
