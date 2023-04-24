require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ").map(str => parseInt(str));
let field = index[0];
let rabbitCount = index[1];
let jumpCount = index[2];

let array = [];
for (let i = 0; i < field; i++) {
    array.push(i + 1)
}

for (let i = 0; i < rabbitCount; i++) {
    let rabbit = parseInt(lines[i + 1]);

    array.push(array[i] + rabbit[i])
}

console.log(array);