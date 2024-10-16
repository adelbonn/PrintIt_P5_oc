//Sélection des flèches arrow_left et arrow_right
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');

//ajout d'un eventlistener sur la flèche gauche

arrowleft.addEventListener('click', () => {
    console.log('flèche gauche cliquée');
    alert('flèche gauche cliquée');
});

//ajout d'un eventlistener sur la flèche droite

arrowright.addEventListener('click', () => {
    console.log('flèche droite cliquée');
    alert('flèche droite cliquée');
});