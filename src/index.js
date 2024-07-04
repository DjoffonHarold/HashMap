import LinkedList from "./Linkedlist";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> null
console.log(list.size()); // 3
console.log(list.getHead().value); // 1
console.log(list.getTail().value); // 3
console.log(list.at(1).value); // 2
list.pop();
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> null
console.log(list.contains(2)); // true
console.log(list.find(1)); // 0
list.insertAt(4, 1);
console.log(list.toString()); // ( 1 ) -> ( 4 ) -> ( 2 ) -> null
list.removeAt(1);
console.log(list.toString()); // ( 1 ) -> ( 2 ) -> null
/*
const list = new LinkedList();: Crée une nouvelle instance de LinkedList.
list.append(1); list.append(2); list.append(3);: Ajoute les valeurs 1, 2, et 3 à la liste.
console.log(list.toString());: Affiche la représentation en chaîne de la liste.
console.log(list.size());: Affiche la taille de la liste.
console.log(list.getHead().value);: Affiche la valeur du premier nœud.
console.log(list.getTail().value);: Affiche la valeur du dernier nœud.
console.log(list.at(1).value);: Affiche la valeur du nœud à l'index 1.
list.pop();: Supprime le dernier nœud.
console.log(list.toString());: Affiche la nouvelle représentation en chaîne de la liste.
console.log(list.contains(2));: Vérifie si la liste contient la valeur 2.
console.log(list.find(1));: Affiche l'index du nœud contenant la valeur 1.
list.insertAt(4, 1);: Insère la valeur 4 à l'index 1.
console.log(list.toString());: Affiche la nouvelle représentation en chaîne de la liste.
list.removeAt(1);: Supprime le nœud à l'index 1.
console.log(list.toString());: Affiche la nouvelle représentation en chaîne de la liste.
*/