require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let yyy = parseInt(index[0]);
let xxx = parseInt(index[1]);
let pliceList = [];

for (let y = 1; y < yyy + 1; y++) {
            let plice = {};
        plice.y = y;
        plice.plice = lines[y].split(" ").map(str => parseInt(str));

        pliceList.push(plice);
}
console.log(pliceList);

