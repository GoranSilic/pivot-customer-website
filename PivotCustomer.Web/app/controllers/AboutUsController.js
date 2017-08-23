app.controller('AboutUsController', function ($rootScope, $scope, $state, $window, $timeout) {
    $('#toggleAdvisors').click(function () {
        $('.advisors-box').toggle();
    });
});