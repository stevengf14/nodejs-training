const fetch = require("node-fetch");

let promise = fetch("https://api.github.com/users/stevengf14");
promise
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });
