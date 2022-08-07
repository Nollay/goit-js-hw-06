const inputEl = document.querySelector('#name-input');
const spanAnonymEl = document.querySelector('#name-output');

inputEl.addEventListener('input', imputChange);

function imputChange(event) {
    console.log(event.currentTarget.value);
    if (inputEl.value === '') {
        return spanAnonymEl.textContent = 'Anonymous';
    } else spanAnonymEl.textContent = event.currentTarget.value;
};