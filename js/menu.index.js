const leftMenu = document.querySelector('.left_menu')
const closeMenu = document.querySelector('.js-close-menu')
const openMenu = document.querySelector('.js-open-menu')

openMenu.addEventListener('click', e => {
    e.preventDefault()
    leftMenu.classList.add('open')
})

closeMenu.addEventListener('click', e => {
    e.preventDefault()
    leftMenu.classList.remove('open')
})

const nav = document.querySelector('.js-nav-list')

nav.addEventListener('click', e => {
    e.preventDefault()

    if (e.target.classList.contains('offers')) {
        document.location = 'file:///home/engenia/Documents/gotowork/template/dashbord.html'
    }

    if (e.target.classList.contains('affiliate_program')) {
        document.location = 'file:///home/engenia/Documents/gotowork/template/affiliate_program.html'
    }

    if (e.target.classList.contains('statistics')) {
        document.location = 'file:///home/engenia/Documents/gotowork/template/statistics.html'
    }
})