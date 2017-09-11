app.controller('FaqController', function ($rootScope, $scope, $state, $window, $timeout) {
    $(document).ready(function () {
        $(window).scrollTop(0);

        if ($(window).width() < 767) {
            $('#main-nav').hide();
            $('.hamburger ').removeClass('open');
        }

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }
    });
});