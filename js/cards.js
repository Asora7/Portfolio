function addLinks() {
    const projectLinks = document.querySelector('.project-links');
    
    const linksData = {
        'oslo-science-museum': [
            { text: 'GitHub Repo', url: 'https://github.com/Asora7/Semester-project-1.git' },
            { text: 'Live Site', url: 'https://asora7.github.io/Semester-project-1/' }
        ],
        'rainydays': [
            { text: 'GitHub Repo', url: 'https://github.com/Asora7/rainydays.git' },
            { text: 'Live Site', url: 'https://asora7.github.io/rainydays/' }
        ],
        'dough-dreams': [
            { text: 'Github Repo', url: 'https://github.com/NoroffFEU/FED1-PE1-Asora7.git'},
            { text: 'Live Site', url: 'https://norofffeu.github.io/FED1-PE1-Asora7/'}
        ]
    };
    
    const pageId = document.querySelector('main').id;
    const currentLinks = linksData[pageId] || [];
    
    currentLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        anchor.classList.add('project-link');
        projectLinks.appendChild(anchor);
    });
}

window.onload = addLinks;
