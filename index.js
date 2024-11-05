function createCircle(radius) {
  return {
    radius,

    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(2);
console.log(circle1);

const circle2 = createCircle(4);
console.log(circle2);

//method
