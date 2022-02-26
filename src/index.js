import {firstPageLoad} from "./pageload.js";
import {homeLoad} from "./home.js"
import {menuLoad} from "./menu.js"
import {contactLoad} from "./contact.js"
 
firstPageLoad()
homeLoad();

let currentButton;

const homeButtons = document.querySelectorAll('.home-button');
const menuButtons = document.querySelectorAll('.menu-button')
const contactButtons = document.querySelectorAll('.contact-button')

homeButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    currentButton = 'home-button nav-item'
    switchTab();
    homeLoad();
  })
})

menuButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    currentButton = 'menu-button nav-item'
    switchTab();
    menuLoad();
  })
})

contactButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    currentButton = 'contact-button nav-item'
    switchTab();
    contactLoad();
  })
})

function switchTab(){
  let navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(navItem =>{
    if(navItem.classList.value === currentButton || 
       navItem.classList.value === `${currentButton} active`){
      navItem.classList.add('active');
    } else{
      navItem.classList.remove('active');
    }
  })
}

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('#nav-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


