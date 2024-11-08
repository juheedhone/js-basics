
// factory function
function showAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address = showAddress("nagpur", "nagpur", 2);
console.log(address);



// factory function

function showAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = 2;
}

const address2 = new showAddress("nagpur", "nagpur", 2);
console.log(address);
