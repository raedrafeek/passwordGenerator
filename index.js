let charData = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let password1 = document.getElementById("input1-el")

let password2 = document.getElementById("input2-el")


function genPass() {
    let pass1 = ""
    let pass2 = ""
    for(let i=0; i<15; i++) {
        pass1 += charData[Math.floor(Math.random() * charData.length)]
        pass2 += charData[Math.floor(Math.random() * charData.length)]
        }
        password1.value = pass1
        password2.value = pass2
}

