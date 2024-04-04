import feed, { anotherFunction } from "./javascript/feed";

function printLoop() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log("OUTSIDE " + i);
}

const greet = (language) => {
  console.log("Helo javascript world! ", language);
};

const user = {
  name: "Tejal",
  email: "tj07@gmail.com",
  country: "US",
};

//function and object example
printLoop();

greet("React");

console.log(user.name);
console.log(user["email"]);

const { name: userName, email, country } = user;
console.log(userName, email, country);

//map example
const products = ["product1", "product2", "product3"];

const display = products.map((product) => `<li>${product}/li>`);

console.log(display);

//filter example
const ages = [5, 18, 14, 21, 25];

const adults = ages.filter((age) => age > 18);

console.log("filter age", adults);

//combine 2 arrays --- spread operator

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6];
const arr3 = [7, 8, 9];

// const numbers = arr1.concat(arr2, arr3);
const numbers = [...arr1, 5, 6, ...arr3];
console.log(numbers);

const ob1 = {
  name: "TJ",
};
const ob2 = {
  hobby: ["Listening", "Singing"],
};

const obj = { ...ob1, ...ob2 };
console.log(obj);

// ternory operation
const marks = 30;

const results = marks > 35 ? "Pass" : "Fail";

console.log(results);

//modules js

feed();
anotherFunction();
