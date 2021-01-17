const text = document.querySelector('.text');
const buttonEdit = document.querySelector('.edit');
const buttonSave = document.querySelector('.save');
const buttonCanceling = document.querySelector('.canceling');

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

