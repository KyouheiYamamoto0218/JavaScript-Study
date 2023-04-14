require = require("fshook")(__filename);

//下の/dev/stdinからnに代入する値を読み込んでいる　　.split("\n");の箇所で複数行を読み込む指定
let n = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

console.log(n)

let itigyoume = n[0];
console.log(itigyoume);

console.log(`Hello ${itigyoume}`);

// windowsは「\n」が改行コード