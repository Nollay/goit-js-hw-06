const loginEl = document.querySelector('form.login-form');
console.log(loginEl)
const emailEl = document.querySelector('[type="email"]');
console.log(emailEl)
const passwordEl = document.querySelector('[type="password"]');
console.log(passwordEl)

loginEl.addEventListener('submit',formSubmit )

function formSubmit(evt) {
    console.log('click');
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Fill in all the fields') 
    } 
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    evt.currentTarget.reset();
}