// client.js
const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
    const connect = function () {
      const conn = net.createConnection({
    host: IP,
    port: PORT,
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
    conn.write("Name: BJJ");
    //setTimeout(() => {
    //  conn.write("Move: up");
    //  setInterval(() => {conn.write("Move: up")}, 80)
    //}, 80);
  });  


  return conn;
};

module.exports = {connect};
