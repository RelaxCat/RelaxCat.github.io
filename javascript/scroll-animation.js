document.addEventListener('DOMContentLoaded', function() {

  const skillCards = document.querySelectorAll('.skill-card');
  const softUpCards = document.querySelectorAll('.software-card.up');
  const softDownCards = document.querySelectorAll('.software-card.down');
  const profilePict = document.querySelectorAll('.profile-pict');
  const introTexts = document.querySelectorAll('.anim-home');
  const buttonHome = document.querySelectorAll('.button-link-home');
  const featureCards = document.querySelectorAll('.feature-body');
  const projectCards = document.querySelectorAll('.latest-list');

  function addVisible(elements) {
      elements.forEach(element => {
          const elementRect = element.getBoundingClientRect();
          if (elementRect.top < window.innerHeight && elementRect.bottom >= 0) {
              element.classList.add('visible');
          }
      });
  }

  addVisible(skillCards);
  addVisible(softUpCards);
  addVisible(softDownCards);
  addVisible(introTexts);
  addVisible(buttonHome);
  addVisible(profilePict);
  addVisible(featureCards);
  addVisible(projectCards);

  function checkScroll() {
      addVisible(skillCards);
      addVisible(softUpCards);
      addVisible(softDownCards);
      addVisible(introTexts);
      addVisible(buttonHome);
      addVisible(profilePict);
      addVisible(featureCards);
      addVisible(projectCards);
  }

  window.addEventListener('scroll', checkScroll);
});
