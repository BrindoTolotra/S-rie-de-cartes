// liste des nombres de tirages affichés dans l'historique
let suite = [1,1,2,3,3,3,3,3,7,7,7,7,5];

//fonction qui détermine la longueur de la plus grande série où un chiffre est répété
let count = (tab) => {
    /*
    Variables : 
        accTemp: pour compter le nombre de répétition d'un chiffre traité
        value : garder temporairement le chiffre traité
        acc : pour stocker le resultat finale du nombre de répétition d'un chiffre
        valueFinale : garder le dernier chiffre traité et suit la condition avant de passer sur un autre chiffre 
    */
    let accTemp = 1, acc = 0, value = 0, valueFinal = 0;
    //parcourir le tableau
    for(let i=0;i<tab.length-1;i++){
        if(tab[i] == tab[i+1]){
            accTemp += 1;
            value = tab[i];
        }else{
            if(acc<=accTemp){
                acc = accTemp;
                valueFinal = value;
            }
            accTemp = 1;
        }
    }
    return `le ${valueFinal} s'est répété ${acc} fois`;
}