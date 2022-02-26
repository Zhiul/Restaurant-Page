/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");
/* harmony import */ var _assets_images_feedback_contact_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/feedback-contact.png */ "./src/assets/images/feedback-contact.png");
/* harmony import */ var _assets_images_email_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/email-icon.svg */ "./src/assets/images/email-icon.svg");
/* harmony import */ var _assets_images_phone_number_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/phone-number-icon.svg */ "./src/assets/images/phone-number-icon.svg");





const contactTemplate = () =>{
    return `
    <div class="contact">
    <div class="contact-hero">
        <img src="${_assets_images_feedback_contact_png__WEBPACK_IMPORTED_MODULE_1__}" alt="Tell us your experience" id="contact-hero-text">
    </div>

    <div class="contact-container">
        <form action="">
            <legend>Send us a message</legend>
            <div class="feedback-inputs">
                <input type="text" name="name" id="name" placeholder="Full name" required>
                <input type="email" name="email" id="email" placeholder="Email" required>
                <input type="tel" name="tel" id="tel" placeholder="Phone number" required>
                <select name="feedback" id="feedback" required>
                    <option value="" hidden disabled selected required>Select an option</option>
                    <option value="question">I have a question</option>
                    <option value="complaint">I have a complaint</option>
                </select>
                <textarea name="description" id="description" cols="30" rows="2" placeholder="Description" required></textarea>
            </div>
            <button type="submit">SEND</button>
        </form>

        <div class="contact-information">
            <h3>Principal Office</h3>
            <p class="contact-direction">86 S. Mammoth St. Poughkeepsie, NY 12601</p>
            <div class="contact-information-items">
                <div class="contact-information-item"><img src="${_assets_images_email_icon_svg__WEBPACK_IMPORTED_MODULE_2__}" class="information-item-icon"><p>info@superpizza.com</p></div>

                <div class="contact-information-item"><img src="${_assets_images_phone_number_icon_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Phone Number" class="information-item-icon"><p>+1 202 555 0190</p></div>
            </div>
        </div>
    </div>
    </div>
    `
}

const contact = contactTemplate();

const contactLoad = () =>{
    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.clear)();
    let nav = document.querySelector('.nav-container');
    nav.insertAdjacentHTML('afterend', contact)
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _assets_images_hero_text_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/hero-text.png */ "./src/assets/images/hero-text.png");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");



const homeTemplate = () =>{
    return `
    <div class="hero">
    <div class="hero-a"></div>
    <div class="hero-b"></div>
    <img id='hero-text' src="${_assets_images_hero_text_png__WEBPACK_IMPORTED_MODULE_0__}" alt="The Best Pizzas">
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
    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__.clear)();
    let nav = document.querySelector('.nav-container');
    nav.insertAdjacentHTML('afterend', home)
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");
/* harmony import */ var _assets_images_pepperoni_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/pepperoni.png */ "./src/assets/images/pepperoni.png");
/* harmony import */ var _assets_images_chicken_bbq_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/chicken-bbq.png */ "./src/assets/images/chicken-bbq.png");
/* harmony import */ var _assets_images_new_york_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/new-york.png */ "./src/assets/images/new-york.png");
/* harmony import */ var _assets_images_chicken_deluxe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/chicken-deluxe.png */ "./src/assets/images/chicken-deluxe.png");
/* harmony import */ var _assets_images_sicilian_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/sicilian.png */ "./src/assets/images/sicilian.png");
/* harmony import */ var _assets_images_vegeterian_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/vegeterian.png */ "./src/assets/images/vegeterian.png");
/* harmony import */ var _assets_images_chicken_alfredo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/chicken-alfredo.png */ "./src/assets/images/chicken-alfredo.png");










const menuTemplate = () =>{
    return `
    <div class="menu">
    <h2>Menu</h2>
    <div class="menu-items">
        <div class="menu-item">
            <a href="#"><img src="${_assets_images_pepperoni_png__WEBPACK_IMPORTED_MODULE_1__}"></a>
            <a href="#">Pepperoni</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_chicken_bbq_png__WEBPACK_IMPORTED_MODULE_2__}" alt="Chicken BBQ"></a>
            <a href="#">Chicken BBQ</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_new_york_png__WEBPACK_IMPORTED_MODULE_3__}" alt="New York"></a>
            <a href="#">New York</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_chicken_deluxe_png__WEBPACK_IMPORTED_MODULE_4__}" alt="Margherita"></a>
            <a href="#">Margherita</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_chicken_deluxe_png__WEBPACK_IMPORTED_MODULE_4__}" alt="Chicken Deluxe"></a>
            <a href="#">Chicken Deluxe</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_sicilian_png__WEBPACK_IMPORTED_MODULE_5__}" alt="Sicilian"></a>
            <a href="#">Sicilian</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_vegeterian_png__WEBPACK_IMPORTED_MODULE_6__}" alt="Vegeterian"></a>
            <a href="#">Vegeterian</a>
        </div>

        <div class="menu-item">
            <a href="#"><img src="${_assets_images_chicken_alfredo_png__WEBPACK_IMPORTED_MODULE_7__}" alt="Chicken Alfredo"></a>
            <a href="#">Chicken Alfredo</a>
        </div>
    </div>
