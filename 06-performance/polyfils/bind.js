Function.prototype.myBind = function (context, ...args) {
  let originalFn = this;
  return function (...newArgs) {
    return originalFn.apply(context, [...args, ...newArgs]);
  };
};

function greet(city, country) {
  console.log(`Hi ${this.name}, ${city}, ${country}`);
}

const user = { name: "Jhon" };

const greetUser = greet.myBind(user, "NYC");
greetUser("USA"); //supports function currying
