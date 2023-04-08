require = require("fshook")(__filename);

let n = require("fs")
    .readFileSync("/dev/stdin", "utf8");
//上記のdev/stdinからnになる値を読み込んでいる（一行限定）

console.log(n)

