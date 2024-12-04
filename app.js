

const arrays = [
  42,
  true,
  "Hello, World!",
  {
    name: "John",
    age: 25,
    isStudent: false,
  },
  false,
  3.14,
  "JavaScript is fun!",

];

// Q1: Convert all elements to their string representation using map Method.

const stringValue = arrays.map((element) =>{
  return String(element) 
});
console.log(stringValue)

// Q2: Filter only number elements using filter Method.
const num= arrays.filter((element) => typeof element === "number");
console.log( num );

 // Q3: Log each element's type to the console using forEach Method.
 const elementType = arrays.forEach((element) => {
  console.log(typeof element);
 });


// // Q4: Sum up only the numbers in the array using reduce Method.
const findNumbers = arrays.filter((element) => typeof element === "number")
const sumNumbers = findNumbers.reduce((acc,curr)=>{
  return acc + curr
},0)
 
console.log( sumNumbers);


// Q5: Find the first boolean value in an array using find Method.
const firstBoolean = arrays.find((element) => typeof element === "boolean");
console.log( firstBoolean);

// Q6: Find the index of the first object in an array using findIndex Method.
const firstObj = arrays.findIndex((element) => typeof element === "object");
console.log( firstObj);

// Q7: Check if the array contains any numbers in an array using some method.
const isNum = arrays.some((element) => typeof element === "number");
console.log( isNum);

// Q8: Check if all elements are of type 'string' in an array using every method.
const allStrings = arrays.every((element) => typeof element === "string");
console.log( allStrings);
