/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
  (prima senza funzione e poi con funzione) */


// metodo senza funzione
// chiedo all'utente una parola
let parolaUser = prompt ('inserisci una parola');
// dichiaro la variabile della parola scritta al contrario
let parolaContrario = '';

// ciclo for per trovare la parola al contrario
// for (let index = parolaUser.length - 1; index>=0; index--) {
//   parolaContrario += parolaUser[index]; 
// }

// // stampo le due parole
// console.log(parolaUser);
// console.log(parolaContrario);

// // se la parola dell'utente è uguale alla parola scritta al contrario allora
// if (parolaUser == parolaContrario) {
//   console.log('la parola è palindroma');
// } else { // altrimenti
//   console.log('la parola non è palindroma');
// }

// metodo con funzione

function reverseWord(parolaUser) {
  let reverseString = "";
  for (let index = parolaUser.length - 1; index >= 0; index--) {
    reverseString += parolaUser[index];
  }
  return reverseString;
}

console.log(parolaUser);
console.log(reverseWord(parolaUser));


// // se la parola dell'utente è uguale alla parola scritta al contrario allora
if (parolaUser == reverseWord(parolaUser)) {
  console.log('la parola è palindroma');
} else { // altrimenti
  console.log('la parola non è palindroma');
}
