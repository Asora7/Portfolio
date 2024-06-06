function addLinks() {
    
    const projectLinks = document.querySelector('.project-links');

    const linksData = [
        { text: 'GitHub Repo', url: 'https://github.com/Asora7/Semester-project-1.git' },
        { text: 'Live Site', url: 'https://asora7.github.io/Semester-project-1/' }
    ];

    linksData.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.text;
        anchor.classList.add('project-link');
        projectLinks.appendChild(anchor);
    });
}

window.onload = addLinks;