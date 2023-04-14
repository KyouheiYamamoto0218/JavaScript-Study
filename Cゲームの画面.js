require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let hw = lines[0].split(" ");
let h = parseInt(hw[0]);
let w = parseInt(hw[1]);
let yx = lines[1].split(" ");
let y = parseInt(yx[0]);
let x = parseInt(yx[1]);

if (y < 0) {
    y = (y * -1);
}
if (x < 0) {
    x = (x * -1);
}
let answer = (h * x) + (w * y) - (y * x);
console.log(answer);