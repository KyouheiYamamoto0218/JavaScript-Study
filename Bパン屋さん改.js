require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let detail = lines[0].split(" ");
let breadKinds = parseInt(detail[0]);
let actionCount = parseInt(detail[1]);
let breadDetailArray = lines.slice(1, breadKinds + 1);

let priceArray = [];    //パンの金額の配列
for (let i = 0; i < breadKinds; i++) {
    let priceArray1 = breadDetailArray[i].split(" ");
    priceArray.push(priceArray1[0]);
}

let stockArray = [];    //パンのストックの配列
for (let i = 0; i < breadKinds; i++) {
    let stockArray1 = breadDetailArray[i].split(" ");
    stockArray.push(stockArray1[1]);
}

let actionArray = lines.slice(breadKinds + 1, breadKinds + actionCount + 1);
