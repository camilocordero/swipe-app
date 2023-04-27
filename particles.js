window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#ffffff', // El color de las partículas en formato hexadecimal
      connectParticles: true // Conecta las partículas entre sí
    });
  };
let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");
const handlelikeclick = () => {

  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector('[data-index="${activeIndex}"]'), 
  nextGroup = document.querySelector('[data-index="${nextIndex}"]');


  currentGroup.dataset.status ="after";

  nextGroup.dataset.status ="active";

  activeIndex = nextIndex; 
}