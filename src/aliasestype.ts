// *************** LWS Tutorial *******************************
// *************** Lesson 7 *******************************
// Aliases type
type stringOrNumber = string | number;
type userInfo = { name: string; age: number };

const userDetails = (id: stringOrNumber, user: userInfo) => {
  console.log(`userId ${id}, userName ${user.name}, age ${user.age}`);
};
userDetails(20232, { name: "Ashik", age: 22 });

// *************** Lesson 8 *******************************
// Function Signature (define a function structure)
let addTwoNumbers: (num1: number, num2: number) => number;

addTwoNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(addTwoNumbers(4, 4));
