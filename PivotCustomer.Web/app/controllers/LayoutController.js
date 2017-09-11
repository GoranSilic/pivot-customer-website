app.controller('LayoutController', function ($rootScope, $scope, $state, $window, $timeout) {
    $scope.currentYear = new Date().getFullYear();

    $('.hamburger').click(function () {
        $(this).toggleClass('open');
        $('#main-nav').toggle();
    });
});