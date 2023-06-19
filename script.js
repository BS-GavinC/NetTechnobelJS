

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

let retirer = (item) => {
    if (!panier[item]) {
        return;
    }
    else if(panier[item] == 1){
        delete panier[item]
    }
    else{
        panier[item]--
    }

    refreshPanier()
}


let refreshPanier = () => {
    let tabPanier = document.getElementById("Panier")
    tabPanier.innerHTML = ""
    let prixTotal = 0
    for (const prop in panier) {
        tabPanier.appendChild(createPanierRow(prop, articles[prop], panier[prop]))
        prixTotal += articles[prop] * panier[prop];
    }

    tabPanier.appendChild(createPanierRow("Total", prixTotal, ""))
    
}

let createPanierRow = (nomLabel, prixLabel, nbrLabel) => {
    let tr = document.createElement("tr");
    let nom = document.createElement("td")
    let prix = document.createElement("td")
    let nbr = document.createElement("td")

    nom.innerHTML = nomLabel;
    prix.innerHTML = prixLabel;
    nbr.innerHTML = nbrLabel;

    tr.appendChild(nom)
    tr.appendChild(prix)
    tr.appendChild(nbr)

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
    tr.innerHTML += `<button onclick="retirer('${nomLabel}')"> Retirer </button>`
    
    return tr;
}


// ON START

for (const prop in articles) {
    let tabArticles = document.getElementById("Articles")
    tabArticles.appendChild(createArticleRow(prop, articles[prop]));
}


