// // document.addEventListener('DOMContentLoaded', function() {
// //     // Get all navigation links and sections
// //     const navLinks = document.querySelectorAll('.nav-link');
// //     const sections = document.querySelectorAll('section[id]');
    
// //     // Smooth scrolling for navigation links
// //     navLinks.forEach(link => {
// //         link.addEventListener('click', function(e) {
// //             e.preventDefault();
// //             const targetId = this.getAttribute('href').substring(1);
// //             const targetSection = document.getElementById(targetId);
            
// //             if (targetSection) {
// //                 targetSection.scrollIntoView({
// //                     behavior: 'smooth',
// //                     block: 'start'
// //                 });
// //             }
// //         });
// //     });
    
// //     // Update active navigation link on scroll
// //     function updateActiveNav() {
// //         let current = '';
        
// //         sections.forEach(section => {
// //             const sectionTop = section.getBoundingClientRect().top;
// //             const sectionHeight = section.offsetHeight;
            
// //             if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
// //                 current = section.getAttribute('id');
// //             }
// //         });
        
// //         navLinks.forEach(link => {
// //             link.classList.remove('active');
// //             if (link.getAttribute('href') === `#${current}`) {
// //                 link.classList.add('active');
// //             }
// //         });
// //     }
    
// //     // Intersection Observer for animations
// //     const observerOptions = {
// //         threshold: 0.1,
// //         rootMargin: '0px 0px -50px 0px'
// //     };
    
// //     const observer = new IntersectionObserver(function(entries) {
// //         entries.forEach(entry => {
// //             if (entry.isIntersecting) {
// //                 entry.target.style.opacity = '1';
// //                 entry.target.style.transform = 'translateY(0)';
// //             }
// //         });
// //     }, observerOptions);
    
// //     // Observe all fade-in elements
// //     const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay');
// //     fadeElements.forEach(el => observer.observe(el));
    
// //     // Listen for scroll events
// //     window.addEventListener('scroll', updateActiveNav);
    
// //     // Set initial active nav
// //     updateActiveNav();
    
// //     // Add stagger animation to skill tags
// //     const skillTags = document.querySelectorAll('.skill-tag');
// //     skillTags.forEach((tag, index) => {
// //         tag.style.animationDelay = `${index * 0.1}s`;
// //         tag.classList.add('fade-in');
// //     });
    
// //     // Add stagger animation to project cards
// //     const projectCards = document.querySelectorAll('.projects-grid .premium-card');
// //     projectCards.forEach((card, index) => {
// //         card.style.animationDelay = `${index * 0.2}s`;
// //     });
    
// //     // Parallax effect for hero section
// //     window.addEventListener('scroll', function() {
// //         const scrolled = window.pageYOffset;
// //         const parallax = document.querySelector('.hero-section');
// //         const speed = scrolled * 0.5;
        
// //         if (parallax) {
// //             parallax.style.transform = `translateY(${speed}px)`;
// //         }
// //     });
    
// //     // Add hover effects to cards
// //     const cards = document.querySelectorAll('.premium-card');
// //     cards.forEach(card => {
// //         card.addEventListener('mouseenter', function() {
// //             this.style.transform = 'translateY(-8px)';
// //         });
        
// //         card.addEventListener('mouseleave', function() {
// //             this.style.transform = 'translateY(0)';
// //         });
// //     });
    
// //     // Email and social link handlers
// //     const emailBtn = document.querySelector('a[href="mailto:alex@example.com"]');
// //     const linkedinBtn = document.querySelector('a[href="https://linkedin.com/in/alexjohnson"]');
    
// //     if (emailBtn) {
// //         emailBtn.addEventListener('click', function(e) {
// //             // Analytics or custom email handling could go here
// //             console.log('Email button clicked');
// //         });
// //     }
    
// //     if (linkedinBtn) {
// //         linkedinBtn.addEventListener('click', function(e) {
// //             e.preventDefault();
// //             window.open(this.href, '_blank', 'noopener,noreferrer');
// //         });
// //     }
    
// //     // Add typing effect to hero title (optional enhancement)
// //     function typeWriter(element, text, speed = 100) {
// //         let i = 0;
// //         element.innerHTML = '';
        
// //         function type() {
// //             if (i < text.length) {
// //                 element.innerHTML += text.charAt(i);
// //                 i++;
// //                 setTimeout(type, speed);
// //             }
// //         }
        
// //         type();
// //     }
    
