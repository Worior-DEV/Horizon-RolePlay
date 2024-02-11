$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#mainStage1').offset().top;
        var elementHeight = $('#mainStage1').outerHeight();

        // Sprawdź czy div jest w całości widoczny na ekranie
        var isFullyVisible = (elementOffset + elementHeight) <= (scrollTop + windowHeight) && elementOffset >= scrollTop;

        if (!scrolled && isFullyVisible) {
            $('#Stage1').addClass('visible');
            scrolled = true;
        } else if (!isFullyVisible) {
            // Jeśli div nie jest widoczny, usuń klasę 'visible'
            $('#Stage1').removeClass('visible');
            scrolled = false;
        }
    });
});


$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#mainStage2').offset().top;
        var elementHeight = $('#mainStage2').outerHeight();

        // Sprawdź czy div jest w całości widoczny na ekranie
        var isFullyVisible = (elementOffset + elementHeight) <= (scrollTop + windowHeight) && elementOffset >= scrollTop;

        if (!scrolled && isFullyVisible) {
            $('#Stage2').addClass('visible');
            scrolled = true;
        } else if (!isFullyVisible) {
            // Jeśli div nie jest widoczny, usuń klasę 'visible'
            $('#Stage2').removeClass('visible');
            scrolled = false;
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
        } else {
            // Jeśli div jest poza widokiem, usuń klasę 'visible'
            myDiv.classList.remove('visible');
        }
    });
});


$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#Stage4').offset().top;
        var elementHeight = $('#Stage4').outerHeight();

        // Sprawdź czy div jest w całości widoczny na ekranie
        var isFullyVisible = (elementOffset + elementHeight) <= (scrollTop + windowHeight) && elementOffset >= scrollTop;

        if (!scrolled && isFullyVisible) {
            $('#Stage4-2').addClass('visible');
            scrolled = true;
        } else if (!isFullyVisible) {
            // Jeśli div nie jest widoczny, usuń klasę 'visible'
            $('#Stage4-2').removeClass('visible');
            scrolled = false;
        }
    });
});


$(document).ready(function() {
    var scrolled = false;

    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#mainStage5').offset().top;
        var elementHeight = $('#mainStage5').outerHeight();

        // Sprawdź czy div jest w całości widoczny na ekranie
        var isFullyVisible = (elementOffset + elementHeight) <= (scrollTop + windowHeight) && elementOffset >= scrollTop;

        if (!scrolled && isFullyVisible) {
            $('#Stage5').addClass('visible');
            scrolled = true;
        } else if (!isFullyVisible) {
            // Jeśli div nie jest widoczny, usuń klasę 'visible'
            $('#Stage5').removeClass('visible');
            scrolled = false;
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
        } else {
            // Jeśli div jest poza widokiem, usuń klasę 'visible'
            myDiv.classList.remove('visible');
        }
    });
});




