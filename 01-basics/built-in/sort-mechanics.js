const nums = [60, 400, 101, 50, 290, 32];
console.log("Original nums: ", nums);

/* [].sort()
    - lexiological sort if no arguments passed
    - sort() only converts elements to strings temporarily during comparison.
    - input: [60, 400, 101, 50, 290, 32]
    - output: [ 101, 290, 32, 400, 50, 60 ] ---> "1.." ,"2..", "3..." ... etc
*/
console.log("Lexiologically sorted (default): ", nums.sort());

/* [].sort(a,b => a-b)
    - ascending
*/
console.log(
  "Sorted nums(ascending): ",
  nums.sort((a, b) => a - b),
);

/* [].sort(a,b => b-a)
    - descending
*/

console.log(
  "Sorted nums(descending): ",
  nums.sort((a, b) => b - a),
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
  nestedArray.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return a.length - b.length;
  }),
);
