function latestProjectList() {
    const sortedProjects = projects.filter(project => project.projectDate && project.projectId).sort((a, b) => new Date(b.projectDate) - new Date(a.projectDate));

    const latestProjects = sortedProjects.slice(0, 3);

    const latestCardTemplate = `
    <div class="latest-card" data-project-id="{{projectId}}">
        <img src="{{projectImage}}" class="latest-image project">
        <h6 class="latest-title">{{projectName}}</h6>
        <div class="type-latest-container"></div>
        <div class="latest-desc">{{projectDescription}}</div>
    </div>
    `;

    const latestContainer = document.getElementById("latest-container");

    latestProjects.forEach(project => {

        const categories = project.projectCategory.split(', ');

        const cardHTML = latestCardTemplate
            .replace("{{projectId}}", project.projectId)
            .replace("{{projectImage}}", project.projectImage.split(', ')[0])
            .replace("{{projectName}}", project.projectName)
            .replace("{{projectDescription}}", project.projectDescription);

        const latestCard = document.createElement("div");
        latestCard.className = "latest-card";
        latestCard.innerHTML = cardHTML;

        const typeLatestContainer = latestCard.querySelector(".type-latest-container");
        categories.forEach(category => {

            if (category.toLowerCase() !== 'featured') {
                const typeLatest = document.createElement("p");
                typeLatest.className = "type-latest";
                typeLatest.textContent = category;
                typeLatestContainer.appendChild(typeLatest);
            }
        });

        latestCard.addEventListener("click", function() {

            const projectId = project.projectId;

            window.location.href = `../html/project-detail.html?projectId=${projectId}`;
        });

        latestContainer.appendChild(latestCard);
    });
}

function projectList() {

    var projectCardTemplate = `
    <div class="latest-card project" data-project-id="{{projectId}}">
        <img src="{{projectImage}}" class="latest-image project">
        <h6 class="latest-title">{{projectName}}</h6>
        <div class="type-project-container"></div>
        <div class="project-desc">{{projectType}}</div>
    </div>
    `;

    const projectContainer = document.getElementById("project-container");
    
    const typeFilter = document.querySelector(".type-filter");
    const dateFilter = document.querySelector(".date-filter");

    function updateProjectCards() {

        const selectedType = typeFilter.value.toLowerCase();
        const selectedDate = dateFilter.value.toLowerCase();

        projectContainer.innerHTML = "";

        const filteredProjects = projects
        .filter(project => {
            const projectTypes = project.projectCategory.split(', ').map(type => type.trim().toLowerCase());
            const typeMatch = selectedType === "all" || projectTypes.includes(selectedType);
            return typeMatch;
        })
        .sort((a, b) => {
            const dateA = new Date(a.projectDate);
            const dateB = new Date(b.projectDate);
            return selectedDate === "oldest" ? dateA - dateB : dateB - dateA;
        });


        filteredProjects.forEach(project => {
            if(project.projectId) {
                const categories = project.projectCategory.split(', ');

                const cardHTML = projectCardTemplate
                    .replace("{{projectId}}", project.projectId)
                    .replace("{{projectImage}}", project.projectImage.split(', ')[0])
                    .replace("{{projectName}}", project.projectName)
                    .replace("{{projectType}}", project.projectType);

                const projectCard = document.createElement("div");
                projectCard.className = "latest-card";
                projectCard.innerHTML = cardHTML;

                const typeProjectContainer = projectCard.querySelector(".type-project-container");
                categories.forEach(category => {

                    if (category.toLowerCase() !== 'featured') {
                        const typeProject = document.createElement("p");
                        typeProject.className = "type-project";
                        typeProject.textContent = category;
                        typeProjectContainer.appendChild(typeProject);
                    }
                });

                projectCard.addEventListener("click", function() {

                    const projectId = project.projectId;

                    window.location.href = `../html/project-detail.html?projectId=${projectId}`;
                });

                projectContainer.appendChild(projectCard);
                }
        });
    }

    typeFilter.addEventListener("change", updateProjectCards);
    dateFilter.addEventListener("change", updateProjectCards);
    
    updateProjectCards();
}

document.addEventListener("DOMContentLoaded", function() {
    populateDetail();
});

latestProjectList();
projectList();