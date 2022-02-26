import homeIcon from './assets/images/home.png'
import menuIcon from './assets/images/menu.png'
import contactIcon from './assets/images/contact.png'
import logo from './assets/images/logo.png'

function navTemplate(){
    return `
    <ul id="nav-menu">
    <li><a role='button' class='home-button nav-item active'>Home</a></li>
    <li><a role='button' class='menu-button nav-item'>Menu</a></li>
    <li><a role='button' class='contact-button nav-item'>Contact</a></li>
</ul>

<div class="nav-container">
    <nav>
    <a href="#"><img src="${logo}" alt="Super Pizza"></a>
    <ul id="nav-menu-pc">
        <li><a role='button' class='home-button'><img src="${homeIcon}" class='nav-icon' alt=""></a>
            <a role='button' class='home-button nav-item active' >Home</a> </li>
  
        <li><a role='button' class='menu-button'><img src="${menuIcon}" class='nav-icon' alt=""></a>
            <a role='button' class='menu-button nav-item'>Menu</a> </li>

        <li><a role='button' class='contact-button'><img src="${contactIcon}" class='nav-icon' alt=""></a>
            <a role='button' class='contact-button nav-item'>Contact</a> </li>
    </ul>
    <div class="menu-btn">
    <div class="menu-btn__burger"></div>
  </div>
</nav>
</div>
    `
} 

const nav = navTemplate();

function footerTemplate(){
    return `
    <div class="footer-container">
    <footer>
        <a href="#"><img src="${logo}" alt="Super Pizza"></a> 
        <ul id="footer-social-media">
            <li><a href="#"><svg viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" fill="#017a47" r="24" class="fill-4e71a8"></circle><path d="M29.9 19.5h-4v-2.6c0-1 .7-1.2 1.1-1.2h2.8v-4.4h-3.9c-4.4 0-5.3 3.3-5.3 5.3v2.9h-2.5V24h2.5v12.7h5.3V24h3.6l.4-4.5z" fill="#ffffff" class="fill-ffffff"></path></svg></a></li>
            <li><a href="#"><svg viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" fill="#017a47" r="24" class="fill-444444"></circle><path d="M31.2 12.3H16.8c-2.5 0-4.5 2-4.5 4.5V31.2c0 2.5 2 4.5 4.5 4.5h14.4c2.5 0 4.5-2 4.5-4.5V16.8c0-2.5-2-4.5-4.5-4.5zm1.3 2.7h.5v4h-4v-4h3.5zm-11.8 6.6c.7-1 2-1.7 3.3-1.7s2.6.7 3.3 1.7c.5.7.8 1.5.8 2.4 0 2.3-1.9 4.1-4.1 4.1s-4.1-1.8-4.1-4.1c0-.9.3-1.7.8-2.4zm12.7 9.6c0 1.2-1 2.2-2.2 2.2H16.8c-1.2 0-2.2-1-2.2-2.2v-9.6h3.5c-.3.7-.5 1.6-.5 2.4 0 3.5 2.9 6.4 6.4 6.4 3.5 0 6.4-2.9 6.4-6.4 0-.8-.2-1.7-.5-2.4h3.5v9.6z" fill="#FFFFFF" class="fill-ffffff"></path></svg></a></li>
            <li><a href="#"><svg viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" fill="#017a47" r="24" class="fill-1cb7eb"></circle><path d="M36.8 15.4c-.9.5-2 .8-3 .9 1.1-.7 1.9-1.8 2.3-3.1-1 .6-2.1 1.1-3.4 1.4-1-1.1-2.3-1.8-3.8-1.8-2.9 0-5.3 2.5-5.3 5.7 0 .4 0 .9.1 1.3-4.4-.2-8.3-2.5-10.9-5.9-.5.8-.7 1.8-.7 2.9 0 2 .9 3.7 2.3 4.7-.9 0-1.7-.3-2.4-.7v.1c0 2.7 1.8 5 4.2 5.6-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.3 2.6 3.9 4.9 3.9-1.8 1.5-4.1 2.4-6.5 2.4-.4 0-.8 0-1.3-.1 2.3 1.6 5.1 2.6 8.1 2.6 9.7 0 15-8.6 15-16.1v-.7c1.2-1 2.1-2 2.8-3.2z" fill="#ffffff" class="fill-ffffff"></path></svg></a></li>
        </ul>
     </footer>

</div>
 `
}

const footer = footerTemplate();

const firstPageLoad = () =>{
let content = document.querySelector('#content');
content.insertAdjacentHTML('beforeend', nav);
content.insertAdjacentHTML('beforeend', footer);
}

function clear(){
    const startingPoint = document.querySelector(".nav-container");
    const endingPoint = document.querySelector(".footer-container");
      while (startingPoint.nextElementSibling &&
        startingPoint.nextElementSibling !== endingPoint) {
           startingPoint.nextElementSibling.remove();
        }
    }

export {firstPageLoad, clear};