const projectCards = document.querySelectorAll('.project-card');

// Add click event listener to each card
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the project ID from the data attribute
        const projectId = card.getAttribute('data-project-id');
        // Redirect to the corresponding detail page
        switch (projectId) {
            case '1':
                window.location.href = `cards/museum.html`;
                break;
            case '2':
                window.location.href = `cards/rainydays.html`;
                break;
            case '3':
                window.location.href = `cards/dough.html`;
                break;
            default:
                console.error('Invalid project ID');
        }
    });
});
