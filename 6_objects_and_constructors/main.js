'use strict';

registrationNewUsers();

function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.regDate = new Date();
}

function UserList(){
    this.users = [],
    
    this.add =  function(user) {
        this.users.push(user);    
    },
   
    this.getAllUsers = function(){
        for(let user of this.users){
            console.log(user);
        }
    }
};

function registrationNewUsers(){
    const userList = new UserList();

    while(true){
        const userInput = prompt('Введите Имя и Фамилию через пробел');
        if(userInput===null){
            return userList.getAllUsers();
        }
        const userArr = userInput.split(' ');
        const newUser = new User(userArr[0], userArr[1]);
        userList.add(newUser);
    }
};


