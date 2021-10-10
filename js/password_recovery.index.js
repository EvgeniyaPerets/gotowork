
const btnToStepSecond = document.querySelector('.js-to-step-second')
const btnToStepThrid = document.querySelector('.js-to-step-third')
const btnToStepFourth = document.querySelector('.js-to-step-fourth')

btnToStepSecond.addEventListener('click', e => {
    e.preventDefault()

    const email = document.querySelector('.input__email_first input').value
    const emailWrapp = document.querySelector('.input__email_first')

    if (validateEmail(email)) {
        emailWrapp.classList.remove('input__error')
        document.querySelectorAll('.js-step-first').forEach(node => {
            node.classList.add('dn')
        })
        document.querySelectorAll('.js-step-second').forEach(node => {
            node.classList.remove('dn')
        })
    } else {
        emailWrapp.classList.add('input__error')
    }
})

btnToStepThrid.addEventListener('click', e => {
    e.preventDefault()

    const code = document.querySelector('.input__code input').value
    const codeWrapp = document.querySelector('.input__code')
    if (code) {
        codeWrapp.classList.remove('input__error')
        document.querySelectorAll('.js-step-third').forEach(node => {
            node.classList.remove('dn')
        })
        document.querySelectorAll('.js-step-second').forEach(node => {
            node.classList.add('dn')
        })
    } else {
        codeWrapp.classList.add('input__error')
    }
})

btnToStepFourth.addEventListener('click', e => {
    e.preventDefault()

    const pass = document.querySelector('.input__password input').value
    const passWrapp = document.querySelector('.input__password')
    const passRep = document.querySelector('.input__pass-repeat input').value
    const passRepWrapp = document.querySelector('.input__pass-repeat')
    const valPass = validatePass(pass)

    if (valPass) {
        passWrapp.classList.remove('input__error')
    } else {
        passWrapp.classList.add('input__error')
    }

    if (passRep && passRep === pass) {
        passRepWrapp.classList.remove('input__error')
    } else {
        passRepWrapp.classList.add('input__error')
    }

    if (pass && passRep && passRep === pass) {

        document.querySelector('.password_recovery__step_first').classList.add('dn')
        document.querySelector('.password_recovery__link').classList.add('dn')
        document.querySelectorAll('.js-step-third').forEach(node => {
            node.classList.add('dn')
        })
        document.querySelectorAll('.js-step-fourth').forEach(node => {
            node.classList.remove('dn')
        })
    }
})