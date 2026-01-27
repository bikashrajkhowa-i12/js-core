Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    // here 'this' is the current array. So, fn(this[i], index, whileArray)
    let result = callback(this[i], i, this);
    newArray.push(result);
  }
  return newArray;
};

let arr = [1, 2, 3, 4, 5];
let myMapArray = arr.myMap((e, idx, arr) => {
  return e * arr[idx];
});

let jsMapArray = arr.map((e, idx, all) => {
  return e * all[idx];
});

console.log("Original array: ", arr);
console.log("My Map Array: ", myMapArray); // self polyfil array.map
console.log("JS Map Array: ", jsMapArray); // JS array.map
