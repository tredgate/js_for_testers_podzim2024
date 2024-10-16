const actualPoints = 74;
const studentName = "Norbert Průměrný";
const pointsToSuccess = 75;

if (actualPoints >= pointsToSuccess) {
  console.log(
    `Student ${studentName} prospěl s ${actualPoints} body. Minimem bylo: ${pointsToSuccess} bodů.`
  );
} else {
  console.log(
    `Student ${studentName} neprospěl s ${actualPoints} body. Minimem bylo: ${pointsToSuccess} bodů, chybělo mu: ${
      pointsToSuccess - actualPoints
    } bodů`
  );
}
