require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ");
let boxCount = parseInt(index[0]);
let diameter = parseInt(index[1]*2);

for (let i = 0; i < boxCount; i++) {
    let boxData = lines[i+1].split(" ");
    let boxData2 = boxData.map(str => parseInt(str));
    let boxMin = Math.min(...boxData2); //配列の最小値を書き出す

    if (diameter <= boxMin) {
        console.log(i+1);
    }

}