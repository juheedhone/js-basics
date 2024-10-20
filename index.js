// logical AND operator
// The logical AND operator (&&) returns true if both operands are true; otherwise, returns false.

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // true

// logical OR operator
// The logical OR operator (||) returns true if one of the operands is true; otherwise, returns false.

let highIncome = false;
let goodCredit = true;
let eligibleForLoan = highIncome || goodCredit;

console.log("Eligible", eligibleForLoan); // true

//NOT operator
let applicationRefused = !eligibleForLoan;

console.log("Application Refused", applicationRefused); // false

// logical operator with non-booleans

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN(not a number)

// Anything that is not Falsy -> Truthy

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // red

let userColor = "undefined";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor); // blue
