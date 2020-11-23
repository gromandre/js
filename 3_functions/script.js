let userInput;
let random;


function isNumeric(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
random = getRandomIntInclusive(0, 1000)
console.log(random);

function getUserNumber(){
    userInput = prompt('Угадайте число');

    while(true){
        if(userInput==null){
            return userInput;
        }
        else if (!isNumeric(userInput)){
            alert('Ошибка, введите число!');
            getUserNumber();
        }
        else{
            break;
        }
    }
}

function compareNumbers(){
    if(userInput==null){
        return gameStatus = false;
    } 
    if(userInput>random){
        alert("Меньше, попробуйте еще раз");
    }
    if(userInput<random){
        alert("Больше, попробуйте еще раз");
    }
    if(userInput==random){
        alert("Поздравляю, Вы угадали");
        return gameStatus = false;
    }
}
let gameStatus = true;
   while(gameStatus == true){
    getUserNumber();
    compareNumbers();
   }
    






