"use strict";
// *************** LWS Tutorial *******************************
// *************** Lesson 12 *******************************
// Interfaces in Typescript
function dwarRectangle(property) {
    let width = property.width;
    let height = property.height;
    console.log(width, height);
}
dwarRectangle({
    width: 20,
    height: 20,
});
