/*Écrire une fonction qui affiche dans la console de développement une
case sur deux d’un tableau de reçu en paramètre*/

(function(tableau) {
    for (var i = 0; i < tableau.length; i += 2) {
      console.log(tableau[i]);
    }
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);