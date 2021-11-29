// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
//   (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

// metodo senza funzioni
let scelta = prompt ('preferisci pari o dispari?');
let numUser = parseInt(prompt ('insersci un numero da 1 a 5'));
let sum ='';
console.log ('hai scelto: ' + scelta);
console.log ("numero scelto dall'utente: " + numUser);
let numPc = parseInt((Math.floor(Math.random() * 5) + 1));
console.log('numero scelto dal pc: ', numPc);
sum = numUser + numPc;
console.log('la somma dei due numeri è: ' + sum);
if (sum % 2==0) {
  console.log('il numero sommato è pari');
} else {
  console.log('il numero sommato è dispari');
}

if (sum % 2 == 0 && scelta == "pari" || sum % 2 != 0 && scelta == "dispari") {
  console.log("Ha vinto l'utente");
} else {
  console.log('Ha vinto il PC');
}