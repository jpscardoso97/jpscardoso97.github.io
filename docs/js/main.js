// Theme switching
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
}

// Theme toggle button click handler
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project card expansion
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const wasExpanded = card.classList.contains('expanded');
        // Close all other expanded cards
        document.querySelectorAll('.project-card.expanded').forEach(expandedCard => {
            expandedCard.classList.remove('expanded');
        });
        // Toggle current card
        if (!wasExpanded) {
            card.classList.add('expanded');
        }
    });
});

// Mobile navigation menu (if needed in the future)
// const mobileMenuButton = document.getElementById('mobile-menu-button');
// const mobileMenu = document.getElementById('mobile-menu');

// if (mobileMenuButton && mobileMenu) {
//     mobileMenuButton.addEventListener('click', () => {
//         mobileMenu.classList.toggle('active');
//     });
// }

// Add scroll-based animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(10px)';
    section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(section);
}); 