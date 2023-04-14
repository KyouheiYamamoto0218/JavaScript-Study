require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = 0;
let items = lines[index++].split(' ').map(str => parseInt(str));
let breadCount = items[0];
let actionCount = items[1];
let prices = [];
let stocks = [];

for (let i = index; i < index + breadCount; i++) {
    let items = lines[i].split(' ').map(str => parseInt(str));
    prices.push(items[0]);
    stocks.push(items[1]);
}
index += breadCount;

for (let i = index; i < index + actionCount; i++) {
    let items = lines[i].split(' ');
    let actionType = items[0];
    let counts = items.slice(1, items.length).map(str => parseInt(str));

    if (actionType === 'buy') {
        if (パンは足りてるか(stocks, counts)) {
            console.log(合計金額の計算(prices, counts));
            stocks = 配列を引く(stocks, counts);
        } else {
            console.log(-1);
        }
    } else if (actionType === 'bake') {
        stocks = 配列を足す(stocks, counts);
    }
}

function パンは足りてるか(stocks, counts) {
    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] < counts[i]) {
            return false;
        }
    }
    return true;
}

function 合計金額の計算(prices, counts) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i] * counts[i];
    }
    return total;
}

function 配列を引く(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = array1[i] - array2[i];
    }
    return newArray;
}

function 配列を足す(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = array1[i] + array2[i];
    }
    return newArray;
}