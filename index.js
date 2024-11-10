const first = [{ id: 1 }];
const second = [5, 6, 7, 8];

const combined = first.concat(second);

first[0].id = 4;
const slice = combined.slice(2, 4);

console.log(slice);
console.log(combined);
