require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

うさぎが2匹なら2個の配列
1匹目が1番目の茂み
2匹目が3番目の茂み
[1,3]