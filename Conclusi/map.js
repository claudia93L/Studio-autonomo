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
const stringhe = ['mela', 'banana', 'cetriolo', 'dado', 'elefante'];

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

// MAP - Array

//   Data un'array di numeri, usa map() per ottenere un nuovo array contenente i quadrati di ciascun numero.

const numeriQuadrati = numeri.map((el) => el * el);
//console.log(numeriQuadrati);

//   Crea un nuovo array che contenga la lunghezza di ciascuna stringa nell'array di stringhe.

const lunghezzaStringhe = stringhe.map((el) => el.length);

//console.log(lunghezzaStringhe);

//   Usa map() per ottenere un nuovo array con le stringhe maiuscole a partire da un array di stringhe iniziale.

const stringheMaiuscole = stringhe.map((el) => el.toUpperCase());

//console.log(stringheMaiuscole);

//   Data un'array di temperature in gradi Celsius, usa map() per convertirle in gradi Fahrenheit.

const gradiCelsius = [30, 38.5, 24, 22, 15];

const gradiFahrenheit = gradiCelsius.map((el) => el * (9 / 5) + 32);

//console.log(gradiFahrenheit);

//   Crea un nuovo array contenente la radice quadrata di ciascun numero in un array di numeri.

const radiceQuadrata = numeri.map((el) => Math.sqrt(el));

//console.log(radiceQuadrata);

//   Usa map() per raddoppiare ciascun numero in un array di numeri.

const numeriRaddoppiati = numeri.map((el) => el * 2);

//console.log(numeriRaddoppiati);

//   Data un'array di booleani, usa map() per ottenere un nuovo array con il valore opposto (true diventa false e viceversa).

const booleani = [true, true, false, true, false, false, false];

const booleaniInversi = booleani.map((el) => {
  if (el === true) {
    return (el = false);
  } else {
    return (el = true);
  }
});

//console.log(booleaniInversi);

// MAP - Array di oggetti

//   Usa map() per ottenere un nuovo array che contenga la data in formato lungo (es. "15 agosto 2023") a partire da un array di oggetti evento.

/*
  const date = new Date(2009, 10, 10);  // 2009-11-10
  const month = date.toLocaleString('default', { month: 'long' });

  const options = { day: 'numeric', month: 'long', year: 'numeric' };: Questo definisce un oggetto options contenente le opzioni per il formato della data nel metodo toLocaleString(). In questo caso, stiamo specificando che vogliamo visualizzare il giorno come numero, il mese come nome completo e l'anno come numero.

  const dataLunga = data.toLocaleString('it-IT', options);: Questa è la chiamata al metodo toLocaleString(). Prende come argomenti la localizzazione ('it-IT' per l'italiano in Italia) e le opzioni di formattazione specificate in options. Questo metodo restituisce la rappresentazione della data come stringa formattata in base alle opzioni specificate.
*/

const dateLunghe = eventi.map((el) => {
  // creo una data a partire dalla stringa dell'array di oggetti
  const data = new Date(el.data);
  const dataLunga = data.toLocaleString(
    'default',
    ('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
  );
  return dataLunga;
});

//console.log(dateLunghe);

//   Modifica l'array libri in modo che restituisca un nuovo array contenente solo i titoli dei libri.

const titoliLibri = libri.map((el) => el.titolo);

//console.log(titoliLibri);

//   Crea un nuovo array contenente gli indirizzi email degli utenti nell'array utenti.

const emailUtenti = utenti.map((el) => el.email);

//console.log(emailUtenti);

//   Usa map() per creare un nuovo array contenente solo i nomi dei prodotti dall'array prodotti.

const nomiProdotti = prodotti.map((el) => el.nome);

//console.log(nomiProdotti);

//   Crea un nuovo array contenente solo i nomi delle città dall'array citta.

const nomiCitta = citta.map((el) => el.nome);

//console.log(nomiCitta);

//   Calcola la media dei punteggi in matematica degli studenti nell'array studenti e restituisci un array con le medie.

// utilizzo map per estrarre i punteggi
const mediaPunteggiMatematica = studenti.map((el) => el.matematica);

// con reduce calcolo il totale dei voti dei vari studenti
const sommaPunteggi = mediaPunteggiMatematica.reduce(
  (accumulatore, punteggio) => accumulatore + punteggio,
  0
);

const media = sommaPunteggi / studenti.length;

//console.log(media);

//   Usa map() per ottenere un nuovo array contenente solo gli ID degli ordini dall'array ordini.

const idOrdini = ordini.map((el) => el.id);

//console.log(idOrdini);

//   Crea un nuovo array contenente solo i nomi degli eventi dall'array eventi.

const nomiEventi = eventi.map((el) => el.nome);

//console.log(nomiEventi);

//   Modifica l'array articoli in modo che restituisca un nuovo array contenente solo i nomi degli articoli in vendita.

const nomiArticoliInVendita = articoli.map((el) => {
  if (el.inVendita === true) {
    return el.nome;
  } else {
    return 'Articolo fuori serie';
  }
});

//console.log(nomiArticoliInVendita);

//   Usa map() per ottenere un nuovo array contenente solo gli anni di pubblicazione dei libri nell'array libri.

const anniLibri = libri.map((el) => el.pubblicazione);

//console.log(anniLibri);

//   Crea un nuovo array contenente solo i prezzi dei prodotti nell'array prodotti.

const prezziProdotti = prodotti.map((el) => el.prezzo);

console.log(prezziProdotti);
