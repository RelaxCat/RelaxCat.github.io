function featuredProjectList() {
    const featuredProjects = projects.filter(project => project.projectCategory && project.projectCategory.toLowerCase().includes('featured'));
    const sliceProjects = featuredProjects.slice(0, 3);

    const featureCardTemplate = `
      <div class="feature-card" data-project-id="{{projectId}}">
        <img src="{{projectImage}}" class="feature-image">
        <h6 class="feature-title">{{projectName}}</h6>
        <div class="type-feature-container"></div>
        <div class="feature-desc">{{projectDescription}}</div>
      </div>
    `;

    const featureContainer = document.getElementById("feature-container");

    sliceProjects.forEach(project => {

        const categories = project.projectCategory.split(', ');

        const cardHTML = featureCardTemplate
            .replace("{{projectId}}", project.projectId)
            .replace("{{projectImage}}", project.projectImage.split(', ')[0])
            .replace("{{projectName}}", project.projectName)
            .replace("{{projectDescription}}", project.projectDescription);

        const featureCard = document.createElement("div");
        featureCard.className = "feature-card";
        featureCard.innerHTML = cardHTML;

        const typeFeatureContainer = featureCard.querySelector(".type-feature-container");
        categories.forEach(category => {

            if (category.toLowerCase().trim() !== 'featured') {
                const typeFeature = document.createElement("p");
                typeFeature.className = "type-feature";
                typeFeature.textContent = category.trim();
                typeFeatureContainer.appendChild(typeFeature);
            }
        });

        featureCard.addEventListener("click", function() {

            const projectId = project.projectId;

            window.location.href = `../html/project-detail.html?projectId=${projectId}`;
        });

        featureContainer.appendChild(featureCard);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateDetail();
});

featuredProjectList();