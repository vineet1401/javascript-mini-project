const lowercaseel = "abcdefghijklmnopqrstuvwxyz";
const uppercaseel = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersel = "0123456789";
const symbolsel = "!@#$%^&*();:{}[]?/.,<>_-+";

const length = document.getElementById("Password-Length");
const lower = document.getElementById("lowercase");
const upper = document.getElementById("uppercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const gntbtn = document.getElementById("generate-pass");
const Password = document.getElementById("password");

gntbtn.addEventListener("click", function() {
    let result = "";
    let character = "";
    let l = length.value;

    if(lower.checked){
        character += lowercaseel;
    }
    if(upper.checked){
        character += uppercaseel;
    }
    if(number.checked){
        character += numbersel;
    }
    if(symbol.checked){
        character += symbolsel;
    }

    for(let i=0; i<l; i++){
        result += character.charAt(Math.floor(Math.random()*character.length));
    }
    Password.value = result;
    
});
 
