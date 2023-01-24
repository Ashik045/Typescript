"use strict";
const userDetails = (id, user) => {
    console.log(`userId ${id}, userName ${user.name}, age ${user.age}`);
};
userDetails(20232, { name: "Ashik", age: 22 });
