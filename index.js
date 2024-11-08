let address1 = new Address("a", "b", "c");
let add2 = new Address("a", "b", "c");

console.log(areEqual(address1, add2));
console.log(areSame(address1, add2));

// factory function

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, add2) {
  return (
    address1.street === add2.street &&
    address1.city === add2.city &&
    address1.zipCode === add2.zipCode
  );
}

function areSame(address1, add2) {
  return address1 === add2;
}
