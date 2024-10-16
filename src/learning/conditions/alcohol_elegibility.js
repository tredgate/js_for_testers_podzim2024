//conditions
//alcohol_elegibility.js
const actualAge = -50;
const drinkingAgeLimit = 18;
const fullName = "Marie Nová";
const sex = "F";
let addressing;

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`);
} else if (actualAge >= 0) {
  if (sex == "F") {
    addressing = "jí";
  } else {
    addressing = "mu";
  }

  console.log(
    `${fullName} ještě nemůže pít alkohol, chybí ${addressing} ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.log("CHYBA: věk musí být kladný nebo 0");
}

// operátor ===
// * operátor == porovnává pouze hodnotu, například: 5 == "5" <-- true
// * operátor === porovnává jak hodnotu, tak její typ 5 === "5" <-- false

// rozhodnutí jestli je číslo sudé
let comp = 4;
if (comp % 2 == 1) {
  // ? Vydělí proměnnou comp 2 a zjistí zbytek (3 / 2 = 1, zbytek 1 po dělení)
  console.log(`číslo ${comp} je liché`);
} else {
  console.log(`číslo ${comp} je sudé`);
}

// Logické operátory
/*
2 výroky:
výroky: a, výroky: b
logický součin: a && b, tak výrok a musí být pravdivý, výrok b také musí pravdivý aby celkový výrok byl pravdivý
if(username.isUnique() && password.isSequre()) {
 oba výroky musí být pravidé, aby se tento blok provedl
}

Logický součet: a || b - a nebo b musí být pravdivé
if(birthNumber != null || ico != null) {
   musí být vyplněné rodné číslo nebo ičo.
}
*/

// ? Zadání úkolu:
/*
Cvičení (zde bude časovač: ⌛10:00):
Vytvořte program, který bude vyhodnocovat, jestli má student dostatek bodů k úspěšnému ukončení studia.
Program ulož do složky: src/exercise
Název souboru: student_absolvent.js

Vstupy: 
Počet bodů studenta.
Jméno studenta.

Hodnocení:
Minimální počet bodů pro úspěch: 75

Výsledek zaloguj srozumitelně do konzole s jménem.
Výzva:
Přidej možnost červeného diplomu do programu. Podmínka pro získání červeného diplomu je minimální počet bodů: 95
Program rozšiř tak, aby stále fungoval i pro předchozí podmínku


*/
