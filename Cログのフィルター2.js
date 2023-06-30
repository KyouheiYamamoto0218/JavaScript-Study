require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let logCount = parseInt(lines[0]);
let check = lines[1];
let logs = lines.slice(2, 2 + logCount);

logs.filter(log => log.includes(check))
    .forEach(log => console.log(log))
