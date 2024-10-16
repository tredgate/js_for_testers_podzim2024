//foreach_learning.js
let elements = ["button", "input", "radio"];

// ? array: množné číslo v názvu, ve forEach parametr value: jednotné číslo array (values -> value)
elements.forEach((element) => {
  console.log("Element z array elements: " + element);
});

//forEach s indexem
elements.forEach((element, index) => {
  console.log(`Běží foreach, ${index + 1}. cykl, hodnota: ${element}`);
});

/*
Vytvořte ve složce: src/exercise soubor: foreach_exercise.js
Vytvořte array: cities
Tuto array naplňte alespoň pěti string hodnotami
Vytvořte forEach, který postupně vypíše hodnoty z array cities
 */
