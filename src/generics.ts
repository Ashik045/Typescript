// *************** LWS Tutorial *******************************
// *************** Lesson 13 *******************************
// Generics in Typescript
// reuseable blog of code / catch the type of data user sending to us

type userObj = object;

const addObject = <T extends object>(obj: T) => {
  const id = Math.floor(Math.random() * 100);

  return { ...obj, id };
};

let user = addObject({
  name: "Ashik",
  username: "ashik045",
});

// console.log(user);

// Generics with interface
interface APIResponce<T> {
  statusCode: number;
  type: string;
  data: T;
}

const res1: APIResponce<object> = {
  statusCode: 200,
  type: "application/json",
  data: {
    name: "E-commerce",
    url: "http://localhost:4000/api/product",
  },
};

console.log(res1);
