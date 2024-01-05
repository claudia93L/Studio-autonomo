// TEST DATA 1: [5, 2, 4, 1, 5, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// ESERCIZIO 1

// creare due array contenenti età di cani (5 in ognuno) -> dogsJulia e dogsKate
// un cane è adulto se ha almeno 3 anni
/* crea una funzione checkDogs che accetti 2 array con le età, e fa queste cose:
    1. Julia -> il proprietario del primo e degli ultimi due cani hanno gatti, non cani:
        -crea una copia dell'array e rimuovi le età dei gatti
    2. crea un array che contenga le età corrette di Julia e di Kate
    3. per ogni cane rimanente, console.log se è un adulto o un cucciolo -> "Dog number 2 is an adult and has 5 years old" oppure "Dog number 3 is still a puppy"
*/

const dogsJulia = [5, 2, 4, 1, 5, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  //con slice rimuovo le età dei gatti e creo una copia dell'array
  const checkedJuliaDogs = dogsJulia.slice(1, -2);

  // unisco i due array in uno solo
  const dogsAges = [...checkedJuliaDogs, ...dogsKate];

  dogsAges.forEach((dog, i) => {
    console.log(
      `Dog number ${i + 1} is ${
        dog >= 3 ? 'an adult' : 'still a puppy'
      } and has ${dog} years old`
    );
  });
};

checkDogs(dogsJulia, dogsKate);

// ESERCIZIO 2
// utilizzando gli array dell'esercizio 1, converti le età dei cani in anni umani e calcola l'età media dei cani
/* 1. crea una funzione chiamata calcAverageHumanAge che accetti un array e faccia: 
    -formula di calcolo:
        -dog <= 2 allora humanAge = 2 * dogAge
        -dog > 2 allora humanAge = 16 + dogAge * 4
    2. escludi tutti i cani che hanno meno di 18 anni umani
    3. calcola l'età media umana per tutti i cani adulti
*/

function calcAverageHumanAge(dogsAges) {
  // con map converto l'età dei cani in età umana
  // con filter rimuovo tutti i cani che hanno meno di 18 anni umani
  const humanAges = dogsAges
    .map((dogAge) => {
      if (dogAge <= 2) {
        return 2 * dogAge;
      } else {
        return 16 + dogAge * 4;
      }
    })
    .filter((humanAge) => humanAge >= 18);
  // sommo le età umane
  const summedAges = humanAges.reduce((acc, humanAge) => acc + humanAge, 0);

  console.log('Le età dei cani convertite in anni umani sono ' + humanAges);
  // ricavo la media delle età umane
  console.log(
    `La media di anni umani è pari a ${Math.floor(
      summedAges / humanAges.length
    )}`
  );
}

calcAverageHumanAge(dogsJulia);
calcAverageHumanAge(dogsKate);

// ESERCIZIO 3
// riscrivi la funzione calcAverageHumanAge utilizzando un arrow function

const calcAverageHumanAge = (dogsAges) => {
  const humanAges = dogsAges
    .map((dogAge) => {
      if (dogAge <= 2) {
        return 2 * dogAge;
      } else {
        return 16 + dogAge * 4;
      }
    })
    .filter((humanAge) => humanAge >= 18);

  const summedAges = humanAges.reduce((acc, humanAge) => acc + humanAge, 0);

  console.log('Le età dei cani convertite in anni umani sono ' + humanAges);
  console.log(
    `La media di anni umani è pari a ${Math.floor(
      summedAges / humanAges.length
    )}`
  );
};
