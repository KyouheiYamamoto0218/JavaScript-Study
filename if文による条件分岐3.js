require = require("fshook")(__filename);

//下のdev/stdinからnになる値を読み込んでいる（一行限定）
let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")

// if文による条件分岐
let number = lines[0];

if (number == 10){
    console.log(`${number}は10に等しい`);　//条件式が成立した時の処理
} else if (number > 10){
    console.log(`${number}は10より大きい`);　//条件式２が成立した時の処理
} else {
    console.log(`${number}は10未満`);　//条件式が成立しなかったときの処理
}