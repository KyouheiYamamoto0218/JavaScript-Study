require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let fieldArray = lines[0].split(" ");   // 4 4
let colum = parseInt(fieldArray[0]);    // 4
let row = parseInt(fieldArray[1]);  // 4

let count = 0;

    for (let i = 0; i < row; i++) {
        let bombRow = lines[i + 1]; // #.#.

        for (let j = 0; j < row; j++) {
            let bombCheck = bombRow[j];
            if (bombCheck === "#") {
                count += 1;
            }
        }
    }

console.log(count);