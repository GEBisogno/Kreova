document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Animación simple para los features
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, i) => {
        feature.style.opacity = 0;
        setTimeout(() => {
            feature.style.transition = 'opacity 0.8s';
            feature.style.opacity = 1;
        }, 400 + i * 300);
    });

    // Validación básica del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por contactarnos! Pronto te responderemos.');
            contactForm.reset();
        });
    }
});
