require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let number = lines[0].split(" ").map(str => parseInt(str));

let answer = numberCheck(number);
console.log(answer);

function numberCheck (number) {
    let max = Math.max(...number);　　//配列から最大値を消す　指定の値を消す　
    let number2 = number.filter(item => item.match(/max/));

    let secondMax = Math.max(...number2);
    let number3 = number2.filter(item => item.match(/secondMax/));

    let min1 = number3[0];
    let min2 = number3[1];

    return max*10 + secondMax*10 + min1 + min2;
}


