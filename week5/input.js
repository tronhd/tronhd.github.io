const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

module.exports = {
    prompt(prompt) {
        rl.setPrompt(prompt);
        rl.prompt();
    },
    in(cb) {
        rl.on('line', data => {
            if(data.trim() == 'exit') {
                rl.close();
            } else {
                cb(data);
            }
        })
    }
}
//BREAK
// module.exports = {
//     input(rl) {
//         const promise = new Promise(resolve => {
//             let input;
//             rl.on('line', userInput => {
//                 input = userInput;
//                 resolve(input);
//             });
//         }) 
//         return promise;
//     }
// }
//BREAK


// MY ATTEMPT
// module.exports = {
//     input(dw){
//         const promise = new Promise(resolve => {
//             let doorin;
//             dw.on('read', meInput => {
//                 doorin = meInput;
//                 resolve(doorin);
//             });
//         })
//         return promise;
//     }
// }