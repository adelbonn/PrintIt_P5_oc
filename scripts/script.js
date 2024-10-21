 const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//vérifie que le html est cahrgé avant d'executer le code qui suit
document.addEventListener('DOMContentLoaded', () => {

//ajout des flèches dans la balise banner

//déclaration de la variable arrowLeft
const arrowLeft = document.createElement('img');

//definit le chemin de arrowLeft
arrowLeft.src = '../assets/images/arrow_left.png';

//ajout des classes arrow et arrow_left à arrowLeft
arrowLeft.classList.add('arrow', 'arrow_left');

 //sélection de l'élément banner + ajout de arrowLeft
const banner = document.getElementById('banner')
if (banner) {
	banner.appendChild(arrowLeft)
}
 

//ajout de arrowRight

//déclaration de la variables arrow_right
const arrowRight = document.createElement('img');
////définir le chemin vers mon image
arrowRight.src = "../assets/images/arrow_right.png";
//ajout des class arrow et arrow_right à arrowRight
arrowRight.classList.add("arrow", "arrow_right");
//ajout de l'enfant arrowRight à lélément div banner
banner.appendChild(arrowRight);

//ajout des eventLiteer au clic sur les flèches

//ajout d'un eventlistener sur la flèche gauche
arrowLeft.addEventListener('click', () => {
	console.log('flèche gauche cliquée')
})

//ajout d'un eventlistener sur la flèche droite
arrowRight.addEventListener('click', () => {
	console.log('flèche droite cliquée')
})








})