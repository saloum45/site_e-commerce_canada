// on selection tous les boutons avec la class supprimer
const boutonsSupprimer = document.querySelectorAll('.supprimer');
boutonsSupprimer.forEach(bouton => {
    bouton.addEventListener('click', function() {
        const elementPanier = bouton.parentElement;
        elementPanier.remove();
      });
    });
    Ce script JavaScript sélectionne tous les boutons avec la classe "supprimer" et ajoute un gestionnaire d'événement de clic à chacun. Lorsque l'un des boutons est cliqué, l'élément parent correspondant (le <li>) est supprimé du DOM, ce qui équivaut à supprimer l'élément du panier.
    
    Assurez-vous d'inclure ce script dans votre page HTML pour que cela fonctionne correctement.
    
    
    
    
    
    