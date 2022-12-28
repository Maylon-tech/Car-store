const search = document.querySelector('.search-box')
const searchBtn = document.querySelector('#search-icon')
const menu = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-icon')
const header = document.querySelector('header')


// Header

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})


// Search 
searchBtn.addEventListener('click', () => {
    search.classList.toggle('active')
    menu.classList.remove('active')
})


// Navbar
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    search.classList.remove('active')
})