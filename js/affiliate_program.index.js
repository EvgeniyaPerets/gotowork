const dashbord = document.querySelector('.dashbord')
const popup = document.querySelector('.popup_bg')
const openPopup = document.querySelectorAll('.js-open-popup')

popup.addEventListener('click', e => {
    e.preventDefault()

    if(e.target.classList.contains('js-close-popup') || e.target.classList.contains('popup_bg')) {
        dashbord.classList.remove('open_popup')
        popup.classList.add('dn')
    }
})

openPopup.forEach(node => {
    node.addEventListener('click', e => {
        dashbord.classList.add('open_popup')
        popup.classList.remove('dn')
    })
})

const alert = document.querySelector('.alert_tip')
const alertEmail = alert.querySelector('.email')
const sendEmail = document.querySelectorAll('.js-send-email')

sendEmail.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()

        const form = e.target.closest('form')
        const emailWrapp = form.querySelector('.main__input')
        const email = form.querySelector('input').value

        if (validateEmail(email)) {
            emailWrapp.classList.remove('input__error')
            alert.classList.remove('dn')
            alertEmail.innerHTML = email

            setTimeout(() => {
                alert.classList.add('dn')
            }, 3000)
        } else {
            emailWrapp.classList.add('input__error')
        }

    })
})
