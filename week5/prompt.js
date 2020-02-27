const readline = require('readline').createInterface({
  input: process.stdin,
    output: process.stdout
  })

  let path = '';
  
  var hitBy = require(`./message.js`).default;
  readline.question(`What's your favorite color?`, (color) => {
    console.log(`${color} is mine too!`),
      readline.question(`Now what is your name?`, (name) => {
        console.log(`Howdy ${name}!`),
          readline.question(`Bonus points, what song line am i thinking of?`, (guess) => {
            console.log(`Sorry but ${guess} wasn't it. It was actually ${hitBy} by MJ`),
            readline.close()
          })
      })
  })


  

// const readline = require('readline').createInterface({
//   input: process.stdin,
//     output: process.stdout
// })

// readline.question('What is your favorite color?', (color) =>{
//   if(color==="red"||color==="blue"||color==="green"||color==="yellow"||color==="purple"||color==="orange"){
//     console.log('My favorite is ${color} too!');
// }  else{
//     console.log('You got poor taste buddy')
//     readline.close()
// }
// }
