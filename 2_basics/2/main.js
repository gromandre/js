function isNumeric(start, end) {
  return !isNaN(parseFloat(start, end)) && isFinite(start, end);
};

let start;

let end;

start = +prompt ('Введите начальный год');

while ( start == "" || !isNumeric(start)) {
  alert ('Вы ввели не год!');
  alert ('Повторите попытку!');
  start = prompt('Введите начальный год');
};



end = +prompt ('Введите конечный год');

while (end =="" || !isNumeric(end)) {
  alert ('Вы ввели не год!');
  alert ('Повторите попытку!');
  end = prompt('Введите конечный год');
};


if (start > end) {
  end = [start, start = end] [0];
}

for (let y = start; y <= end; y++) {
  if (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) {
    console.log(y);
    document.write(y +'<br />');
  };
};
