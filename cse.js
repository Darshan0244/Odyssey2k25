document.addEventListener('DOMContentLoaded', () => {
    const backArrow = document.querySelector('.back-arrow');
    
    backArrow.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents default anchor behavior
        window.history.back();  // Takes the user to the previous page in history
    });
});


document.addEventListener('DOMContentLoaded', () => {

    const googleFormURL = "https://forms.gle/HXwVxJxx2PPfje7N9"; // Replace with your actual Google Form link

    function handleRegister(eventName) {
        alert(`Redirecting to registration form for ${eventName}.`);
        window.location.href = googleFormURL; // Redirects to the Google Form
    }

    function handleRulebook(eventName) {
        alert(`Opening rulebook for ${eventName}.`);
        window.location.href = "rulebook.html"; // Redirects to the local rulebook page
    }

    // Attach the functions to global window object to make them accessible from HTML
    window.handleRegister = handleRegister;
    window.handleRulebook = handleRulebook;
});

