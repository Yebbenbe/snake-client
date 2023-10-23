let connection;

const setupInput = function (conn) {
  // this is to allow the connection object to have access to this keyboard data
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener, makes a callback to handleUserInput
  stdin.on("data", handleUserInput);
  return connection;
};

const handleUserInput = function (key) {
  
  // check for ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // check for w, a, s, d keys and log corresponding movement command
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }

}

module.exports = {setupInput};