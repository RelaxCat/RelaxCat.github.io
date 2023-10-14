function footerProject() {
    const featuredProjects = projects.filter(project => project.projectCategory && project.projectCategory.toLowerCase().includes('featured'));
    const recentProjects = featuredProjects.sort((a, b) => new Date(b.projectDate) - new Date(a.projectDate));
    const filteredProjects = recentProjects.slice(0, 3);

    const menuTemplate = (project) => `
    <a href="../html/project-detail.html?projectId=${project.projectId}" class="sub-menu project">${project.projectName}</a>
    `;

    const projectContainer = document.getElementById('footer-project');

    filteredProjects.forEach(project => {
        const projectMenu = document.createElement('project-filter');
        projectMenu.innerHTML = menuTemplate(project);
        projectContainer.appendChild(projectMenu);
    });

    const otherMenu = document.createElement('a');
    otherMenu.className = 'sub-menu project';
    otherMenu.href = '../html/project.html';
    otherMenu.innerText = 'Others...';
    projectContainer.appendChild(otherMenu);
}

footerProject();