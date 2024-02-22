// Texte à afficher de manière animée
const textToAnimate = "Connectez-vous avec notre expert ";


const animatedTextElement = document.getElementById("animated");


function animateText(text, index) {
   
    const partialText = text.substring(0, index);

    
    animatedTextElement.textContent = partialText;

    
    index++;

    
    if (index <= text.length) {
    
        setTimeout(function() {
            animateText(text, index);
        }, 100); 
    }
}


window.onload = function() {
    animateText(textToAnimate, 0);
};

// Fonction pour ajouter un nouvel élément au menu
function ajouterElementMenu() {
    var nomElement = document.getElementById("nouvel-element").value;
    var lienElement = document.getElementById("lien-element").value;
    
    // Vérifier si les champs ne sont pas vides
    if (nomElement && lienElement) {
        // Création d'un nouvel élément li
        var nouvelElement = document.createElement("li");

        // Création d'un nouvel élément a
        var nouvelLien = document.createElement("a");

        // Ajout du texte et du lien au nouvel élément a
        nouvelLien.textContent = nomElement;
        nouvelLien.setAttribute("href", lienElement);

        // Ajout de l'élément a au nouvel élément li
        nouvelElement.appendChild(nouvelLien);
        
        var menuItems = document.querySelector(".menu-items");
        menuItems.appendChild(nouvelElement);

        
        document.getElementById("nouvel-element").value = "";
        document.getElementById("lien-element").value = "";
    } else {
        alert("Veuillez remplir tous les champs pour ajouter un élément au menu.");
    }
}

function supprimerDernierElementMenu() {
    var menuItems = document.querySelector(".menu-items");
    var dernierElement = menuItems.lastElementChild;
    menuItems.removeChild(dernierElement);
}

