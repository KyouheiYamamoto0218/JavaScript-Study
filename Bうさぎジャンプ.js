require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let index = lines[0].split(" ");
let bushCount = parseInt(index[0]);
let rabbitCount = parseInt(index[1]);
let actionCount = parseInt(index[2]);

let rabbitPositions = [];　　// [1,2]
for (let i = 0; i < rabbitCount; i++) {
    let position = parseInt(lines[i + 1]);
    rabbitPositions.push(position);
}

for (let i = 0; i < actionCount; i++) {
    for (let j = 0; j < rabbitCount; j++) {
        let position = rabbitPositions[j];

        rabbitPositions[j] = movePosition(position, rabbitPositions, bushCount);
    }
}

for (let i = 0; i < rabbitPositions.length; i++) {
    console.log(rabbitPositions[i]);
}

function movePosition(position, rabbitPositions, bushCount) {
    position = nextBush(position, bushCount);
    while (rabbitPositions.includes(position)) {
        position = nextBush(position, bushCount);
    }
    return position;
}

function nextBush(position, bushCount) {
    if (position >= bushCount) {
        position = 1;
    } else {
        position += 1;
    }
    return position;
}