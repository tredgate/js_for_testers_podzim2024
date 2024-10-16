const startSignal = "red";
const nextSignal = "green";
let result;

if (startSignal != "yellow" && startSignal != "red" && startSignal != "green") {
  throw new Error("Invalid startSignal, must be one of: green, yellow, red");
}

switch (nextSignal) {
  case "green":
    if (startSignal == "red") {
      console.log(
        `Switching traffic light from ${startSignal} to ${nextSignal}`
      );
      result = "green";
      console.log("Traffic light is green");
    } else {
      throw new Error(
        `Invalid transition from ${startSignal} to ${nextSignal}`
      );
    }
    break;
  case "yellow":
    result = "yellow";
    break;
  case "red":
    result = "red";
    break;
  default:
    throw new Error("Invalid signal!");
}

console.log(`Traffic light changed from ${startSignal} to ${result}`);
