let x = 1;

//relational operators
 console.log(x > 1);
 console.log(x < 1);
 console.log(x <= 1);
 console.log(x >= 1);

// //equality operators

 console.log(x === 1);
console.log(x !== 1);

// //equality operators (strict equality(type + value))
 console.log(1 === 1);
 console.log('1' === 1);

//equality operators (loose equality(value))
 console.log(1 == 1);
 console.log('1' == 1);
console.log(true == 1);

//ternarry operator or conditional operator

//if a cosutomer has more than 100 points,
//they are a 'gold' customer, otherwise,
//they are a 'silver' customer.

let points = 10;
let type = points < 11 ? "gold " : "silver";
console.log(type);
