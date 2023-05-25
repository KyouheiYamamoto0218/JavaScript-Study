require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let yyy = parseInt(index[0]);
let xxx = parseInt(index[1]);
let pliceList = {};

for (let y = 1; y < yyy + 1; y++) {
        let root = y;
        let plice = lines[y].split(" ").map(str => parseInt(str));

        pliceList[root] = plice;
}
console.log(pliceList);

