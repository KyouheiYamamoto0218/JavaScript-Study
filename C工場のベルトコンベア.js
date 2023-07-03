require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let scheduleCount = parseInt(index[0]);

let schedule = lines[1].split(" ");
let aPartsArray = lines[2].split(" ");
let bPartsArray = lines[3].split(" ");

let j = 0;
let k = 0;

let ai = 0;
let aAnswer = parseInt([3 - ai]);

let bi = 0;
let bAnswer = parseInt([3 - bi]);

for (let i = 0; i < scheduleCount; i++) {
    let check = schedule[i];

    let aParts = aPartsArray[j];
    let bParts = bPartsArray[k];
    hitCheck(check, aParts, bParts, j, k)
    }

console.log(`${aAnswer} ${bAnswer}`);

function hitCheck(check, aParts, bParts, j, k) {
    if (check === aParts) {
        return ai += 1;
        return j += 1;
    }
    if (check === bParts) {
        return bi += 1;
        return k += 1;
    }
}