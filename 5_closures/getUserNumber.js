(function(){
    function getUserNumber(){
    
        let userInput;
        
        while(true){
                userInput = prompt('Введите число');
                if(userInput===null){
                    return null;
                }
                
                if (!isNumeric(userInput)){
                    alert('Ошибка, введите число!');
                    continue;
                    
                }
                return +userInput; 
        }
    
    }
window.getUserNumber = getUserNumber;
})();