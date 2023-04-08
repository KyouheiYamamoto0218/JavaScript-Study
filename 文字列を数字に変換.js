require = require("fshook")(__filename);

//文字列を数字に変換　ParseIntは小数点以下削除だけでなく、文字列を数字に変換する役割もある
let n = require("fs").readFileSync("/dev/stdin", "utf8");

let suuti = parseInt(n);
let result = suuti + 100;
console.log(result);