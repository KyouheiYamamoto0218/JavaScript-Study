require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let number = parseInt(lines[0]);
let array = [];

for (let i = 0; i < number; i++) {
    let index = lines[i + 1].split(" ")
    let q1 = index[0];
    let q2 = index[1];

    if (check(q1, q2)) {
        array.push(i + 1);
    }
}

if (array.length === 0) {
    console.log(0);
} else {
    console.log(array.length);
    array.forEach(array => console.log(array));
}
function check(q1, q2) {
    if (q1 === q2 === "y"){
        return true;
    }
    return false;
}