</div>
    `
}

const menu = menuTemplate();

const menuLoad = () =>{
    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.clear)();
    let nav = document.querySelector('.nav-container');
    nav.insertAdjacentHTML('afterend', menu)
}



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstPageLoad": () => (/* binding */ firstPageLoad),
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
/* harmony import */ var _assets_images_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/home.png */ "./src/assets/images/home.png");
/* harmony import */ var _assets_images_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/menu.png */ "./src/assets/images/menu.png");
/* harmony import */ var _assets_images_contact_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/contact.png */ "./src/assets/images/contact.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/logo.png */ "./src/assets/images/logo.png");





function navTemplate(){
    return `
    <ul id="nav-menu">
    <li><a role='button' class='home-button nav-item active'>Home</a></li>
    <li><a role='button' class='menu-button nav-item'>Menu</a></li>
    <li><a role='button' class='contact-button nav-item'>Contact</a></li>
</ul>

<div class="nav-container">
    <nav>
    <a href="#"><img src="${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__}" alt="Super Pizza"></a>
    <ul id="nav-menu-pc">
        <li><a role='button' class='home-button'><img src="${_assets_images_home_png__WEBPACK_IMPORTED_MODULE_0__}" class='nav-icon' alt=""></a>
            <a role='button' class='home-button nav-item active' >Home</a> </li>
  
        <li><a role='button' class='menu-button'><img src="${_assets_images_menu_png__WEBPACK_IMPORTED_MODULE_1__}" class='nav-icon' alt=""></a>
            <a role='button' class='menu-button nav-item'>Menu</a> </li>

        <li><a role='button' class='contact-button'><img src="${_assets_images_contact_png__WEBPACK_IMPORTED_MODULE_2__}" class='nav-icon' alt=""></a>
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
        <a href="#"><img src="${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__}" alt="Super Pizza"></a> 
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



/***/ }),

/***/ "./src/assets/images/chicken-alfredo.png":
/*!***********************************************!*\
  !*** ./src/assets/images/chicken-alfredo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/chicken-alfredo.678bca1e560ae246d88b.png";

/***/ }),

/***/ "./src/assets/images/chicken-bbq.png":
/*!*******************************************!*\
  !*** ./src/assets/images/chicken-bbq.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/chicken-bbq.e5f2ef45c50dd4defd75.png";

/***/ }),

/***/ "./src/assets/images/chicken-deluxe.png":
/*!**********************************************!*\
  !*** ./src/assets/images/chicken-deluxe.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/chicken-deluxe.222626a4896ce025983c.png";

/***/ }),

