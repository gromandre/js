const inputLogin = prompt('Введите логин');
const inputPassword = prompt('Введите пароль');

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

authorization(inputLogin, inputPassword, users);

function authorization(login, password, array){ 
    for(let i=0;i<users.length;i++){
        if((login===array[i].login) && (password===array[i].password)){
            const userName = array[i].name;
            return alert('Добрый день, '+userName+'!');  
        }
    };
    return alert('Ошибка авторизации!');
}
