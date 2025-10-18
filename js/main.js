// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeIcon.className = 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
});

// Simulate neofetch output with typing effect
document.addEventListener('DOMContentLoaded', () => {
    const infoLines = document.querySelectorAll('.info-line');
    let delay = 0;

    infoLines.forEach(line => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.transition = 'opacity 0.3s ease';
            line.style.opacity = '1';
        }, delay);
        delay += 80;
    });
});
