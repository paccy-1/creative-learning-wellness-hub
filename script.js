/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Mobile Dropdown Support
    // This allows clicking "Our Programs" on a phone to open the list
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(drop => {
        drop.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Only affects mobile
                this.classList.toggle('active');
            }
        });
    });
});