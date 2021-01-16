let text = document.querySelector('.text');
let buttonEdit = document.querySelector('.edit');
let buttonSave = document.querySelector('.save');
let buttonCanceling = document.querySelector('.canceling');

buttonEdit.addEventListener('click', function(){
    text.setAttribute('contenteditable', 'true');
    buttonSave.removeAttribute('disabled');
    buttonCanceling.removeAttribute('disabled');
});

buttonSave.addEventListener('click', function(){
    text.removeAttribute('contenteditable');
    localStorage.setItem('text', text.innerText);
    buttonSave.setAttribute('disabled', 'disabled');
    buttonCanceling.setAttribute('disabled', 'disabled');
});

text.innerText = localStorage.getItem('text');

buttonCanceling.addEventListener('click', function(){
    text.innerText = localStorage.getItem('text');
    text.removeAttribute('contenteditable');
});

