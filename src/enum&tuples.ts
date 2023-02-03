// *************** LWS Tutorial *******************************
// *************** Lesson 14, 15 *******************************
// Enums in Typescript

enum ResTypes {
  SUCCESS,
  ERROR,
  NOTFOUND,
  SERVER_ERROR,
}

interface APIResponse<T> {
  status: number;
  type: ResTypes;
  data: T;
}

const response11: APIResponse<object> = {
  status: 200,
  type: ResTypes.NOTFOUND,
  data: {
    name: "e-commerce",
    url: "http://localhost:4000/api/products",
  },
};

// console.log(response11);

// Tuples in Typescript
// like an array
let array1 = [3, "johndoe", { userId: 2323 }];

let array2: [number, string, object] = [3, "johndoe", { userId: 2323 }];

array1[1] = 23;
