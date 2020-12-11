'use strict';
(function(){
    function registrationNewUsers(){
        const MAX_NUMBERS_VALUES = 2;
        const SEPARATOR = ' ';
        const userList = new UserList();
    
        while(true){
            const userInput = prompt('Введите Имя и Фамилию через пробел');
            if(userInput===null){
                return console.log(userList.users);    
            }
            const userArr = userInput.split(SEPARATOR);
    
            if(userArr.length == MAX_NUMBERS_VALUES){
                const newUser = new User(userArr[0], userArr[1]);
                userList.add(newUser);
            }else{
                alert('Ошибка')
            }; 
        }
    };

    window.registrationNewUsers = registrationNewUsers;
})();








