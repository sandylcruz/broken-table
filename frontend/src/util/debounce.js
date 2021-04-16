import { useDispatch } from "react";

// const myFunction = () => {}

// const myDebounceFunction = debounce(myFunction, 500)
// myDebounceFunction() <- is a function

const debounce = (func, timeout) => {
  const timer = setTimeout(() => {}, timeout);

  if (!timer) {
    useDispatch(func);
    clearTimeout(timer);
  }
  return () => {};
};

export default debounce;
