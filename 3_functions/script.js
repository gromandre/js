let programNumber;
let userNumber;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isNumeric(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};

programNumber = getRandomInt(0,100);
console.log(programNumber);

userNumber = prompt ('Угадайте число, загаданное программой!');

while(true){
    
    if(userNumber === null){
        break;
    }

    while( isNaN(userNumber)||!userNumber.trim() ){
        alert( 'Нужно ввести число, а не строку' );
        userNumber = prompt('Введите число');
        console.log(userNumber);
    }
    
    if(userNumber>programNumber){
        alert ('Вы не угадали, попробуйте ввести число меньше!');
        userNumber = prompt('Введите число');
    };
    if(userNumber<programNumber){
        alert ('Вы не угадали, попробуйте ввести число больше!');
        userNumber = prompt('Введите число');
    };  
    if(userNumber==programNumber){
        alert ('Правильно!');
        break;
    };
};








