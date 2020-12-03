const DELAY_MILISECONDS = 1000; 

setInterval(nowDate, DELAY_MILISECONDS);

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
  };

function nowDate(){
    const day = new Date(),
     
    date = day.toLocaleString('ru-Ru', {day: 'numeric', month: 'long'}),
    weekdays = day.toLocaleString('ru-Ru', { weekday: 'long' }),
    years = day.toLocaleString('ru-Ru', {year: 'numeric'}),
	hours = day.toLocaleString('ru-Ru', {hour: '2-digit'}),
	minutes = day.toLocaleString('ru-Ru', {minute: '2-digit'}),
	seconds = day.toLocaleString('ru-Ru', {second: '2-digit'}),

    DECLINATION_HOURS = declOfNum(hours,['час', 'часа', 'часов']) ,
    DECLINATION_MINUTES = declOfNum(minutes,['минута', 'минуты', 'минут']) ,
    DECLINATION_SECONDS = declOfNum(seconds,['секунда', 'секунды', 'секунд']);
   
    console.log('Сегодня ' 
        +date+' '+years+' года, '
        +weekdays+', '
        +hours+' '+DECLINATION_HOURS+' '
        +minutes+' '+DECLINATION_MINUTES+' '
        +seconds+' '+DECLINATION_SECONDS
    )
};

   

    


