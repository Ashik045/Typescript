"use strict";
// *************** LWS Tutorial *******************************
// *************** Lesson 13 *******************************
// Generics in Typescript
// reuseable blog of code / catch the type of data user sending to us
const addObject = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addObject({
    name: "Ashik",
    username: "ashik045",
});
console.log(user);
const res1 = {
    statusCode: 200,
    type: "application/json",
    data: {
        name: "E-commerce",
        url: "http://localhost:4000/api/product",
    },
};
console.log(res1);
