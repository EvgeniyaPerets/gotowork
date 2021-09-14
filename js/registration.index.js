const formReg = document.querySelector('js-registration')
const btnToStepSecond = document.querySelector('.js-to-step-second')
const stepReg = document.querySelector('.js-step')
const btnToStepFourth = document.querySelector('.js-to-step-fourth')
const btnToStepThrid = document.querySelector('.js-to-step-third')

const handlerToStep = e => {
    e.preventDefault
    const add = e.target.dataset.add
    const remove = e.target.dataset.remove
    const step = e.target.dataset.step

    if (step === '0') {
        document.location = 'file:///home/engenia/Documents/gotowork/index.html'
    }

    stepReg.innerHTML = step
    document.querySelectorAll(`.js-step-${remove}`).forEach(node => {
        node.classList.remove('dn')
    })
    document.querySelectorAll(`.js-step-${add}`).forEach(node => {
        node.classList.add('dn')
    })
}

const handlerTimer = () => {
    const timeSpan = document.querySelector('.js-timer-to-send .timer');
    const timeSpanWrapp = document.querySelector('.js-timer-to-send .timer_wrapp');
    const timerText = document.querySelector('.js-timer-to-send');

    const mins = 3;
    const now = new Date().getTime();
    const deadline = mins * 60 * 1000 + now;


    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = deadline - currentTime;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance <= 1 ) {
            timeSpanWrapp.style.display = 'none'
            timerText.classList.remove('no-active')
            clearInterval(interval)
        }

        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        timeSpan.innerHTML = `0${minutes}:${seconds}`;
    }, 1000)
}

const validatePhone = inputText => {
    const inputStripped = inputText.replace(/\D/g,'')
    const phoneReg = /^[0-9()-.\s]+$/
    return phoneReg.test(inputText) && inputStripped.length >= 10
}

const validatePass = password => {
    const res = [false, false, false]
    const regexL = /^(?=.*[a-z]).+$/; // Lowercase character pattern
    const regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

    if( password.length >= 8 ) {
        res[0] = true
    }

    if( regexL.test(password) ) {
        res[1] = true
    }

    if( regex.test(password) ) {
        res[2] = true
    }

    return res.indexOf(false) === -1
}

document.querySelector('.js-to-login.js-step-first')
    .addEventListener('click', handlerToStep)

btnToStepSecond.addEventListener('click', e => {
    e.preventDefault()

    const name = document.querySelector('.input__name input').value
    const nameWrapp = document.querySelector('.input__name')
    const email = document.querySelector('.input__email_first input').value
    const emailWrapp = document.querySelector('.input__email_first')
    const phone = document.querySelector('.input__phone input').value
    const phoneWrapp = document.querySelector('.input__phone')
    const validEmail = validateEmail(email)
    const validPhone = validatePhone(phone)

    if (name) {
        nameWrapp.classList.remove('input__error')
    } else {
        nameWrapp.classList.add('input__error')
    }

    if (validEmail) {
        emailWrapp.classList.remove('input__error')
    } else {
        emailWrapp.classList.add('input__error')
    }

    if (validPhone) {
        phoneWrapp.classList.remove('input__error')
    } else {
        phoneWrapp.classList.add('input__error')
    }

    if (name && validPhone && validEmail) {
        stepReg.innerHTML = 2
        document.querySelectorAll('.js-step-first').forEach(node => {
            node.classList.add('dn')
        })
        document.querySelectorAll('.js-step-second').forEach(node => {
            node.classList.remove('dn')
        })
        document.querySelector('.js-to-login.js-step-second')
            .addEventListener('click', handlerToStep)
    }
})

btnToStepThrid.addEventListener('click', e => {
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
        stepReg.innerHTML = 3
        document.querySelectorAll('.js-step-third').forEach(node => {
            node.classList.remove('dn')
        })
        document.querySelectorAll('.js-step-second').forEach(node => {
            node.classList.add('dn')
        })

        document.querySelector('.js-to-login.js-step-third')
            .addEventListener('click', handlerToStep)
        handlerTimer()
    }
})

btnToStepFourth.addEventListener('click', e => {
    e.preventDefault()

    const code = document.querySelector('.input__code input').value
    const codeWrapp = document.querySelector('.input__code')

    if (code) {
        codeWrapp.classList.remove('input__error')

        document.querySelector('.js-registration').classList.add('dn')
        document.querySelectorAll('.js-step-third').forEach(node => {
            node.classList.add('dn')
        })
        document.querySelectorAll('.js-step-fourth').forEach(node => {
            node.classList.remove('dn')
        })
    } else {
        codeWrapp.classList.add('input__error')
    }
})