const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];

process.stdin.on("data", data=>{
  answers.push(data.toString().trim());

  if(answers.length < questions.length){
    //ask question
    ask(answers.length);
  }
  else{
    //exit
    process.stdout.write("\n\n\n");
    process.exit();
  }
});

process.on("exit", ()=>{
  const [name, activity, lang] = answers;
  console.log(`
 */*/*/*/Thanks for participating/*/*/*/*
  
 Go ${name} ${activity}, you can write ${lang} later.
  
  
  `);

});

