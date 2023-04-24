require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ").map(str => parseInt(str));
let field = index[0];
let rabbitCount = index[1];
let jumpCount = index[2];

for (let i = 0; i < jumpCount; i++) {
    for (let j = 0; j < rabbitCount; j++) {
        let rabbit = parseInt(lines[j + 1]);
    }
}