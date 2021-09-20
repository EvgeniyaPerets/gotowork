const leftMenu = document.querySelector('.left_menu')
const closeMenu = document.querySelector('.js-close-menu')

openMenu.addEventListener('click', e => {
    e.preventDefault()
    leftMenu.classList.add('open')
})

closeMenu.addEventListener('click', e => {
    e.preventDefault()
    leftMenu.classList.remove('open')
})