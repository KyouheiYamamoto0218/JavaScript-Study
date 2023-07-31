require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let array = lines[1].split(" ").map(str => parseInt(str));
let scoreArray = [];

for (let i = 0; i < array.length; i ++) {


console.log(totalScore);
