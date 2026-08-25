/*-----------------------------------------------------------------------------------

    Project : Ricksite Studio
    File    : ricksite.js
    Note    : Loaded AFTER assets/js/theme.js.

              Navigation uses root-absolute anchors (/#projects, /#services, ...)
              so the links also work from pages other than the homepage. This
              smooth-scrolls the ones that point at the current page and lets the
              browser handle the rest as normal navigation.

              Agenko runs GSAP ScrollSmoother, which takes over scrolling, so a
              plain anchor jump does nothing. This reuses the ScrollSmoother
              instance theme.js already created - no new library.

-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    var HEADER_OFFSET = 110;

    /** True when the link points at a section on the page we are already on. */
    function isSamePageAnchor(link) {
        if (!link.hash) return false;
        return link.pathname === window.location.pathname && link.host === window.location.host;
    }

    $(document).on('click', 'a[href*="#"]', function (e) {
        if (!isSamePageAnchor(this)) return;

        var target = document.querySelector(this.hash);
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
