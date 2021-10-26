const menuBar = document.querySelector('.menu-bar')
const hamburger = document.querySelector('.menu-bar_burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav1')
const navItems = document.querySelectorAll('.menu-nav_item')

let showMenu = false

menuBar.addEventListener("click", toggleMenu)

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        
        showMenu = true
    }else{
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')


        showMenu = false
    }
}
