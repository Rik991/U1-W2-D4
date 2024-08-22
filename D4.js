/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  let areaRettangolo = l1 * l2;
  return areaRettangolo;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1 = 0, num2 = 0) {
  let risultatoSum = num1 + num2;
  if (num1 === num2) {
    risultatoSum *= 3;
  }
  return risultatoSum;
}

console.log(crazySum());

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(userNum = 0) {
  let risultatoDiff = userNum / 19;
  return Math.abs(risultatoDiff);
}
console.log(crazyDiff(-38));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n = 0) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary("50"));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (userString) {
  if (userString.toUpperCase().startsWith("EPICODE")) {
    return userString;
  } else {
    return "EPICODE " + userString;
  }
};
console.log(epify("epicode prova frase"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numPos) {
  if (numPos > 0) {
    if (numPos % 3 === 0 || numPos % 7 === 0) {
      console.log("complimenti hai trovato un multiplo di 3 o 7");
    } else if (numPos % 3 !== 0 || numPos % 7 !== 0) {
      console.log("non è un multiplo di 3 o 7");
    }
  } else {
    alert("Inserisci un numero positivo");
  }
  // switch (numPos) {
  //   case numPos % 3 === 0:
  //     console.log("complimenti hai trovato un multiplo di 3");
  //     break;
  //   case numPos % 7 === 0:
  //     console.log("complimenti hai trovato un multiplo di 7");
  //     break;
  // }
}

check3and7(10);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(userStr) {
  let arrayProvv = userStr.split("");
  arrayProvv.reverse();
  return arrayProvv.join("");
}
console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(userStr) {
  let arrayStr = userStr.split(" "); // con lo spazio nello split lìarray si riempie di parole e non caratteri.
  let completeSentence = ""; //dichiaro la variabile che mi servirà alla fine del loop
  for (let i = 0; i < arrayStr.length; i++) {
    // ciclo l'array di caratteri
    let singleWord = arrayStr[i]; // dichiaro una variabile dove salvare le singole parole
    let fisrLetter = singleWord.charAt(0).toUpperCase(); //dichiaro una variabile dove salvo la prima lettera della singola parola (charAt(0)) e la rendo maiuscola (toUpperCase)
    let remainigLetter = singleWord.slice(1); // creo una variabile dove salvo il resto delle singole parole escludendo la prima lettera
    let completeWord = fisrLetter + remainigLetter; // concateno in una nuova variabile le due stringhe ottenute sopra (lettera grande + il resto)
    completeSentence += completeWord + " "; // concateno le singole parole in una stringa comprendendo gli spazi
  }
  return completeSentence;
}
console.log(upperFirst("mo funziona, no prima"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (userStr) {
  userStr = userStr.substring(1, userStr.length - 1);
  return userStr;
};
console.log(cutString("prova prima e ultima"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  const arrayRandom = [];
  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    arrayRandom.push(randomNum);
  }
  return arrayRandom;
}
console.log(giveMeRandom(45));
