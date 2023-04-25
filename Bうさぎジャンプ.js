require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ").map(str => parseInt(str));
let field = index[0];
let rabbitCount = index[1];
let jumpCount = index[2];

let array = []; // [ 1, 2, 0, 0, 0 ]
for (let i = 0; i < field; i++) {
    let rabbit = lines.slice(1, lines.length).map(str => parseInt(str));
    if (rabbit.includes(i + 1)) {
        array.push(i + 1);
    } else {
        array.push(0);
    }
}
console.log(array);

for (let i = 0; i < jumpCount; i++) {
    for (let j = 0; j < rabbitCount; j++) {

    }
}