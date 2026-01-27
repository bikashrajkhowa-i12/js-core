# JavaScript Polyfills — Map, Filter, Reduce, Bind (Complete Notes)

## 1. What is a Polyfill?

A **polyfill** is a custom implementation of a JavaScript feature that may not be available in certain environments (older browsers).

**Purpose:**  
Ensure consistent behavior across all JavaScript runtimes by recreating missing features.

---

## 2. Core Principles of Writing Polyfills

- Polyfills are attached to **prototypes**
- Behavior must closely match native implementation
- Original data must NOT be mutated
- Edge cases must be handled
- `this` refers to the calling object
- Callback validation is mandatory

---

## 3. Polyfill for `Array.prototype.map`

### Definition

`map` transforms each element of an array and returns a **new array** of the same length.

### Rules

- Returns a new array
- Same length as original
- Does not mutate original array
- Callback receives `(element, index, array)`

### Mental Model

> map = transform + collect

### Polyfill Implementation

```js
Array.prototype.myMap = function(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

4. Polyfill for Array.prototype.filter
Definition

filter selects elements that satisfy a condition and returns a new array.

Rules

Returns a new array

Result length ≤ original length

Callback returns boolean

Mental Model

filter = selective collector

Polyfill Implementation
Array.prototype.myFilter = function(callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

5. Polyfill for Array.prototype.reduce
Definition

reduce iterates over an array and reduces it to a single value.

Key Components

Accumulator

Current value

Initial Value Rules

If initial value exists → accumulator starts from it

If not → accumulator = first element, iteration starts from index 1

Mental Model

reduce = carry forward a value

Polyfill Implementation
Array.prototype.myReduce = function(callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
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

6. Polyfill for Function.prototype.bind
Definition

bind creates a new function with a fixed this value and optional pre-filled arguments.

Rules

Returns a new function

Does not execute immediately

Fixes this permanently

Mental Model

bind = pre-configured function

Polyfill Implementation
Function.prototype.myBind = function(context, ...args) {
  let originalFn = this;

  return function(...newArgs) {
    return originalFn.apply(context, [...args, ...newArgs]);
  };
};

7. Comparison Summary
Method	Purpose	Returns
map	Transform	New Array
filter	Select	New Array
reduce	Accumulate	Any Value
bind	Fix this	New Function
8. Interview One-Line Explanations

map transforms elements

filter selects elements

reduce collapses data into one value

bind fixes function context

9. Core Concepts Tested via Polyfills

Prototypes

this keyword

Closures

Callbacks

Function context (call, apply, bind)

Edge case handling

10. Final Mental Shortcut
map    → transform
filter → select
reduce → accumulate
bind   → fix context
```
