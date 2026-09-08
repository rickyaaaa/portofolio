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

/*-----------------------------------------------------------------------------------

    Intro loader

    The brand sequence runs ~2.32s (mark draws, dot travels, wordmark reveals).
    Agenko's own preloader fades on window.load after a fixed 500ms, which on a
    warm cache would cut the animation off mid-draw — so this waits for whichever
    finishes last, the page or the animation, then fades out.

    The head script in BaseLayout has already removed the loader entirely on
    repeat views and for prefers-reduced-motion, so this only runs on a first
    visit.

-----------------------------------------------------------------------------------*/
(function () {
    'use strict';

    var loader = document.getElementById('rs-preloader');
    if (!loader || document.documentElement.classList.contains('rs-intro-skip')) return;

    var SEQUENCE_MS = 2320;
    var startedAt = Date.now();

    function dismiss() {
        var remaining = Math.max(0, SEQUENCE_MS - (Date.now() - startedAt));
        setTimeout(function () {
            loader.classList.add('is-done');
            try { sessionStorage.setItem('rs-intro-played', '1'); } catch (e) {}
            setTimeout(function () {
                if (loader.parentNode) loader.parentNode.removeChild(loader);
                // Page height changed; let ScrollTrigger re-measure.
                if (window.ScrollTrigger) ScrollTrigger.refresh();
            }, 500);
        }, remaining);
    }

    if (document.readyState === 'complete') dismiss();
    else window.addEventListener('load', dismiss);
})();
