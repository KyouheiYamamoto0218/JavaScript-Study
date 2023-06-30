require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let close = 0;

let index = lines[0].split(' ');
let index2 = lines[1].split(' ');

let store = parseInt(index[0]);
let month = parseInt(index[1]);
let built = parseInt(index2[0]);
let people = parseInt(index2[1]);
let get = parseInt(index2[2]);

for (let i = 0; i < store; i++) {
    let buy = parseInt(lines[i + 2]);
    if (count(get, buy, built, people, month) === true) {
        close += 1;
    }
}
console.log(close);

function count(get, buy, built, people, month) {
    if (get * buy - built - people * month < 0) {
        return true;
    }
}