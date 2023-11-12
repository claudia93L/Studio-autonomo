const libri = [
  { titolo: 'Libro 1', pubblicazione: 2005 },
  { titolo: 'Libro 2', pubblicazione: 1998 },
  { titolo: 'Libro 3', pubblicazione: 2010 },
  { titolo: 'Libro 4', pubblicazione: 1995 },
  { titolo: 'Libro 5', pubblicazione: 2022 },
];

const utenti = [
  { nome: 'Alice', email: 'alice@gmail.com' },
  { nome: 'Bob', email: 'bob@yahoo.com' },
  { nome: 'Charlie', email: 'charlie@gmail.com' },
  { nome: 'David', email: 'david@gmail.com' },
  { nome: 'Eva', email: 'eva@yahoo.com' },
];

const prodotti = [
  { nome: 'Prodotto A', prezzo: 45, inStock: true },
  { nome: 'Prodotto B', prezzo: 55, inStock: false },
  { nome: 'Prodotto C', prezzo: 30, inStock: true },
  { nome: 'Prodotto D', prezzo: 60, inStock: false },
  { nome: 'Prodotto E', prezzo: 40, inStock: true },
];

const citta = [
  { nome: 'Roma', paese: 'Italia' },
  { nome: 'Parigi', paese: 'Francia' },
  { nome: 'New York', paese: 'Stati Uniti' },
  { nome: 'Londra', paese: 'Regno Unito' },
  { nome: 'Berlino', paese: 'Germania' },
];

const studenti = [
  { nome: 'Alice', matematica: 85, scienze: 92 },
  { nome: 'Bob', matematica: 75, scienze: 88 },
  { nome: 'Charlie', matematica: 90, scienze: 85 },
  { nome: 'David', matematica: 70, scienze: 96 },
  { nome: 'Eva', matematica: 88, scienze: 78 },
];

const ordini = [
  { id: 1, stato: 'spedito' },
  { id: 2, stato: 'in sospeso' },
  { id: 3, stato: 'completato' },
  { id: 4, stato: 'spedito' },
  { id: 5, stato: 'in sospeso' },
];

const eventi = [
  { nome: 'Evento A', data: '2023-08-15' },
  { nome: 'Evento B', data: '2023-09-20' },
  { nome: 'Evento C', data: '2023-07-10' },
  { nome: 'Evento D', data: '2023-08-25' },
  { nome: 'Evento E', data: '2023-10-05' },
];

const articoli = [
  { nome: 'Articolo A', inVendita: true },
  { nome: 'Articolo B', inVendita: false },
  { nome: 'Articolo C', inVendita: true },
  { nome: 'Articolo D', inVendita: false },
  { nome: 'Articolo E', inVendita: true },
];

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array di stringhe
const stringhe = ['mela', 'banana', 'cetriolo', 'dado', 'elefante', 'mela'];

// Array di stringhe e numeri
const stringheENumeri = [
  'uno',
  2,
  'tre',
  4,
  'cinque',
  1,
  'due',
  3,
  'quattro',
  5,
];

const arrayDate = [
  '2023-08-15',
  '2023-09-20',
  '2023-07-10',
  '2023-08-25',
  '2023-10-05',
];
// REDUCE - Array

//   Calcola la somma di tutti i numeri in un array di numeri utilizzando reduce().

const somma = numeri.reduce((somma, numero) => somma + numero, 0);

//console.log(somma);

//   Trova il numero più grande in un array di numeri utilizzando reduce().

const numMax = numeri.reduce(
  (maggiore, numero) => Math.max(maggiore, numero),
  0
);

//console.log(numMax);

//   Concatena tutte le stringhe in un array di stringhe utilizzando reduce().

/* 

Aiuto di Chat sulla scrittura del valore iniziale con stringhe vuote

Valore iniziale pari a stringa vuota '' perchè sto usando concat. Quando si inizia con una stringa vuota come accumulatore, si garantisce che il risultato finale sia una stringa, poiché la concatenazione di una stringa con qualsiasi altro tipo di dato restituirà una stringa.

*/

const stringheUnite = stringhe.reduce(
  (accumulatore, stringa) => accumulatore.concat(stringa),
  ''
);

//console.log(stringheUnite);

//   Calcola il prodotto di tutti i numeri in un array di numeri utilizzando reduce().

//Se inizializzassi l'accumulatore a 0, ogni moltiplicazione successiva sarebbe influenzata da quel 0, e il risultato finale sarebbe sempre 0. Si deve quindi partire da 1
const prodottoNumeri = numeri.reduce(
  (prodotto, numero) => prodotto * numero,
  1
);

//console.log(prodottoNumeri);

//   Trova il numero più piccolo in un array di numeri utilizzando reduce().

const numeroMinore = numeri.reduce((minore, numero) =>
  Math.min(minore, numero)
);

//console.log(numeroMinore);

//   Calcola la somma delle lunghezze delle stringhe in un array di stringhe utilizzando reduce().

const lunghezzaStringhe = stringhe.reduce(
  (lunghezza, stringa) => lunghezza + stringa.length,
  0
);

