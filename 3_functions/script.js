const MIN_NUMBER = 0;
const MAX_NUMBER = 1000;

startGame(MIN_NUMBER, MAX_NUMBER);

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

function startGame(min, max){

    const randomNumber = getRandomIntInclusive(min, max);
    
    while(true){
        const input = getUserNumber();
        if(input===null){
            break;
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
