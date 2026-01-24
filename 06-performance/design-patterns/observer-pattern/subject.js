/**
 * Core price change subject to handle subscribed observers.
 * Decoupled
 * @returns {subscribe, unsubscribe, setPrice}
 */
// this itself is a module-pattern
export function createPriceSubject() {
  let observers = []; //closure
  let price = null;

  function subscribe(observer) {
    observers.push(observer);
  }

  function unsubscribe(observer) {
    observers = observers.filter((o) => o !== observer);
  }

  function setPrice(newPrice) {
    if (price !== newPrice) {
      price = newPrice;
      notify();
    }
  }

  function notify() {
    observers.forEach((observer) => observer(price));
  }

  return {
    subscribe,
    unsubscribe,
    setPrice,
  };
}
