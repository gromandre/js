'use strict';
(function(){
    function registrationNewUsers(){
        const WORD_COUNT = 2;
        const userList = new UserList();
    
        while(true){
            const userInput = prompt('Введите Имя и Фамилию через пробел');
            if(userInput===null){
                return userList.getAllUsers();
            }
            const userArr = userInput.split(' ');
    
            if(userArr.length == WORD_COUNT){
                const newUser = new User(userArr[0], userArr[1]);
                userList.add(newUser);
            }else{
                alert('Ошибка')
            }; 
        }
    };

    window.registrationNewUsers = registrationNewUsers;
})();








