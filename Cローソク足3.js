require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let days = parseInt(lines[0]);

let kabukaList = lines.slice(1, 1 + days)
    .map(line => lintToKabuka(line));

let result = [];

// 始値
result.push(kabukaList[0].start);

// 終値
result.push(kabukaList[kabukaList.length - 1].end);

let max = Number.NEGATIVE_INFINITY;
let min = Number.POSITIVE_INFINITY;

kabukaList.forEach(kabuka => {
    if (kabuka.high > max) {
        max = kabuka.high;
    }
    if (kabuka.low < min) {
        min = kabuka.low
    }
});

// 高値
result.push(max);

// 安値
result.push(min);

console.log(result.join(' '));

function lintToKabuka(line) {
    let numbers = line.split(' ')
        .map(item => parseInt(item));
    return {
        start: numbers[0],
        end: numbers[1],
        high: numbers[2],
        low: numbers[3],
    }
}