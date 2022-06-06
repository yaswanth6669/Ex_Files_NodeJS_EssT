const path = require("path");
const v8 = require("v8");

const dirUploads = path.join(__dirname, "ppp", "files", "uploads");

console.log(path.basename(__filename));
console.log(" ^ This name of the current file");
console.log(v8.getHeapStatistics());
