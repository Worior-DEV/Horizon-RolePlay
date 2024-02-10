$(document).ready(function() {
    var navHeight = $('#navigationA').outerHeight(); // Wysokość menu nawigacyjnego
    var threshold = 112; // Próg, odległość od górnej krawędzi ekranu w pikselach
    var isNavVisible = false; // Zmienna do śledzenia widoczności menu nawigacyjnego
    var offset = 80; // Odległość od góry strony, od której nawigacja ma pozostać widoczna

    $(window).on('scroll mousemove', function(event) {
        var mouseY = event.clientY; // Pobierz pozycję Y kursora myszy
        var scrollTop = $(window).scrollTop(); // Pobierz położenie przewijania strony

        // Sprawdź, czy użytkownik znajduje się powyżej ustalonego progu offset
        if (scrollTop < offset) {
            // Wyświetl menu nawigacyjne, jeśli jeszcze nie jest widoczne
            if (!isNavVisible) {
                $('#navigationA').stop().slideDown();
                isNavVisible = true;
            }
        } else {
            // Sprawdź, czy pozycja Y kursora myszy jest mniejsza niż próg
            if (mouseY < threshold) {
                // Jeśli menu nawigacyjne jest już widoczne, nie wykonuj żadnej akcji
                if (!isNavVisible) {
                    // Wyświetl menu nawigacyjne z efektem animacji
                    $('#navigationA').stop().slideDown();
                    isNavVisible = true; // Oznacz, że menu nawigacyjne jest widoczne
                }
            } else {
                // Jeśli menu nawigacyjne jest już ukryte, nie wykonuj żadnej akcji
                if (isNavVisible) {
                    // Ukryj menu nawigacyjne z efektem animacji
                    $('#navigationA').stop().slideUp();
                    isNavVisible = false; // Oznacz, że menu nawigacyjne jest ukryte
                }
            }
        }
    });
});
