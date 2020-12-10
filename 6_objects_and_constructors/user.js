'use strict';
(function(){
    function User(firstName, lastName){
        const registrationDate = new Date();
        this.firstName = firstName;
        this.lastName = lastName;
        this.regDate = registrationDate;
    };
    window.User = User;
})();







