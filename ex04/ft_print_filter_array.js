/*Écrire une fonction qui filtre tous les nombres impairs d’un tableau.
Affichez le résultat dans la console de développement.*/

(function filtrerImpairs(tableau) {
  var resultat = [];
  for (var i = 0; i < tableau.length; i++) {
    if (tableau[i] % 2 !== 0) {
      resultat.push(tableau[i]);
    }
  }
  console.log(resultat);
})([1, 2, 3, 4, 5]);