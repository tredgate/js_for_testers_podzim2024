// switch_calculator.js;
const operation = "divide";
const a = 50;
const b = 0;
let result;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    if (b != 0) {
      result = a / b;
    } else {
      throw new Error("Není možno dělit nulou!");
    }
    break;
  default:
    throw new Error("Invalid operation");
}

console.log(`Výsledek operace: ${operation} je: ${result}`);

/*
Cvičení - semafor (⌛14:39):
Vytvořte nový program ve složce src/exercise, program pojmenujte: traffic_light_switch.js
Vytvořte switch switchTrafficLight, která simuluje chování semaforu.
Switch bude přijímat jeden parametr: budoucí stav semaforu ('red', 'yellow', 'green').
Podle budoucího stavu switche rozhodne a nastaví barvu semaforu:
green: změní na 'green'
yellow: změní na 'yellow'
red: změní na 'red'
Pokud je vstup neplatný, vrátí 'Neznámý stav'.
Výstup bude v console.log s popisem stavu.

Výzva:
Rozšiřte předchozí cvičení o validaci přechodu stavů
Nevalidní přechody stavů: zelená -> červená, červená -> zelená
V případě zavolání nevalidního přechodu, aplikace zaloguje chybu v rámci console.log.

*/
