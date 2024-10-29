showNumbers(50);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log("even" + " : ", i);
    else console.log("odd " + " : ", i);
  }
}

// console.log(showNum(4));

// function showNum(num) {
//   if (num % 2 === 0) return num + " : " + "even";
//   else return "odd";
// }
