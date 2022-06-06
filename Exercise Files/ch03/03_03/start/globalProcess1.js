//process.pid gives the process id
console.log(process.pid);
console.log("-------------------------");
//version property of process returns the node version associated with the process
console.log(process.version);
console.log("-------------------------");
//versions property of process returns an object of versions associated with the process and dependencies
console.log(process.versions);
console.log("-------------------------");
console.log(process.versions.node);
console.log("-------------------------");
//returns an array, it contains everything that we typed to run the process
console.log(process.argv);
console.log("-------------------------");
