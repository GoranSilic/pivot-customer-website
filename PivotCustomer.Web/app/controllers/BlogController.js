app.controller('BlogController', function ($rootScope, $scope, $state, $window, $timeout) {
    $(".send-email input").on("change keyup paste", function () {
        var emailLength = $(this).val().length;

        if (emailLength == 0)
            $(".send-button").hide();
        else
            $(".send-button").show();
    });
});