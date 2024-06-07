const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {

        const projectId = card.getAttribute('data-project-id');

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
