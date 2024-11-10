const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

// const combined = first.concat(second);
const combined = [...first, "a", "b", ...second];

// const slice = combined.slice(2, 4);
const copy = [...combined];

console.log(combined);
