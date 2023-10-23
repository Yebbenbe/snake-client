// input.js
const {MOVEMENT, MESSAGES} = require('./constants');
let connection;

// setup interface to accept user input, passes the connection object
const setupInput = function (conn) {
  // assigns the connection object to a global variable
  connection = conn;

  // allows for keyboard input
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // event listener, makes a callback to handleUserInput
  stdin.on("data", handleUserInput);

  return stdin;
};

// callback function for stdin.on('data')
const handleUserInput = function (key) {
  
  // exit game if ctrl+c is pressed
  if (key === '\u0003') {
    process.exit();
  };

  // movement controls and message controls
  if (key.includes('w') || key.includes('a') || key.includes('s') || key.includes('d')) {
    connection.write(MOVEMENT[key]);
  } else if (key === '1' || key === '2' || key === '3') {
    connection.write(MESSAGES[key]);
  } else {
    console.log('Invaiid key! Press ctrl+c to exit.');
  };

};

module.exports = {setupInput};