const nums = [60, 400, 101, 50, 290, 32];

console.log("Original:", nums);

/*
Array.prototype.sort()

• Mutates original array
• Returns same reference
• Default: lexicographical (string-based)
• Temporary string coercion during comparison
• Stable since ES2019
*/

console.log("Lexicographical:", [...nums].sort());

console.log(
  "Ascending:",
  [...nums].sort((a, b) => a - b),
);

console.log(
  "Descending:",
  [...nums].sort((a, b) => b - a),
);

/* [].sort((a,b) => ...)
    - nested arrays
*/
const nestedArray = [
  [2, 1, 3],
  [1, 3, 2],
  [2, 3, 1],
  [3, 1, 2],
  [1, 2, 3],
  [3, 2, 1],
];
console.log(
  "Sorted nested arrays: ",
  [...nestedArray].sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return a.length - b.length;
  }),
);

/*********** Strings **********/
const strArray = [
  "zebra",
  "xylophone",
  "banana",
  "icecream",
  "apple",
  "iceland",
];

console.log("Original string array: ", strArray);

console.log("Sorted string array: ", strArray.sort());
