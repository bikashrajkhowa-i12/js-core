// "use strict";

//#1 Global context ************************************************************************
console.log(this); // global object

//#2 Object methods ************************************************************************
const user = {
  name: "Bikash",
  age: 24,
  //Implicit binding
  printInfo: function () {
    console.log(`Hi ${this.name}, you are ${this.age} years old!`);
  },
};
//user.printInfo();

//#3 Regular function (non-strict mode) ****************************************************
function x() {
  console.log(this);
}
// global-object since it doesn't have any context yet
//x();

//#4 Regular function (strict mode) ********************************************************
function x() {
  console.log(this);
}
// undefined since it doesn't have any context yet
//x();

//#5 Constructor functions *****************************************************************
function User(name) {
  this.name = name;
}

const user1 = new User("Bikash");
const user2 = new User("John");
// console.log(user1.name);
// console.log(user2.name);
/**
 * for each "new" JS do these:
 * 1. const object = {};  (creates an empty object)
 * 2. object.__proto__ = User.prototype;     (Link prototype from the "User")
 * 3. User.call(object, "Bikash");      (call constructor with "this" = object)
 * 4. return object;      (returns the object)
 */

//#6 Arrow functions ***********************************************************************
let obj = {
  name: "Bikash",
  regular: function () {
    console.log("Hi ", this.name);
    const y = () => {
      console.log("regular.arrow: ", this.name); // pull its nearest lexical scope "this"
    };
    y();
  },
  arrow: () => {
    console.log(this);
  },
};

obj.regular(); // Hi Bikash \n  regular.arrow: Bikash
obj.arrow(); // Hi undefined
/**
 * What JS sees is:
 *
 * obj.regularregularFn() {
 * }
 * let obj = {};
 * obj.name = "Bikash";
 * obj.regular = function() {
 *      console.log(this.name);    (this -> obj)
 * }
 * obj.arrow = () => {
 *      console.log(this.name);    (nearest lexical this ie, global/window)
 * }
 *
 */
