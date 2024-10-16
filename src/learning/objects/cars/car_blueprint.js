export class CarBlueprint {
  constructor(color, engine, fuel) {
    this.color = color; // ? nastavujeme property this.color, přiřazujeme hodnotu parametru color
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = 4;
    console.log(
      `Auto bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
  }

  logCarProperties() {
    console.log(
      `Informace o autě:\n\tbarva: ${this.color},\n\tmotor:${this.engine},\n\tpalivo: ${this.fuel}, \n\tpočet kol: ${this.wheels}`
    );
  }

  repaint(newColor) {
    console.log(`Auto bylo přebarveno z ${this.color} na ${newColor}`);
    this.color = newColor;
  }

  getColor() {
    return this.color;
    console.log("Toto se nikdy nevypíše");
    // Příkazy za returnem se nevyhodnotí, protože return ukončuje metodu.
  }
}
