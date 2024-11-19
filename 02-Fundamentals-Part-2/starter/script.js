"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = 'Audio'
//const private = 534;

function logger(name = "Joel") {
  console.log(`Hello ${name}`);
}

logger("Mirko");
logger();

function sum_of_nums(a, b) {
  const result = `The result of ${a} + ${b} is ${a + b}`;
  return result;
}

console.log(sum_of_nums(5, 8));
