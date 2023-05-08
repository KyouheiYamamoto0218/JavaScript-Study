require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let map = parseInt(lines[0]);
let sanchou = [];

for (let i = 0; i < map; i++) {
    for (let j = 0; j < map; j++) {
        let rowArray = lines[i + 1].split(" ");
        let checkNumber = parseInt(rowArray[j]);
        let clearPoint = 0;

        let right = 0;
        if (j + 1 === map) {
            right = 0;
        } else {
            right = parseInt(rowArray[j + 1]);
        }
        if (checkNumber > right) {
            clearPoint += 1;
        }

        let left = 0;
        if (j === 0) {
            left = 0;
        } else {
            left = parseInt(rowArray[j - 1]);
        }
        if (checkNumber > left) {
            clearPoint += 1;
        }

        let top = lines[i];
        let top2 = parseInt(top[j]);
        if (i === 0) {
            top2 = 0;
        }
        if (checkNumber > top2) {
            clearPoint += 1;
        }

        let under = 0;
        if (i + 1 === map) {
            under = 0;
        } else {
            let under2 = lines[i + 2].split(" ");
            let under3 = parseInt(under2[j]);
            under = under3;
        }
        if (checkNumber > under) {
            clearPoint += 1;
        }

        if (clearPoint > 3) {
            sanchou.push(checkNumber);
        }
    }
}

console.log(sanchou);