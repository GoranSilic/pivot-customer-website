app.controller('HowItWorksController', function ($rootScope, $scope, $state, $window, $timeout) {
    $('.approach .bxslider').bxSlider({
        auto: true
    });

    var stage = 0;

    $('.move.left').click(function () {
        stage--;
        $('.stage').hide();
        $('.bar').css('height', '0');
        $('.dot').removeClass('active');
        $('.move.right').show();

        switch (stage) {
            case 0:
                $('.stage.title').fadeIn();
                $('.stages').animate({ backgroundColor: '#00b087' }, 'slow');
                $(this).hide();

                break;
            case 1:
                $('.stage.explore').fadeIn();
                $('.stages').animate({ backgroundColor: '#08897c' }, 'slow');
                $('.stages').css('background-color', '#08897c');
                $('.dot.explore').addClass('active');

                break;
            case 2:
                $('.stage.build').fadeIn();
                $('.bar.build').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#0f616f' }, 'slow');
                $('.dot.build').addClass('active');

                break;
            case 3:
                $('.stage.mobilize').fadeIn();
                $('.bar.mobilize').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#173963' }, 'slow');
                $('.dot.mobilize').addClass('active');

                break;
            case 4:
                $('.stage.quit').fadeIn();
                $('.bar.quit').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#2d2659' }, 'slow');
                $('.dot.quit').addClass('active');

                break;
            case 5:
                $('.stage.secure').fadeIn();
                $('.bar.secure').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#44134f' }, 'slow');
                $('.dot.secure').addClass('active');

                break;
            case 6:
                $('.stage.sustain').fadeIn();
                $('.bar.sustain').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#5a0045' }, 'slow');
                $('.dot.sustain').addClass('active');

                break;
            default:

        }
    });

    $('.move.right').click(function () {
        stage++;
        $('.stage').hide();
        $('.bar').css('height', '0');
        $('.dot').removeClass('active');
        $('.move.left').show();

        switch (stage) {
            case 0:
                $('.stage.title').fadeIn();
                $('.stages').animate({ backgroundColor: '#00b087' }, 'slow');

                break;
            case 1:
                $('.stage.explore').fadeIn();
                $('.bar.explore').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#08897c' }, 'slow');
                $('.dot.explore').addClass('active');

                break;
            case 2:
                $('.stage.build').fadeIn();
                $('.bar.build').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#0f616f' }, 'slow');
                $('.dot.build').addClass('active');

                break;
            case 3:
                $('.stage.mobilize').fadeIn();
                $('.bar.mobilize').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#173963' }, 'slow');
                $('.dot.mobilize').addClass('active');

                break;
            case 4:
                $('.stage.quit').fadeIn();
                $('.bar.quit').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#2d2659' }, 'slow');
                $('.dot.quit').addClass('active');

                break;
            case 5:
                $('.stage.secure').fadeIn();
                $('.bar.secure').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#44134f' }, 'slow');
                $('.dot.secure').addClass('active');

                break;
            case 6:
                $('.stage.sustain').fadeIn();
                $('.bar.sustain').animate({ height: 60 }, 300);
                $('.stages').animate({ backgroundColor: '#5a0045' }, 'slow');
                $('.dot.sustain').addClass('active');
                $(this).hide();

                break;
            default:

        }
    });

    $('.dot').click(function () {
        $('.stage').hide();
        $('.bar').css('height', '0');
        $('.dot').removeClass('active');
        $('.move').show();

        if ($(this).hasClass('explore')) {
            stage = 1;
            $('.stage.explore').fadeIn();
            $('.bar.explore').animate({ height: 60 }, 300);
            $('.stages').animate({ backgroundColor: '#08897c' }, 'slow');
            $('.dot.explore').addClass('active');
        }
        else if ($(this).hasClass('build')) {
            stage = 2;
            $('.stage.build').fadeIn();
            $('.bar.build').animate({ height: 60 }, 300);
            $('.stages').animate({ backgroundColor: '#0f616f' }, 'slow');
            $('.dot.build').addClass('active');
        }
        else if ($(this).hasClass('mobilize')) {
            stage = 3;
            $('.stage.mobilize').fadeIn();
            $('.bar.mobilize').animate({ height: 60 }, 300);
            $('.stages').animate({ backgroundColor: '#173963' }, 'slow');
            $('.dot.mobilize').addClass('active');
        }
        else if ($(this).hasClass('quit')) {
            stage = 4;
            $('.stage.quit').fadeIn();
            $('.bar.quit').animate({ height: 60 }, 300);
            $('.stages').animate({ backgroundColor: '#2d2659' }, 'slow');
            $('.dot.quit').addClass('active');
        }
        else if ($(this).hasClass('secure')) {
            stage = 5;
            $('.stage.secure').fadeIn();
            $('.bar.secure').animate({ height: 60 }, 300);
            $('.stages').animate({ backgroundColor: '#44134f' }, 'slow');
            $('.dot.secure').addClass('active');
        }
        else if ($(this).hasClass('sustain')) {
            stage = 6;
            $('.stage.sustain').fadeIn();
            $('.bar.sustain').animate({ height: 60 }, 300);
            $('.stages').animate({ backgroundColor: '#5a0045' }, 'slow');
            $('.dot.sustain').addClass('active');
            $('.move.right').hide();
        }
    });
});