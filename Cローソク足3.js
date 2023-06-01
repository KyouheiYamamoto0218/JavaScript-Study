require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let days = parseInt(lines[0]);
let kabukaList = lines.slice(1, 1 + days)
    .map(line => lineToKabuka(line));

let result = getKabukaResult(kabukaList);
console.log(result.join(' '));

function getKabukaResult(kabukaList) {
    return [
        getStart(kabukaList),
        getEnd(kabukaList),
        getMax(kabukaList),
        getMin(kabukaList),
    ];
}

function getStart(kabukaList) {
    return kabukaList[0].start;
}

function getEnd(kabukaList) {
    return kabukaList[kabukaList.length - 1].end;
}

function getMax(kabukaList) {
    let max = Number.NEGATIVE_INFINITY;
    kabukaList.forEach(kabuka => {
        if (kabuka.high > max) {
            max = kabuka.high;
        }
    });
    return max;
}

function getMin(kabukaList) {
    let min = Number.POSITIVE_INFINITY;
    kabukaList.forEach(kabuka => {
        if (kabuka.low < min) {
            min = kabuka.low
        }
    });
    return min;
}

function lineToKabuka(line) {
    let numbers = line.split(' ')
        .map(item => parseInt(item));
    return {
        start: numbers[0],
        end: numbers[1],
        high: numbers[2],
        low: numbers[3],
    }
}