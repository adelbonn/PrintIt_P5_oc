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
//9 ajout de l'enfant arrowLeft à l'élément div banner dans le DOM
banner.appendChild(arrowLeft)

 

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
// creation des bullets points
for(let i = 0; i < slides.length; i++) {  //boucle pour ajouter les bullets points (expliquer cette boucle dans la présentation)
	let dot = document.createElement('div'); //crée un élément div
	dot.classList.add('dot');                 //ajoute la classe dot à l'élément div
	// if(i === 0) {                           // si i est strictement égal à 0
	// 	dot.classList.add('dot_selected');     //ajoute la classe dot_selected à l'élément div
	// }
	bullets.appendChild(dot);  //ajoute l'élément dot en tant qu'enfant de dots ( le container des bullets points)
}


//modifier le slide au clic sur les flèches

//initialisation des variables
let slideSelected = 0; 
let dotList = document.querySelectorAll('.dot');
dotList[0].classList.add('dot_selected'); 



//utilisation d'une fonction par action désirée

//fonction pour afficher le slide suivant

// function nextSlide() {
// 	if(slideSelected < slides.length - 1) { //si le slide sélectionné est inférieur à la longueur du tableau slides - 1(le moins indique le dernier élement du tableau)
// 		slideSelected++; //alors on incrémente le slide sélectionné
// 	} else {
// 		slideSelected = 0; //sinon on revient au premier slide
// 	}
//  	console.log('slide sélectionné', slideSelected); 
//  }

function nextSlide() {
	//console.log('slide suivant');
	dotList[slideSelected].classList.remove("dot_selected");
	slideSelected++;
	if (slideSelected >= slides.length) {
		slideSelected = 0;
	}
	dotList[slideSelected].classList.add("dot_selected")
}

//function pour afficher le slide précédent
function prevSlide () {
	//console.log('slide précédent');
	dotList[slideSelected].classList.remove("dot_selected"); 
	slideSelected--;
	if (slideSelected < 0) {
		slideSelected = slides.length -1;
	}
}

//function pour mettre à jour l'image du banner
function updateBannerImage(index) {
	const bannerImage = document.querySelector('.banner-img');
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
	document.querySelector('#banner p').innerHTML = slides[index].tagLine;
}

//ajout des eventListener sur les flèches pour faire tourner le carrousel
arrowRight.addEventListener('click', () => {
	nextSlide();
	updateBannerImage(slideSelected);
})

arrowLeft.addEventListener('click', () => {
	prevSlide();
	updateBannerImage(slideSelected);
})