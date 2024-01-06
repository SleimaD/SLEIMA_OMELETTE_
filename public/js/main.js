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

let bol = {
    contenu : [],

    melanger(nomDuMelange) {
        this.contenu = [{ nom: nomDuMelange, etats: 'pas cuit', prix: 0 }];
        console.log(`Nouveau mélange: ${nomDuMelange}`);
  
    }
}


personnage.seDeplacer(epicerie)

personnage.mainDroite.push(epicerie.paniers[0])

console.log(`${personnage.nom} a pris un panier`);

for (let ingredient of epicerie.paniers[0].contenu) {
    personnage.mainDroite.push({...ingredient})
    console.log(`${personnage.nom} a pris ${ingredient.nom}`);
    personnage.payerArticle(ingredient)
}

personnage.seDeplacer(maison)


for (let ingredient of personnage.mainDroite.slice(1)) {
    console.log(`ingredient(s) mis dans le bol.`);
    bol.contenu.push(ingredient);
}


for (let ingredient of bol.contenu) {
    personnage.couper(ingredient, couteau);
}


bol.melanger("omelette")


poele.contenu = [...bol.contenu];
bol.contenu = [];
poele.cuire();
