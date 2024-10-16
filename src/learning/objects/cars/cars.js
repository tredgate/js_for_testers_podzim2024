import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint("Červená", "1.4TDI", "Diesel");
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina");
electricCar.logCarProperties();
dieselCar.logCarProperties();
electricCar.repaint("Šedá"); //přebarví pouze electricCar, dieselCar zůstane nezměněný
electricCar.logCarProperties();
dieselCar.logCarProperties();
console.log("Elektrické auto má barvu: " + electricCar.getColor());

const secondElectricCar = electricCar;
secondElectricCar.repaint("Růžová");
electricCar.logCarProperties();
/*
V souboru cars.js na konec souboru vytvořte nový objekt z CarBlueprint
Barva: Modrá
Motor: EV 160kW
Fuel: Elektřina
Vytvořte volání funkce logCarProperties na novém objektu.
*/
