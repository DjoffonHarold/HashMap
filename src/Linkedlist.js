import Node from "./node";

class LinkedList {
    constructor() {
        //Initialise la propriété head de l'objet LinkedList avec null, indiquant que la liste est vide au départ.
      this.head = null;
    }
  //Déclare une méthode append qui ajoute un nouveau nœud à la fin de la liste.
    append(value) {
      const newNode = new Node(value);// Crée un nouvel objet Node avec la valeur donnée.
      if (!this.head) {  //Vérifie si la liste est vide (si head est null).
        this.head = newNode; //Si la liste est vide, le nouveau nœud devient le premier nœud de la liste.
        return;
      }
      let current = this.head; //Si la liste n'est pas vide, initialise current au premier nœud.
      //Parcourt la liste jusqu'au dernier nœud.
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;//Ajoute le nouveau nœud à la fin de la liste.

    }
  // Déclare une méthode prepend qui ajoute un nouveau nœud au début de la liste.
    prepend(value) {
      const newNode = new Node(value, this.head);//rée un nouvel objet Node avec la valeur donnée et lie son next au premier nœud actuel.
      this.head = newNode; //Met à jour head pour que le nouveau nœud devienne le premier nœud de la liste.
    }
  /*size(): Déclare une méthode size qui renvoie le nombre total de nœuds dans la liste.
let count = 0: Initialise un compteur à 0.
let current = this.head: Initialise current au premier nœud.
while (current) { count++; current = current.next; }: Parcourt la liste, incrémente le compteur pour chaque nœud.
return count: Renvoie le nombre total de nœuds.*/
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  /* getHead(): Déclare une méthode getHead qui renvoie le premier nœud de la liste.
return this.head: Renvoie le premier nœud de la liste. */
    getHead() {
      return this.head;
    }
  /* getTail(): Déclare une méthode getTail qui renvoie le dernier nœud de la liste.
if (!this.head) return null: Vérifie si la liste est vide, retourne null si c'est le cas.
let current = this.head: Initialise current au premier nœud.
while (current.next) { current = current.next; }: Parcourt la liste jusqu'au dernier nœud.
return current: Renvoie le dernier nœud de la liste. */
    getTail() {
      if (!this.head) return null;
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  /* at(index): Déclare une méthode at qui renvoie le nœud à une position donnée.
let current = this.head: Initialise current au premier nœud.
let count = 0: Initialise un compteur à 0.
while (current) { if (count === index) return current; count++; current = current.next; }: Parcourt la liste jusqu'à atteindre l'index donné.
return null: Renvoie null si l'index est hors de portée. */
    at(index) {
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index) return current;
        count++;
        current = current.next;
      }
      return null;
    }
  /* pop(): Déclare une méthode pop qui supprime le dernier nœud de la liste.
if (!this.head) return null: Vérifie si la liste est vide, retourne null si c'est le cas.
if (!this.head.next) { this.head = null; return; }: Si la liste a un seul nœud, met head à null.
let current = this.head: Initialise current au premier nœud.
while (current.next.next) { current = current.next; }: Parcourt la liste jusqu'au nœud avant le dernier.
current.next = null: Supprime le dernier nœud. */
    pop() {
      if (!this.head) return null;
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  /* contains(value): Déclare une méthode contains qui vérifie si la liste contient une valeur donnée.
let current = this.head: Initialise current au premier nœud.
while (current) { if (current.value === value) return true; current = current.next; }: Parcourt la liste et retourne true si la valeur est trouvée.
return false: Renvoie false si la valeur n'est pas trouvée.*/
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) return true;
        current = current.next;
      }
      return false;
    }
  /*find(value): Déclare une méthode find qui renvoie l'index du nœud contenant une valeur donnée.
let current = this.head: Initialise current au premier nœud.
let index = 0: Initialise un compteur d'index à 0.
while (current) { if (current.value === value) return index; current = current.next; index++; }: Parcourt la liste et retourne l'index si la valeur est trouvée.
return null: Renvoie null si la valeur n'est pas trouvée.*/ 
    find(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.next;
        index++;
      }
      return null;
    }
  /*toString(): Déclare une méthode toString qui représente la liste sous forme de chaîne.
let result = '': Initialise une chaîne vide pour stocker la représentation.
let current = this.head: Initialise current au premier nœud.
while (current) { result += ( ${current.value} ) -> ; current = current.next; }: Parcourt la liste et construit la chaîne.
return result + 'null': Ajoute null à la fin de la chaîne et la retourne.*/ 
    toString() {
      let result = '';
      let current = this.head;
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.next;
      }
      return result + 'null';
    }
  /*insertAt(value, index): Déclare une méthode insertAt qui insère un nouveau nœud à une position donnée.
if (index === 0) { this.prepend(value); return; }: Si l'index est 0, utilise la méthode prepend.
let current = this.head: Initialise current au premier nœud.
let count = 0: Initialise un compteur à 0.
while (current) { if (count === index - 1) { const newNode = new Node(value, current.next); current.next = newNode; return; } count++; current = current.next; }: Parcourt la liste jusqu'à atteindre l'index donné, insère le nouveau nœud à la position correcte.*/ 
    insertAt(value, index) {
      if (index === 0) {
        this.prepend(value);
        return;
      }
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index - 1) {
          const newNode = new Node(value, current.next);
          current.next = newNode;
          return;
        }
        count++;
        current = current.next;
      }
    }
  /*removeAt(index): Déclare une méthode removeAt qui supprime le nœud à une position donnée.
if (index === 0) { this.head = this.head.next; return; }: Si l'index est 0, met à jour head pour qu'il pointe vers le deuxième nœud.
let current = this.head: Initialise current au premier nœud.
let count = 0: Initialise un compteur à 0.
while (current) { if (count === index - 1 && current.next) { current.next = current.next.next; return; } count++; current = current.next; }: Parcourt la liste jusqu'à atteindre l'index donné, supprime le nœud à la position correcte.*/ 
    removeAt(index) {
      if (index === 0) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let count = 0;
      while (current) {
        if (count === index - 1 && current.next) {
          current.next = current.next.next;
          return;
        }
        count++;
        current = current.next;
      }
    }
  }
  export default  LinkedList