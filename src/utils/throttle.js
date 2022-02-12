const throttle = (func, timeout = 300) => {
  let throttleCheck;
  return () => {
    if (!throttleCheck) {
      throttleCheck = setTimeout(() => {
        func();
        throttleCheck = false;
      }, timeout);
    }
  };
};

export default throttle;
