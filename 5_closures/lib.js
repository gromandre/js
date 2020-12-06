(function(){
    function startGame(){
        const MIN_NUMBER = 0;
        const MAX_NUMBER = 1000;
        const MAX_ATTEMPTS = 10;
    
        const randomNumber = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
    
        for(let attempts=1; attempts<=MAX_ATTEMPTS; attempts++){
            
            const input = getUserNumber();
            if(input===null){
                break;
            }
            if(attempts===MAX_ATTEMPTS){
                if(confirm('Вы превысили максимальное количество попыток! Повторить?')){
                    return startGame(MIN_NUMBER, MAX_NUMBER);
                }else{
                    break;
                }
            }
            if(input>randomNumber){
                alert('Число меньше, попробуйте еще раз');      
            }
            if(input<randomNumber){
                alert('Число больше, попробуйте еще раз');  
            }
            if(input==randomNumber){
                alert('Вы угадали!'); 
                break;
            }  
        }
    }
    window.startGame =startGame;
})();

