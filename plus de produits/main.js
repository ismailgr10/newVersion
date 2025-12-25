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

// Fonction pour ajouter un produit au panier
function addToCart(productName, productPrice) {
  showSuccessMessage(productName);
  setTimeout(() => {
    window.location.href = `formulaire.html?product=${productName}&price=${productPrice}`;
  }, 1500);
}

// Fonction pour afficher le message de succès
function showSuccessMessage(productName) {
  const notification = document.createElement("div");
  notification.className = "cart-notification";
  notification.innerHTML = `
          <i class="fas fa-check-circle cart-notification-icon"></i>
          <div class="cart-notification-content">
            <div class="cart-notification-title">Produit ajouté avec succès!</div>
            <div class="cart-notification-product">${productName}</div>
          </div>
        `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.classList.add("slide-out");
    setTimeout(() => notification.remove(), 500);
  }, 1000);
}

// Gestion des filtres et de la recherche
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".prod");
  const container = document.querySelector(".container-prod");

  // Fonction de filtrage principale
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory =
      document.querySelector(".filter-btn.active").dataset.filter;
    const filteredMode = activeCategory !== "all" || searchTerm.trim() !== "";

    if (filteredMode) {
      container.classList.add("filtered");
    } else {
      container.classList.remove("filtered");
    }

    products.forEach((product) => {
      const title = product
        .querySelector(".product-title")
        .textContent.toLowerCase();
      const desc = product
        .querySelector(".product-desc")
        .textContent.toLowerCase();
      const category = product.dataset.category;

      const matchesSearch =
        title.includes(searchTerm) || desc.includes(searchTerm);
      const matchesCategory =
        activeCategory === "all" || category === activeCategory;

      if (matchesSearch && matchesCategory) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    });
  }

  // Event Listeners pour la recherche
  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  // Event Listeners pour les boutons de filtre
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Ajouter la classe active au bouton cliqué
      btn.classList.add("active");
      // Appliquer le filtre
      filterProducts();
    });
  });

  // Gestion des boutons "Ajouter au panier"
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
