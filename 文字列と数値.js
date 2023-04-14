require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let xy = lines[0].split(" ");

let x = xy[0];
let y = xy[1];
console.log(x);
console.log(y);