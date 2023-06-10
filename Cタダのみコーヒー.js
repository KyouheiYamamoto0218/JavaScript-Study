require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let coffeePrice = parseInt(index[0]);
let off = parseInt(index[1]);

let pay = 0;

for (let i = 0; i < Infinity; i++) {
    pay += coffeePrice;
    coffeePrice = coffeePrice * ((100-off) / 100);
    coffeePrice = parseInt(coffeePrice);
    if (coffeePrice === 0) {
        break;
    }
}

console.log(pay);