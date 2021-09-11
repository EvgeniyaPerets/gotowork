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

        if (distance < 0 ) {
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

document.querySelector('.js-to-login.js-step-first')
    .addEventListener('click', handlerToStep)

btnToStepSecond.addEventListener('click', e => {
    e.preventDefault()

    stepReg.innerHTML = 2
    document.querySelectorAll('.js-step-first').forEach(node => {
        node.classList.add('dn')
    })
    document.querySelectorAll('.js-step-second').forEach(node => {
        node.classList.remove('dn')
    })
    document.querySelector('.js-to-login.js-step-second')
        .addEventListener('click', handlerToStep)
})

btnToStepThrid.addEventListener('click', e => {
    e.preventDefault()

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

})

btnToStepFourth.addEventListener('click', e => {
    e.preventDefault()

    document.querySelector('.js-registration').classList.add('dn')
    document.querySelectorAll('.js-step-third').forEach(node => {
        node.classList.add('dn')
    })
    document.querySelectorAll('.js-step-fourth').forEach(node => {
        node.classList.remove('dn')
    })
})