const DELAY_MILISECONDS = 1000; 

setInterval(nowDate, DELAY_MILISECONDS);

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
  };

function nowDate(){
    const day = new Date(),
    
    locales = 'ru-Ru',

    performanceDay =  {day: 'numeric', month: 'long'},
    performanceWeekday =  {weekday: 'long'},
    performanceYear =  {year: 'numeric'},
    performanceHour =  {hour: '2-digit'},
    performanceMinute =  {minute: '2-digit'},
    performanceSecond =  {second: '2-digit'},
    
    date = day.toLocaleString(locales, performanceDay),
    weekdays = day.toLocaleString(locales, performanceWeekday),
    years = day.toLocaleString(locales, performanceYear),
	hours = day.toLocaleString(locales, performanceHour),
	minutes = day.toLocaleString(locales, performanceMinute),
    seconds = day.toLocaleString(locales, performanceSecond),
    
    wordformHours = ['час', 'часа', 'часов'],
    wordformMinute = ['минута', 'минуты', 'минут'],
    wordformSeconds = ['секунда', 'секунды', 'секунд'],

    declinationHours = declOfNum(hours, wordformHours) ,
    declinationMinutes = declOfNum(minutes, wordformMinute) ,
    declinationSeconds = declOfNum(seconds, wordformSeconds);
   
    console.log('Сегодня ' 
        +date+' '+years+' года, '
        +weekdays+', '
        +hours+' '+declinationHours+' '
        +minutes+' '+declinationMinutes+' '
        +seconds+' '+declinationSeconds
    )
};

   

    


