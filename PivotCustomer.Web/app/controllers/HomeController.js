app.controller('HomeController', function ($rootScope, $scope, $state, $window, $timeout) {
    $('.quotes .bxslider').bxSlider();

    $('.quotes .nav').click(function () {
        if ($(this).hasClass('left')) {
            $('.quotes .bx-prev').trigger('click');
        }
        else if ($(this).hasClass('right')) {
            $('.quotes .bx-next').trigger('click');
        }
    });

    // Variables
    var viewport = $(window),
        root = $('html'),
        maxScroll;

    // Bind events to window
    viewport.on({
        scroll: function () {
            // Grab scroll position
            var scrolled = viewport.scrollTop();

            /**
             * Calculate our factor, setting it as the root `font-size`.
             *
             * Our factor is calculated by multiplying the ratio of the page scrolled by our base factor. The higher the base factor, the larger the parallax effect.
             */
            root.css({ fontSize: (scrolled / maxScroll) * 50 });
            if (document.body.scrollTop === 0) $('.welcome .text').css('z-index', '6');
            else $('.welcome .text').css('z-index', '0');
        },
        resize: function () {
            // Calculate the maximum scroll position
            maxScroll = root.height() - viewport.height();
        }
    }).trigger('resize');
});