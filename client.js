// client.js
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

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Move: up");
    setTimeout(() => {
      conn.write("Name: BJJ");
      setInterval(() => {conn.write("Move: up")}, 80)
    }, 80);
  });  


  return conn;
};

module.exports = {connect};
