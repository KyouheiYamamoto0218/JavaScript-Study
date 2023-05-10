require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let yyy = index[0];
let xxx = index[1];
let pliceList = {};

for (let y = 1; y < yyy + 1; y++) {
    for (let x = 1; x < xxx + 1; x++) {
        pliceList.y = lines[y].split(" ");
    }
}
console.log(pliceList);