// Récupérer l'élément de l'image de la spirale
const spiral = document.getElementById("spiral");

// Ajouter la classe CSS "wave" à l'élément de l'image de la spirale
spiral.classList.add("wave");

// Ajouter l'animation CSS3 à la classe "wave" pour faire onduler l'image
spiral.style.animation = "wave 2s ease-in-out infinite";

// Ajouter les styles CSS3 pour faire tourner l'image de la spirale
spiral.style.transformOrigin = "center";
spiral.style.transform = "rotate(0deg)";
