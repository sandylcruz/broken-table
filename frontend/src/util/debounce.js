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
