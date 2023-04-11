require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let detail = lines[0].split(" ");   //2 4
let breadKinds = parseInt(detail[0]);   //2
let actionCount = parseInt(detail[1]);  //4
let breadDetailArray = lines.slice(1, breadKinds + 1);  //150 2 , 200 3

let priceArray = [];    //パンの金額の配列 150 , 200
for (let i = 0; i < breadKinds; i++) {
    let priceArray1 = breadDetailArray[i].split(" ");
    priceArray.push(priceArray1[0]);
}

let stockArray = [];    //パンのストックの配列 2 , 3
for (let i = 0; i < breadKinds; i++) {
    let stockArray1 = breadDetailArray[i].split(" ");
    stockArray.push(stockArray1[1]);
}

for (let i = 0; i < actionCount; i++) {
    let actionArray = lines[i + breadKinds + 1].split(" "); //buy , 1 , 2
    let countArray = actionArray.slice(1, actionArray.length);  //1 , 2

    let actionType = actionArray[0];
    if (actionType === "buy") {
        if (stockCheck(stockArray, countArray)) {
            let totalPrice = 0;

            for (let j = 0; j < breadKinds; j++) {

                let price = priceArray[j] * countArray[j];
                totalPrice += price;
            }
            console.log(totalPrice);
        } else {
            console.log(-1);
        }
    }　else if (actionType === "bake") {
        for (let i = 0; i < breadKinds; i++) {
            stockArray[i] += countArray[i];
        }
    }
}

function stockCheck(stockArray, countArray) {     //パンが足りているかどうかのチェック
    for (let i = 0; i < stockArray.length; i++) {
        let stockCheck = parseInt(stockArray[i]);
        let countCheck = parseInt(countArray[i]);
        if (stockCheck < countCheck) {
            return false;
        } else {
            return true;
        }
    }
}