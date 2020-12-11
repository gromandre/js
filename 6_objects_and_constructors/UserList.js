'use strict';
(function(){
    function UserList(){
        this.users = [],
        
        this.add =  function(user) {
            this.users.push(user);    
        }
        this.getAllUsers = function() {
            for(let i=0;i<this.users.length;i++){
                console.log(this.users[i]);
            }
        }
    };

    window.UserList = UserList;
})();








