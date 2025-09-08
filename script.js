// Wait for the DOM to fully load

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links

    const navLinks = document.querySelectorAll('.nav-links a');

    

    navLinks.forEach(link => {

        link.addEventListener('click', function(e) {

            e.preventDefault();

            

            const targetId = this.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            

            window.scrollTo({

                top: targetSection.offsetTop - 80,

                behavior: 'smooth'

            });

        });

    });

    

    // Animate elements when they come into view

    const animateOnScroll = function() {

        const elements = document.querySelectorAll('.project-card, .about-content, .contact-form');

        

        elements.forEach(element => {

            const elementPosition = element.getBoundingClientRect().top;

            const screenPosition = window.innerHeight / 1.3;

            

            if (elementPosition < screenPosition) {

                element.style.opacity = '1';

                element.style.transform = 'translateY(0)';

            }

        });

    };

    

    // Set initial state for animated elements

    const animatedElements = document.querySelectorAll('.project-card, .about-content, .contact-form');

    animatedElements.forEach(element => {

        element.style.opacity = '0';

        element.style.transform = 'translateY(20px)';

        element.style.transition = 'all 0.8s ease';

    });

    

    // Trigger animation on scroll

    window.addEventListener('scroll', animateOnScroll);

    // Trigger once on load in case elements are already in view

    animateOnScroll();

    

    // Form submission handling

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {

        contactForm.addEventListener('submit', function(e) {

            e.preventDefault();

            

            // Simple form validation

            const inputs = this.querySelectorAll('input, textarea');

            let isValid = true;

            

            inputs.forEach(input => {

                if (!input.value.trim()) {

                    isValid = false;

                    input.style.border = '2px solid #ff6b6b';

                } else {

                    input.style.border = 'none';

                }

            });

            

            if (isValid) {

                // In a real application, you would send the form data to a server here

                alert('Thank you for your message! I will get back to you soon.');

                this.reset();

            } else {

                alert('Please fill in all fields.');

            }

        });

    }

    

    // CTA button click handler

    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {

        ctaButton.addEventListener('click', function() {

            const projectsSection = document.querySelector('#projects');

            

            window.scrollTo({

                top: projectsSection.offsetTop - 80,

                behavior: 'smooth'

            });

        });

    }

    

    // Add subtle animation to the logo

    const logo = document.querySelector('.logo');

    if (logo) {

        logo.addEventListener('mouseover', function() {

            this.style.transform = 'rotate(-5deg)';

        });

        

        logo.addEventListener('mouseout', function() {

            this.style.transform = 'rotate(0)';

        });

    }

});