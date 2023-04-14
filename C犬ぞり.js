require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let firstA = lines[0].split(" ");       //一回戦目Aブロック------------------
// console.log(firstA[0]);
// console.log(firstA[1]);

let firsttimeA = lines[2].split(" ");
//console.log(firsttimeA[firstA[0]-1]);
//console.log(firsttimeA[firstA[1]-1]);
let jun1 = parseInt(firsttimeA[firstA[0]-1]);
let jun2 = parseInt(firsttimeA[firstA[1]-1]);
// console.log(`前者は ${jun1}`);
// console.log(`後者は ${jun2}`);

let resultA = 0;       //一回戦目Aブロック勝者の判定
if (jun1 < jun2) {
    resultA = firstA[0];
} else {
    resultA = firstA[1];
}
// console.log(`勝者は ${resultA}`);
//
//
// console.log ("------------------")


let firstB = lines[1].split(" ");       //一回戦目Bブロック------------------
// console.log(firstB[0]);
// console.log(firstB[1]);

let firsttimeB = lines[2].split(" ");
//console.log(firsttimeB[firstB[0]-1]);
//console.log(firsttimeB[firstB[1]-1]);
let jun3 = parseInt(firsttimeB[firstB[0]-1]);
let jun4 = parseInt(firsttimeB[firstB[1]-1]);
// console.log(`前者は ${jun3}`);
// console.log(`後者は ${jun4}`);

let resultB = 0;      //一回戦目Bブロック勝者の判定
if (jun3 < jun4) {
    resultB = firstB[0];
} else {
    resultB = firstB[1];
}
// console.log((`勝者は ${resultB}`));
//
//
// console.log ("------------------")


let resultAtime = 0;
let resultBtime = 0;
if (resultA < resultB) {
    resultAtime = 0;
    resultBtime = 1;
} else {
    resultAtime = 1;
    resultBtime = 0;
}
let secondtime = lines[3].split(" ");
//console.log(secondtime[resultAtime])
//console.log(secondtime[resultBtime])

let AAA = parseInt(secondtime[resultAtime]);
let BBB = parseInt(secondtime[resultBtime]);
//console.log(AAA);
//console.log(BBB);

if (AAA < BBB) {
    console.log(resultA);
    console.log(resultB);
} else {
    console.log(resultB);
    console.log(resultA);
}