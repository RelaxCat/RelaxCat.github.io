document.addEventListener('DOMContentLoaded', function() {

  const skillCards = document.querySelectorAll('.skill-card');
  const softCards = document.querySelectorAll('.software-card');
  const profilePict = document.querySelectorAll('.profile-pict');
  const introTexts = document.querySelectorAll('.anim-home');
  const buttonHome = document.querySelectorAll('.button-link-home');
  const featureCards = document.querySelectorAll('.feature-body');
  const projectCards = document.querySelectorAll('.latest-list');
  const toolCards = document.querySelectorAll('.tools');
  const detailText = document.querySelectorAll('.left-detail');
  const downloadButton = document.querySelectorAll('.download-project');
  const textProject = document.querySelectorAll('.text-project');
  const imgGallery = document.querySelectorAll('.row.gallery');

  function addVisible(elements) {
      elements.forEach(element => {
          const elementRect = element.getBoundingClientRect();
          if (elementRect.top < window.innerHeight && elementRect.bottom >= 0) {
              element.classList.add('visible');
          }
      });
  }

  addVisible(skillCards);
  addVisible(softCards);
  addVisible(introTexts);
  addVisible(buttonHome);
  addVisible(profilePict);
  addVisible(featureCards);
  addVisible(projectCards);
  addVisible(toolCards);
  addVisible(detailText);
  addVisible(downloadButton);
  addVisible(textProject);
  addVisible(imgGallery);

  function checkScroll() {
      addVisible(skillCards);
      addVisible(softCards);
      addVisible(introTexts);
      addVisible(buttonHome);
      addVisible(profilePict);
      addVisible(featureCards);
      addVisible(projectCards);
      addVisible(toolCards);
      addVisible(detailText);
      addVisible(downloadButton);
      addVisible(textProject);
      addVisible(imgGallery);
  }

  window.addEventListener('scroll', checkScroll);
});
