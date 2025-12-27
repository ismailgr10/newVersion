//
function navigateToProduct(productId) {
  window.location.href = `productDetails.html?product=${productId}`;
}

// Afficher la section catalogue quand on clique sur "View more product"
document.getElementById("viewMoreBtn").addEventListener("click", function () {
  const catalogSection = document.getElementById("catalogSection");
  catalogSection.style.display = "block";
  catalogSection.style.animation = "fadeInUp 0.8s ease-out";
});

// Fonction pour ajouter un produit au panier et rediriger directement
function addToCart(productName, productPrice) {
  window.location.href = `formulaire.html?product=${productName}&price=${productPrice}`;
}


// Gestion de la recherche 
document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".prod");
  const container = document.querySelector(".container-prod");

  // Fonction de recherche simple
  function filterProducts() {
    const texte = searchInput.value.toLowerCase();
    const estFiltre = texte !== "";

    // Gestion de l'affichage des resultats filtres
    if (estFiltre) {
      container.classList.add("filtered");
    } else {
      container.classList.remove("filtered"); 
    }

    // Filtrage des produits par titre uniquement
    products.forEach((prod) => {
      const matchTitre = prod.querySelector(".product-title").textContent.toLowerCase().includes(texte);
//matchtitre c est pour verifie si le texte est dans le titre dans html    (0 ou 1)
      if (matchTitre) {
        prod.classList.remove("hidden");
      } else {
        prod.classList.add("hidden");
      }
    });
  }


searchInput.addEventListener("input", filterProducts);
//Dès que user tape qlq chose dans la barre de recherche,on lance la fonction


  // Gestion des boutons "Acheter maintenant"
  document.querySelectorAll(".btn-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = button.closest(".card, .prod");
      const name = card.querySelector("h2, .product-title").textContent;
      const price = card.querySelector(
        ".new-price, .product-price"
      ).textContent;
      addToCart(name, price);
    });
  });
});

// Menu toggle
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

