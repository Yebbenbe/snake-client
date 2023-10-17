const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // listen for data, log what comes
  conn.on("data", (data) => {
    console.log("Server says:", data); // Log incoming data from the server
  });

  return conn;
};

console.log("Connecting ...");
connect();