/***/ "./src/assets/images/contact.png":
/*!***************************************!*\
  !*** ./src/assets/images/contact.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/contact.c56a920b568766c173e7.png";

/***/ }),

/***/ "./src/assets/images/email-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/images/email-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/email-icon.c6fd2c31141352bd99c0.svg";

/***/ }),

/***/ "./src/assets/images/feedback-contact.png":
/*!************************************************!*\
  !*** ./src/assets/images/feedback-contact.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/feedback-contact.9ce865f17d226c68189f.png";

/***/ }),

/***/ "./src/assets/images/hero-text.png":
/*!*****************************************!*\
  !*** ./src/assets/images/hero-text.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/hero-text.0f956ac1170e967e5f89.png";

/***/ }),

/***/ "./src/assets/images/home.png":
/*!************************************!*\
  !*** ./src/assets/images/home.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/home.6119019e5645fba0d4d5.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/logo.be1e4f7719bbecde2716.png";

/***/ }),

/***/ "./src/assets/images/menu.png":
/*!************************************!*\
  !*** ./src/assets/images/menu.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/menu.54c3f2a39946e433fa2d.png";

/***/ }),

/***/ "./src/assets/images/new-york.png":
/*!****************************************!*\
  !*** ./src/assets/images/new-york.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/new-york.f2174353d7d47d05d6ff.png";

/***/ }),

/***/ "./src/assets/images/pepperoni.png":
/*!*****************************************!*\
  !*** ./src/assets/images/pepperoni.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/pepperoni.8f656974773d7c73ed23.png";

/***/ }),

/***/ "./src/assets/images/phone-number-icon.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/phone-number-icon.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/phone-number-icon.96267be76367c2ed5bf2.svg";

/***/ }),

/***/ "./src/assets/images/sicilian.png":
/*!****************************************!*\
  !*** ./src/assets/images/sicilian.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/sicilian.32d90a0e7212c7c6406f.png";

/***/ }),

