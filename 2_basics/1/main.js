function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let numberUserFirst =  prompt('Введите первое число', 0);

while (!isNumber(numberUserFirst)) {
  alert("Вы ввели не число, повторите попытку!");
  numberUserFirst = prompt('Введите первое число', 0);
}

let numberUserSecond = prompt('Введите второе число', 0);

while (!isNumber(numberUserSecond)) {
  alert("Вы ввели не число, повторите попытку!");
  numberUserSecond = prompt('Введите второе число', 0);
}
let number1 = +numberUserFirst;
let number2 = +numberUserSecond;

if (number1 > number2) {
	alert ('Первое число больше второго');
}

if  (number1 < number2) {
	alert ('Второе число больше первого');
}

if (number1 === number2) {
	alert ('Числа равны');
}
