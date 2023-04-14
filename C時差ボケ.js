require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let days = parseInt(lines[0]);    //console.log(days)
let max = (0);
let min = (100000);

for (let i = 1; i <= days; i++) {
    let time = lines[i].split(" ");
    let f = parseInt(time[0]);    //console.log(f);
    let s = parseInt(time[1]);    //console.log(s);
    let t = parseInt(time[2]);    //console.log(t);
    let total = parseInt((f + s + (24-t)));   //console.log(total);

    if (total > max) {
        max = total;
    }
    if (total < min) {
        min = total;
    }
}

console.log(min);
console.log(max);
