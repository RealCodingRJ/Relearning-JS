import { main } from "./callbacks.js";

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
