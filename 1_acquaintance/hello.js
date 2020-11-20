var userName = prompt('Как Вас зовут?');
var userSurname = prompt ('Ваша фамилия?')
var userBirthYear = prompt ('Введите ваш год рождения');

var userAge = new Date().getFullYear() - userBirthYear;
if (userAge < 20) {
  alert('Привет, ' + userName + ' ' + userSurname + '!');
}
if  (userAge >= 20 && userAge < 40) {
  alert('Добрый день, ' + userName + ' ' + userSurname + '!');
}

if (userAge >= 40) {
  alert('Здравствуйте, ' + userName + ' ' + userSurname + '!');
}
