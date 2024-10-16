import { expect } from "chai";
import { Calculator } from "../../src/calculator/calculator.js";

describe("Testy kalkulačky", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it("Calculator add(1, 1) returns 2", () => {
    expect(calc.add(1, 1)).to.eq(2);
  });

  it("Calculator subtract(1, 1) returns 0", () => {
    expect(calc.subtract(1, 1)).to.eq(0);
  });

  it("Calculator multiple(3, 2) returns 6", () => {
    expect(calc.multiply(3, 2)).to.eq(6);
  });

  it("Calculator divide(6, 3) returns 2", () => {
    expect(calc.divide(6, 3)).to.eq(2);
  });
});
