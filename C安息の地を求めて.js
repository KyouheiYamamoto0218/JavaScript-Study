require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let date = lines[0].split(" ");
let a = parseInt(date[0]);
let b = parseInt(date[1]);
let r = parseInt(date[2]);

let kaisuu = parseInt(lines[1]);

for (let i = 2; i < kaisuu + 2; i++) {
    let plice = lines[i].split(" ");
    let x = parseInt(plice[0]);
    let y = parseInt(plice[1]);

    if ((x-a)*(x-a) + (y-b)*(y-b) >= r * r) {
    console.log("silent");
    } else {
    console.log("noisy");
    }
}