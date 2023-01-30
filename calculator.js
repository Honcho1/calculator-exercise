const add = function (a, b) {
  return a + b;
};
add(1, 2);

const subtract = function (a, b) {
  return a - b;
};
subtract(10, 4);

const sum = function (sumArray) {
  if (sumArray.length === 0) {
    return 0;
  }

  const calcSum = sumArray.reduce((a, b) => a + b, 0);
  return calcSum;
};
let numbers = [];
sum(numbers);

const multiply = function (multiplyArray) {
  if (multiplyArray.length === 0) {
    return 0;
  }

  const calcMultiply = multiplyArray.reduce((a, b) => a * b, 1);
  return calcMultiply;
};
let number = [];
multiply(number);

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
factorial(2);
