/* --- 1. Calcul IMC --- */
function calculateIMC() {
    // Récupération des valeurs
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;

    // Conversion et Sécurité
    w = parseFloat(w);
    h = parseFloat(h) / 100; // Conversion cm en m

    if (w > 0 && h > 0) {
        let imc = w / (h * h);
        let result = imc.toFixed(1);
        
        let msgElement = document.getElementById("imcMsg");
        let resultElement = document.getElementById("imcResult");

        resultElement.textContent = result;

        // Logique de couleur (directement modifiée via JS)
        if (imc < 18.5) {
            msgElement.textContent = "Maigreur";
            msgElement.style.color = "#3498db"; // Bleu
        } else if (imc < 25) {
            msgElement.textContent = "Normal";
            msgElement.style.color = "#2ecc71"; // Vert
        } else if (imc < 30) {
            msgElement.textContent = "Surpoids";
            msgElement.style.color = "#f1c40f"; // Jaune
        } else {
            msgElement.textContent = "Obésité";
            msgElement.style.color = "#ff0000"; // Rouge
        }
    } else {
        alert("Veuillez entrer des valeurs valides.");
    }
}

/* --- 2. Calcul Calories --- */
function calculateCalories() {
    let w = parseFloat(document.getElementById("weight").value);
    let h = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let activity = parseFloat(document.getElementById("activity").value);

    // Formule Mifflin-St Jeor
    let bmr = (10 * w) + (6.25 * h) - (5 * age);

    if (gender === "male") {
        bmr += 5;
    } else {
        bmr -= 161;
    }

    let totalCalories = Math.round(bmr * activity);
    
    // Affichage
    if (!isNaN(totalCalories)) {
        document.getElementById("caloriesResult").textContent = totalCalories;
    }
}

/* --- 3. Calcul Protéines --- */
function calculateProteins() {
    let weight = parseFloat(document.getElementById("weightProt").value);
    let goalRatio = parseFloat(document.getElementById("goal").value);

    if (weight > 0) {
        let proteins = Math.round(weight * goalRatio);
        document.getElementById("proteinResult").textContent = proteins;
    } else {
        alert("Entrez votre poids pour calculer les protéines.");
    }
}

/* --- 4. Menu Toggle --- */
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}
