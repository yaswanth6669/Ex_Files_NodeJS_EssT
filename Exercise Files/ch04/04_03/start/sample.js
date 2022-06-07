q = ["a","b","c","d","e","f"];

const sendQuestions = (que, done)=>{
    for(var i in que){
        console.log(que[i]);
    }
    done(que);
};

sendQuestions(q, (que) => console.log(`Done with ${q} function ${que}`));
