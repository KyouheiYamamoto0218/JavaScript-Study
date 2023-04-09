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

for (let i = 0; i < actionCount; i++) {
    let actionArray = lines[i + breadKinds + 1].split(" ");

    let countArray = [];    //購入or焼き上げるパンの数の配列
    for (let i = 0; i < actionCount; i++) {
        let countArray2 = actionArray.slice(1, actionArray[i].length);
        countArray.push(countArray2);
    }

    let actionType = actionArray[0];
    if (actionType === "buy") {
        if (stockCheck(???,???)) {
            for (let j = 0; j < breadKinds; j++) {
                let total = 0;
                let price = priceArray[j];
                let priceCount = actionArray[j + 1]

                total += countArray[i] * priceCount[i];
            }
        } else {
            console.log(-1);
        }
    }　else if (actionType === "bake") {
        stockArray += countArray;
    }

}

function stockCheck(???, ???) {     //パンが足りているかどうかのチェック
    for (let i = 0; i < actionCount; i++) {
        if (stockArray[i] < actionArray[i + 1]) {
            return false;
        }
    }
    return true;
}