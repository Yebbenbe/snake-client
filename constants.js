// player name
const NAME = 'Name: BIJ';

// connection settings
const IP = 'localhost';
const PORT = 50541;

// movement controls
const MOVEMENT = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right'
};

// message controls
const MESSAGES = {
  '1': 'Say: Hi',
  '2': 'Say: My name\'s Snake',
  '3': 'Say: and I\'m an alcohlic'
};

const INFO = "\nWelcome to Snake! Maneuver using the WASD keys.\nSend messages using the 1, 2, and 3 keys.\nPress ctrl+c to exit.";

module.exports = {
  IP,
  PORT,
  NAME,
  MOVEMENT,
  MESSAGES,
  INFO
};