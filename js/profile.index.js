const dashbord = document.querySelector('.dashbord')
const popupAddCard = document.querySelector('.popup_bg')
const openPopupAddCard = document.querySelector('.js-add-new-card')
const btnAddCard = document.querySelectorAll('.js-add_new_card')

const popupEditProfile = document.querySelector('.popup_bg.edit_profile')
const openPopupEditProfile = document.querySelector('.js-edit-profile')

popupAddCard.addEventListener('click', e => {
    e.preventDefault()

    if(e.target.classList.contains('js-close-popup') || e.target.classList.contains('popup_bg')) {
        dashbord.classList.remove('open_popup')
        popupAddCard.classList.add('dn')
    }
})

openPopupAddCard.addEventListener('click', e => {
    dashbord.classList.add('open_popup')
    popupAddCard.classList.remove('dn')
})

popupEditProfile.addEventListener('click', e => {
    e.preventDefault()

    if(e.target.classList.contains('js-close-popup') || e.target.classList.contains('popup_bg')) {
        dashbord.classList.remove('open_popup')
        popupEditProfile.classList.add('dn')
    }
})

openPopupEditProfile.addEventListener('click', e => {
    dashbord.classList.add('open_popup')
    popupEditProfile.classList.remove('dn')
})

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$")
    if (!regex.test(number))
        return false

    return luhnCheck(number)
}

function luhnCheck(val) {
    var sum = 0
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1))
        if (i % 2 == 0) {
            intVal *= 2
            if (intVal > 9) {
                intVal = 1 + (intVal % 10)
            }
        }
        sum += intVal
    }
    return (sum % 10) == 0
}

const addNewCard = (num) => {
    const numCard = num.split('').reduce((acc, cur, i) => {
        if (i >= 6 && i <= 11) {
            acc = acc + '*'
        } else {
            acc = acc + cur
        }
        if ((i + 1) % 4 === 0) {
            acc = acc + ' '
        }

        return acc
    }, '')

    const el = document.createElement('div')
    el.classList.add('card')
    el.innerHTML = `<span class="card__delete js-delete-card"></span>
        <span class="card_logo"></span>
        <span class="card__number">${numCard}</span>`

    dashbord.classList.remove('open_popup')
    popupAddCard.classList.add('dn')

    document.querySelector('.cardholder').insertBefore(el, openPopupAddCard)
}

btnAddCard.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()

        const input = document.querySelector('.input__card input').value
        const inputWrapp = document.querySelector('.input__card')

        if (validateCardNumber(input)) {
            inputWrapp.classList.remove('input__error')
            addNewCard(input)
        } else {
            inputWrapp.classList.add('input__error')
        }
    })
})

document.querySelectorAll('.js-delete-card').forEach(node => {
    node.addEventListener('click', e => {
        e.preventDefault()
        e.target.parentNode.classList.add('dn')
    })
})

document.querySelectorAll('.js-edit-info').forEach(el => {
    el.addEventListener('click', e => {
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
            document.querySelector('.profile__name').innerHTML = name
            document.querySelector('.profile__contacts .phone').innerHTML = phone
            document.querySelector('.profile__contacts .email').innerHTML = email

            dashbord.classList.remove('open_popup')
            popupEditProfile.classList.add('dn')
        }
    })
})

if (document.documentElement.clientWidth <= 560) {
    document.querySelectorAll('.cardholder .card').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            el.classList.toggle('showDelBtn')
        })
    })
}