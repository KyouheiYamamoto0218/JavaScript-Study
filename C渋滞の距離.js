require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let carCongestion = lines[0];
let carCongestion2 = carCongestion.split(" ");
let car = parseInt(carCongestion2[0]);
let congestion = parseInt(carCongestion2[1]);
let count = 0

for (let i = 1; i < car; i++) {
    let suuji = parseInt(lines[i]);
    if (suuji <= congestion){
        count = count + suuji
    }
}

console.log(count);