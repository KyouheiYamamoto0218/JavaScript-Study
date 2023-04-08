require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n")

let people_passingScore = lines[0].split(" ");
let people = parseInt(people_passingScore[0]);
let passingScore = parseInt(people_passingScore[1]);

for (let i = 1; i < people+1; i++) {
    let score = lines[i].split(" ");
    let point = parseInt(score[0]); //得点
    let absence = parseInt(score[1]);   //欠席回数
    let deduction = absence * 5;  //減点点数
    let finalPoint = point - deduction;

    if (passingScore === 0) {
        console.log(i);
    } else if (finalPoint >= passingScore) {
        console.log(i);
    } else {
    //不合格の為、非表示
    }
}