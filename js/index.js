document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const githubLink = card.querySelector('.links a');

        githubLink.addEventListener('click', event => {
            event.preventDefault();
            const githubUrl = githubLink.getAttribute('href');
            window.open(githubUrl, '_blank');
        });

        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            switch (projectId) {
                case '1':
                    window.location.href = 'cards/museum.html';
                    break;
                case '2':
                    window.location.href = 'cards/rainydays.html';
                    break;
                case '3':
                    window.location.href = 'cards/dough.html';
                    break;
                default:
                    console.error('Invalid project ID');
            }
        });
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const dropdownContainer = document.querySelector('.dropdown-container');

    burgerMenu.addEventListener('click', () => {
        dropdownContainer.classList.toggle('active');
    });
});


