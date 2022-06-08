const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



module.exports = (questions, done = f => f /*making it optional/dummy*/ ) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
        //console.log(done());
        if(done() == undefined){
         process.stdout.write("----------------------------");
         process.exit();
        }else{
          done(answers);
        }
    }
  };

  rl.question(firstQuestion, questionAnswered);

};

