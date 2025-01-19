// script.js for simple animations

// Smooth scroll animation for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlighting project list items on hover
document.querySelectorAll('.projects li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.2s';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
