require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let money_times = lines[0].split(" ");
let money = parseInt(money_times[0]);
let times = parseInt(money_times[1]);
let point = 0;

for (let i = 1; i < times+1; i++) {
    let pay = parseInt(lines[i]);

    if (point < pay) {
        money = money - pay;
        point = point + (pay * 0.1);
    } else if (point >= pay) {
        point = point - pay;
    }
    console.log([money, point].join(" "));       //配列を文字列にして返す
}