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

//  les boutons "Ajouter au panier"
document.addEventListener("DOMContentLoaded", () => {
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
