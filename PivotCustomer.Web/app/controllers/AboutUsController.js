app.controller('AboutUsController', function ($rootScope, $scope, $state, $window, $timeout) {
    $(window).scrollTop(0);

    var CarlaString,
        JudithString,
        SharonString,
        DorothyString,
        RaymondString,
        JodiString,
        DanielleString,
        NancyString,
        NicholasString,
        MaxineString,
        JaniceString = "";

    $('#toggleAdvisors').click(function () {
        $('.advisors-box').slideToggle();

        $(this).toggleClass('opened');

        if ($(this).hasClass('opened')) {
            $(this).text("Close Section");
            $('#closeAdvisors').fadeIn();
        }
        else {
            $(this).text("View Advisors");
            $('#closeAdvisors').hide();
        }
    });

    $('#closeAdvisors').click(function () {
        $('#toggleAdvisors').trigger('click');
    });

    for (i = 1; i <= $('.advisor').length; i++) {
        var string = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();

        switch (i) {
            case 1:
                CarlaString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 2:
                JudithString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 3:
                SharonString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 4:
                DorothyString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 5:
                RaymondString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 6:
                JodiString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 7:
                DanielleString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 8:
                NancyString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 9:
                NicholasString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 10:
                MaxineString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
            case 11:
                JaniceString = $('.advisor:nth-child(' + i + ') .text p:first-of-type').text();
                break;
        }

        if (string.length > 230)
            $('.advisor:nth-child(' + i + ') .text p:first-of-type').text(string.substring(0, 230) + '...');
        else
            $('.advisor:nth-child(' + i + ') .text p:first-of-type').text(string);
    }

    $('.read-more').click(function () {
        $(this).parent().parent().parent().find('.close').show();
        $(this).hide();

        var childNum = $(this).parent().parent().parent().index() + 1;

        switch (childNum) {
            case 1:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(CarlaString);
                break;
            case 2:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(JudithString);
                break;
            case 3:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(SharonString);
                break;
            case 4:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(DorothyString);
                break;
            case 5:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(RaymondString);
                break;
            case 6:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(JodiString);
                break;
            case 7:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(DanielleString);
                break;
            case 8:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(NancyString);
                break;
            case 9:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(NicholasString);
                break;
            case 10:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(MaxineString);
                break;
            case 11:
                $('.advisor:nth-child(' + childNum + ') .text p:first-of-type').text(JaniceString);
                break;
        }

        var el = $(this).parent(),
            curHeight = el.height(),
            autoHeight = el.css('height', 'auto').height();

        el.height(curHeight).animate({ height: autoHeight }, 1000);
    });

    $('.close').click(function () {
        $(this).hide();


    });
});