const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like Node? ", answer=>{
    console.log(`Your answer is "${answer}"`);
    rl.close();
});