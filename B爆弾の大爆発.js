require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let fieldArray = lines[0].split(" ");   // 4 4
let colum = parseInt(fieldArray[0]);    // 4
let row = parseInt(fieldArray[1]);  // 4

let columBombcheck = lines.slice(1, colum + 1);

let columArray = ["#"];
let rowArray = [];

for (let c = 0; c < colum; c++) {
    for (let r = 0; r < row; r++) {

        if (フィールドが"#"の時) {
            rowArray.push("#");
        } else if (フィールドが"."の時) {
            rowArray.push(".");
        }

    }
}

let countColum = (columArray.match(/#/g) || []).length;
let countRow = (rowArray.match(/･/g) || []).length;
console.log(countColum + countRow);
