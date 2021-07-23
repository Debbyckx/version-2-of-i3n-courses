//Exercice 01 : Demande et affichage de nom et prénom - avec prompt
    // var prenom = prompt("Veuillez entrer votre prénom");
    // var nom = prompt("Veuillez entrer votre nom");
    // var userName = prenom+" "+nom; 

    // alert("Bonjour "+userName+". \nComment allez-vous ?");

//Exercice 01 : Demande et affichage de nom et prénom - Avec fonctions et prompt
    // function bonjourPrenom(){
    //     var prenom = prompt("Veuillez entrer votre prénom");
    //     var nom = prompt("Veuillez entrer votre nom");
    //     var userName = prenom+" "+nom; 

    //     alert("Bonjour "+userName+". \nComment allez-vous ?");
    // };

    function returnForm(){
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        document.getElementById("reponseForm").innerHTML = "Bonjour "+prenom+" "+nom+",<br>Comment allez-vous ?";
    }

    function resetForm(){
        document.getElementById("reponseForm").innerHTML = "";
    }





    

//Exercice 02 : Calcul du prix
    // var prixArticle = Number(prompt("Quel est le prix de l'article ?"));
    // var quantiteArticle = Number(prompt("Combien d'exemplaires désirez-vous acheter?"));
    // var tauxTVA = Number(prompt("Quel est le taux de TVA (en %) ?"));
    // var prixTotal = prixArticle*quantiteArticle*(1+tauxTVA/100);

    // alert("Le montant total de vos achats s'élève à : "+prixTotal+"€");
    function calculPrix(){
        var prixArticle = Number(prompt("Quel est le prix de l'article ?"));
        var quantiteArticle = Number(prompt("Combien d'exemplaires désirez-vous acheter?"));
        var tauxTVA = Number(prompt("Quel est le taux de TVA (en %) ?"));
        var prixTotal = prixArticle*quantiteArticle*(1+tauxTVA/100);

        alert("Le montant total de vos achats s'élève à : "+prixTotal+"€");
    };


// Exercice 03 : Opérations de base
    // var nbrUser01 = Number(prompt("Veuillez entrer un premier nombre:"));
    // var nbrUser02 = Number(prompt("Veuillez entrer un second nombre:"));
    // var somme=nbrUser01+nbrUser02;
    // var difference=nbrUser01-nbrUser02;
    // var quotient=nbrUser01/nbrUser02;
    // var produit=nbrUser01*nbrUser02;

    // alert("La somme de ces nombres vaut : "+somme);
    // alert("La difference de ces nombres vaut : "+difference);
    // alert("La quotient de ces nombres vaut : "+quotient);
    // alert("La produit de ces nombres vaut : "+produit);

    function operationBase(){
        var nbrUser01 = Number(prompt("Veuillez entrer un premier nombre:"));
        var nbrUser02 = Number(prompt("Veuillez entrer un second nombre:"));
        var somme=nbrUser01+nbrUser02;
        var difference=nbrUser01-nbrUser02;
        var quotient=nbrUser01/nbrUser02;
        var produit=nbrUser01*nbrUser02;

        alert("La somme de ces nombres vaut : "+somme);
        alert("La difference de ces nombres vaut : "+difference);
        alert("La quotient de ces nombres vaut : "+quotient);
        alert("La produit de ces nombres vaut : "+produit);
    };


// Exercice 04 : Première condition
    // var nbreUser = Number(prompt("Entrer un nombre"));
    // if(nbreUser > 10){
    //     alert("Ce nombre est plus grand que 10");
    // }

    // else if (nbreUser < 10)
    // {
    //     alert("Ce nombre est plus petit que 10");
    // }

    // else if (nbreUser === 10){
    //     alert("Ce nombre est égal à 10");
    // }

    // else {
    //     alert("Merci d'entrer un nombre.");
    // }

    
    function premiereCondition(){
    var nbreUser = Number(prompt("Entrer un nombre"));
        if(nbreUser > 10){
            alert("Ce nombre est plus grand que 10");
        }

        else if (nbreUser < 10)
        {
            alert("Ce nombre est plus petit que 10");
        }

        else if (nbreUser === 10){
            alert("Ce nombre est égal à 10");
        }

        else {
            alert("Merci d'entrer un nombre.");
        };
    };


