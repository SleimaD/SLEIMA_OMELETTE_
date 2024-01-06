let personnage = {
    nom : "Sleima",
    lieu : "",
    argent : 70,
    mainDroite : [],
    mainGauche : [],

    seDeplacer(lieu) {
        this.lieu = lieu.nom
        console.log(`${this.nom} se trouve à ${this.lieu}`);
    },

    payerArticle(article) {
        this.argent -= article.prix
        console.log(`argent restant : ${this.argent}`);
    },

    couper(ingredient,outil) {
        if (ingredient.etat.includes("entier")) {
            if (outil.action == "couper") {
                console.log(`elle coupe l'${ingredient.nom}`);
            }
        } else {
            console.log("l'ingredient n'est pas entier");
        }
    }
}

let maison = {
    nom : "maison",
    personnes : []
}

let couteau = {
    nom : "couteau",
    action : "couper"
}

let oignon = {
    nom : "oignon",
    etat : "entier",
    prix : 2
}

let oeuf = {
    nom : "oeuf",
    etat : "entier",
    prix : 1
}

let epicerie = {
    nom : "epicerie",
    personnes : [],
    paniers : [{ type : "panier", contenu : [oignon,oeuf]  }]
}

let poele = {
    nom : "poele",
    contenu : [],

    cuire() {
        setTimeout(() => {
            this.contenu[0].etats = "cuit";
            console.log("c'est cuit");
          }, 4000);
    }
}

