import {clear} from './pageload.js'
import heroText from './assets/images/feedback-contact.png'
import emailIcon from './assets/images/email-icon.svg'
import phoneNumberIcon from './assets/images/phone-number-icon.svg'

const contactTemplate = () =>{
    return `
    <div class="contact">
    <div class="contact-hero">
        <img src="${heroText}" alt="Tell us your experience" id="contact-hero-text">
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
                <div class="contact-information-item"><img src="${emailIcon}" class="information-item-icon"><p>info@superpizza.com</p></div>

                <div class="contact-information-item"><img src="${phoneNumberIcon}" alt="Phone Number" class="information-item-icon"><p>+1 202 555 0190</p></div>
            </div>
        </div>
    </div>
    </div>
    `
}

const contact = contactTemplate();

const contactLoad = () =>{
    clear();
    let nav = document.querySelector('.nav-container');
    nav.insertAdjacentHTML('afterend', contact)
}

export {contactLoad}