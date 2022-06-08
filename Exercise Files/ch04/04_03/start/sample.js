q = ["a","b","c","d","e","f"];

const sendQuestions = (que, done, op, di)=>{
    for(var i in que){
        console.log(que[i]);
    }
    done(que);
    op("Hello");
    di(v = "Bonjour")
};

sendQuestions(q, (que) => console.log(`Done with ${q} function ${que}`), (a) => console.log(a), (x)=>console.log(x));
