'use strict';
function foo (){
    while(true){
        let userInput = prompt('2+2*2?');
        
        if(isNaN(userInput)){
            throw('Введено не число!')
        }
        if( parseInt(userInput)===6){
            alert('Вы угадали!');
            break;
        }
        if(userInput === null){
            break;
        }
    }
}

try{
    foo();
}
catch(ex){
    alert('Ошибка ввода: '+ex);
}