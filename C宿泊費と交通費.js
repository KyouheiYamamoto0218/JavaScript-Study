require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ").map(str => parseInt(str));
let train = index[0];
let hotel = index[1];
let intern = index[2];

let money = train * 2;

let array = [];
for (let i = 0; i < intern; i++) {
    let day = lines[i + 1].split(" ");
    let a = day[0];
    let b = day[1];
    array.push(parseInt(a));
    array.push(parseInt(b));
}

for (let i = 0; i < intern - 1; i++) {
    let countDay1 = array[i + 1];
    let countDay2 = array[i + 2];
    i += 1; //ここなんか他にやり方ない？
    intern += 1; //ここなんか他にやり方ない？
    let dayday = countDay2 - countDay1;

    if (train * 2 < hotel * dayday) {
        money += train * 2;
    } else if (train * 2 > hotel * dayday) {
        money += hotel * dayday;
    }
}
console.log(money);