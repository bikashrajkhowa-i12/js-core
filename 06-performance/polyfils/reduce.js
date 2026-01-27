Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new Error("Callback must be a function");
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

let arr = [1, 2, 3];
let newArray = arr.myReduce((acc, cur) => acc + cur, 0);

console.log("Original array: ", arr);
console.log("Myreduce array: ", newArray);
