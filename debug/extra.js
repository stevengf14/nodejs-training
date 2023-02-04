let message = "Debugger";

function hello() {
  debugger;
  console.log(message);
}

module.exports = {
  hello: hello(),
};
