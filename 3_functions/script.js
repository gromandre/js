numberFrom = 0;
numberTo = 1000;

function isNumeric(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};

function getUserNumber(){
    let userInput = prompt("Угадайте число от " + numberFrom +  " до " + numberTo);
    while(true){
        if(userInput===null){
            break;
        }
        else if (!isNumeric(userInput)){
            alert("Ошибка, введите число!");
            getUserNumber();
        }
        else{
            break;
        }
    }  
    return userInput;
}

let randomNumber = getRandomIntInclusive(numberFrom, numberTo);
    
while(true){
    let input = getUserNumber();
    if(input===null){
        break;
    }
    else if(input>randomNumber){
        alert("Число меньше, попробуйте еще раз");      
    }
    else if(input<randomNumber){
        alert("Число больше, попробуйте еще раз");  
    }
    else{
        alert("Вы угадали!"); 
        break;
    } 
}