/***/ "./src/assets/images/vegeterian.png":
/*!******************************************!*\
  !*** ./src/assets/images/vegeterian.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/vegeterian.a0c5cd33b708f1bd3956.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




 
(0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.firstPageLoad)()
;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();

let currentButton;

const homeButtons = document.querySelectorAll('.home-button');
const menuButtons = document.querySelectorAll('.menu-button')
const contactButtons = document.querySelectorAll('.contact-button')

homeButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    currentButton = 'home-button nav-item'
    switchTab();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeLoad)();
  })
})

menuButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    currentButton = 'menu-button nav-item'
    switchTab();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuLoad)();
  })
})

contactButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    currentButton = 'contact-button nav-item'
    switchTab();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactLoad)();
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZjRDO0FBQ1Y7QUFDQTtBQUNNO0FBQ3hDO0FBQ0EsMkRBQWE7QUFDYixtREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVc7QUFDZixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjbGVhcn0gZnJvbSAnLi9wYWdlbG9hZC5qcydcclxuaW1wb3J0IGhlcm9UZXh0IGZyb20gJy4vYXNzZXRzL2ltYWdlcy9mZWVkYmFjay1jb250YWN0LnBuZydcclxuaW1wb3J0IGVtYWlsSWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZW1haWwtaWNvbi5zdmcnXHJcbmltcG9ydCBwaG9uZU51bWJlckljb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3Bob25lLW51bWJlci1pY29uLnN2ZydcclxuXHJcbmNvbnN0IGNvbnRhY3RUZW1wbGF0ZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1oZXJvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2hlcm9UZXh0fVwiIGFsdD1cIlRlbGwgdXMgeW91ciBleHBlcmllbmNlXCIgaWQ9XCJjb250YWN0LWhlcm8tdGV4dFwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgIDxsZWdlbmQ+U2VuZCB1cyBhIG1lc3NhZ2U8L2xlZ2VuZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWRiYWNrLWlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJ0ZWxcIiBpZD1cInRlbFwiIHBsYWNlaG9sZGVyPVwiUGhvbmUgbnVtYmVyXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmZWVkYmFja1wiIGlkPVwiZmVlZGJhY2tcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgaGlkZGVuIGRpc2FibGVkIHNlbGVjdGVkIHJlcXVpcmVkPlNlbGVjdCBhbiBvcHRpb248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicXVlc3Rpb25cIj5JIGhhdmUgYSBxdWVzdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb21wbGFpbnRcIj5JIGhhdmUgYSBjb21wbGFpbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U0VORDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb3JtYXRpb25cIj5cclxuICAgICAgICAgICAgPGgzPlByaW5jaXBhbCBPZmZpY2U8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRhY3QtZGlyZWN0aW9uXCI+ODYgUy4gTWFtbW90aCBTdC4gUG91Z2hrZWVwc2llLCBOWSAxMjYwMTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb3JtYXRpb24taXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWluZm9ybWF0aW9uLWl0ZW1cIj48aW1nIHNyYz1cIiR7ZW1haWxJY29ufVwiIGNsYXNzPVwiaW5mb3JtYXRpb24taXRlbS1pY29uXCI+PHA+aW5mb0BzdXBlcnBpenphLmNvbTwvcD48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1pbmZvcm1hdGlvbi1pdGVtXCI+PGltZyBzcmM9XCIke3Bob25lTnVtYmVySWNvbn1cIiBhbHQ9XCJQaG9uZSBOdW1iZXJcIiBjbGFzcz1cImluZm9ybWF0aW9uLWl0ZW0taWNvblwiPjxwPisxIDIwMiA1NTUgMDE5MDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59XHJcblxyXG5jb25zdCBjb250YWN0ID0gY29udGFjdFRlbXBsYXRlKCk7XHJcblxyXG5jb25zdCBjb250YWN0TG9hZCA9ICgpID0+e1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWNvbnRhaW5lcicpO1xyXG4gICAgbmF2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBjb250YWN0KVxyXG59XHJcblxyXG5leHBvcnQge2NvbnRhY3RMb2FkfSIsImltcG9ydCBoZXJvVGV4dCBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvaGVyby10ZXh0LnBuZydcclxuaW1wb3J0IHtjbGVhcn0gZnJvbSAnLi9wYWdlbG9hZC5qcydcclxuXHJcbmNvbnN0IGhvbWVUZW1wbGF0ZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJoZXJvXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVyby1hXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVyby1iXCI+PC9kaXY+XHJcbiAgICA8aW1nIGlkPSdoZXJvLXRleHQnIHNyYz1cIiR7aGVyb1RleHR9XCIgYWx0PVwiVGhlIEJlc3QgUGl6emFzXCI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImFib3V0XCI+XHJcbiAgICA8aDI+QWJvdXQgVXM8L2gyPlxyXG5cclxuICAgIDxwPlN1cGVyIFBpenphIENvbXBhbnkgaXMgYSBmYW1pbHktb3duZWQgcGl6emEgam9pbnQgbG9jYXRlZCBpbiBOZXcgWW9yay4gRnJvbSB0aGUgdGltZSB3ZSBvcGVuZWQgaW4gMjAxMiwgb3VyIGZvY3VzIGhhcyBiZWVuIG9uIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGVudHMuIEl0J3Mgd2l0aCB0aGF0IGluIG1pbmQsIHRoYXQgb3VyIGRvdWdoIGlzIG1hZGUgZnJlc2ggc2V2ZXJhbCB0aW1lcyBhIGRheS4gV2UgbWFrZSBvdXIgc2F1Y2UgZGFpbHkgZnJvbSBzY3JhdGNoIGFuZCB0aGF04oCZcyB3aHkgd2UgYWx3YXlzIHVzZTo8L3A+XHJcblxyXG4gICAgPHVsPlxyXG4gICAgICAgIDxsaT5HYXJkZW4gZnJlc2ggdmVnZXRhYmxlcy48L2xpPlxyXG4gICAgICAgIDxsaT5GcmVzaCB3aG9sZXNvbWUgY2hlc3NlLjwvbGk+XHJcbiAgICAgICAgPGxpPkhhbmRtYWRlIGRvdWdoIGxheWVyZWQgd2l0aCBob21lbWFkZSBzYXVjZS48L2xpPlxyXG4gICAgPC91bD5cclxuPC9kaXY+XHJcbiAgICBgXHJcbn1cclxuXHJcbmNvbnN0IGhvbWUgPSBob21lVGVtcGxhdGUoKTtcclxuXHJcbmNvbnN0IGhvbWVMb2FkID0gKCkgPT57XHJcbiAgICBjbGVhcigpO1xyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtY29udGFpbmVyJyk7XHJcbiAgICBuYXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGhvbWUpXHJcbn1cclxuXHJcbmV4cG9ydCB7aG9tZUxvYWR9IiwiaW1wb3J0IHtjbGVhcn0gZnJvbSAnLi9wYWdlbG9hZC5qcydcclxuaW1wb3J0IHBlcHBlcm9uaUltZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcGVwcGVyb25pLnBuZydcclxuaW1wb3J0IGNoaWNrZW5CYnFJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NoaWNrZW4tYmJxLnBuZydcclxuaW1wb3J0IG5ld1lvcmtJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL25ldy15b3JrLnBuZydcclxuaW1wb3J0IG1hcmdoZXJpdGFJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NoaWNrZW4tZGVsdXhlLnBuZydcclxuaW1wb3J0IGNoaWNrZW5EZWx1eGVJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NoaWNrZW4tZGVsdXhlLnBuZydcclxuaW1wb3J0IHNpY2lsaWFuSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9zaWNpbGlhbi5wbmcnXHJcbmltcG9ydCB2ZWdldGVyaWFuSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy92ZWdldGVyaWFuLnBuZydcclxuaW1wb3J0IGNoaWNrZW5BbGZyZWRvSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jaGlja2VuLWFsZnJlZG8ucG5nJ1xyXG5cclxuY29uc3QgbWVudVRlbXBsYXRlID0gKCkgPT57XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnVcIj5cclxuICAgIDxoMj5NZW51PC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiJHtwZXBwZXJvbmlJbWd9XCI+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlBlcHBlcm9uaTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiJHtjaGlja2VuQmJxSW1nfVwiIGFsdD1cIkNoaWNrZW4gQkJRXCI+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNoaWNrZW4gQkJRPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIke25ld1lvcmtJbWd9XCIgYWx0PVwiTmV3IFlvcmtcIj48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TmV3IFlvcms8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIiR7bWFyZ2hlcml0YUltZ31cIiBhbHQ9XCJNYXJnaGVyaXRhXCI+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPk1hcmdoZXJpdGE8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIiR7Y2hpY2tlbkRlbHV4ZUltZ31cIiBhbHQ9XCJDaGlja2VuIERlbHV4ZVwiPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5DaGlja2VuIERlbHV4ZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiJHtzaWNpbGlhbkltZ31cIiBhbHQ9XCJTaWNpbGlhblwiPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5TaWNpbGlhbjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiJHt2ZWdldGVyaWFuSW1nfVwiIGFsdD1cIlZlZ2V0ZXJpYW5cIj48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VmVnZXRlcmlhbjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgc3JjPVwiJHtjaGlja2VuQWxmcmVkb0ltZ31cIiBhbHQ9XCJDaGlja2VuIEFsZnJlZG9cIj48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q2hpY2tlbiBBbGZyZWRvPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgYFxyXG59XHJcblxyXG5jb25zdCBtZW51ID0gbWVudVRlbXBsYXRlKCk7XHJcblxyXG5jb25zdCBtZW51TG9hZCA9ICgpID0+e1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWNvbnRhaW5lcicpO1xyXG4gICAgbmF2Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBtZW51KVxyXG59XHJcblxyXG5leHBvcnQge21lbnVMb2FkfSIsImltcG9ydCBob21lSWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcnXHJcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbWVudS5wbmcnXHJcbmltcG9ydCBjb250YWN0SWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvY29udGFjdC5wbmcnXHJcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZydcclxuXHJcbmZ1bmN0aW9uIG5hdlRlbXBsYXRlKCl7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHVsIGlkPVwibmF2LW1lbnVcIj5cclxuICAgIDxsaT48YSByb2xlPSdidXR0b24nIGNsYXNzPSdob21lLWJ1dHRvbiBuYXYtaXRlbSBhY3RpdmUnPkhvbWU8L2E+PC9saT5cclxuICAgIDxsaT48YSByb2xlPSdidXR0b24nIGNsYXNzPSdtZW51LWJ1dHRvbiBuYXYtaXRlbSc+TWVudTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIHJvbGU9J2J1dHRvbicgY2xhc3M9J2NvbnRhY3QtYnV0dG9uIG5hdi1pdGVtJz5Db250YWN0PC9hPjwvbGk+XHJcbjwvdWw+XHJcblxyXG48ZGl2IGNsYXNzPVwibmF2LWNvbnRhaW5lclwiPlxyXG4gICAgPG5hdj5cclxuICAgIDxhIGhyZWY9XCIjXCI+PGltZyBzcmM9XCIke2xvZ299XCIgYWx0PVwiU3VwZXIgUGl6emFcIj48L2E+XHJcbiAgICA8dWwgaWQ9XCJuYXYtbWVudS1wY1wiPlxyXG4gICAgICAgIDxsaT48YSByb2xlPSdidXR0b24nIGNsYXNzPSdob21lLWJ1dHRvbic+PGltZyBzcmM9XCIke2hvbWVJY29ufVwiIGNsYXNzPSduYXYtaWNvbicgYWx0PVwiXCI+PC9hPlxyXG4gICAgICAgICAgICA8YSByb2xlPSdidXR0b24nIGNsYXNzPSdob21lLWJ1dHRvbiBuYXYtaXRlbSBhY3RpdmUnID5Ib21lPC9hPiA8L2xpPlxyXG4gIFxyXG4gICAgICAgIDxsaT48YSByb2xlPSdidXR0b24nIGNsYXNzPSdtZW51LWJ1dHRvbic+PGltZyBzcmM9XCIke21lbnVJY29ufVwiIGNsYXNzPSduYXYtaWNvbicgYWx0PVwiXCI+PC9hPlxyXG4gICAgICAgICAgICA8YSByb2xlPSdidXR0b24nIGNsYXNzPSdtZW51LWJ1dHRvbiBuYXYtaXRlbSc+TWVudTwvYT4gPC9saT5cclxuXHJcbiAgICAgICAgPGxpPjxhIHJvbGU9J2J1dHRvbicgY2xhc3M9J2NvbnRhY3QtYnV0dG9uJz48aW1nIHNyYz1cIiR7Y29udGFjdEljb259XCIgY2xhc3M9J25hdi1pY29uJyBhbHQ9XCJcIj48L2E+XHJcbiAgICAgICAgICAgIDxhIHJvbGU9J2J1dHRvbicgY2xhc3M9J2NvbnRhY3QtYnV0dG9uIG5hdi1pdGVtJz5Db250YWN0PC9hPiA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWJ0blwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtYnRuX19idXJnZXJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uYXY+XHJcbjwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5cclxuY29uc3QgbmF2ID0gbmF2VGVtcGxhdGUoKTtcclxuXHJcbmZ1bmN0aW9uIGZvb3RlclRlbXBsYXRlKCl7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlci1jb250YWluZXJcIj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj48aW1nIHNyYz1cIiR7bG9nb31cIiBhbHQ9XCJTdXBlciBQaXp6YVwiPjwvYT4gXHJcbiAgICAgICAgPHVsIGlkPVwiZm9vdGVyLXNvY2lhbC1tZWRpYVwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDggNDhcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiMjRcIiBjeT1cIjI0XCIgZmlsbD1cIiMwMTdhNDdcIiByPVwiMjRcIiBjbGFzcz1cImZpbGwtNGU3MWE4XCI+PC9jaXJjbGU+PHBhdGggZD1cIk0yOS45IDE5LjVoLTR2LTIuNmMwLTEgLjctMS4yIDEuMS0xLjJoMi44di00LjRoLTMuOWMtNC40IDAtNS4zIDMuMy01LjMgNS4zdjIuOWgtMi41VjI0aDIuNXYxMi43aDUuM1YyNGgzLjZsLjQtNC41elwiIGZpbGw9XCIjZmZmZmZmXCIgY2xhc3M9XCJmaWxsLWZmZmZmZlwiPjwvcGF0aD48L3N2Zz48L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIjI0XCIgY3k9XCIyNFwiIGZpbGw9XCIjMDE3YTQ3XCIgcj1cIjI0XCIgY2xhc3M9XCJmaWxsLTQ0NDQ0NFwiPjwvY2lyY2xlPjxwYXRoIGQ9XCJNMzEuMiAxMi4zSDE2LjhjLTIuNSAwLTQuNSAyLTQuNSA0LjVWMzEuMmMwIDIuNSAyIDQuNSA0LjUgNC41aDE0LjRjMi41IDAgNC41LTIgNC41LTQuNVYxNi44YzAtMi41LTItNC41LTQuNS00LjV6bTEuMyAyLjdoLjV2NGgtNHYtNGgzLjV6bS0xMS44IDYuNmMuNy0xIDItMS43IDMuMy0xLjdzMi42LjcgMy4zIDEuN2MuNS43LjggMS41LjggMi40IDAgMi4zLTEuOSA0LjEtNC4xIDQuMXMtNC4xLTEuOC00LjEtNC4xYzAtLjkuMy0xLjcuOC0yLjR6bTEyLjcgOS42YzAgMS4yLTEgMi4yLTIuMiAyLjJIMTYuOGMtMS4yIDAtMi4yLTEtMi4yLTIuMnYtOS42aDMuNWMtLjMuNy0uNSAxLjYtLjUgMi40IDAgMy41IDIuOSA2LjQgNi40IDYuNCAzLjUgMCA2LjQtMi45IDYuNC02LjQgMC0uOC0uMi0xLjctLjUtMi40aDMuNXY5LjZ6XCIgZmlsbD1cIiNGRkZGRkZcIiBjbGFzcz1cImZpbGwtZmZmZmZmXCI+PC9wYXRoPjwvc3ZnPjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDggNDhcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiMjRcIiBjeT1cIjI0XCIgZmlsbD1cIiMwMTdhNDdcIiByPVwiMjRcIiBjbGFzcz1cImZpbGwtMWNiN2ViXCI+PC9jaXJjbGU+PHBhdGggZD1cIk0zNi44IDE1LjRjLS45LjUtMiAuOC0zIC45IDEuMS0uNyAxLjktMS44IDIuMy0zLjEtMSAuNi0yLjEgMS4xLTMuNCAxLjQtMS0xLjEtMi4zLTEuOC0zLjgtMS44LTIuOSAwLTUuMyAyLjUtNS4zIDUuNyAwIC40IDAgLjkuMSAxLjMtNC40LS4yLTguMy0yLjUtMTAuOS01LjktLjUuOC0uNyAxLjgtLjcgMi45IDAgMiAuOSAzLjcgMi4zIDQuNy0uOSAwLTEuNy0uMy0yLjQtLjd2LjFjMCAyLjcgMS44IDUgNC4yIDUuNi0uNC4xLS45LjItMS40LjItLjMgMC0uNyAwLTEtLjEuNyAyLjMgMi42IDMuOSA0LjkgMy45LTEuOCAxLjUtNC4xIDIuNC02LjUgMi40LS40IDAtLjggMC0xLjMtLjEgMi4zIDEuNiA1LjEgMi42IDguMSAyLjYgOS43IDAgMTUtOC42IDE1LTE2LjF2LS43YzEuMi0xIDIuMS0yIDIuOC0zLjJ6XCIgZmlsbD1cIiNmZmZmZmZcIiBjbGFzcz1cImZpbGwtZmZmZmZmXCI+PC9wYXRoPjwvc3ZnPjwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgPC9mb290ZXI+XHJcblxyXG48L2Rpdj5cclxuIGBcclxufVxyXG5cclxuY29uc3QgZm9vdGVyID0gZm9vdGVyVGVtcGxhdGUoKTtcclxuXHJcbmNvbnN0IGZpcnN0UGFnZUxvYWQgPSAoKSA9PntcclxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5jb250ZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbmF2KTtcclxuY29udGVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICBjb25zdCBzdGFydGluZ1BvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgZW5kaW5nUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1jb250YWluZXJcIik7XHJcbiAgICAgIHdoaWxlIChzdGFydGluZ1BvaW50Lm5leHRFbGVtZW50U2libGluZyAmJlxyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBlbmRpbmdQb2ludCkge1xyXG4gICAgICAgICAgIHN0YXJ0aW5nUG9pbnQubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCB7Zmlyc3RQYWdlTG9hZCwgY2xlYXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7Zmlyc3RQYWdlTG9hZH0gZnJvbSBcIi4vcGFnZWxvYWQuanNcIjtcclxuaW1wb3J0IHtob21lTG9hZH0gZnJvbSBcIi4vaG9tZS5qc1wiXHJcbmltcG9ydCB7bWVudUxvYWR9IGZyb20gXCIuL21lbnUuanNcIlxyXG5pbXBvcnQge2NvbnRhY3RMb2FkfSBmcm9tIFwiLi9jb250YWN0LmpzXCJcclxuIFxyXG5maXJzdFBhZ2VMb2FkKClcclxuaG9tZUxvYWQoKTtcclxuXHJcbmxldCBjdXJyZW50QnV0dG9uO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZS1idXR0b24nKTtcclxuY29uc3QgbWVudUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1idXR0b24nKVxyXG5jb25zdCBjb250YWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0LWJ1dHRvbicpXHJcblxyXG5ob21lQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PntcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGN1cnJlbnRCdXR0b24gPSAnaG9tZS1idXR0b24gbmF2LWl0ZW0nXHJcbiAgICBzd2l0Y2hUYWIoKTtcclxuICAgIGhvbWVMb2FkKCk7XHJcbiAgfSlcclxufSlcclxuXHJcbm1lbnVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+e1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgY3VycmVudEJ1dHRvbiA9ICdtZW51LWJ1dHRvbiBuYXYtaXRlbSdcclxuICAgIHN3aXRjaFRhYigpO1xyXG4gICAgbWVudUxvYWQoKTtcclxuICB9KVxyXG59KVxyXG5cclxuY29udGFjdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT57XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBjdXJyZW50QnV0dG9uID0gJ2NvbnRhY3QtYnV0dG9uIG5hdi1pdGVtJ1xyXG4gICAgc3dpdGNoVGFiKCk7XHJcbiAgICBjb250YWN0TG9hZCgpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUYWIoKXtcclxuICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcclxuICBuYXZJdGVtcy5mb3JFYWNoKG5hdkl0ZW0gPT57XHJcbiAgICBpZihuYXZJdGVtLmNsYXNzTGlzdC52YWx1ZSA9PT0gY3VycmVudEJ1dHRvbiB8fCBcclxuICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnZhbHVlID09PSBgJHtjdXJyZW50QnV0dG9ufSBhY3RpdmVgKXtcclxuICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XHJcbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1lbnUnKTtcclxubGV0IG1lbnVPcGVuID0gZmFsc2U7XHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICBpZighbWVudU9wZW4pIHtcclxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIG1lbnVPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=