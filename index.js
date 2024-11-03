const movie = {
  title: "a",
  release: 2024,
  director: "b",
  name:'singham'
};

// function showProperties(obj) {
// for (let string in movie) console.log(string, movie[string]);
showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key,obj[key]);
  }
}
