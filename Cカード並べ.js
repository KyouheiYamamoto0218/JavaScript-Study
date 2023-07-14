require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let number = lines[0].split(" ").map(str => parseInt(str));

let answer = numberCheck(number);
console.log(answer);

function numberCheck (number) {
    let max = Math.max(...number);　　//配列から最大値を消す　指定の値を消す　
    let maxNumber = number.indexOf(max);  //配列から指定の値を見つけて、最初の順番の数値を抽出
    number.splice(maxNumber, 1);　　//配列から要素を抜いたり、置き換えたりする

    let secondMax = Math.max(...number);
    number.splice(secondMax, 1);

    let min1 = number[0];
    let min2 = number[1];

    return max*10 + secondMax*10 + min1 + min2;
}