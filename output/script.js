"use strict";
// *************** LWS Tutorial *******************************
// *************** Lesson 1, 2 *******************************
console.log("hello world");
const country = "Hello Bangladesh.";
console.log(country);
// *************** Lesson 3 *******************************
let player = "Shakib";
console.log(player);
// player = 34; --> Type 'number' is not assignable to type 'string'.
// console.log(player);
// functioin declaration
function ageCalculator(player1, player2) {
    return player1 * player2;
}
console.log(ageCalculator(3, 4));
//  Typescript with Array
let players = ["Shakib", "Messi", "Rolando", "Tramp", {}];
players.push(34, { age: 34 });
console.log(players);
//  Typescript with Object
let mixedObj = {
    name: "Ashik",
    age: 22,
    isAdmin: true,
};
mixedObj.age = 21;
console.log(mixedObj);
// *************** Lesson 4 *******************************
// Explicit_union type
let a;
a = "ashik";
// array
let firstArray = [];
firstArray.push("Ashik");
firstArray.push(22);
console.log(firstArray);
// object without schema
let obj;
obj = {
    name: "Ashik",
    age: 22,
    country: "United States",
};
console.log(obj);
// object with schema
let obj2;
obj2 = {
    name: "Ashik",
    age: 22,
};
console.log(obj2);
// *************** Lesson 6 *******************************
// Function type
// (a): optional value
// (b): default value
const myFunc = (val1, val2, val3 = 22) => {
    console.log(`hello ${val1} ${val2} ${val3}`);
};
myFunc("ashik", "islam", 23);
