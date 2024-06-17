/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Ci sono 5 tipi di datatype primitivi:
1.Stringhe-indicano sia il singolo carattere che la sequenza finita di caratteri.Vengono definite tramite l'utilizzo degli apici doppi o singoli, quindi se un numevo viene scritto tra le apici, verrà letto come una stringa.
ex: let testo = "Ciao"; let testo ='Ciao'; let numero = "10";
2.Numerico-viene scritto senza apici, e indica la descrizione tra un numero intero e decimale. Il numero decimale si esprime con il punto.
ex: const numero = 125.5;
3.Booleano-rapresenta la base logica delle strutture cicliche e ammette due soli valori: true o false. é utile per fare prendere delle decisioni al nostro codice.
ex: const veroOFalso = true;
4.Null- è utilizzata per segnalare l'assenza intenzionale di un valore e si usa per svuotare una variabile.
ex: let nome = null;
5.Undefined- indica che al momento la variabile non ha un valore assegnato.
ex: let nome ="";*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Diana";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Friptuleac";
console.log(myName); //nuovo valore alla variabile "myName"

const myNAme = "Diana";
//myNAme = "Friptuleac";
//console.log(myNAme); //variabile const.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";

const verifica1 =
 name1 === name2 ? 'La verifica è true' : 'La verifica è false';
 console.log(verifica1);
