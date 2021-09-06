const form = document.querySelector('.js-login-form')
const submit = document.querySelector('.js-button_submit')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

submit.addEventListener('click', e => {
    e.preventDefault()

    const email = document.querySelector('.input__email input').value
    const emailWrapp = document.querySelector('.input__email')
    const password = document.querySelector('.input__pass input').value
    const passwordWrapp = document.querySelector('.input__pass')

    if (validateEmail(email)) {
        emailWrapp.classList.remove('input__error')
    } else {
        emailWrapp.classList.add('input__error')
    }

    if (password) {
        passwordWrapp.classList.remove('input__error')
    } else {
        passwordWrapp.classList.add('input__error')
    }
})

const regis = document.querySelector('.js-to-new-account')

regis.addEventListener('click', e =>{
    e.preventDefault()
    document.location = 'file:///home/engenia/Documents/gotowork/template/registration.html'
})
