// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const header = document.getElementById('header');

    // Mobile menu toggle
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter subscription
    window.subscribeNewsletter = function() {
        const email = document.getElementById('newsletterEmail');
        if (email && email.value) {
            alert('Thank you for subscribing to our newsletter!');
            email.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    };

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Event registration buttons
    const eventButtons = document.querySelectorAll('.event-card .btn');
    eventButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventTitle = this.closest('.event-card').querySelector('h3').textContent;
            alert(`Thank you for registering for "${eventTitle}"! You will receive a confirmation email shortly.`);
        });
    });

    // Read more links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const newsTitle = this.closest('.news-card').querySelector('h3').textContent;
            alert(`Redirecting to full article: "${newsTitle}"`);
        });
    });

    // Team contact buttons
    const teamContactButtons = document.querySelectorAll('.team-card .contact-btn');
    teamContactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const teamMember = this.closest('.team-card').querySelector('h3').textContent;
            const isEmail = this.querySelector('.fa-envelope');
            
            if (isEmail) {
                alert(`Opening email client to contact ${teamMember}`);
            } else {
                alert(`Opening LinkedIn profile for ${teamMember}`);
            }
        });
    });

    // Get involved button
    const getInvolvedBtn = document.querySelector('.get-involved .btn');
    if (getInvolvedBtn) {
        getInvolvedBtn.addEventListener('click', function() {
            alert('Thank you for your interest! Please email us at info@alesgsa.ualberta.ca for more information about executive positions.');
        });
    }

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-section .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest! Please contact us for membership information.');
        });
    });

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (index === 0) {
                alert('Thank you for your interest! Please contact us for membership information.');
            } else {
                // Scroll to about section
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.style.filter = 'grayscale(100%)';
        });
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.value-card, .service-card, .event-card, .news-card, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form field animations
    const formInputs = document.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Add scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-green);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add page transition effects
    const pageContent = document.querySelector('main') || document.body;
    pageContent.style.opacity = '0';
    pageContent.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        pageContent.style.opacity = '1';
    }, 100);

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections for animation
    const animatedElements = document.querySelectorAll('.value-card, .service-card, .event-card, .news-card, .team-card, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}); 