// Add functionality for all buttons using event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get all Register buttons
    const registerButtons = document.querySelectorAll('.btn-register');
    const rulebookButtons = document.querySelectorAll('.btn-rulebook');

    // Google Form URLs for each event
    const googleFormLinks = {
        "Robo-Race": "https://forms.gle/roborace-form-link",
        "Treasure Hunt": "https://forms.gle/treasurehunt-form-link",
        "BGMI": "https://forms.gle/bgmi-form-link",
        "Side-Football": "https://forms.gle/sidefootball-form-link"
    };

    // Rulebook URLs for each event
    const rulebookLinks = {
        "Robo-Race": "rulebook/roborace.pdf",
        "Treasure Hunt": "rulebook/treasurehunt.pdf",
        "BGMI": "rulebook/bgmi.pdf",
        "Side-Football": "rulebook/sidefootball.pdf"
    };

    // Loop through all register buttons and add functionality
    registerButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const eventName = this.getAttribute('data-event');
            if (googleFormLinks[eventName]) {
                window.open(googleFormLinks[eventName], '_blank');
            } else {
                alert("Registration link not available for this event.");
            }
        });
    });

    // Loop through all rulebook buttons and add functionality
    rulebookButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const eventName = this.getAttribute('data-event');
            if (rulebookLinks[eventName]) {
                window.open(rulebookLinks[eventName], '_blank');
            } else {
                alert("Rulebook not available for this event.");
            }
        });
    });
});
