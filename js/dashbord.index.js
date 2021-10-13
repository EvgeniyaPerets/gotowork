const dashbord = document.querySelector('.dashbord')
const popup = document.querySelector('.popup_bg')
const openPopup = document.querySelectorAll('.js-open-popup')

popup.addEventListener('click', e => {
    e.preventDefault()

    if (e.target.classList.contains('js-close-popup') ||
        e.target.parentNode.classList.contains('js-close-popup') ||
        e.target.classList.contains('popup_bg')) {
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