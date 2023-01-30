"use strict";
// *************** LWS Tutorial *******************************
// *************** Lesson 14, 15 *******************************
// Enums in Typescript
var ResTypes;
(function (ResTypes) {
    ResTypes[ResTypes["SUCCESS"] = 0] = "SUCCESS";
    ResTypes[ResTypes["ERROR"] = 1] = "ERROR";
    ResTypes[ResTypes["NOTFOUND"] = 2] = "NOTFOUND";
    ResTypes[ResTypes["SERVER_ERROR"] = 3] = "SERVER_ERROR";
})(ResTypes || (ResTypes = {}));
const response11 = {
    status: 200,
    type: ResTypes.NOTFOUND,
    data: {
        name: "e-commerce",
        url: "http://localhost:4000/api/products",
    },
};
console.log(response11);
// Tuples in Typescript
// like an array
let array1 = [3, "johndoe", { userId: 2323 }];
let array2 = [3, "johndoe", { userId: 2323 }];
array1[1] = 23;
