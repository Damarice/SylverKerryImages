document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function (e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // --- HERO SLIDESHOW ---
    const heroSlideshow = document.querySelector('.hero-slideshow');
    const heroSlides = document.querySelectorAll('.hero-slideshow .slide');
    const indicators = document.querySelectorAll('.slide-indicators .indicator');
    const prevBtn = document.querySelector('.slide-arrow.prev');
    const nextBtn = document.querySelector('.slide-arrow.next');

    let currentHeroIndex = 0;
    let heroInterval;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });

        currentHeroIndex = index;
    }

    function nextHeroSlide() {
        let nextIndex = (currentHeroIndex + 1) % heroSlides.length;
        showHeroSlide(nextIndex);
    }

    function prevHeroSlide() {
        let prevIndex = (currentHeroIndex - 1 + heroSlides.length) % heroSlides.length;
        showHeroSlide(prevIndex);
    }

    function startHeroSlideshow() {
        heroInterval = setInterval(nextHeroSlide, 5000);
    }

    function stopHeroSlideshow() {
        clearInterval(heroInterval);
    }

    if (heroSlides.length > 0) {
        showHeroSlide(0);
        startHeroSlideshow();

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopHeroSlideshow();
                nextHeroSlide();
                startHeroSlideshow();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopHeroSlideshow();
                prevHeroSlide();
                startHeroSlideshow();
            });
        }

        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', () => {
                stopHeroSlideshow();
                showHeroSlide(i);
                startHeroSlideshow();
            });
        });
    }

    // --- CUSTOM FABRICATION SLIDESHOW ---
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
