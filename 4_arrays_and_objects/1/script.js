const delay = 1000; 

setInterval(nowDate, delay);

function nowDate(){
    const day = new Date(),
    weekday = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
    
    days = day.getDate();
    months = month[day.getMonth()];
    years = day.getFullYear();
    weekdays = weekday[day.getDay()];
    hours = day.getHours();
    minutes = day.getMinutes();
    seconds = day.getSeconds();

    declinationHours = declOfNum(hours,['час', 'часа', 'часов']) ,
    declinationMinutes = declOfNum(minutes,['минута', 'минуты', 'минут']) ,
    declinationSeconds = declOfNum(seconds,['секунда', 'секунды', 'секунд']);
   
    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
      }
   
    console.log('Сегодня ' 
        +days+' '+months+' '+years+' года, '
        +weekdays+', '
        +hours+' '+declinationHours+' '
        +minutes+' '+declinationMinutes+' '
        +seconds+' '+declinationSeconds
    )
}

   

    


