//moment_timestamps.js
import moment from "moment";

// * Vytvoření aktuální timestamp
const currentTimestamp = moment().format();
console.log(`Aktuální časová značka: ${currentTimestamp}`);

// * Formátování času: MM/DD/YYYY HH:MM AM/PM
const formattedTimestamp = moment().format("MM/DD/YYYY h:mm A");
console.log(`Americký formát času a data: ${formattedTimestamp}`);

// * Přidání 5 dnů k aktuálnímu datu
const futureTimestamp = moment().add(5, "days").format();
console.log(futureTimestamp);

// * Odečtení 5 týdnů k aktuálnímu datu
const pastTimestamp = moment().subtract(5, "weeks").format();
console.log(pastTimestamp);

// * získání aktuálního času
const timeOnly = moment().format("HH:mm:ss");
console.log("Aktuální čas: " + timeOnly);

// * České datum a čas
const czechDateTime = moment().locale("cs").format("LLLL");
console.log(czechDateTime);

// ISO 8601 formát
const isoTimestamp = moment().toISOString();
console.log("ISO 8601 formát: " + isoTimestamp);
