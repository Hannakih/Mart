// script.js

document.addEventListener("DOMContentLoaded", () => {
    const heroButton = document.querySelector('.hero button');
    
    heroButton.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.products').offsetTop,
            behavior: 'smooth'
        });
    });
});