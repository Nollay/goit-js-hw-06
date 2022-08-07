let removeEl = document.querySelector('[data-action="decrement"]');
let addEl = document.querySelector('[data-action="increment"]');
let span = Number(document.querySelector('#value').textContent);
let counterValue = document.querySelector('#value');

removeEl.addEventListener('click', () => {
    span -= 1
    counterValue.innerText = span
})

addEl.addEventListener('click', () => {
    span += 1
    counterValue.innerText = span
})