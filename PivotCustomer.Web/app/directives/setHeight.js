app.directive('setHeight', function () {
    return function (scope, element, attrs) {
        if ($(window).width() < 767) {
            element.height($(window).height());
            $(window).resize(function () {
                element.height($(window).height());
            });
        }
        else {
            element.height($(window).height() - $(window).height() * 0.2);
            $(window).resize(function () {
                element.height($(window).height() - $(window).height() * 0.2);
            });
        }
    }
});