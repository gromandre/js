let input = document.querySelector('input');
let button = document.querySelector('button');
let todo = document.querySelector('.inner-box__user-list');



button.addEventListener('click', function(){

    if(!input.value){
        return alert('Задание не добавлено');
      }

    let item = document.createElement('li');
    item.textContent = input.value;
    todo.append(item);

    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    item.append(check);

    input.value = '';

    return item;
});

todo.addEventListener('click', function(ev){
    if(ev.target.tagName === 'INPUT'){

        ev.target.closest('li').classList.toggle('checked');
    }
})


