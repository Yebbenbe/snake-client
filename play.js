// play.js
const { connect } = require("./client");

console.log("Connecting to server...");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener, makes a callback to handleUserInput
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    // check for ctrl+c input
    if (key === '\u0003') {
      process.exit();
    }
  })
}
setupInput();
connect();
