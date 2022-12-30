let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");


let generatePassword = () => {
    let passwordFinal1 = "";
    let passwordFinal2 = "";

    for(let i=0; i<12; i++){
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    passwordFinal1 += characters[randomIndex1]
    passwordEl1.innerHTML = passwordFinal1;
    }

     for(let i=0; i<12; i++){
     let randomIndex2 = Math.floor(Math.random() * characters.length);
     passwordFinal2 += characters[randomIndex2]
    passwordEl2.innerHTML = passwordFinal2;
    }
   
    
}