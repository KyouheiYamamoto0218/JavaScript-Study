require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

for (let i = 0; i < lines[0]; i++) {
    let xxxxxx = parseInt(lines[i]);
    let xxx = parseInt(lines[i+1]);

    if (i === 0){
        console.log("x\n".repeat(xxx-2) + "x");
    } else if (xxx-xxxxxx === 1){

    } else {
        console.log("x\n".repeat(xxx-xxxxxx-2) + "x");
    }
    console.log(lines[i+1]);
}
let lastxxx = parseInt(lines[0]);
let lastxxxxxx = parseInt(lines[lastxxx]);
console.log("x\n".repeat(31-lastxxxxxx-1) + "x");


console.log("---------------------------------------");


let scheduleA = parseInt(lines[0]);
let scheduleB = parseInt(lines[scheduleA+1]);

for (let i = scheduleA; i < scheduleA+scheduleB+1; i++) {
    let xxxxxx2 = parseInt(lines[i]);
    let xxx2 = parseInt(lines[i+1]);
    if (i === scheduleA){
        console.log("x\n".repeat(xxx2-2) + "x");
    } else if (xxx2-xxxxxx2 === 1){

    } else {
        console.log("x\n".repeat(xxx2-xxxxxx2-2) + "x");
    }
    console.log(lines[i+1]);
}
let lastxxx2 = parseInt(lines[0]);
let lastxxxxxx2 = parseInt(lines[lastxxx2+1]);
let lastlast = lines[lastxxx2+lastxxxxxx2+1];
console.log("x\n".repeat(31-lastlast-1) + "x");
