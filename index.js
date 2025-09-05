// A sample JS app
// index.js
// Simple Node.js script using lodash

const _ = require("lodash");

const numbers = [10, 20, 30, 40, 50];

// Calculate average using lodash
const avg = _.mean(numbers);

console.log("Numbers:", numbers);
console.log("Average:", avg);
