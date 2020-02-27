
module.exports = {
    output(input, rl) {
        console.log(`Hi ${input}`);
        rl.close();
    }
}
//Changed console.log(input) to console.log(`Hi ${input}`) to
//present that the syntax isnt broken.

// module.exports = {
//     output(doorin, dw){
//         console.log(`${doorin} is my favorite color too`);
//         dw.close();
//     }
// }