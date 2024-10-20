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
