require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let number = lines[0];
let number2 = number.replace(/-/g, '');　//指定の文字列を置換

let total = 0;
for (let i = 0; i < number2.length; i++) {
    let check = parseInt(number2[i]);
    if (check === 0) {
        total += 24;
    } else {
        total += (check + 2) * 2;
    }
}
console.log(total);