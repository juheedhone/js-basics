const numbers = [3, 4];

// end
numbers.push(5, 6);

// beginning
numbers.unshift(1, 2);

// middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);
