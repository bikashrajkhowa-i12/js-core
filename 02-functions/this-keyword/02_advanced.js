// #7 Explicit Binding(.call(), .apply(), .bind()) *****************************************************************
const user1 = {
  name: "John",
  age: 21,
  address: "NYC, USA",
};

const user2 = {
  name: "Sam",
  age: 20,
  address: "Los Angeles, USA",
};

const user3 = {
  name: "Jack",
  age: 23,
  address: "Atalanta, Italy",
};

const user4 = {
  name: "Sergio",
  age: 22,
  address: "Valencia, Spain",
};

function printInfo(phone, logTime) {
  console.log(`Name: ${this.name}`);
  console.log(`Age: ${this.age}`);
  console.log(`Address: ${this.address}`);
  console.log(`Contact: ${phone}`);
  console.log(`Log-time: ${logTime}\n`);
  return this.name + ", " + this.address;
}

// .call() and .apply() are immediately invoke method
// .call(context, arg1, arg2, arg3...)
printInfo.call(user1, 9872638321, Date.now());
printInfo.call(user2, 8972837741, Date.now());

// .apply(context, [arg1, arg2, arg3...])
const p = printInfo.apply(user3, [7787736625, Date.now()]);
console.log(p + "\n");

// .bind returns a new function with a permanently bound `this`
// It can also be used for partial application (not true currying)
// console.log(printInfo.bind(user4, 4893382281)); this wont print since it returns a function
let printUserInfo = printInfo.bind(user4, 4893382281); // passing phone no but not the logTime
printUserInfo(Date.now()); // passing logTime later(this is called currying)
