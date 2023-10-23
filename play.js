// play.js
const { connect } = require("./client");
const { setupInput } = require("./input");

// create the connection, store it as 'connetion'
const connection = connect();
console.log("Connecting to server...");

// psetup input, pass the connection object returned from connect()
setupInput(connection);