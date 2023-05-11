require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let yyy = parseInt(index[0]);
let xxx = parseInt(index[1]);
let pliceList = {};

for (let y = 1; y < yyy + 1; y++) {
    for (let x = 1; x < xxx + 1; x++) {
        let plice = {};
        plice.y = y;
        plice.plice = lines[y].split(" ");

        pliceList.push(plice);
    }
}

console.log(pliceList);