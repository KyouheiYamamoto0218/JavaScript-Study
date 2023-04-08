require = require("fshook")(__filename);


let n = require("fs")
    .readFileSync("/dev/stdin", "utf8");

// splitで分割し配列に格納、標準出力に出力する
let team = n.split(",");
console.log(team);