require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let logCount = parseInt(lines[0]);
let check = lines[1];
let logs = lines.slice(2, 2 + logCount);

let answer = logs.filter(log => log.includes(check))

if (answer.length > 0) {
    answer.forEach(log => console.log(log))
} else {
    console.log('None')
}
