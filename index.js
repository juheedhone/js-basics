//

// speed limit = 70
// 5 = 1 point
// math.floor(1.3)
// 12 points-> suspended

const output = checkSpeed(112);
console.log(output);

function checkSpeed(speed) {
  if (speed <= 70) return "ok";

  let extraSpeed = speed - 70;
  let points = Math.floor(extraSpeed / 5);

  if (points > 12) return "suspended";
  else return points + "points";
}
