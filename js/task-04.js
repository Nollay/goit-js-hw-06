let removeEl = document.querySelector('[data-action="decrement"]');
let addEl = document.querySelector('[data-action="increment"]');
let span = 0;
let counterValue = document.querySelector('#value');

removeEl.addEventListener('click', () => {
    span -= 1
    counterValue.innerText = span
})

addEl.addEventListener('click', () => {
    span += 1
    counterValue.innerText = span
})

