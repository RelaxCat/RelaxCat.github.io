function populateDetail () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectId');

    const projectData = projects.find(project => project.projectId === projectId);

    if (projectData) {
        const projectTitle = document.querySelector(".project-title");
        const mainTypeContainer = document.querySelector(".type-main-container");
        const projectDate = document.querySelector(".side-ans");
        const projectGitLink = document.getElementById('git-link');
        const projectImage = document.querySelector(".detail-img");
        const projectIntroduction = document.getElementById('introduction-text');
        const projectBackground = document.getElementById('background-text');
        const projectSummary = document.getElementById('summary-text');
        const projectWebsiteLink = document.getElementById('website-link');
        const projectPrototypeFrame = document.querySelector(".figma-frame");
        const projectPrototypeLink = document.getElementById('figma-link');
        const imageContainer = document.querySelector('.gallery');

        document.title = projectData.projectName;

        projectTitle.innerHTML = projectData.projectName;
        projectDate.textContent = projectData.projectDate;
        projectImage.src = projectData.projectImage;
        projectIntroduction.innerHTML = projectData.projectIntroduction;
        projectBackground.innerHTML = projectData.projectBackground;
        projectSummary.innerHTML = projectData.projectSummary;

        mainTypeContainer.innerHTML = "";
        imageContainer.innerHTML = '';

        const imageSource = projectData.projectImage.split(', ');

        const defaultImage = projectData.projectImage.split(', ')[0];
        projectImage.src = defaultImage;

        let isFirstImageActive = false;

        imageSource.forEach(imageUrl => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'col img-container';

            const img = document.createElement('img');
            img.src = imageUrl.trim();
            img.className = 'img-gallery';

            const overlay = document.createElement('div');
            overlay.className = 'overlay-gallery';

            imgContainer.appendChild(img);
            imgContainer.appendChild(overlay);
            imageContainer.appendChild(imgContainer);

            if (!isFirstImageActive) {
                activeImage(img);
                isFirstImageActive = true;
            }

            img.addEventListener('click', function () {
                activeImage(img);
            });
        });
        

        const categories = projectData.projectCategory.split(', ');
        categories.forEach(category => {
            if (category.toLowerCase().trim() !== 'featured') {
                const typeProject = document.createElement("p");
                typeProject.className = "type-project";
                typeProject.textContent = category.trim();
                mainTypeContainer.appendChild(typeProject);
            }
        });

        if(projectData.projectLink) {
            projectGitLink.textContent = projectData.projectLink;
        } else {
            const gitSection = document.getElementById('git-section');
            gitSection.style.display = "none";
        }

        if(projectData.projectWebsite){
            projectWebsiteLink.href = projectData.projectWebsite;
        } else {
            const webSection = document.getElementById('website-section');
            webSection.style.display = "none";
        }

        if (projectData.projectPrototype) {
            projectPrototypeFrame.src = projectData.projectPrototype;
            projectPrototypeLink.href = projectData.projectProtoLink;
        } else {
            const prototypeSection = document.getElementById('prototype-section');
            prototypeSection.style.display = "none";
        }
        
        const toolsContainer = document.querySelector(".tools");
        if (projectData.projectTool) {
            const projectTools = projectData.projectTool.split(', ');
            projectTools.forEach(projectToolName => {
                const toolData = tools.find(tool => tool.toolName.toLowerCase() === projectToolName.toLowerCase().trim());
        
                if (toolData) {
                    const toolCard = document.createElement("div");
                    toolCard.className = "tool-card";
        
                    const toolIcon = document.createElement("img");
                    toolIcon.src = toolData.toolImage;
                    toolIcon.className = "tool-icon";
        
                    toolCard.appendChild(toolIcon);
                    toolsContainer.appendChild(toolCard);
                }
            });
        }       
    }

    downloadProject();
}

function activeImage(img) {

    var expandImg = document.getElementById("display-img");
    var imgContainers = document.querySelectorAll(".img-container");

    imgContainers[0].classList.add("active");

    expandImg.src = img.src;

    imgContainers.forEach(function(container) {
        container.classList.remove("active");
    });

    img.parentElement.classList.add("active");
}