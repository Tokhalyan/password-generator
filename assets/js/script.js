window.onload = alert("Welcome to the password generator created by Shahen Tokhalyan! Please click 'Generate password' to start!")

let generateBtn = document.querySelector("#generate");

const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

function generatePass() {
    let allChars = [];
    let resultPass = "";

    let passLength = prompt("How many characters do you want for your password? Must be between 8 to 128 characters");
    
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Please make a right selection. Your password must be between 8 to 128 characters");
    } else {
        if(confirm("Would you like to have lower case letters in your password? \nOK - for yes, Cancel - for no")) {
            Array.prototype.push.apply(allChars, lowerCase);
        }
        if(confirm("Would you like to have upper case letters in your password? \nOK - for yes, Cancel - for no")) {
            Array.prototype.push.apply(allChars, upperCase);
        }
        if(confirm("Would you like to have numbers in your password? \nOK - for yes, Cancel - for no")) {
            Array.prototype.push.apply(allChars, numbers);
        }
        if(confirm("Would you like to have special symbols in your password? \nOK - for yes, Cancel - for no")) {
            Array.prototype.push.apply(allChars, special);
        }
        if (allChars.length === 0) {
            alert("Please choose at least one type of character to create a password");
            generatePass();
        }
        else {
            for (let i = 0; i < passLength; i++) {
                let random = Math.floor(Math.random() * allChars.length);
                resultPass += allChars[random];
            }
        }
        }
    document.getElementById("password").innerHTML = resultPass;
}