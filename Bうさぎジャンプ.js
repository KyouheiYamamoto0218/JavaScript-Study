require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ").map(str => parseInt(str));
let field = index[0];
let rabbitCount = index[1];
let jumpCount = index[2];
let rabbit = lines.slice(1, lines.length).map(str => parseInt(str));

let array = [];
for (let i = 0; i < field; i++) {
    if (rabbit.includes(i + 1)) {
        array.push(i + 1);
    } else {
        array.push(0);
    }
}
console.log(array);
