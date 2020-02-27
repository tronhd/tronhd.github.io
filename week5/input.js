module.exports = {
    input(rl) {
        const promise = new Promise(resolve => {
            let input;
            rl.on('line', userInput => {
                input = userInput;
                resolve(input);
            });
        }) 
        return promise;
    }
}
//break

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