const numbers = [1, -1, 2, 3, 4];

// mapping html
// const filtered = numbers.filter((n) => n >= 0);

// const items = filtered.map((n) => "<li>" + n + "</li>");

// const html = '<ul>' + items.join('') + '</ul>' ;

// console.log(html);

// mapping object

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map((n) => ({value: n}));

// const items = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));

console.log(items);
