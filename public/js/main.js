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
