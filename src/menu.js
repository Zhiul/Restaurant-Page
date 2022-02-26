import {clear} from './pageload.js'
import pepperoniImg from './assets/images/pepperoni.png'
import chickenBbqImg from './assets/images/chicken-bbq.png'
import newYorkImg from './assets/images/new-york.png'
import margheritaImg from './assets/images/chicken-deluxe.png'
import chickenDeluxeImg from './assets/images/chicken-deluxe.png'
import sicilianImg from './assets/images/sicilian.png'
import vegeterianImg from './assets/images/vegeterian.png'
import chickenAlfredoImg from './assets/images/chicken-alfredo.png'

const menuTemplate = () =>{
    return `
    <div class="menu">
    <h2>Menu</h2>
    <div class="menu-items">
        <div class="menu-item">
            <a href="#"><img src="${pepperoniImg}"></a>
            <a href="#">Pepperoni</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${chickenBbqImg}" alt="Chicken BBQ"></a>
            <a href="#">Chicken BBQ</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${newYorkImg}" alt="New York"></a>
            <a href="#">New York</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${margheritaImg}" alt="Margherita"></a>
            <a href="#">Margherita</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${chickenDeluxeImg}" alt="Chicken Deluxe"></a>
            <a href="#">Chicken Deluxe</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${sicilianImg}" alt="Sicilian"></a>
            <a href="#">Sicilian</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${vegeterianImg}" alt="Vegeterian"></a>
            <a href="#">Vegeterian</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${chickenAlfredoImg}" alt="Chicken Alfredo"></a>
            <a href="#">Chicken Alfredo</a>
        </div>
    </div>
</div>
    `
}

const menu = menuTemplate();

const menuLoad = () =>{
    clear();
    let nav = document.querySelector('.nav-container');
    nav.insertAdjacentHTML('afterend', menu)
}

export {menuLoad}