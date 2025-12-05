import { main } from "./callbacks.js";

// Example of: Callback functions

const callbacks = (x) => {
  x();
  console.log("Calling Function");
};

const names = () => {
  return "Ryan James";
};

const getName = (name) => {
  console.log(name());
};

getName(names);
callbacks(main);

// Example of: Anonymous functions

(function () {
  console.log("Hello World");
})();
