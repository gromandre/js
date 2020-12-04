const DELAY_MILISECONDS = 1000; 

setInterval(nowDate, DELAY_MILISECONDS);

function declOfNum(number, titles) {
    const CASES = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : CASES[(number%10<5)?number%10:5] ]; 
  };

function nowDate(){
    const day = new Date(),
    
    LOCALES = 'ru-Ru',

    performanceDay =  {day: 'numeric', month: 'long'},
    performanceWeekday =  {weekday: 'long'},
    performanceYear =  {year: 'numeric'},
    performanceHour =  {hour: '2-digit'},
    performanceMinute =  {minute: '2-digit'},
    performanceSecond =  {second: '2-digit'},
    
    date = day.toLocaleString(LOCALES, performanceDay),
    weekdays = day.toLocaleString(LOCALES, performanceWeekday),
    years = day.toLocaleString(LOCALES, performanceYear),
	hours = day.toLocaleString(LOCALES, performanceHour),
	minutes = day.toLocaleString(LOCALES, performanceMinute),
    seconds = day.toLocaleString(LOCALES, performanceSecond),
    
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

   

    


