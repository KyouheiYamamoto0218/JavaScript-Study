require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let panel = lines[0].split(" ");
let panelY = parseInt(panel[0]);
let panelX = parseInt(panel[1]);
let count = 0;

for (let i = 1; i < panelY + 1; i++) {
    let scoreArray = lines[i];
    let pointArray = lines[panelY + i].split(" ");

    for (let j = 0; j < panelX; j++) {
        let score = scoreArray[j];
        let point = parseInt(pointArray[j]);

        if (score === "o") {
            count += point;
        }
    }
}
console.log(count);