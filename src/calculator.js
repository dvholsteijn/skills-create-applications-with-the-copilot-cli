#!/usr/bin/env node

/**
 * Simple Node.js CLI calculator.
 *
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 */

function add(...numbers) {
  if (numbers.length < 2) {
    throw new Error("Addition requires at least two numbers.");
  }

  return numbers.reduce((total, value) => total + value, 0);
}

function subtract(first, second) {
  if (second === undefined) {
    throw new Error("Subtraction requires exactly two numbers.");
  }

  return first - second;
}

function multiply(...numbers) {
  if (numbers.length < 2) {
    throw new Error("Multiplication requires at least two numbers.");
  }

  return numbers.reduce((total, value) => total * value, 1);
}

function divide(first, second) {
  if (second === undefined) {
    throw new Error("Division requires exactly two numbers.");
  }

  if (second === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return first / second;
}

function parseNumbers(values) {
  if (values.length === 0) {
    throw new Error("Please provide at least one operand.");
  }

  return values.map((value) => {
    const parsedValue = Number(value);

    if (Number.isNaN(parsedValue)) {
      throw new Error(`Invalid number: ${value}`);
    }

    return parsedValue;
  });
}

function calculate(operation, numbers) {
  switch (operation) {
    case "add":
      return add(...numbers);
    case "subtract":
      return subtract(...numbers);
    case "multiply":
      return multiply(...numbers);
    case "divide":
      return divide(...numbers);
    default:
      throw new Error(
        "Unsupported operation. Use one of: add, subtract, multiply, divide."
      );
  }
}

function printUsage() {
  console.log("Usage: node src/calculator.js <operation> <number...>");
  console.log("Operations: add, subtract, multiply, divide");
  console.log("Examples:");
  console.log("  node src/calculator.js add 3 5");
  console.log("  node src/calculator.js subtract 10 4");
  console.log("  node src/calculator.js multiply 6 7");
  console.log("  node src/calculator.js divide 20 4");
}

function main(argv) {
  const [operation, ...valueArgs] = argv;

  if (!operation || operation === "--help" || operation === "-h") {
    printUsage();
    return;
  }

  const numbers = parseNumbers(valueArgs);
  const result = calculate(operation, numbers);

  console.log(result);
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
