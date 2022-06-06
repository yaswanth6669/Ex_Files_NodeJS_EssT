waitTime = 1000;

console.log("Timer started...");

const afterTimeout = () => {
    console.log("Done");
};

setTimeout(afterTimeout, waitTime);

