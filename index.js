// function showAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode,
//   };
// }

// const address = showAddress("nagpur", "nagpur", 2);
// console.log(address);

let address = {
  street:": nagpur",
  City: "nagpur",
  zipCode: "2",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);
