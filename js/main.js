const btnSubscribe = document.querySelector('.btn-subscribe');
const form = document.querySelector('.form-input')

function onEmailSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value;

    if (email === '') {
        alert('Please enter your email')
        return;
    } else {
        form.textContent = 'Thank you!'
    }
}

function onFocus() {
    form.style.outlineColor = '#0fa3b1';
    form.style.outlineWidth = '1px';
    form.style.outlineStyle = 'solid';
}

function onBlur() {
    form.style.outlineColor = '#ccc';
    form.style.outlineWidth = '1px';
    form.style.outlineStyle = 'solid';
}

form.addEventListener('submit', onEmailSubmit);
form.addEventListener('focus', onFocus);
form.addEventListener('blur', onBlur);
