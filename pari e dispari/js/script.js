// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
//   (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

// metodo senza funzioni

// faccio scegliere all'utente se preferisce pari o dispari
let scelta = prompt ('preferisci pari o dispari?');

// faccio inserire all'utente un numero tra 1 e 5
let numUser = parseInt(prompt ('insersci un numero da 1 a 5'));

// dichiaro la variabile sum che mi servirà per fare la somma dei due numeri
let sum ='';

// stampo la scelta pari o dispari
console.log ('hai scelto: ' + scelta);

// stampo il numero scelto dall'utente
console.log ("numero scelto dall'utente: " + numUser);

// dichiaro e uso la funzione per generare numeri random da 1 a 5
let numPc = parseInt((Math.floor(Math.random() * 5) + 1));

// stampo il numero random
console.log('numero scelto dal pc: ', numPc);

// sommo il numero random con il numero scelto dall'utente
sum = numUser + numPc;

// stampo la somma
console.log('la somma dei due numeri è: ' + sum);

// se la somma è pari allora
if (sum % 2==0) {
  console.log('il numero sommato è pari');
} else { // altrimenti
  console.log('il numero sommato è dispari');
}

// se la somma è pari e l'utente ha scelto pari o se la somma è dispari e l'utente ha scelto dispari allora
if (sum % 2 == 0 && scelta == "pari" || sum % 2 != 0 && scelta == "dispari") {
  console.log("Ha vinto l'utente");
} else { //altrimenti
  console.log('Ha vinto il PC');
}