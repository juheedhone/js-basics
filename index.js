// constructor notation

function Circle(radius) {
  this.radius = radius;
  this.radius = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
