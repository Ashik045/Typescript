"use strict";
const userDetails = (id, user) => {
    console.log(`userId ${id}, userName ${user.name}, age ${user.age}`);
};
userDetails(20232, { name: "Ashik", age: 22 });
// *************** Lesson 8 *******************************
// Function Signature (define a function structure)
let addTwoNumbers;
addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNumbers(4, 9));
