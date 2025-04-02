document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.description-container');
        container.classList.toggle('expanded');
        button.textContent = container.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
});
