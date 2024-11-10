const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// arrow function
const course = courses.find((course) => course.id === "a");

console.log(course);
