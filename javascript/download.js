function downloadProject() {
    const downloadButton = document.getElementById('download-button');
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectId');
    const projectData = projects.find(project => project.projectId === projectId);

    if (projectData) {
        downloadButton.addEventListener('click', function() {
            window.location.href = projectData.downloadLink;
        });
    }
}