require = require("fshook")(__filename);

//下の/dev/stdinからnに代入する値を読み込んでいる　　.split("\n");の箇所で複数行を読み込む指定
let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

//forを使って指定の条件の値になるまで出力を行う
//変数iをカウンター変数と呼ぶ（iやjを使う慣習）

let count = lines[0];
console.log(count);

for (let i = 0; i < count; i++) {
    let number = lines[i + 1];
    console.log(number);
    if (number == 5){
        console.log(`${number}は5に等しい`);　//条件式が成立した時の処理
    } else if (number >= 10){
        console.log(`${number}は10以上`);　//条件式２が成立した時の処理
    } else {
        console.log(`${number}は10未満`);　//条件式が成立しなかったときの処理
    }
 }
