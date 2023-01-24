// *************** LWS Tutorial *******************************
// *************** Lesson 7 *******************************
// Aliases type
type stringOrNumber = string | number;
type userInfo = { name: string; age: number };

const userDetails = (id: stringOrNumber, user: userInfo) => {
  console.log(`userId ${id}, userName ${user.name}, age ${user.age}`);
};
userDetails(20232, { name: "Ashik", age: 22 });
