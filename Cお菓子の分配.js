require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let machine = parseInt(index[0]);
let number = parseInt(index[1]);

let choice = Infinity;
let answer = 0;

for (let i = 0; i < machine; i++) {
    let kowake = parseInt(lines[i + 1]);
    let amari = number % kowake;

    if (choice >= amari) {
        choice = amari;
        answer = i + 1;
    }
}

console.log(answer);