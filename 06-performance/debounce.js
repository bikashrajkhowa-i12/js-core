/**
 * Debounceing in Js is a performance optimization technique that limits how often a function is
 * executed by ensuring it runs only once after a certain amount of time has passed without the
 * event being triggered again.
 */

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay || 300);
  };
}

const search = (query) => {
  //actual API calls
  console.log(`Searching for ${query}...`);
};

const searchWithDebounce = debounce(search, 300);

console.log("*********Searching without debounce: ***********");
search("J");
search("JS");
search("JS");
search("JS-");
search("JS-c");
search("JS-co");
search("JS-cor");
search("JS-core");

console.log("\n\n*********Searching with debounce:**********");
searchWithDebounce("J");
searchWithDebounce("JS");
searchWithDebounce("JS");
searchWithDebounce("JS-");
searchWithDebounce("JS-c");
searchWithDebounce("JS-co");
searchWithDebounce("JS-cor");
searchWithDebounce("JS-core");
