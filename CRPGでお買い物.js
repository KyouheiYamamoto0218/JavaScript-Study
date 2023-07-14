require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let itemArray = lines[1].split(" ");    //「各商品金額」の配列
let myMoneyArray = lines[2].split(" ");　　//「所持金」と「買い物の回数」の配列
let money = parseInt(myMoneyArray[0]);　　//「所持金」
let buyCount = parseInt(myMoneyArray[1]);  //「買い物の回数」

for (let i = 0; i < buyCount; i++) {
    let buyArray = lines[i + 3].split(" ");　　//「商品NO」と「買う個数」の配列
    let itemNumber = parseInt(buyArray[0]);　　//「商品NO」
    let itemCount = parseInt(buyArray[1]);　　//「買う個数」
    let itemMoney = itemArray[itemNumber - 1] * itemCount;　　//商品の最終金額

    if (pey(money, itemMoney)) {
        money -= itemMoney;
    }
}
console.log(money);
function pey (money, itemMoney) {
    if (money >= itemMoney) {
        return true;
    }
}