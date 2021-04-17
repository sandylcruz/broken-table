// const myFunction = (a) => {a}

// const myDebounceFunction = debounce(myFunction, 500)
// myDebounceFunction(a) <- is a function

const debounce = (func, timeout) => {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
      timer = undefined;
    }, timeout);
  };
};

export default debounce;
