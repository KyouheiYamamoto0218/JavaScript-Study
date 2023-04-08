require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let people = parseInt(lines[0]);    //人の数
let ballArray = lines.slice(1, people + 1).map(str => parseInt(str));   //配列を数値に変換
let pass = parseInt(lines[people+1]);   //パスアクションの数

console.log(ballArray);

for (let n = people+2; n < people+pass+2; n++) {
    let hendou = lines[n].split(" ");
    let senderIndex = parseInt(hendou[0]) - 1;
    let receiveIndex = parseInt(hendou[1]) - 1;
    let ballCount = parseInt(hendou[2]);

    console.log(hendou);

    if (ballCount > ballArray[senderIndex]) {
        ballCount = ballArray[senderIndex];
    }
    ballArray[senderIndex] -= ballCount;
    ballArray[receiveIndex] += ballCount;
}

ballArray.forEach(ballArray => console.log(ballArray));