const users = [
    
    {
        name:'Иван',
        login:'ivan',
        password:'1234'
    },
    {
        name:'Петр',
        login:'petr',
        password:'7777'
    }
];

const inputLogin = prompt("Введите логин");
const inputPassword = prompt("Введите пароль");
let userName;
   
for(let i=0;users.length;i++){
    if((inputLogin===users[i].login) && (inputPassword===users[i].password)){
        userName = users[i].name;
        alert('Добрый день, '+userName+'!');
        break;
    }
    if(i===users.length-1){
        alert('Ошибка авторизации');
        break;
    }
};
