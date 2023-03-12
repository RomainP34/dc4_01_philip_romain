/*Écrire une fonction qui filtre tous les nombres impairs d’un tableau.
Affichez le résultat dans la console de développement.*/

(function insererDansTableau(nombre, tableau) {
  var position = 0;
  while (position < tableau.length && nombre > tableau[position]) {
    position++;
  }
  tableau.splice(position, 0, nombre);
  console.log(tableau);
})(10, [0, 1, 2, 4, 5, 6, 7, 8, 9]);