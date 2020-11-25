function isNumeric(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};

function getUserNumber(){
    
    let userInput = prompt('Угадайте число');
    
    while(true){
        if(userInput===null){
            break;
        }
        
        else if (!isNumeric(userInput)){
            alert('Ошибка, введите число!');
            getUserNumber();
        }
        else{
            userInput = parseInt(userInput);
            break;
        }
    }  
    return userInput;
}

function startGame(){
    let numberFrom = 0;
    let numberTo = 2;
    let randomNumber = getRandomIntInclusive(numberFrom, numberTo);
    
    while(true){
        let input = getUserNumber();
        console.log(isNaN(input));
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
startGame();