'use strict';
(function(){
    function User(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.regDate = new Date();
    };
    window.User = User;
})();







