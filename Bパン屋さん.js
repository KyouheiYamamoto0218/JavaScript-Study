require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let line1Items = lines[0].split(" ");
let bakeryKinds = parseInt(line1Items[0]);
let actionCount = parseInt(line1Items[1]);
let moneyArray =  lines.slice(1, 1 + bakeryKinds);

let prices = [];
for (let i = 0; i < bakeryKinds; i++) {
    let money1 = moneyArray[i].split(" ");
    prices.push(parseInt(money1[0]));
}

let stocks = [];
for (let i = 0; i < bakeryKinds; i++) {
    let stock1 = moneyArray[i].split(" ");
    stocks.push(parseInt(stock1[1]));
}

for (let i = bakeryKinds + 1; i < bakeryKinds + actionCount + 1; i++) {
    let actionArray = lines[i].split(" ");
    let earnings = 0;

    if (actionArray[0] === "buy") {
        let empty = false;
        for (let j = 0; j < bakeryKinds; j++) {
            let count = parseInt(actionArray[j + 1]);
            let price = parseInt(prices[j]);

            earnings += count * price;
            // console.log(`${count} ${price}`);

            if (stocks[j] < count) {
                empty = true;
            }
        }
        if (empty === true) {
            console.log("-1");
        } else {
            console.log(earnings);
            for (let j = 0; j < bakeryKinds; j++) {
                stocks[j] -= parseInt(actionArray[j + 1]);
            }
        }
    } else if (actionArray[0] === "bake") {
        for (let j = 0; j < bakeryKinds; j++) {
            stocks[j] += actionArray[j+1];
        }
    }
}