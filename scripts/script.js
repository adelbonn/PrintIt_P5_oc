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



//ajout des flèches dans la balise banner //
//ajout de arrowLeft
const arrowLeft = document.createElement('img');

arrowLeft.src = '../assets/images/arrow_left.png';
arrowLeft.classList.add('arrow', 'arrow_left');
const banner = document.getElementById('banner')
banner.appendChild(arrowLeft)


//ajout de arrowRight

const arrowRight = document.createElement('img');

arrowRight.src = "../assets/images/arrow_right.png";
arrowRight.classList.add("arrow", "arrow_right");
banner.appendChild(arrowRight);



//ajout des eventListener au clic sur les flèches + le console.log//

//ajout d'un eventlistener sur arrowLeft
arrowLeft.addEventListener('click', () => {
	console.log('flèche gauche cliquée')
})

//ajout d'un eventlistener sur arrowRight
arrowRight.addEventListener('click', () => {
	console.log('flèche droite cliquée')
})


//ajout des bullets points et des images dans le banner//
//ajout des bullets points

const bullets = document.querySelector('.dots') 
// creation des bullets points avec la boucle for et ajout de la classe dot
for(let i = 0; i < slides.length; i++) {  
	let dot = document.createElement('div');
	dot.classList.add('dot');                 

	bullets.appendChild(dot); 
}


//modifier le slide au clic sur les flèches

//initialisation des variables
let slideSelected = 0; 
let dotList = document.querySelectorAll('.dot');
dotList[0].classList.add('dot_selected'); 


//ajout des eventListener sur les flèches pour que lorsque l'utiliateur clik sur les flèches, le slide change
arrowRight.addEventListener('click', () => {
	nextSlide();
	updateBannerImage(slideSelected);
})

arrowLeft.addEventListener('click', () => {
	prevSlide();
	updateBannerImage(slideSelected);
})



//mise en place du défilement infini avec les conditions dans les fonctions nextSlide et prevSlide

function nextSlide() {
	dotList[slideSelected].classList.remove("dot_selected");
	slideSelected++;
	if (slideSelected >= slides.length) {
		slideSelected = 0;
	}
	dotList[slideSelected].classList.add("dot_selected")
}

//function pour afficher le slide précédent
function prevSlide () {
	dotList[slideSelected].classList.remove("dot_selected"); 
	slideSelected--;
	if (slideSelected < 0) {
		slideSelected = slides.length -1;
	}
	dotList[slideSelected].classList.add("dot_selected")
}

//function pour mettre à jour l'image du banner
function updateBannerImage(index) {
	const bannerImage = document.querySelector('.banner-img');
	bannerImage.src = "./assets/images/slideshow/" + slides[index].image;
	document.querySelector('#banner p').innerHTML = slides[index].tagLine;
}


