/*-----------------------------------------------------------------------------------

    Project : Ricksite Studio
    File    : ricksite.js
    Note    : Loaded AFTER assets/js/theme.js.

              The homepage navigation uses in-page anchors (#projects, #services,
              #about, #contact). Agenko runs GSAP ScrollSmoother, which takes over
              scrolling, so a plain anchor jump does not work. This reuses the
              ScrollSmoother instance theme.js already created - no new library.

-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    var HEADER_OFFSET = 110;

    $(document).on('click', 'a[href^="#"]:not([href="#"])', function (e) {
        var target = document.querySelector($(this).attr('href'));
        if (!target) return;

        e.preventDefault();

        // Close the off-canvas menu when a link inside it is used.
        $('.pf-nav-menu').removeClass('menu-on');
        $('.navbar-toggler').removeClass('active');
        $('.offcanvas__overlay').removeClass('overlay-open');

        var smoother = (window.ScrollSmoother && ScrollSmoother.get) ? ScrollSmoother.get() : null;

        if (smoother) {
            smoother.scrollTo(target, true, 'top ' + HEADER_OFFSET + 'px');
        } else {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET,
                behavior: 'smooth'
            });
        }
    });

})(window.jQuery);
