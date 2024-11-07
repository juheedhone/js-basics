const circle = {
  radius: 10,
  draw() {
    console.log("draw");
  },
};

// const another = {};
// for (let key in circle) another[key] = circle[key];

const another = Object.assign({}, circle);

const other = { ...circle };

console.log(another);
console.log(other);
