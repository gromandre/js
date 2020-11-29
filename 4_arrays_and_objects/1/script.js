
function nowDate(){
    let day = new Date(),
    weekday = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
    declinationHours = ['час', 'часа', 'часов'],
    declinationMinutes = ['минута', 'минуты', 'минут'],
    declinationSeconds = ['секунда', 'секунды', 'секунд'];
   
    function declOfNum(value, words){  
        value = Math.abs(value) % 100; 
        let num = value % 10;
        if(value > 10 && value < 20) return words[2]; 
        if(num > 1 && num < 5) return words[1];
        if(num == 1) return words[0]; 
        return words[2];
    }
   
    console.log(
        'Сегодня ' +day.getDate()+' '+month[day.getMonth()]+' '+day.getFullYear()+' года, '
        +weekday[day.getDay()]+', '
        +day.getHours()+' '+declOfNum(day.getHours(),declinationHours)+' '
        +day.getMinutes()+' '+declOfNum(day.getMinutes(),declinationMinutes)+' '
        +day.getSeconds()+' '+declOfNum(day.getSeconds(),declinationSeconds)
    )
}
   
setInterval(nowDate, 1000);
   

    


