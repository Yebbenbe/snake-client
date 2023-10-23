// client.js
const net = require("net");
const { INFO, IP, PORT, NAME } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    console.log(INFO);
    // sends user name to server
    conn.write(NAME);
  });

  // listen for messages from server
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = {connect};
