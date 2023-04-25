require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let fieldArray = lines[0].split(" ");   // 4 4
let row = parseInt(fieldArray[0]);    // 4
let colum = parseInt(fieldArray[1]);  // 4
let bombNumber = [];    //0 0 , 0 2 , 2 2

for (let i = 0; i < row; i++) {
    let bombRow = lines[i + 1]; // #.#.

    for (let j = 0; j < colum; j++) {
        let bombCheck = bombRow[j];
        if (bombCheck === "#") {
            bombNumber.push(i + " " + j);
        }
    }
}

let bombColumRow = [];
for (let i = 0; i < row; i++) {
    let bombColum = [];
    for (let j = 0; j < colum; j++) {
        bombColum.push("･");
    }
    bombColumRow.push(bombColum);
}

//bombNumber [ '0 0', '0 2', '2 2' ]
for (let i = 0; i < bombNumber.length; i++) {
    let bombCR = bombNumber[i].split(" ");  //0 , 0
    let bombC = parseInt(bombCR[0]);
    let bombR = parseInt(bombCR[1]);

    for (let j = 0; j < colum; j++) {
        let changeArray = bombColumRow[bombC];  //1行目の  [・,・,・,・]
        changeArray[j] = "#";
    }

    for (let j = 0; j < row; j++) {
        let changeArray2 = bombColumRow[j];
        changeArray2[bombR] = "#";
    }
}

let count = 0;
for (let i = 0; i < row; i++) {
    let countColum = bombColumRow[i];
    for (let j = 0; j < colum; j++) {
        if (countColum[j] === "#") {
            count += 1;
        }
    }
}
console.log(count);