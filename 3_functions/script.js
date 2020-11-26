const minNumber = 0;
const maxNumber = 1000;

startGame(minNumber, maxNumber);

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
            break;
        }
        
        else if (!isNumeric(userInput)){
            alert('Ошибка, введите число!');
            
        }
        else{
            userInput = parseInt(userInput);
            break; 
        }
    } 
    return userInput; 
}

function startGame(min, max){

    let randomNumber = getRandomIntInclusive(min, max);
    
    while(true){
        let input = getUserNumber();
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
