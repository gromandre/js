'use strict';
(function(){
    function UserList(){
        this.users = [],
        
        this.add =  function(user) {
            this.users.push(user);    
        }
    };

    window.UserList = UserList;
})();








