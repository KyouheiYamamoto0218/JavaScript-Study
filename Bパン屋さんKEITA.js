require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

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
    let no = stocks.find((stock, i) => stock < counts[i]);
    return !no;
}

function 合計金額の計算(prices, counts) {
    let price = counts
        .map((count, j) => count * prices[j])
        .reduce((sum, e) => sum + e, 0);
    return price;
}

function 配列を引く(array1, array2) {
    return array1.map((number, i) => number - array2[i]);
}

function 配列を足す(array1, array2) {
    return array1.map((number, i) => number + array2[i]);
}