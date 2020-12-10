'use strict';
(function(){
    function UserList(){
        this.users = [],
        
        this.add =  function(user) {
            this.users.push(user);    
        },
       
        this.getAllUsers = function(){
            return console.log(this.users);
        }
    };

    window.UserList = UserList;
})();








