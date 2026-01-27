Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

let arr = [10, 11, 12, 13, 17, 20];
let newArray = arr.myFilter((e) => e % 2 !== 0); //odd nos

console.log("Original Array: ", arr);
console.log("After myFilter: ", newArray);
