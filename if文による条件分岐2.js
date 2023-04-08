require = require("fshook")(__filename);

//下のdev/stdinからnになる値を読み込んでいる（一行限定）
let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8");

// if文による条件分岐
let userName = lines;
console.log(`Hello ${userName}`);

if (userName == "JavaScript"){
    console.log("JavaScriptと入力したね");　//条件式が成立した時の処理
} else if (userName == "javascript"){
    console.log("小文字でjavascriptと入力したね");　//条件式２が成立した時の処理
} else {
    console.log("JavaScriptと入力してないね");　//条件式が成立しなかったときの処理
}