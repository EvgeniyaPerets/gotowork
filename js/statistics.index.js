
const btnsTabs = document.querySelectorAll('.js-tabs')



btnsTabs.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault

        const active = e.target.dataset.active
        const disabled = e.target.dataset.disabled

        e.target.classList.add('active')
        document.querySelector(`.${disabled}`).classList.remove('active')

        document.querySelector(`.${disabled}__body`).classList.add('dn')
        document.querySelector(`.${active}__body`).classList.remove('dn')
    })
})

pickmeup.defaults.locales['ru'] = {
	days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
};

const options = {
    default_date: false,
    hide_on_select: true,
    mode: 'range',
    calendars: '2',
    format: 'd.m.y',
    locale: 'ru',
    prev: '<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 1L1 5M1 5L5 9M1 5L11 5" stroke="#4163DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L11 5M11 5L7 1M11 5L1 5" stroke="#4163DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
}

pickmeup('.datapiker', options)
pickmeup('.datapiker-two', options)

const selectMyStats = new vanillaSelectBox('#my_stats', {
    placeHolder: 'Статус'
})

const selectFriendsStats = new vanillaSelectBox('#friends_stats', {
    placeHolder: 'Статус'
})

const selectFriendsName = new vanillaSelectBox('#friends_name', {
    placeHolder: 'ФИО Друга'
})