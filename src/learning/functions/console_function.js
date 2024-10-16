//console_function.js
// Místo na jakém je funkce nadefinovaná nezáleží, můžeme ji volat odkudkoliv z modulu (soubor)
logText();

function logText() {
  console.log("Ahoj světe!");
}

logText();
logText();
logText();

function logTextParameter(textParameter) {
  console.log("Předaný parametr: " + textParameter);
}

logTextParameter("Programujeme v Javascriptu!");
