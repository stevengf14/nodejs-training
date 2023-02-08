let prom = require("./promise");

prom.calculate(6, 3).then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

/*
let promise = new Promise((resolve, reject) => {
  //resolve("Success");
  reject("Error");
});

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
*/
