require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let coffeePrice = parseInt(index[0]);
let off = parseInt(index[1]);

let pay = 0;

while (true) {　　//forの無限ループバージョン　無限LOOP
    pay += coffeePrice;
    coffeePrice = coffeePrice * ((100-off) / 100);
    coffeePrice = Math.floor(coffeePrice);　　//小数点以下を切り捨て
    if (coffeePrice === 0) {
        break;
    }
}

console.log(pay);