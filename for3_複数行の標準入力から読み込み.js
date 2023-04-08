require = require("fshook")(__filename);

//下の/dev/stdinからnに代入する値を読み込んでいる　　.split("\r\n");の箇所で複数行を読み込む指定
let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

//forを使って指定の条件の値になるまで出力を行う
//変数iをカウンター変数と呼ぶ（iやjを使う慣習）

let count = lines[0];
console.log(count);

for (let i = 0; i < count; i++) {
    let userName = lines[i + 1];
    console.log(`Hello ${userName}`);
 }
