const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const input = require('./input');

module.exports = {
    out(data) {
        console.log(`Your name is ${data}.`);
        input.prompt(`\nWhat is your name?\n`);
    }
}

//BREAK
// module.exports = {
//     output(input, rl) {
//         console.log(`Hi ${input}`);
//         rl.close();
//     }
// }

//BREAK
//MY ATTEMPT
//Changed console.log(input) to console.log(`Hi ${input}`) to
//present that the syntax isnt broken.

// module.exports = {
//     output(doorin, dw){
//         console.log(`${doorin} is my favorite color too`);
//         dw.close();
//     }
// }