
const input = require('./input.js');
const output = require('./output.js');

console.log(`Type 'exit' @ anytime to exit\n\n`);
input.prompt(`What is your name?\n`);
input.in(output.out);

//BREAK
// const rl = require('readline').createInterface(process.stdin, process.stdout);
// const input = require('./input.js');
// const output = require('./output.js');

// rl.setPrompt(`What is your name?\n`);
// rl.prompt();

// input.input(rl).then(input => {
//     output.output(input, rl);
// });

//BREAK
// MY ATTEMPT
// const dw = require("readline").createInterface(process.stdin, process.stdout);
// const doorin = require(`./input.js`);
// const doorout = require(`./output.js`);

// dw.setPrompt(`What is your favorite color\n`);
// dw.prompt();

// doorin.input(dw).then(doorin => {
//     doorout.output(doorin, dw);
// });