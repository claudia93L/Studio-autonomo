// ARROW FUNCTIONS

/* 

le arrow functions si dichiarano rimuovendo la keyword function, e dichiarando l'arrow function come una variabile. La keyword function viene sostituita dal simbolo della freccia =>
le parentesi graffe si aprono soltanto se si deve svolgere più di un'istruzione (solitamente più di un return) e non è necessario specificare la parola chiave perchè è già un comportamento implicito dell'arrow function

*/

// PARAMETRI RESTO

/* 

I rest parameter ... si inseriscono come parametro di una funzione, con un nome a scelta, e raccoglieranno gli argomenti della funzione inseriti all'interno di un'array utilizzabile all'interno della funzione

Dev'essere sempre in posizione finale in presenza di altri parametri, perchè raccoglie quelli in eccesso/restanti

Caso d'uso -> L’operatore parametri di resto viene utilizzato per creare una funzione che accetta un qualsiasi numero di argomenti.

*/

// OPERATORE DI ESPANSIONE

/* 

Lo spread operator espande un array/oggetto in una lista di parametri e successivamente li inserisce in un nuovo array/oggetto.
Questo permette di creare rapidamente una copia dell'array/oggetto con cui dobbiamo lavorare. 
Solitamente si trova all'interno della chiamata di una funzione.

let arrCopy = [...arr];
let objCopy = {...obj};

Caso d'uso: 
 
1. Copiare array -> vedi esempio sopra
2. Unire due o più array -> const arrayUnito = [...array1, ...array2];
3. Passare gli Elementi di un Array a una Funzione -> const risultato = nomeFunc(...arr);
4. Creare un Nuovo Oggetto con Proprietà Aggiuntive -> const nuovoOggetto = { ...oggettoOriginale, key: 'value' };
5. Clonare Oggetti -> vedi esempio sopra

*/

// FILTER

/* 
    Permette di filtrare un array, ritornando in un nuovo array soltanto gli elementi che rispecchiano la condizione specificata

    Se vogliamo cercare più occorrenze, possiamo utilizzare arr.filter(fn).

    La sintassi è pressoché la stessa di find, ma ritorna un array contenente tutte le corrispondenze trovate:

    let results = arr.filter(function(item, index, array) {
      // se un item è true viene messo dentro results e l'iterazione continua
      // ritorna un array vuoto qualora nessun elemento ritornasse true
    });

*/

// FOREACH

/*

Quando vogliamo iterare su un array – possiamo utilizzare forEach, for o for..of.

Consente di eseguire una funzione su ogni elemento dell’array e NON crea un nuovo array. 

Sintassi:

arr.forEach(function(item, index, array) {
  // ... fa qualcosa con l'elemento
});
*/

// MAP

/*

Quando invece abbiamo la necessità di iterare e ritornare dati per ogni elemento – possiamo usare map.

Stessa logica di funzionamento del forEach(), ma ritorna un array con gli elementi ciclati ed eventuali condizioni da rispettare

item -> restituisce il singolo elemento
index -> se lo inserisco come parametro, memorizza l'indice dell'elemento
array -> se lo inserisco come parametro, se richiamato restituisce tutti i dati del nuovo array con le sue eventuali modifiche -> rari casi -> si usa per effettuare controlli o svolgere operazioni all'interno del map

let result = arr.map(function(item, index, array) {
  // ritorna il nuovo valore piuttosto di item
})

La funzione viene chiamata per ogni elemento dell’array e ritorna un array con i risultati.

*/

// SPLICE

/* 

Il metodo arr.splice è un coltellino svizzero per array. Può fare qualsiasi cosa: aggiungere e rimuovere elementi, ovunque.

La sintassi è:

arr.splice(start[, deleteCount, elem1, ..., elemN])

Modifica l’array partendo dall’indice start; rimuove deleteCount elementi ed inserisce elem1, ..., elemN. Infine ritorna un array contenente gli elementi rimossi.

La funzione splice() viene utilizzata per modificare il contenuto di un array rimuovendo o sostituendo elementi esistenti e/o aggiungendone di nuovi. 

es -> numeri.splice(0, 0, 38);

Il primo argomento (0) è l'indice in cui inserire il nuovo elemento (in questo caso, all'inizio dell'array).
Il secondo argomento (0) indica che non vogliamo rimuovere alcun elemento.
Il terzo argomento (38) è il nuovo numero che stiamo aggiungendo.

Quando usi splice() per rimuovere un elemento durante l'iterazione, il tuo array si accorcerà, ma l'indice della tua iterazione continuerà a incrementarsi. Questo porta a risultati imprevisti.

Per evitare questo problema, puoi invertire l'iterazione o utilizzare un ciclo for tradizionale:



*/

