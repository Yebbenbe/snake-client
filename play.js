// play.js
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting to server...");

const connection = connect();
// pass the connection object into setupInput
setupInput(connection);