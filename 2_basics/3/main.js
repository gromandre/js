let input,

sum = 0;

while ((input = prompt('Введите число!')) !== null) {
	let number = +input; 
	if (!isNaN(number))
		{sum += number};
}
alert(sum);
