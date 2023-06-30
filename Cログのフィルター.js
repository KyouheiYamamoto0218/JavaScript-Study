require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let words = parseInt(lines[0]);
let check = lines[1];


let logs = [];
for (let j = 0; j < words; j++) {
    let log = lines[j + 2];
    logs.push(log);
}
let answer = filterLogs(logs, check);

if (answer.length === 0) {
    console.log("None");
} else {
    answer.forEach(answer => console.log(answer));
}

function filterLogs(logs, check) {
    let array = [];
    for (let i = 0; i < logs.length; i++) {
        let word = logs[i];
        if (word.includes(check)){
            array.push(word);
        }
    }
    return array;
}