app.directive('setHeight', function () {
    return function (scope, element, attrs) {
        element.height($(window).height() - $(window).height() * 0.2);
        $(window).resize(function () {
            element.height($(window).height() - $(window).height() * 0.2);
        });
    }
});