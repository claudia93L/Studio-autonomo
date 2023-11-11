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

// FILTER - Array di oggetti

// Filtra oggetti con una proprietà specifica: Data un'array di oggetti rappresentanti libri, filtra gli oggetti per trovare i libri che sono stati pubblicati dopo il 2000.

const libriMillennio = libri.filter((el) => el.pubblicazione > 2000);

//console.log(libriMillennio);

// Filtra oggetti in base a una stringa: Dato un'array di oggetti che rappresentano utenti, filtra gli utenti che hanno una email che contiene la parola "gmail".
const mailGmail = utenti.filter((el) => el.email.includes('gmail'));

//console.log(mailGmail);

// Filtra oggetti con proprietà multiple: Data un'array di oggetti che rappresentano prodotti, filtra i prodotti che sono in stock (proprietà "inStock" è true) e costano meno di $50 (proprietà "prezzo" è inferiore a $50).

const prodottiInStock = prodotti.filter((el) => el.inStock === true);

//console.log(prodottiInStock);

// Filtra oggetti con proprietà composte: Data un'array di oggetti che rappresentano città, filtra le città che si trovano in un determinato paese (proprietà "paese" corrisponde al paese desiderato).

const cittaItaliane = citta.filter((el) => el.paese === 'Italia');

//console.log(cittaItaliane);

// Filtra oggetti con condizioni complesse: Data un'array di oggetti che rappresentano studenti, filtra gli studenti che hanno ottenuto un punteggio superiore a 80 in matematica e un punteggio superiore a 90 in scienze.

const studentiMigliori = studenti.filter(
  (el) => el.matematica > 80 && el.scienze > 90
);

//console.log(studentiMigliori);

// Filtra oggetti con un array di valori: Data un'array di oggetti che rappresentano ordini, filtra gli ordini che hanno uno stato specifico, ad esempio "spedito" o "in sospeso".

const ordiniSpeditiSospesi = ordini.filter(
  (el) => el.stato === 'spedito' || el.stato === 'in sospeso'
);

//console.log(ordiniSpeditiSospesi);

// Filtra oggetti con una data specifica: Data un'array di oggetti che rappresentano eventi, filtra gli eventi che si svolgono in una data specifica (proprietà "data" corrisponde alla data desiderata).

const eventiGiornata = eventi.filter((el) => el.data === '2023-08-25');

//console.log(eventiGiornata);

// Filtra oggetti con una proprietà booleana: Data un'array di oggetti che rappresentano articoli, filtra gli articoli che sono in vendita (proprietà "inVendita" è true).

const articoliDisponibili = articoli.filter((el) => el.inVendita === true);

//console.log(articoliDisponibili);
