// *************** LWS Tutorial *******************************
// *************** Lesson 12 *******************************
// Interfaces in Typescript

// type rectangleInfo = { width: number; height: number }; // aliases type

// interface
interface rectangleInfo {
  width: number;
  height: number;
}

function dwarRectangle(property: rectangleInfo) {
  let width = property.width;
  let height = property.height;
  console.log(width, height);
}

dwarRectangle({
  width: 20,
  height: 20,
});
