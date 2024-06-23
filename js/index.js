document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {

        const cardLink = card.querySelector('a');
        const projectId = card.getAttribute('data-project-id');

        cardLink.addEventListener('click', event => {

            if (event.target === cardLink) {
                event.preventDefault(); 

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
            }
        });
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const dropdownContainer = document.querySelector('.dropdown-container');

    burgerMenu.addEventListener('click', () => {
        dropdownContainer.classList.toggle('active');
    });
});



