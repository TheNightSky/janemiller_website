const nav = document.querySelector('.nav');
const popup = document.querySelector('.popup');
const h1 = document.querySelector('.home');


window.addEventListener('onload', () => {
    h1.classList.add('.fadeup-enter-active ');
    h1.classList.remove('.fadeup-enter');
});


let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
        nav.classList.remove("nav--hidden")
    }
    if(lastScrollY < window.scrollY && lastScrollY > 30) {
        nav.classList.add("nav--hidden");
    } else {
        nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});


popup.addEventListener('click', () => {
    
});