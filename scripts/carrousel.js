//Sélection des flèches
const arrowleft = document.querySelector('.arrow_left');
const arrowright = document.querySelector('.arrow_right');

//ajout d'un eventlistener sur la flèches gauche

arrowleft.addEventListener('click', () => {
    console.log('flèche gauche cliquée');
});

//ajout d'un eventlistener sur la flèches droite

arrowright.addEventListener('click', () => {
    console.log('flèche droite cliquée');
});