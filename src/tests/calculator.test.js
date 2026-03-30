const {
  add,
  subtract,
  multiply,
  divide,
  calculate,
} = require("../calculator");

describe("calculator functions", () => {
  describe("add", () => {
    test("adds the numbers from the example image", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds more than two numbers", () => {
      expect(add(1, 2, 3, 4)).toBe(10);
    });

    test("supports decimal values", () => {
      expect(add(1.5, 2.25)).toBeCloseTo(3.75);
    });

    test("throws when fewer than two numbers are provided", () => {
      expect(() => add(2)).toThrow("Addition requires at least two numbers.");
    });
  });

  describe("subtract", () => {
    test("subtracts the numbers from the example image", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("supports negative results", () => {
      expect(subtract(4, 10)).toBe(-6);
    });

    test("throws when a second number is missing", () => {
      expect(() => subtract(10)).toThrow(
        "Subtraction requires exactly two numbers."
      );
    });
  });

  describe("multiply", () => {
    test("multiplies the numbers from the example image", () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test("multiplies more than two numbers", () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test("supports multiplying by zero", () => {
      expect(multiply(8, 0)).toBe(0);
    });

    test("throws when fewer than two numbers are provided", () => {
      expect(() => multiply(7)).toThrow(
        "Multiplication requires at least two numbers."
      );
    });
  });

  describe("divide", () => {
    test("divides the numbers from the example image", () => {
      expect(divide(20, 5)).toBe(4);
    });

    test("supports decimal quotients", () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test("throws on division by zero", () => {
      expect(() => divide(20, 0)).toThrow("Division by zero is not allowed.");
    });

    test("throws when a second number is missing", () => {
      expect(() => divide(20)).toThrow(
        "Division requires exactly two numbers."
      );
    });
  });

  describe("calculate", () => {
    test("dispatches to the supported operations", () => {
      expect(calculate("add", [2, 3])).toBe(5);
      expect(calculate("subtract", [10, 4])).toBe(6);
      expect(calculate("multiply", [45, 2])).toBe(90);
      expect(calculate("divide", [20, 5])).toBe(4);
    });

    test("throws for unsupported operations", () => {
      expect(() => calculate("modulo", [10, 3])).toThrow(
        "Unsupported operation. Use one of: add, subtract, multiply, divide."
      );
    });
  });
});
