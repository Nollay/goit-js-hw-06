const inputEl = document.querySelector('input[data-length="6"]');
const inputMainEl = document.querySelector('input');
const styleEl = document.querySelector('style');

inputEl.addEventListener('blur', imputBlur)

function imputBlur(event) {
    console.log(event.currentTarget.value.length)
    
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        return inputMainEl.classList.add("valid"), inputMainEl.classList.remove("invalid");
        
    } else {
        inputMainEl.classList.add("invalid");
        inputMainEl.classList.remove("valid");
    }
}

