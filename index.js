const marks = [80, 100, 100, 80];

// average=80

// 1-59:F
// 60-69:D
// 70-79:C
// 80-89:B
// 90-100:A

function calculateGrade(marks) {
  let total = 0;
  for (let key of marks) total = key + total;

  const average = total / marks.length;

  if (average < 59) return "F";
  else if (average < 69) return "D";
  else if (average < 79) return "C";
  else if (average < 89) return "B";
  else return "A";
}

console.log(calculateGrade(marks));
