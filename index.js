let name = "Thai Son";
console.log(name);

const test = 0.3;
let interestRate =1;
console.log(interestRate);
// primitive type : string,number,bool, undefined, null
let isApproved = true;
let firstName = undefined;
let lastName = null;

// object
let person = {
    name: "Thai Son",
    age: 22
};
// Dot notation
person.name = "Augusta";
// bracket notation
person['age'] = 24;

// another

console.log(person);

let selection ='age';
person[selection] = 25;
console.log(person);
