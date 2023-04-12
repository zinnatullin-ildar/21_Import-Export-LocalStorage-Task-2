class CookieConsent {
    constructor(selector) {
        this.element = document.querySelector(selector);
        if (localStorage.getItem('cookie-allowed') !== 'true' && this.element) {
            this.acceptButton = this.element.querySelector('.cookie-consent__button');
            this.acceptButton?.addEventListener('click', this.onAccept.bind(this));
        } else {
            this.element.classList.add('hide');
        }
    }
    onAccept() {
        localStorage.setItem('cookie-allowed', 'true');
        this.element.classList.add('hide');
        this.acceptButton?.removeEventListener('click', this.onAccept.bind(this));
    }
}

export default CookieConsent;
