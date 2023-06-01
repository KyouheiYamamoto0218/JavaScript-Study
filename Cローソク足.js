require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let kabuArray = [];
let days = parseInt(lines[0]);

let startDay = lines[1].split(" ");
let startKabu = parseInt(startDay[0]);
kabuArray.push(startKabu);

let lastDay = lines[days].split(" ");
let lastKabu = parseInt(lastDay[1]);
kabuArray.push(lastKabu);

let expensiveKabu = 0;
for (let i = 0; i < days; i++) {
    let dayArray = lines[i + 1].split(" ");
    let expensiveKabuUpdate = parseInt(dayArray[2]);

    if (expensiveKabu < expensiveKabuUpdate) {
        expensiveKabu = expensiveKabuUpdate;
    }
}
kabuArray.push(expensiveKabu);

let cheapKabu = parseInt(startDay[3]);
for (let i = 0; i < days; i++) {
    let dayArray = lines[i + 1].split(" ");
    let cheapKabuUpdate = parseInt(dayArray[3]);

    if (cheapKabu > cheapKabuUpdate) {
        cheapKabu = cheapKabuUpdate;
    }
}
kabuArray.push(cheapKabu);

console.log(kabuArray.join(" "));