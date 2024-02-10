// Skrypt do dodawania ogłoszeń
document.addEventListener("DOMContentLoaded", function() {
    const addAdForm = document.getElementById("addAdForm");

    addAdForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Pobierz wartości z formularza
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const expirationDate = document.getElementById("expirationDate").value;

        // Stwórz nowy element ogłoszenia
        const newAd = {
            title: title,
            description: description,
            expirationDate: expirationDate
        };

        // Dodaj ogłoszenie do lokalnej bazy danych (np. tablicy)
        // Tutaj możesz zaimplementować logikę dodawania do bazy danych w pliku

        // Wyświetl nowe ogłoszenie na stronie
        displayAd(newAd);

        // Wyczyść formularz
        addAdForm.reset();
    });

    // Funkcja do wyświetlania ogłoszenia na stronie
    function displayAd(ad) {
        // Znajdź elementy HTML dla tytułu i opisu ogłoszenia
        const titleElement = document.querySelector("#mainAnnouncment .messageAnnouncment h2");
        const descriptionElement = document.querySelector("#mainAnnouncment .messageAnnouncment p");

        // Wstaw tekst ogłoszenia do odpowiednich elementów HTML
        titleElement.textContent = ad.title;
        descriptionElement.textContent = ad.description;
    }
});
