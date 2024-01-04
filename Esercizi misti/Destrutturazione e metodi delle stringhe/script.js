'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*   Delayed Departure from FAO to TXL (11h25)
  ----arrival
 */

let flightsArray = [];

// converto la stringa in array, separando i singoli valori quando trovo ;
function separateFlights(flights) {
  flightsArray = flights.split('+');
  //console.log(flightsArray);
  return flightsArray;
}

function separateInfos() {
  for (const flight of flightsArray) {
    const [type, from, to, time] = flight.split(';');
    console.log(
      `${type} from ${airportName(from)} to ${airportName(to)} (${convertTime(
        time
      )})`
    );
  }
}

function airportName(airport) {
  const airportName = airport.slice(0, 3).toUpperCase();
  return airportName;
}

function convertTime(time) {
  const timeFormat = `${time.slice(0, 2)}h${time.slice(3, 5)}`;
  return timeFormat;
}

// rimpiazzo tutti gli _ con uno spazio, rimpiazzo tutti i + con ; per poter separare le parole con lo split della funzione e uso trim per eliminare gli spazi iniziali e finali delle parole
separateFlights(flights.replaceAll('_', ' ').trim());
separateInfos(flightsArray);
