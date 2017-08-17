app.directive('setHeight', function () {
    return function (scope, element, attrs) {
        element.height($(window).height() - 300);
        $(window).resize(function () {
            element.height($(window).height() - 300);
        });
    }
});