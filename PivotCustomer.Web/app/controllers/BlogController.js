app.controller('BlogController', function ($rootScope, $scope, $state, $window, $timeout) {
    $(document).ready(function () {
        $(window).scrollTop(0);

        if ($(window).width() < 767) {
            $('#main-nav').hide();
            $('.hamburger ').removeClass('open');
        }

        $(".send-email input").on("change keyup paste", function () {
            var emailLength = $(this).val().length;

            if (emailLength == 0)
                $(".send-button").hide();
            else
                $(".send-button").show();
        });
    });
});