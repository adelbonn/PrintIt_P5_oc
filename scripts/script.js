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
//définir le chemin vers mon image
arrowRight.src = "../assets/images/arrow_right.png";
//ajout des class arrow et arrow_right à arrowRight
arrowRight.classList.add("arrow", "arrow_right");
//ajout de l'enfant arrowRight à lélément div banner dans le DOM
banner.appendChild(arrowRight);



//ajout des eventListener au clic sur les flèches + le console.log

//ajout d'un eventlistener sur arrowLeft
arrowLeft.addEventListener('click', () => {
	console.log('flèche gauche cliquée')
})

//ajout d'un eventlistener sur arrowRight
arrowRight.addEventListener('click', () => {
	console.log('flèche droite cliquée')
})



//ajout des bullets points

//sélection du container des bullets points
const bullets = document.querySelector('.dots') //sélectionne le container des bullets points

for(let i = 0; i < slides.length; i++) {  //boucle pour ajouter les bullets points
	let dot = document.createElement('div'); //crée un élément div
	dot.classList.add('dot');                 //ajoute la classe dot à l'élément div
	if(i === 0) {                           // si i est égal à 0
		dot.classList.add('dot_selected');     //ajoute la classe dot_selected à l'élément div
	}
	bullets.appendChild(dot);  //ajoute l'élément div dans le container des bullets points
}

