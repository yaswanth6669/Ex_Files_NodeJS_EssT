const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What's your name? ",
    "Where do you live? ",
    "What do you do with Node js? "
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuetion, secondQuetion, thridQuetion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }
        else{
            done(answers);
        }
    };

    rl.question(firstQuetion, questionAnswered);

};

collectAnswers(questions, (answers) => {
    console.log("Thanks for your answers. ");
    console.log(answers);
    process.exit();
});