

// Objects
let articles = {
    chaise : 25,
    table : 150,
    meubleTV : 250,
}

let panier = {

}



//Functions

let ajouter = (item) => {
    if (panier[item]) {
        panier[item]++
    }
    else{
        panier[item] = 1
    }
    
    refreshPanier();
}

let refreshPanier = () => {
    let tabPanier = document.getElementById("Panier")
    tabPanier.innerHTML = ""
    let prixTotal = 0
    for (const prop in panier) {

        for (let index = 0; index < panier[prop]; index++) {
            tabPanier.appendChild(createPanierRow(prop, articles[prop]))
            prixTotal += articles[prop];
        }

    }

    tabPanier.appendChild(createPanierRow("Total", prixTotal))
    
}

let createPanierRow = (nomLabel, prixLabel) => {
    let tr = document.createElement("tr");
    let nom = document.createElement("td")
    let prix = document.createElement("td")

    nom.innerHTML = nomLabel;
    prix.innerHTML = prixLabel

    tr.appendChild(nom)
    tr.appendChild(prix)

    return tr;
}

let createArticleRow = (nomLabel, prixLabel) => {
    let tabArticles = document.getElementById("Articles")
    let tr = document.createElement("tr")
    let nom = document.createElement("td")
    let prix = document.createElement("td")
    nom.innerHTML = nomLabel;
    prix.innerHTML = prixLabel
    tr.appendChild(nom);
    tr.appendChild(prix);
    tr.innerHTML += `<button onclick="ajouter('${nomLabel}')"> Ajouter </button>`
    return tr;
}


// ON START

for (const prop in articles) {
    let tabArticles = document.getElementById("Articles")
    tabArticles.appendChild(createArticleRow(prop, articles[prop]));
}