// Exercice 05 : Bissextile
    // var anneeUser = Number(prompt("Entrer une année"));
    // if ((anneeUser % 4 === 0 && anneeUser % 100 !== 0) || (anneeUser % 400 === 0)) {
    // 	alert("l'année "+anneeUser+" est bissextile");
    // } else {
    // 	alert("l'année "+anneeUser+" n'est pas bissextile");
    // }
    function bissextile(){
        var anneeUser = Number(prompt("Entrer une année"));
        if ((anneeUser % 4 === 0 && anneeUser % 100 !== 0) || (anneeUser % 400 === 0)) {
            alert("l'année "+anneeUser+" est bissextile");
        } else {
            alert("l'année "+anneeUser+" n'est pas bissextile");
        };
    };

// Exercice 06 : Commentaire sur l'âge
    // var anneeNaissance = Number(prompt("Entrer votre année de naissance"))
    // var date = new Date();
    // var anneeActuelle = date.getFullYear();
    // var ageUser = anneeActuelle-anneeNaissance;

    // if(ageUser<18){
    //     alert("Vous n'êtes pas encore majeur.");
    // }
    // else if(ageUser>=18 && ageUser<50){
    //     alert("Vous êtes majeur mais pas sénior.");
    // }
    // else if(ageUser>=50 && ageUser<65){
    //     alert("Vous êtes sénior mais pas encore retraité.");
    // }
    // else{
    //     alert("Vous êtes retraité, profitez de votre temps libre.");
    // };

    function commentAge(){
        var anneeNaissance = Number(prompt("Entrer votre année de naissance"))
        var date = new Date();
        var anneeActuelle = date.getFullYear();
        var ageUser = anneeActuelle-anneeNaissance;

        if(ageUser<18){
            alert("Vous n'êtes pas encore majeur.");
        }
        else if(ageUser>=18 && ageUser<50){
            alert("Vous êtes majeur mais pas sénior.");
        }
        else if(ageUser>=50 && ageUser<65){
            alert("Vous êtes sénior mais pas encore retraité.");
        }
        else{
            alert("Vous êtes retraité, profitez de votre temps libre.");
        };
    };

// Exercice 07 : Oui ou non ? (switch)
    // var choixUser = prompt("Ecrire 'oui ou 'non'").toLowerCase();
    // switch(choixUser){
    //     case "oui":
    //         alert("Vous avez entré oui");
    //     break;
    //     case "non":
    //         alert("Vous avez entré non");
    //     break;
    //     default:
    //         alert("Uniquement oui ou non svp");
    // };

    function ouiOuNon(){
        var choixUser = prompt("Ecrire 'oui ou 'non'").toLowerCase();
        switch(choixUser){
            case "oui":
                alert("Vous avez entré oui");
            break;
            case "non":
                alert("Vous avez entré non");
            break;
            default:
                alert("Uniquement oui ou non svp");
        };
    };


// Exercice 08 : Les tiroirs
    // var choixUser = Number(prompt("Quel tiroir (de 1 à 4), voulez-vous ouvrir ?"));   
    // switch(choixUser){
    //     case 1:
    //         alert("Vous trouvez une vieille paire de chaussettes aparemment portée pendant plusieurs jours.");
    //     break;
    //     case 2:
    //         alert("Vous trouvez une paire de menottes à frou-frou rose et un martinet");
    //     break;
    //     case 3:
    //         alert("Vous trouvez un lingot d'or");
    //     break;
    //     case 4:
    //         alert("Vous trouvez un vieu CD de Linkin Park");
    //     break;
    //     default:
    //         alert("Entre 1 et 4 on a dit. Et les tiroirs négatifs n'existent pas...");
    // };

    function tiroirs(){
        var choixUser = Number(prompt("Quel tiroir (de 1 à 4), voulez-vous ouvrir ?"));   
        switch(choixUser){
            case 1:
                alert("Vous trouvez une vieille paire de chaussettes aparemment portée pendant plusieurs jours.");
            break;
            case 2:
                alert("Vous trouvez une paire de menottes à frou-frou rose et un martinet");
            break;
            case 3:
                alert("Vous trouvez un lingot d'or");
            break;
            case 4:
                alert("Vous trouvez un vieu CD de Linkin Park");
            break;
            default:
                alert("Entre 1 et 4 on a dit. Et les tiroirs négatifs n'existent pas...");
        };
    };


