// Initialize variables
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const particlesCanvas = document.getElementById('particles');
const ctx = particlesCanvas.getContext('2d');

// Canvas setup for particles
let particles = [];
let animationId = null;

function initCanvas() {
    const heroBg = document.querySelector('.hero-bg');
    particlesCanvas.width = heroBg.clientWidth;
    particlesCanvas.height = heroBg.clientHeight;
    resizeCanvas();
    createParticles();
    animate();
}

// Canvas resize
function resizeCanvas() {
    const heroBg = document.querySelector('.hero-bg');
    particlesCanvas.width = heroBg.clientWidth;
    particlesCanvas.height = heroBg.clientHeight;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
}

// Create particles - circles orbiting
function createParticles() {
    particles = [];
    const particleCount = Math.min(20, Math.floor(petitiveCanvas.width / 100));

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * particlesCanvas.width,
            y: Math.random() * particlesCanvas.height,
            radius: Math.random() * 1 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
}

// Animate particles
function animate() {
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

    particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = particlesCanvas.width;
        if (particle.x > particlesCanvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = particlesCanvas.height;
        if (particle.y > particlesCanvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
    });

    animationId = requestAnimationFrame(animate);
}

// Scroll effect for navbar
let lastScroll = 0;
function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all section elements
document.querySelectorAll('.section').forEach(section => {
    section.style.animationPlayState = 'paused';
    observer.observe(section);
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');

        // Toggle hamburger animation
        const hamburger = navToggle.querySelector('.hamburger');
        if (hamburger.classList.contains('active')) {
            hamburger.style.transform = 'rotate(45deg) translate(6px, 6px)';
        } else {
            hamburger.style.transform = 'none';
        }
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value || 'Inquiry';
        const message = document.getElementById('message').value;

        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // In a real application, this would send to a backend service
        // For now, we'll just show a success message
        alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon.`);

        contactForm.reset();
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    handleScroll();

    // Add fade-in animation styles
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.transition = 'opacity 0.6s ease';
    });

    // Add active class on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
});