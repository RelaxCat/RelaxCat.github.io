function downloadProject() {
    const downloadButton = document.getElementById('download-button');
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectId');
    const projectData = projects.find(project => project.projectId === projectId);

    if (projectData.downloadButton) {
        downloadButton.addEventListener('click', function() {
            window.location.href = projectData.downloadLink;
        });
    } else{
        const button = document.getElementById('download-button');
        button.style.display = 'none';
    }
}