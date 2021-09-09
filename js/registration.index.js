const form = document.querySelector('js-registration')
const btnToStepSecond = document.querySelector('.js-to-step-second')
const btnToLOgin = document.querySelector('.js-to-login')

handlerToLogin = e => {
    e.preventDefault
    document.location = 'file:///home/engenia/Documents/gotowork/index.html'
}
handlerToStepFirst = e => {
    e.preventDefault

    document.querySelector('.js-step').innerHTML = 1
    document.querySelectorAll('.js-step-first').forEach(node => {
        node.classList.remove('dn')
    })
    document.querySelectorAll('.js-step-second').forEach(node => {
        node.classList.add('dn')
    })
}

btnToStepSecond.addEventListener('click', e => {
    e.preventDefault()

    document.querySelector('.js-step').innerHTML = 2
    document.querySelectorAll('.js-step-first').forEach(node => {
        node.classList.add('dn')
    })
    document.querySelectorAll('.js-step-second').forEach(node => {
        node.classList.remove('dn')
    })

    btnToLOgin.innerHTML = 'Назад'
    btnToLOgin.removeEventListener('click', handlerToLogin)
    btnToLOgin.addEventListener('click', handlerToStepFirst)
})

btnToLOgin.addEventListener('click', handlerToLogin)