const _ = require("lodash");
const argv = require("yargs");

if (argv === "Nodejs") {
  let x = { name: "Steven" };
  let y = { alias: "stevengf" };
  let z = [
    { name: "Steven", lastName: "Guaman", age: 20 },
    { name: "Andres", lastName: "Figueroa", age: 48 },
  ];

  /*let result = _.assign(x, y);
    console.log(result);*/

  /*_.times(3, () => {
      console.log("Example");
    });*/

  let result = _.find(z, { name: "Steven" });
  console.log(result);
} else {
  console.log("invalid user!");
}