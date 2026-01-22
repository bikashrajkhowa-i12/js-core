/**
 * Throttling is a technique that limits the execution of a function to
 * at most once within a specified time interval, regardless of how many times
 * the event triggering the function is fired.
 */

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall < delay) return;
    else {
      lastCall = now;
      //fn.call(this, ...args); //incase of  class
      return fn(...args);
    }
  };
}

const sendMsg = (msg) => {
  console.log(`You: ${msg}`);
};

const sendMsgWithThrottle = throttle(sendMsg, 1000);

console.log("**************Without throttle************");
sendMsg("Hi");
sendMsg("How");
sendMsg("Are");
sendMsg("You");

console.log("\n\n**************With throttle************");
sendMsgWithThrottle("Hi");
sendMsgWithThrottle("How");
sendMsgWithThrottle("Are");
sendMsgWithThrottle("You");
