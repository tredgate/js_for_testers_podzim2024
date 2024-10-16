let firstName = "Adam";
console.log(firstName);
console.log("firstName");
console.log(firstName);
console.log(firstName);
console.log(firstName);
firstName = "Alžběta";
console.log(firstName);
firstName = "Radek";
console.log(firstName);

let českéJméno = "František";
console.log(českéJméno);

// * Typ proměnné var
if (true) {
  var x = "text";
}

console.log(x);

//redeklarace var
var x = "redeklarace var";
console.log(x);

var varName;
varName = "var jméno";
console.log(varName);
varName = "jiné var jméno";

// * Typ proměnné let
if (true) {
  let y = "text let";
}

// ! chyba y is not defined: console.log(y);

let redeclaratedLet = "nějaký let";
// ! není možné: let redeclaratedLet
let letName = "jméno let";
letName = "jiný let";
console.log(letName);

let emptyLet;
emptyLet = "naplněno";

console.log(emptyLet);

// * Typ proměnné const
if (true) {
  const z = "text const"; // poznámka za řádkem
}

// ! chyba z is not defined: console.log(z);

const redeclaratedConst = "const value";
// ! není možné: const redeclaratedConst

const constName = "Neměnná konstanta";
// ! Není možné přiřazovat jinou hodnotu: constName = "Něco jiného";
console.log(constName);

// ! Musím vždy inicializovat, toto nebude fungovat: const emptyConst;

/*
Toto
je 
víceřádková
poznámka
*/

/**
 * Toto je dokumentace funkce/metody
 * **Markdown bolt**
 */
function someFunction() {
  console.log("něco");
}

someFunction();
