const questions = [
    "What's your name?",
    "What would you rather be doing?",
    "What is your preferred programming langauge?",
];

const ask = (i=0) => {
    process.stdout.write(` \n\n\n${questions[i]}`);
    process.stdout.write(` > `);
};

ask();