// Exercice 09 : La boucle while
    // var i = 0;
    // while(i<10){
    //     alert("i contient la valeur "+i);
    //     i++;
    // }
    function boucleWhile(){
        var i = 1;
        while(i<10){
            alert("i contient la valeur "+i);
            i++;
        };
    };



// Exercice 10 : La boucle do.. while
    // var choixUser = 0;
    // do{
    //    choixUser = Number(prompt("Veuillez entre le chiffre 1 :"));
    // }
    // while(choixUser!=1);

    function boucleDoWhile(){
        var choixUser = 0;
        do{
        choixUser = Number(prompt("Veuillez entre le chiffre 1 :"));
        }
        while(choixUser!=1);
    };
    


// Exercice 11 : La boucle for
    // var nbreUser = Number(prompt("Entrer un nombre"));
    // var msg = "";
    // for (i=(nbreUser+1);i<(nbreUser+16);i++){
    //     msg+="i vaut: "+i+"\n";
    // }
    // alert(msg);

    function boucleFor(){
        var nbreUser = Number(prompt("Entrer un nombre"));
        var msg = "";
        for (i=(nbreUser+1);i<(nbreUser+16);i++){
            msg+="i vaut: "+i+"\n";
        }
        alert(msg);
    };


// Exercice 12 : Changer la couleur de fond
    function changeCouleur(){
        var r = document.getElementById("sliderR").value;
        var v = document.getElementById("sliderV").value;
        var b = document.getElementById("sliderB").value;

        document.body.style.backgroundColor = "rgb("+r+","+v+","+b+")";
    };



// Exerice 13 : Test de mot de passe
    function verificationMdp(){
        var mdpUser = document.getElementById("mdp").value;

        if (mdpUser.length>=6 && mdpUser.match(/[A-Z]/g) && mdpUser.match(/[0-9]/g) && mdpUser.match(/[^a-zA-Z\d]/g)){
            document.getElementById("autorisation").innerHTML = " Créé";
            document.getElementById("autorisation").style.color = "green";
        }

        else{
            document.getElementById("autorisation").innerHTML = " Invalide";
            document.getElementById("autorisation").style.color = "red";
        }

    }


    function verificationCaracteres(){
        var mdpUser = document.getElementById("mdp").value;

        if(mdpUser.length>=6){
            document.getElementById("retourLenght").innerHTML = "Longueur: OK";
            document.getElementById("retourLenght").style.color = "green";
        }
        else{
            document.getElementById("retourLenght").innerHTML = "Longueur: NOK";
            document.getElementById("retourLenght").style.color = "red";
        }

        if(mdpUser.match(/[A-Z]/g)){
            document.getElementById("retourMaj").innerHTML = "Majuscule: OK";
            document.getElementById("retourMaj").style.color = "green";
        }
        else{
            document.getElementById("retourMaj").innerHTML = "Majuscule: NOK";
            document.getElementById("retourMaj").style.color = "red";
        }

        if(mdpUser.match(/[0-9]/g)){
            document.getElementById("retourChiffre").innerHTML = "Chiffre: OK";
            document.getElementById("retourChiffre").style.color = "green";
        }
        else{
            document.getElementById("retourChiffre").innerHTML = "Chiffre: NOK";
            document.getElementById("retourChiffre").style.color = "red";
        }

        if(mdpUser.match(/[^a-zA-Z\d]/g)){
            document.getElementById("retourSpecial").innerHTML = "Caractère spécial: OK";
            document.getElementById("retourSpecial").style.color = "green";
        }
        else{
            document.getElementById("retourSpecial").innerHTML = "Caractère spécial: NOK";
            document.getElementById("retourSpecial").style.color = "red";
        }

        document.getElementById("retourValid2").innerHTML = msg;
    };


    function resetFormMdp(){
        document.getElementById("reponseForm").innerHTML = "";
        document.getElementById("autorisation").innerHTML = "";
        document.getElementById("retourLenght").innerHTML = "";
        document.getElementById("retourMaj").innerHTML = "";
        document.getElementById("retourChiffre").innerHTML = "";
        document.getElementById("retourSpecial").innerHTML = "";
    }


