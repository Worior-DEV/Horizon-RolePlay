$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        if (!scrolled) {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementOffset = $('#mainStage1').offset().top;

            if (scrollTop + windowHeight >= elementOffset) {
                $('#Stage1').addClass('visible');
                scrolled = true;
            }
        }
    });
});

$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        if (!scrolled) {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementOffset = $('#mainStage2').offset().top;

            if (scrollTop + windowHeight >= elementOffset) {
                $('#Stage2').addClass('visible');
                scrolled = true;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.getElementById('Stage3');

    window.addEventListener('scroll', function() {
        var divPosition = myDiv.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        // Jeśli górna krawędź diva jest widoczna na ekranie, dodaj klasę 'visible'
        if (divPosition < screenHeight) {
            myDiv.classList.add('visible');
        }
    });
});

$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        if (!scrolled) {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementOffset = $('#Stage4').offset().top;

            if (scrollTop + windowHeight >= elementOffset) {
                $('#Stage4-2').addClass('visible');
                scrolled = true;
            }
        }
    });
});

$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        if (!scrolled) {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var elementOffset = $('#mainStage5').offset().top;

            if (scrollTop + windowHeight >= elementOffset) {
                $('#Stage5').addClass('visible');
                scrolled = true;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.getElementById('StageJoinIn');

    window.addEventListener('scroll', function() {
        var divPosition = myDiv.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        // Jeśli górna krawędź diva jest widoczna na ekranie, dodaj klasę 'visible'
        if (divPosition < screenHeight) {
            myDiv.classList.add('visible');
        }
    });
});