// SLICE

/*

La sintassi è:

arr.slice([start], [end])

Ritorna un nuovo array contente tutti gli elementi a partire da "start" fino ad "end" ("end" escluso). Sia start che end possono essere negativi; in tal caso si inizierà a contare dalla coda dell’array.

Funziona come str.slice, ma crea dei sotto-array piuttosto che sotto-stringhe.

*/

// REDUCE

/*

I metodi arr.reduce e arr.reduceRight fanno parte della stessa categoria, ma sono leggermente più complessi. Vengono utilizzati per calcolare un singolo valore basato sul contenuto dell’array.

La sintassi è:

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

La funzione viene applicata ad ogni elemento dell’array uno dopo l’altro, passando il risultato alla chiamata successiva.

Argomenti:

accumulator – è il risultato della precedente chiamata, uguale ad initial per la prima chiamata (se initial viene fornito).
item – è l’attuale elemento dell’array.
index – la sua posizione.
array – l’array.
Quando la funzione è stata applicata, il risultato viene passato alla chiamata successiva.

Sembra complicato, ma non lo è se pensate al primo argomento come un “accumulatore” che memorizza il risultato delle precedenti esecuzioni. E alla fine diventa il risultato di reduce.

Se non c’è un valore iniziale, allora reduce prende il primo elemento dell’array come valore iniziale ed inizia l’iterazione dal secondo elemento. Quindi è fortemente consigliato di specificare sempre un valore iniziale, soprattutto per evitare problemi in caso di array vuoti.

Il metodo arr.reduceRight fa esattamente la stessa cosa, ma da destra verso sinistra.

*/

// FIND E FINDINDEX

/*

Come possiamo trovare un oggetto che soddisfi specifiche condizioni?

In questi casi si utilizza il metodo arr.find, che trova il PRIMO elemento che soddisfa le condizioni specificate

La sintassi è:

let result = arr.find(function(item, index, array) {
  // se viene ritornato true, viene ritornato l'elemento e l'iterazione si ferma
  // altrimenti ritorna undefined
});

La funzione viene chiamata per ogni elemento dell’array:

item è l’elemento.
index è il suo indice.
array è l’array stesso.
Se la chiamata ritorna true, la ricerca viene interrotta e viene ritornato item. Se non viene trovato nulla verrà ritornato undefined.

*/

// EVERY E SOME

/*

Il metodo EVERY verifica se all'interno dell'array tutti gli elementi rispecchiano una data condizione fornita da una funzione e ritorna un valore booleano.

Sintassi:

every(callbackFn)
every(callbackFn, thisArg)

Esempio:

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

Il metodo SOME verifica se all'interno dell'array almeno un valore tra gli elementi rispecchiano una data condizione fornita da una funzine e ritorna un valore booleano

Sintassi: 

some(callbackFn)
some(callbackFn, thisArg)

Esempio: 

const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;

console.log(array.some(even));

*/

// CONCAT

/*

Il metodo arr.concat crea un nuovo array che include valori di altri array, o elementi aggiuntivi.

La sintassi è:

arr.concat(arg1, arg2...)
Accetta un numero arbitrario di argomenti – sia array che valori.

Il risultato è un nuovo array contenente gli elementi di arr, seguiti da arg1, arg2 etc.

Se un argomento argN è un array, tutti i suoi elementi vengono copiati. Altrimenti viene copiato solamente l’argomento stesso.

*/

// SORT, REVERSE, SPLICE

// Da notare che i metodi sort, reverse e splice modificano l’array stesso.

/*

AGGIUNTA E RIMOZIONE ELEMENTI

arr.push(...items) – aggiunge un elemento in coda,
arr.pop() – estrae un elemento dalla coda,
arr.shift() – estrae un elemento dalla testa,
arr.unshift(...items) – aggiunge un elemento in testa.

Vari altri metodi utili:

arr.fill(value, start, end) – riempie l’array con value da start fino a end.

arr.copyWithin(target, start, end) – copia gli elementi da start fino a end dentro se stesso, nella posizione target (sovrascrivendo gli elementi contenuti).

arr.flat(depth)/arr.flatMap(fn) crea un nuovo array monodimensionale partendo da un array multidimensionale.

*/
