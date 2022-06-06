// const [, , firstName, lastName] = process.argv;

// console.log(`My Name is ${firstName} ${lastName}`);


const grab = flag => {
    let contentAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[contentAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);