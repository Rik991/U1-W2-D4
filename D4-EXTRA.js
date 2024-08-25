// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(arrayNumRandom) {
  arrayNumRandom = giveMeRandom(10);
  let majorFive = 0;
  for (let i = 0; i < arrayNumRandom.length; i++) {
    if (arrayNumRandom[i] > 5) {
      majorFive += arrayNumRandom[i];

      console.log(arrayNumRandom[i], "valore maggiore di 5");
    } else {
      console.log(arrayNumRandom[i], "valore minore o uguale a 5");
    }
  }
  console.log("la somma di tutti i valori maggiori di 5 è " + majorFive);
}

checkArray();

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart = [
  {
    price: 10,
    name: "crocchette",
    id: 1234,
    quantity: 3
  },
  {
    price: 100,
    name: "speaker Yamaha",
    id: 3215,
    quantity: 2
  },
  {
    price: 8,
    name: "guitar strings",
    id: 6660,
    quantity: 5
  },
  {
    price: 59,
    name: "PCGAME Elden Ring",
    id: 6480,
    quantity: 1
  },
  {
    price: 79,
    name: "toolbox",
    id: 1234,
    quantity: 1
  }
];

function shoppingCartTotal(itemPrice = 0) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    itemPrice = shoppingCart[i].price * shoppingCart[i].quantity;
    total += itemPrice;
  }
  console.log("Il totale del tuo carrello è", total);
  return total;
}

shoppingCartTotal();

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = function (newObj) {
  shoppingCart.push(newObj);
  return shoppingCart.length;
};

const newItem = {
  price: 300,
  name: "monitor",
  id: 7562,
  quantity: 1
};
const newItem1 = {
  price: 250,
  name: "desktop",
  id: 7575,
  quantity: 1
};

addToShoppingCart(newItem);
console.log(addToShoppingCart(newItem1));
console.log(shoppingCart);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(shoppingCartArray = []) {
  //creo una funzione che accetta come parametro un array
  let mostExapnsive = shoppingCartArray[0]; // creo una variabile che trasformo nel primo oggetto dell'array fornito
  for (let i = 0; i < shoppingCartArray.length; i++) {
    //ciclo l'array fornito
    if (shoppingCartArray[i].price > mostExapnsive.price) {
      // se il prezzo dell'elemento (nellìarray fornito) è maggiore di quello precedente
      mostExapnsive = shoppingCartArray[i]; //allora salva l'oggetto con quel prezzo maggiore in mostExpansive
    }
  }

  return mostExapnsive;
}

console.log(maxShoppingCart(shoppingCart)); //chiamo la funzione creata con in pasto l'array fornito, tutto all'interno del console log per avere un riscontro immediato

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function (shoppingCartArray) {
  let lastItem = shoppingCartArray.pop();
  return lastItem;
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (numeroX) {
  if (numeroX >= 0 && numeroX <= 9) {
    // controllo che il numeroX sia compreso tra zero e nove
    let i = 0; //dichiaro l'indice che userò nel ciclo while
    while (i < 3) {
      //usiamo un ciclo while perchè non sempre dovremo incrementare l'indice, ma solo quando troverà corrispondenza con la sua condizione
      let randomNumber = Math.floor(Math.random() * 10); // genero un numero random da 0 a 9
      console.log(randomNumber); //stampo i numeri casuali generati finchè:

      if (randomNumber > numeroX) {
        //se il numero casuale è maggiore del numero fornito
        i++; //allora incrementa la i (fino ad un massimo di altri due come da condizione while (i < 3))
      } else {
        //altrimenti continua a cercare (riporta la i a 0)
        i = 0;
      }
    }
  } else {
    console.log("devi inserire un numero da 0 a 9");
  }
};

loopUntil(1);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayX = [5, 8, "Ciao", 7, true, "stringa", 10, false]; //creo un array con tipi di elementi misti

function average(arrayY) {
  let arraySoloNumeri = [];
  for (let i = 0; i < arrayY.length; i++) {
    //ciclo l'array fornito e filtro solo i numeri, quindi li inserisco in un nuovo array
    if (typeof arrayY[i] === "number") {
      arraySoloNumeri.push(arrayY[i]);
    }
  }
  let somma = 0;
  for (let i = 0; i < arraySoloNumeri.length; i++) {
    //faccio un ciclo per sommare tutti i numeri ricavati nell'array e poi li divido per quanti sono ottenendo la media
    somma += arraySoloNumeri[i];
  }
  let media = somma / arraySoloNumeri.length;
  return media;
}

console.log(average(arrayX));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const arrayString = ["Ciao", "Hello", "Hola", "Konnichiwa"];

function longest(arrayStr) {}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
