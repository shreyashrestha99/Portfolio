// Initialize mode toggle functionality
function initializeModeToggle() {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.checked = true;
        updateModeText(true);
    } else {
        updateModeText(false);
    }
    
    // Toggle dark/light mode
    modeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            updateModeText(true);
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            updateModeText(false);
        }
    });

    // Function to update mode text
    function updateModeText(isDark) {
        const modeText = document.querySelector('.nav-container span');
        if (modeText) {
            modeText.textContent = isDark ? 'Dark Mode' : 'Light Mode';
        }
    }
}

// Initialize hamburger menu functionality
function initializeHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Initialize smooth scrolling for navigation links
function initializeSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle Home link clicks to ensure proper navigation
    document.querySelectorAll('a[href="index.html"]').forEach(homeLink => {
        homeLink.addEventListener('click', function(e) {
            // If we're already on the home page, just scroll to top
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // If we're on a project page, let the normal navigation happen
        });
    });
}

// Initialize project filtering functionality
function initializeProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category.includes(filter)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Initialize contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your contact form logic here
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
}

// Initialize scroll to top functionality
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        // Show button when scrolling down
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize sidebar toggle functionality
function initializeSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
}

// Initialize project navigation functionality
function initializeProjectNavigation() {
    const navLeft = document.getElementById('navLeft');
    const navRight = document.getElementById('navRight');
    const projectsRow = document.querySelector('.projects-row');
    
    if (navLeft && navRight && projectsRow) {
        console.log('Navigation buttons found:', navLeft, navRight, projectsRow);
        
        // Check scroll position and update button states
        function updateNavButtons() {
            const isAtStart = projectsRow.scrollLeft === 0;
            const isAtEnd = projectsRow.scrollLeft + projectsRow.clientWidth >= projectsRow.scrollWidth;
            
            navLeft.disabled = isAtStart;
            navRight.disabled = isAtEnd;
            
            console.log('Button states updated:', { isAtStart, isAtEnd });
        }
        
        // Left navigation button
        navLeft.addEventListener('click', function() {
            console.log('Left button clicked');
            const scrollAmount = 280 + 12; // card width + gap
            projectsRow.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Right navigation button
        navRight.addEventListener('click', function() {
            console.log('Right button clicked');
            const scrollAmount = 280 + 12; // card width + gap
            projectsRow.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update button states on scroll
        projectsRow.addEventListener('scroll', updateNavButtons);
        
        // Initial button state update
        updateNavButtons();
        
        // Update button states on window resize
        window.addEventListener('resize', updateNavButtons);
    } else {
        console.log('Navigation elements not found:', { navLeft, navRight, projectsRow });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing functions...');
    
    // Initialize mode toggle
    initializeModeToggle();
    
    // Initialize hamburger menu
    initializeHamburgerMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize project filtering
    initializeProjectFiltering();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize scroll to top
    initializeScrollToTop();
    
    // Initialize sidebar toggle
    initializeSidebarToggle();
    
    // Initialize project navigation
    initializeProjectNavigation();
    
    console.log('All functions initialized');
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = '#4caf50';
    } else if (type === 'error') {
        notification.style.background = '#f44336';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInFromLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .contact-info {
        animation: slideInFromLeft 0.8s ease;
    }
    
    .contact-form {
        animation: slideInFromRight 0.8s ease 0.2s both;
    }
    
    .about-content {
        animation: slideInFromLeft 0.8s ease;
    }
    
    .profile-image {
        animation: slideInFromRight 0.8s ease 0.2s both;
    }
    
    .project-card {
        animation: fadeIn 0.6s ease;
    }
    
    .header {
        transition: transform 0.3s ease;
    }
    
    /* Dark mode transition animations */
    body, body * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
`;
document.head.appendChild(style);

// Disable parallax effect on banner (keep fixed/static)

// Add counter animation for statistics (if you want to add them later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Add smooth reveal animation for elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Theme toggle keyboard shortcut (Ctrl/Cmd + T)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        const modeToggle = document.getElementById('modeToggle');
        if (modeToggle) {
            modeToggle.checked = !modeToggle.checked;
            modeToggle.dispatchEvent(new Event('change'));
        }
    }
});
