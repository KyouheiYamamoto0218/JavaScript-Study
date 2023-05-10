require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ");
let bush = parseInt(index[0]);
let ravitCount = parseInt(index[1]);
let actionCount = parseInt(index[2]);

let array = [];　　// [1,2]
for (let i = 0; i < ravitCount; i++) {
    let position = parseInt(lines[i + 1]);
    array.push(position);
}

for (let i = 0; i < actionCount; i++) {
    for (let j = 0; j < ravitCount; j++) {
        let firstMove = parseInt(lines[j + 1]);
        let nextMove = parseInt(lines[j + 2]);

        for (let k = 1; k < bush + 1; k++) {
            if (firstMove + 1 !== nextMove) {
                firstMove += firstMove + 1;
            } else if (firstMove + k === nextMove) {
                firstMove += 1;
            }
        }
    }
}