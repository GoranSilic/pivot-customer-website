app.controller('AboutUsController', function ($rootScope, $scope, $state, $window, $timeout) {



    $('#toggleAdvisors').click(function () {
        $('.advisors-box').slideToggle();

        $(this).toggleClass('opened');

        if ($(this).hasClass('opened'))
            $(this).text("Close Section");
        else
            $(this).text("View Advisors");
    });



    function truncate(string) {
        if (string.length > 50)
            return string.substring(0, 50) + '...';
        else
            return string;
    };
});