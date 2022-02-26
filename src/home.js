import heroText from './assets/images/hero-text.png'
import {clear} from './pageload.js'

const homeTemplate = () =>{
    return `
    <div class="hero">
    <div class="hero-a"></div>
    <div class="hero-b"></div>
    <img id='hero-text' src="${heroText}" alt="The Best Pizzas">
</div>

<div class="about">
    <h2>About Us</h2>

    <p>Super Pizza Company is a family-owned pizza joint located in New York. From the time we opened in 2012, our focus has been on using only the freshest ingredents. It's with that in mind, that our dough is made fresh several times a day. We make our sauce daily from scratch and that’s why we always use:</p>

    <ul>
        <li>Garden fresh vegetables.</li>
        <li>Fresh wholesome chesse.</li>
        <li>Handmade dough layered with homemade sauce.</li>
    </ul>
</div>
    `
}

const home = homeTemplate();

const homeLoad = () =>{
    clear();
    let nav = document.querySelector('.nav-container');
    nav.insertAdjacentHTML('afterend', home)
}

export {homeLoad}