// //     // Uncomment to enable typing effect
// //     // const heroTitle = document.querySelector('.hero-title');
// //     // if (heroTitle) {
// //     //     const originalText = heroTitle.textContent;
// //     //     typeWriter(heroTitle, originalText, 100);
// //     // }
// // });
// document.addEventListener('DOMContentLoaded', function() {
//     // Get all navigation links and sections
//     const navLinks = document.querySelectorAll('.nav-link');
//     const sections = document.querySelectorAll('section[id]');
    
//     // Smooth scrolling for navigation links
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);
            
//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
    
//     // Update active navigation link on scroll
//     function updateActiveNav() {
//         let current = '';
        
//         sections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const sectionHeight = section.offsetHeight;
            
//             if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
//                 current = section.getAttribute('id');
//             }
//         });
        
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${current}`) {
//                 link.classList.add('active');
//             }
//         });
//     }
    
//     // Intersection Observer for animations
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };
    
//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);
    
//     // Observe all fade-in elements
//     const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay');
//     fadeElements.forEach(el => observer.observe(el));
    
//     // Listen for scroll events
//     window.addEventListener('scroll', updateActiveNav);
    
//     // Set initial active nav
//     updateActiveNav();
    
//     // Add stagger animation to skill tags
//     const skillTags = document.querySelectorAll('.skill-tag');
//     skillTags.forEach((tag, index) => {
//         tag.style.animationDelay = `${index * 0.1}s`;
//         tag.classList.add('fade-in');
//     });
    
//     // Add stagger animation to project cards
//     const projectCards = document.querySelectorAll('.projects-grid .premium-card');
//     projectCards.forEach((card, index) => {
//         card.style.animationDelay = `${index * 0.2}s`;
//     });
    
//     // REMOVED: Problematic parallax effect that was causing overlap
//     // The parallax effect was moving the entire hero section and causing it to overlap with content below
    
//     // Add hover effects to cards
//     const cards = document.querySelectorAll('.premium-card');
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transform = 'translateY(-8px)';
//         });
        
//         card.addEventListener('mouseleave', function() {
//             this.style.transform = 'translateY(0)';
//         });
//     });
    
//     // Email and social link handlers
//     const emailBtn = document.querySelector('a[href^="mailto:"]');
//     const linkedinBtns = document.querySelectorAll('a[href*="linkedin.com"]');
    
//     if (emailBtn) {
//         emailBtn.addEventListener('click', function(e) {
//             // Analytics or custom email handling could go here
//             console.log('Email button clicked');
//         });
//     }
    
//     linkedinBtns.forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             // Don't prevent default for mailto links
//             if (!this.href.startsWith('mailto:')) {
//                 e.preventDefault();
//                 window.open(this.href, '_blank', 'noopener,noreferrer');
//             }
//         });
//     });
    
//     // Add typing effect to hero title (optional enhancement)
//     function typeWriter(element, text, speed = 100) {
//         let i = 0;
//         element.innerHTML = '';
        
//         function type() {
//             if (i < text.length) {
//                 element.innerHTML += text.charAt(i);
//                 i++;
//                 setTimeout(type, speed);
//             }
//         }
        
//         type();
//     }
    
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 100);
//     }
// });
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #f8fafc;
    background: linear-gradient(135deg, hsl(220, 13%, 8%), hsl(220, 13%, 12%));
    min-height: 100vh;
    /* Add padding-top to account for fixed navigation */
    padding-top: 80px;
}

/* Premium Color Palette */
:root {
    --background: hsl(220, 13%, 8%);
    --foreground: hsl(0, 0%, 98%);
    --card: hsl(220, 13%, 10%);
    --card-foreground: hsl(0, 0%, 95%);
    --primary: hsl(0, 0%, 98%);
    --primary-foreground: hsl(220, 13%, 8%);
    --secondary: hsl(220, 13%, 15%);
    --secondary-foreground: hsl(0, 0%, 90%);
    --muted: hsl(220, 13%, 12%);
    --muted-foreground: hsl(0, 0%, 60%);
    --accent: hsl(45, 100%, 70%);
    --accent-foreground: hsl(220, 13%, 8%);
    --border: hsl(220, 13%, 18%);
    
    /* Premium Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(220, 13%, 8%), hsl(220, 13%, 12%));
    --gradient-card: linear-gradient(135deg, hsl(220, 13%, 10%), hsl(220, 13%, 14%));
    --gradient-accent: linear-gradient(135deg, hsl(45, 100%, 70%), hsl(35, 100%, 65%));
    
    /* Premium Shadows */
    --shadow-premium: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    --shadow-glow: 0 0 40px rgba(255, 215, 0, 0.1);
    
    /* Animation Timings */
    --transition-premium: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Typography */
.hero-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--foreground), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--foreground);
}

/* Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section {
    padding: 5rem 0;
    /* Add scroll margin to account for fixed header when jumping to sections */
    scroll-margin-top: 80px;
}

/* Navigation */
.nav-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(15, 16, 19, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    height: 80px; /* Fixed height for consistency */
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 100%;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.nav-logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--foreground);
}

.nav-menu {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: var(--muted-foreground);
    text-decoration: none;
    font-weight: 500;
    text-transform: capitalize;
    transition: var(--transition-smooth);
}

.nav-link:hover,
.nav-link.active {
    color: var(--accent);
}

/* Hero Section */
.hero-section {
    min-height: calc(100vh - 80px); /* Subtract navigation height */
    display: flex;
    align-items: center;
    padding: 2rem 0 5rem; /* Reduced top padding since body has padding-top */
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
}

@media (min-width: 768px) {
    .hero-grid {
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }
}

.hero-greeting {
    color: var(--accent);
    font-size: 1.125rem;
    margin-bottom: 1rem;
    font-weight: 500;
}

.hero-description {
    font-size: 1.25rem;
    color: var(--muted-foreground);
    margin-bottom: 2rem;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-image {
    display: flex;
    justify-content: center;
}

.image-container {
    position: relative;
}

.portrait {
    width: 320px;
    height: 320px;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: var(--shadow-premium);
}

.image-overlay {
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    background: rgba(255, 215, 0, 0.1);
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition-smooth);
    border: 1px solid transparent;
}

.btn-primary {
    background: var(--accent);
    color: var(--accent-foreground);
    border-color: var(--accent);
}

.btn-primary:hover {
    background: hsl(45, 100%, 65%);
    transform: translateY(-2px);
}

.btn-outline {
    border-color: var(--border);
    color: var(--foreground);
    background: transparent;
}

.btn-outline:hover {
    background: var(--secondary);
    transform: translateY(-2px);
}

/* Cards */
.premium-card {
    background: var(--gradient-card);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    box-shadow: var(--shadow-premium);
    transition: var(--transition-premium);
    padding: 2rem;
}

.premium-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-premium), var(--shadow-glow);
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--foreground);
}

/* About Section */
.section-header {
    margin-bottom: 4rem;
}

.section-description {
    font-size: 1.125rem;
    color: var(--muted-foreground);
    max-width: 48rem;
    line-height: 1.7;
    margin-bottom: 2rem;
}

.bio-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.bio-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    color: var(--foreground);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-smooth);
}

.bio-link:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    border-color: var(--accent);
}

.link-icon {
    font-size: 1.25rem;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
}

.skill-tag {
    font-size: 0.875rem;
    color: var(--muted-foreground);
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    text-align: center;
}

.experience-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.experience-role {
    font-weight: 500;
    color: var(--foreground);
}

.experience-company {
    font-size: 0.875rem;
    color: var(--accent);
    margin: 0.25rem 0;
}

.experience-description {
    font-size: 0.875rem;
    color: var(--muted-foreground);
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--foreground);
}

.project-status {
    font-size: 0.75rem;
    color: var(--accent);
    background: rgba(255, 215, 0, 0.2);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}

.project-description {
    color: var(--muted-foreground);
    margin-bottom: 1rem;
    line-height: 1.6;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    font-size: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    color: var(--secondary-foreground);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}

/* Contact Section */
.contact-center {
    text-align: center;
}

.contact-description {
    font-size: 1.125rem;
    color: var(--muted-foreground);
    margin-bottom: 2rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}

.contact-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
}

.footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

.footer-text {
    font-size: 0.875rem;
    color: var(--muted-foreground);
}

/* Animations */
.fade-in {
    animation: fadeIn 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

.fade-in-delay {
    animation: fadeIn 0.8s ease-out 0.3s forwards;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Navigation */
@media (max-width: 767px) {
    body {
        padding-top: 70px; /* Smaller navigation height on mobile */
    }
    
    .nav-fixed {
        height: 70px;
    }
    
    .section {
        scroll-margin-top: 70px;
    }
    
    .hero-section {
        min-height: calc(100vh - 70px);
        padding: 2rem 0 4rem;
    }
    
    .nav-menu {
        gap: 1rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .section {
        padding: 4rem 0;
    }
}