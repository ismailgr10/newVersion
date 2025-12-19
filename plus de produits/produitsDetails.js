// Base de données des produits
const productsData = {
  // Produits en promotion
  promo1: {
    id: "promo1",
    name: "Curse JNX Pré-workout",
    shortDesc: "Formule pré-entraînement explosive",
    fullDesc:
      "Curse de JNX Sports est un pré-workout sans créatine conçu pour fournir une énergie intense et une concentration maximale. Sa formule unique combine des stimulants puissants avec des ingrédients qui améliorent la congestion musculaire, vous permettant de repousser vos limites à chaque entraînement.",
    oldPrice: "39,99€",
    price: "29,99€",
    discount: "-25%",
    image: "./images/curse_.webp",
    badge: "-25%",
    badgeClass: "promo",
    features: [
      "Énergie explosive sans crash",
      "Concentration mentale accrue",
      "Pompe musculaire intense",
      "Sans créatine",
      "50 portions par contenant",
    ],
    composition:
      "Citrulline malate, caféine anhydre, bêta-alanine, extrait de café vert, L-arginine, vitamines B, arômes naturels, édulcorants.",
    nutrition: [
      { nutriment: "Caféine", per100g: "4g", perServing: "155mg" },
      { nutriment: "Citrulline malate", per100g: "50g", perServing: "2g" },
      { nutriment: "Bêta-alanine", per100g: "35g", perServing: "1.5g" },
      { nutriment: "L-arginine", per100g: "25g", perServing: "1g" },
    ],
    usage:
      "Mélangez 1 dose avec 250ml d'eau froide. Consommez 20-30 minutes avant l'entraînement. Ne pas dépasser 2 doses en 24h.",
  },
  promo2: {
    id: "promo2",
    name: "Creatine Drive Monohydrate",
    shortDesc: "Créatine pure micronisée",
    fullDesc:
      "Creatine Drive est une créatine monohydrate de qualité pharmaceutique, micronisée pour une absorption et une dissolution optimales. Cette formule pure et sans additifs est idéale pour augmenter la force, la puissance et favoriser la croissance musculaire lors d'entraînements de haute intensité.",
    oldPrice: "24,99€",
    price: "21,24€",
    discount: "-15%",
    image: "./images/creatinedrive.webp",
    badge: "-15%",
    badgeClass: "promo",
    features: [
      "Créatine monohydrate 100% pure",
      "Micronisée - meilleure absorption",
      "Augmente la force et la puissance",
      "Améliore la récupération",
      "Sans goût, sans sucre",
    ],
    composition: "Créatine monohydrate micronisée 100% pure.",
    nutrition: [
      { nutriment: "Créatine monohydrate", per100g: "100g", perServing: "5g" },
      { nutriment: "Glucides", per100g: "0g", perServing: "0g" },
      { nutriment: "Lipides", per100g: "0g", perServing: "0g" },
    ],
    usage:
      "Mélangez 5g (1 mesure) avec 200-300ml d'eau, de jus ou votre boisson préférée. Prenez quotidiennement, de préférence après l'entraînement.",
  },
  promo3: {
    id: "promo3",
    name: "Whey Protein Premium",
    shortDesc: "Protéine whey concentrée de qualité",
    fullDesc:
      "Notre Whey Protein Premium est formulée à partir de concentré de protéine de lactosérum de haute qualité. Riche en acides aminés essentiels et en BCAA naturels, elle favorise la croissance musculaire, la récupération et aide à maintenir une masse musculaire maigre. Parfaite pour tous les objectifs sportifs.",
    oldPrice: "49,99€",
    price: "34,99€",
    discount: "-30%",
    image: "./images/whey_prot.jpg",
    badge: "-30%",
    badgeClass: "promo",
    features: [
      "24g de protéines par portion",
      "Riche en BCAA naturels",
      "Faible en sucres et graisses",
      "Goût authentique et délicieux",
      "Excellent rapport qualité/prix",
    ],
    composition:
      "Concentré de protéines de lactosérum (lait) 90%, cacao en poudre, arômes naturels, gomme xanthane, édulcorant (stevia, sucralose).",
    nutrition: [
      { nutriment: "Protéines", per100g: "75g", perServing: "24g" },
      { nutriment: "Glucides", per100g: "8g", perServing: "2.5g" },
      { nutriment: "dont sucres", per100g: "5g", perServing: "1.6g" },
      { nutriment: "Lipides", per100g: "6g", perServing: "2g" },
      { nutriment: "BCAA", per100g: "16g", perServing: "5g" },
    ],
    usage:
      "Mélangez 1 dose (32g) avec 250-300ml d'eau, de lait ou de boisson végétale. Consommez 1-3 fois par jour selon vos besoins protéiques.",
  },
  promo4: {
    id: "promo4",
    name: "Masse Infusion",
    shortDesc: "Gainer pour prise de masse rapide",
    fullDesc:
      "Masse Infusion est un gainer haute performance spécialement conçu pour les personnes ayant des difficultés à prendre du poids. Cette formule riche en protéines de qualité et en glucides complexes fournit l'apport calorique nécessaire pour soutenir une prise de masse musculaire optimale, tout en favorisant la récupération.",
    oldPrice: "44,99€",
    price: "35,99€",
    discount: "-20%",
    image: "./images/masse_infusion.jpeg",
    badge: "-20%",
    badgeClass: "promo",
    features: [
      "52g de protéines par portion",
      "Plus de 1000 calories par shake",
      "Glucides complexes à libération progressive",
      "Enrichi en créatine et glutamine",
      "Vitamines et minéraux essentiels",
    ],
    composition:
      "Mélange de protéines (concentré de whey, caséine, isolat), maltodextrine, fructose, créatine monohydrate, L-glutamine, MCT en poudre, vitamines, minéraux, arômes.",
    nutrition: [
      { nutriment: "Calories", per100g: "380kcal", perServing: "1100kcal" },
      { nutriment: "Protéines", per100g: "18g", perServing: "52g" },
      { nutriment: "Glucides", per100g: "70g", perServing: "203g" },
      { nutriment: "Lipides", per100g: "4g", perServing: "12g" },
      { nutriment: "Créatine", per100g: "1.7g", perServing: "5g" },
    ],
    usage:
      "Mélangez 290g (3 mesures) avec 500-700ml d'eau ou de lait. Consommez 1-2 fois par jour, entre les repas ou après l'entraînement.",
  },

  prod1: {
    id: "prod1",
    name: "Whey Protein Gold",
    shortDesc: "Protéine de lactosérum premium",
    fullDesc:
      "Notre Whey Protein Gold est une protéine de lactosérum de qualité supérieure, spécialement conçue pour soutenir la croissance musculaire et la récupération après l'entraînement. Riche en acides aminés essentiels et en BCAA, elle est rapidement absorbée par l'organisme pour des résultats optimaux. Idéale pour tous les sportifs cherchant à améliorer leurs performances et leur composition corporelle.",
    price: "39,99€",
    image: "./imagesProd/wheyProd.png",
    badge: "POPULAIRE",
    badgeClass: "",
    features: [
      "25g de protéines par portion",
      "Absorption rapide",
      "Riche en BCAA naturels",
      "Sans aspartame",
      "Disponible en 10 saveurs",
    ],
    composition:
      "Concentré de protéines de lactosérum (lait), arômes naturels, édulcorant (sucralose), lécithine de soja.",
    nutrition: [
      { nutriment: "Protéines", per100g: "80g", perServing: "24g" },
      { nutriment: "Glucides", per100g: "6g", perServing: "2g" },
      { nutriment: "Lipides", per100g: "5g", perServing: "1.5g" },
      { nutriment: "BCAA", per100g: "18g", perServing: "5.5g" },
    ],
    usage:
      "Mélangez 1 mesure (30g) avec 200-250ml d'eau ou de lait. Consommez 1-3 portions par jour, idéalement après l'entraînement et entre les repas.",
  },
  prod2: {
    id: "prod2",
    name: "Créatine Monohydrate",
    shortDesc: "Augmente force et endurance",
    fullDesc:
      "La créatine monohydrate est l'un des suppléments les plus étudiés et efficaces pour améliorer les performances sportives. Elle augmente la production d'ATP, source d'énergie principale des muscles, permettant d'améliorer la force, la puissance et l'endurance lors d'efforts intenses et répétés.",
    price: "24,99€",
    image: "./imagesProd/creaProd.png",
    badge: "",
    badgeClass: "",
    features: [
      "100% créatine monohydrate pure",
      "Micronisée pour une meilleure absorption",
      "Améliore la force musculaire",
      "Augmente les performances",
      "Sans additifs",
    ],
    composition: "Créatine monohydrate micronisée 100%",
    nutrition: [
      { nutriment: "Créatine monohydrate", per100g: "100g", perServing: "5g" },
    ],
    usage:
      "Prenez 5g (1 cuillère) par jour, de préférence après l'entraînement ou avec un repas contenant des glucides.",
  },
  prod3: {
    id: "prod3",
    name: "C4 Pre-Workout",
    shortDesc: "Énergie explosive avant l'entraînement",
    fullDesc:
      "C4 Pre-Workout est la formule pré-entraînement ultime pour maximiser vos performances. Avec un mélange unique de caféine, bêta-alanine et créatine, il vous donne l'énergie, la concentration et l'endurance nécessaires pour des entraînements intenses et productifs.",
    price: "34,99€",
    image: "./imagesProd/c4Prod.png",
    badge: "-15%",
    badgeClass: "promo",
    features: [
      "150mg de caféine par dose",
      "Avec bêta-alanine et créatine",
      "Améliore la concentration",
      "Augmente l'endurance",
      "Goût délicieux",
    ],
    composition:
      "Bêta-alanine, créatine nitrate, caféine, L-citrulline, vitamines B6 et B12, arômes, colorants.",
    nutrition: [
      { nutriment: "Caféine", per100g: "3g", perServing: "150mg" },
      { nutriment: "Bêta-alanine", per100g: "32g", perServing: "1.6g" },
      { nutriment: "Créatine nitrate", per100g: "20g", perServing: "1g" },
      { nutriment: "L-citrulline", per100g: "12g", perServing: "600mg" },
    ],
    usage:
      "Mélangez 1 dose (5g) avec 200ml d'eau froide. Consommez 20-30 minutes avant l'entraînement.",
  },

  prod5: {
    id: "prod5",
    name: "BCAA Complex",
    shortDesc: "Récupération musculaire optimale",
    fullDesc:
      "Notre complexe BCAA contient les trois acides aminés essentiels (leucine, isoleucine, valine) dans un ratio optimal 2:1:1. Les BCAA sont cruciaux pour la synthèse protéique, réduisent la fatigue musculaire et accélèrent la récupération après l'effort.",
    price: "29,99€",
    image: "./imagesProd/bcaaProd.png",
    badge: "",
    badgeClass: "",
    features: [
      "Ratio 2:1:1 optimal",
      "Réduit la fatigue musculaire",
      "Accélère la récupération",
      "Préserve la masse musculaire",
      "Sans calories",
    ],
    composition:
      "L-Leucine, L-Isoleucine, L-Valine, acidifiant (acide citrique), arômes naturels, édulcorant (sucralose).",
    nutrition: [
      { nutriment: "BCAA totaux", per100g: "100g", perServing: "5g" },
      { nutriment: "L-Leucine", per100g: "50g", perServing: "2.5g" },
      { nutriment: "L-Isoleucine", per100g: "25g", perServing: "1.25g" },
      { nutriment: "L-Valine", per100g: "25g", perServing: "1.25g" },
    ],
    usage:
      "Mélangez 1 dose (5g) avec 300-400ml d'eau. Consommez pendant ou après l'entraînement.",
  },
  prod6: {
    id: "prod6",
    name: "Nitro-Tech",
    shortDesc: "Formule avancée whey + créatine",
    fullDesc:
      "Nitro-Tech combine le meilleur de deux mondes : une protéine whey de haute qualité enrichie en créatine monohydrate. Cette formule scientifiquement élaborée maximise la croissance musculaire et la force, tout en améliorant la récupération.",
    price: "44,99€",
    image: "./imagesProd/nitroProd.png",
    badge: "NOUVEAU",
    badgeClass: "nouveau",
    features: [
      "Whey + créatine en un seul produit",
      "30g de protéines par dose",
      "3g de créatine inclus",
      "Enrichi en BCAA et glutamine",
      "Formule scientifique avancée",
    ],
    composition:
      "Mélange de protéines (concentré et isolat de whey), créatine monohydrate, L-glutamine, BCAA, arômes, édulcorants.",
    nutrition: [
      { nutriment: "Protéines", per100g: "75g", perServing: "30g" },
      { nutriment: "Créatine", per100g: "7.5g", perServing: "3g" },
      { nutriment: "BCAA", per100g: "15g", perServing: "6g" },
      { nutriment: "Glutamine", per100g: "10g", perServing: "4g" },
    ],
    usage:
      "Mélangez 1 dose (40g) avec 250-300ml d'eau ou de lait. Prenez 1-2 fois par jour, idéalement après l'entraînement.",
  },

  prod8: {
    id: "prod8",
    name: "Hydro Whey",
    shortDesc: "Hydrolysat à absorption rapide",
    fullDesc:
      "Hydro Whey est la forme la plus pure et la plus rapidement absorbée de protéine de lactosérum. Grâce au processus d'hydrolyse, les protéines sont pré-digérées en peptides plus petits, permettant une absorption quasi instantanée et une récupération musculaire optimale.",
    price: "54,99€",
    image: "./imagesProd/hydroProd.png",
    badge: "",
    badgeClass: "",
    features: [
      "Protéine hydrolysée premium",
      "Absorption en 20 minutes",
      "Facile à digérer",
      "Enrichi en enzymes digestives",
      "Qualité pharmaceutique",
    ],
    composition:
      "Hydrolysat de protéines de lactosérum (lait), enzymes digestives (bromélaïne, papaïne), arômes, édulcorant.",
    nutrition: [
      { nutriment: "Protéines", per100g: "88g", perServing: "26g" },
      { nutriment: "Glucides", per100g: "3g", perServing: "1g" },
      { nutriment: "Lipides", per100g: "1g", perServing: "0.3g" },
      { nutriment: "Di et tri-peptides", per100g: "70g", perServing: "21g" },
    ],
    usage:
      "Mélangez 1 dose (30g) avec 200ml d'eau. Idéal immédiatement après l'entraînement pour une récupération rapide.",
  },
};
