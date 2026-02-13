(function () {
    'use strict';

    var START_DATE = new Date(2025, 11, 12); // Dec 12, 2025

    function getDaysSince(startDate) {
        var now = new Date();
        var diffMs = now - startDate;
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }

    function animateNumber(element, target, duration) {
        if (!element) return;
        var start = performance.now();

        function update(currentTime) {
            var elapsed = currentTime - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            element.textContent = Math.floor(target * eased);
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    // Day counter — starts after hero entrance animation
    var days = getDaysSince(START_DATE);
    var heroCounter = document.getElementById('day-counter');
    setTimeout(function () {
        animateNumber(heroCounter, days, 2000);
    }, 2200);

    // Scroll-triggered fade-in animations
    var scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        scrollObserver.observe(el);
    });

    // Navigation — appears after scrolling past hero
    var nav = document.getElementById('nav');
    var hero = document.getElementById('hero');

    function updateNav() {
        var heroBottom = hero.offsetHeight - 100;
        if (window.scrollY > heroBottom) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    }

    // Hero parallax — content drifts up and fades as you scroll
    var heroContent = document.querySelector('.hero-content');

    function updateParallax() {
        var scrollY = window.scrollY;
        var heroHeight = window.innerHeight;
        if (scrollY < heroHeight && heroContent) {
            var progress = scrollY / heroHeight;
            heroContent.style.transform = 'translateY(' + (scrollY * 0.35) + 'px)';
            heroContent.style.opacity = 1 - progress * 0.9;
        }
    }

    // Throttled scroll handler
    var ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                updateNav();
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
