// Fixed Mobile Menu Toggle - Updated to match your HTML structure
document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle Functionality ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Updated condition - removed hamburger requirement since you don't have that element
    if (mobileMenuToggle && navMenu) {
        console.log('Mobile menu elements found, setting up functionality...');
        
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            console.log('Mobile menu toggle clicked!');
            
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active'); // Add active class to button instead

            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            
            console.log('Menu is now:', navMenu.classList.contains('active') ? 'OPEN' : 'CLOSED');
        });

        // Close menu when clicking on nav links (if they exist)
        if (navLinks.length > 0) {
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    } else {
        console.error('Mobile menu elements not found!');
        console.log('Toggle button found:', !!mobileMenuToggle);
        console.log('Nav menu found:', !!navMenu);
    }

    // --- Header scroll effect ---
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // --- Hero Background Slideshow ---
    const hero = document.querySelector('.hero');
    const images = [
        'assets/img/a-106.jpg',
        'assets/img/A-109.jpg',
        'assets/img/A-110.png',
        'assets/img/A-110.jpg'
    ];
    let currentIndex = 0;

    if (hero) {
        function changeBackground() {
            hero.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }

        changeBackground();
        setInterval(changeBackground, 5000);
    }

    // --- Custom Stand Fabrication Slideshow ---
    const fabricationSlideshowContainer = document.getElementById('fabricationSlideshow');

    if (fabricationSlideshowContainer) {
        let slideIndex = 0;
        let slides = fabricationSlideshowContainer.getElementsByClassName("slide");

        function showFabricationSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].classList.add('active');
            setTimeout(showFabricationSlides, 3000);
        }

        showFabricationSlides();
    }
});