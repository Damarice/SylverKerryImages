// Ensure all DOM elements are loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle Functionality ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Only set up menu functionality if all elements are found
    if (mobileMenuToggle && navMenu && hamburger && navLinks.length > 0) {
        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            // Check if the click target is outside both the toggle button and the menu itself
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) { // Only close if it's open
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) { // Assuming 768px is your breakpoint for mobile menu
                if (navMenu.classList.contains('active')) { // Only remove if active
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }

    // --- Header scroll effect ---
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) { // Ensure header exists
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

    // Only run hero slideshow if the .hero element exists
    if (hero) {
        function changeBackground() {
            hero.style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }

        changeBackground(); // Set initial image immediately
        setInterval(changeBackground, 5000); // Change every 5 seconds
    }

    // --- Custom Stand Fabrication Slideshow (for #fabricationSlideshow) ---
    // This is the code for the slideshow we discussed in previous interactions.
    // It is separate and specific to its own container.
    const fabricationSlideshowContainer = document.getElementById('fabricationSlideshow');

    if (fabricationSlideshowContainer) {
        let slideIndex = 0;
        let slides = fabricationSlideshowContainer.getElementsByClassName("slide");

        function showFabricationSlides() { // Renamed function to avoid conflict
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].classList.add('active');
            setTimeout(showFabricationSlides, 3000); // Change every 3 seconds
        }

        showFabricationSlides(); // Start the fabrication slideshow
    }
});