require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let fieldArray = lines[0].split(" ");   // 4 4
let colum = parseInt(fieldArray[0]);    // 4
let row = parseInt(fieldArray[1]);  // 4

let bombNumber = [];    //0 0 , 0 2 , 2 2

for (let i = 0; i < colum; i++) {
    let bombRow = lines[i + 1]; // #.#.

    for (let j = 0; j < row; j++) {
        let bombCheck = bombRow[j];
        if (bombCheck === "#") {
            bombNumber.push(i + " " + j);
        }
    }
}

let bombColum = [];
for (let i = 0; i < colum; i++) {
    bombColum.push("･");
}

for (let i = 0; i < colom; i++) {
    for (let j = 0; j < row; j++) {
        let bombCR = bombNumber[i].split(" ");  //0 , 0
        let bombC = bombCR[0];
        let bombR = bombCR[1];


    }
}