//console.log(lunghezzaStringhe);

//   Trova il primo numero pari in un array di numeri utilizzando reduce().

/*

Aiuto di Chat sulla scrittura della condizione (numPari === undefined)

con condizione if(numero % 2 === 0) ottengo l'ultimo numero pari presente nell'array

Il motivo per cui ottieni l'ultimo numero pari anziché il primo è che stai sempre restituendo il numero corrente non appena trovi un numero pari. La funzione di riduzione (reduce()) restituirà il risultato dell'ultima chiamata della funzione di riduzione, che nel tuo caso è il numero pari più recentemente trovato.

Per ottenere il primo numero pari, dovresti interrompere la riduzione non appena trovi il primo numero pari. Puoi farlo restituendo il valore corrente dell'accumulatore se hai già trovato il primo numero pari. Ecco come puoi modificarlo:

Nel codice fornito, undefined è utilizzato come valore iniziale dell'accumulatore nella funzione reduce(). Questo è fatto per gestire il caso in cui non è ancora stato trovato alcun numero pari.

Quando la funzione di riduzione viene chiamata per la prima volta, numPari è impostato su undefined. Se viene trovato un numero pari durante la successiva iterazione, numPari viene aggiornato a quel numero e successivamente non sarà più undefined. In sostanza, undefined viene utilizzato come segnaposto per indicare che non è stato ancora trovato alcun numero pari.

Se non fornissimo undefined come valore iniziale e non trovassimo mai un numero pari nell'array, la funzione di riduzione restituirebbe undefined come risultato predefinito. Quindi, l'utilizzo di undefined come valore iniziale ci consente di distinguere tra il caso in cui non è stato trovato alcun numero pari e il caso in cui il primo numero pari è stato trovato e restituito.

*/

const numeroPari = numeri.reduce((numPari, numero) => {
  if (numPari === undefined && numero % 2 === 0) {
    return numero;
  }

  return numPari; // Se ho già trovato il primo numero pari, mantieni lo stesso valore.
}, undefined);

//console.log(numeroPari);

//   Crea una stringa che contenga la concatenazione di tutti gli elementi di un array di stringhe, separati da virgole, utilizzando reduce().

const stringheConcat = stringhe.reduce((stringaUnita, stringa) =>
  stringaUnita.concat(', ', stringa)
);

//console.log(stringheConcat);

//   Calcola la media di tutti i numeri in un array di numeri utilizzando reduce().

/* 
Aiuto di Chat su dove posizionare la divisione

In questo codice, stai sommando tutti i numeri con la funzione di riduzione e poi dividendo la somma per la lunghezza dell'array all'esterno della funzione di riduzione. L'argomento 0 di reduce è il valore iniziale della somma.

*/

const mediaNumeri =
  numeri.reduce((media, numero) => media + numero, 0) / numeri.length;

//console.log(mediaNumeri);

//   Trova il numero di occorrenze di una parola specifica in un array di stringhe utilizzando reduce().

const parolaDaTrovare = 'mela';

const occorrenzaParola = stringhe.reduce((numParole, parola) => {
  if (parola.toLocaleLowerCase === parolaDaTrovare.toLocaleLowerCase) {
    numParole++;
  }

  return numParole;
}, 0);

//console.log(occorrenzaParola);

// REDUCE - Array di oggetti

//   Calcola la somma di tutte le pubblicazioni dei libri nell'array libri utilizzando reduce().

const pubblicationiTotali = libri.reduce(
  (totale, libro) => totale + libro.pubblicazione,
  0
);

//console.log(pubblicationiTotali);

//   Calcola il prezzo totale dei prodotti disponibili in stock nell'array prodotti utilizzando reduce().

const prezzoTotale = prodotti.reduce((totale, prodotto) => {
  if (prodotto.inStock) {
    return totale + prodotto.prezzo;
  }
  return totale;
}, 0);

//console.log(prezzoTotale);

//   Calcola la media dei punteggi in matematica degli studenti nell'array studenti utilizzando reduce().

const mediaMatematica =
  studenti.reduce((media, punteggio) => media + punteggio.matematica, 0) /
  studenti.length;

//console.log(mediaMatematica);

//   Conta quante volte lo stato 'spedito' appare nell'array ordini utilizzando reduce().

const ordiniSpediti = ordini.reduce((totaleSpediti, ordine) => {
  if (ordine.stato === 'spedito') {
    totaleSpediti++;
  }

  return totaleSpediti;
}, 0);

//console.log(ordiniSpediti);

//   Calcola il numero totale di articoli in vendita nell'array articoli utilizzando reduce().

const articoliInVendita = articoli.reduce((totale, articolo) => {
  if (articolo.inVendita) {
    totale++;
  }

  return totale;
}, 0);

//console.log(articoliInVendita);

//   Calcola la somma delle lunghezze delle email degli utenti nell'array utenti utilizzando reduce().

const lunghezzaEmail = utenti.reduce(
  (lunghezzaTotale, utente) => lunghezzaTotale + utente.email.length,
  0
);

//console.log(lunghezzaEmail);
