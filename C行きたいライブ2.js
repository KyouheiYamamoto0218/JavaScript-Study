require = require("fshook")(__filename);

let numbers = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .map(line => parseInt(line));

let aCount = numbers[0];
let bCount = numbers[aCount + 1];

let aDays = numbers.slice(1, 1 + aCount);
let bDays = numbers.slice(aCount + 2, aCount + 2 + bCount);

let yusen = 'A';

for (let i = 1; i <= 31; i++) {
    let hasA = aDays.includes(i);
    let hasB = bDays.includes(i);

    if (hasA && hasB) {
        // A, Bバッティング
        if (yusen === 'A') {
            console.log('A');
            yusen = 'B';
        } else if (yusen === 'B') {
            console.log('B');
            yusen = 'A';
        }
    } else if (hasA) {
        // Aだけ
        console.log("A");
    } else if (hasB) {
        // Bだけ
        console.log("B");
    } else {
        // どっちもない
        console.log("x");
    }
}