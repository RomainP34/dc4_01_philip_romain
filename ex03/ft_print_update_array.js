/*Écrire une fonction qui reçoit un tableau de chiffre en paramètre, qui
ajoute plus un à la valeur de chaque cellule et qui affiche le tableau
mis à jour.*/

(function(updateArray) {
  for (var i = 0; i < updateArray.length; i++) {
    updateArray[i]++;
  }
  console.log(updateArray);
})([1, 2, 3, 4, 5]);