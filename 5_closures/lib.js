(function(){
function isNumeric(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};

function getUserNumber(){
    
    let userInput;
    
    while(true){
            userInput = prompt('Введите число');
            if(userInput===null){
                return null;
            }
            
            if (!isNumeric(userInput)){
                alert('Ошибка, введите число!');
                continue;
                
            }
            return +userInput; 
    }
}

window.startGame=function (min, max){

    const randomNumber = getRandomIntInclusive(min, max);

    const maxAttempts = 10;

    for(let attempts=1; attempts<=maxAttempts; attempts++){
        const input = getUserNumber();
        if(input===null){
            break;
        }
        if(attempts===maxAttempts){
            let repidStart = confirm('Вы превысили максимальное количество попыток! Повторить?'); 
            if(repidStart===false){
                break;
            }
            return startGame(min, max);
        }
        
        if(input>randomNumber){
            alert('Число меньше, попробуйте еще раз');      
        }
        if(input<randomNumber){
            alert('Число больше, попробуйте еще раз');  
        }
        if(input==randomNumber){
            alert('Вы угадали!'); 
            break;
        }  
    }
}
})();
