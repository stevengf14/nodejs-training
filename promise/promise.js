let calculate = (num1, num2) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let addition = num1 + num2;
      if (addition > 5) {
        res(addition);
      } else {
        rej("Data Error");
      }
    }, 2000);
  });
};

module.exports = {
  calculate,
};
