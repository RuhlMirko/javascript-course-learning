"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = 'Audio'
//const private = 534;

// Functions
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

const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

// Arrow functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName = "Johnas") => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1991, "Mirko"));
console.log(yearsUntilRetirement(1980, "Bob"));

// Koalas vs Dolphins arrow function
const calcAverage = (first_score, second_score, third_score) =>
  (first_score + second_score + third_score) / 3;
let scoreDolphins = calcAverage();
let scoreKoalas = calcAverage();

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
