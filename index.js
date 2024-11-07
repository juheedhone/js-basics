const circle = {
  radius: 10,
  draw() {
    console.log("draw");
  },
};

// for in 
for (let key in circle) console.log(key, circle[key]);


// for of
for (let key of Object.keys(circle)) console.log(key, circle[key]);

// it return each value pair as an array.

for (let entry of Object.entries(circle)) console.log(entry, circle[entry]);

//in 
if ("radius" in circle) console.log("yes");
