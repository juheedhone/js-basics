// for (let i = 1; i <= 5; i++) {
//   console.log("Hello World", i);
// }

// for-in loop

const person = {
  name: "John",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

// for-of loop
const colors = ["red", "green", "blue"];

for (let color of colors) 
  console.log(colors);
