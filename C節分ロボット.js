require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let peopleCount = parseInt(lines[0]);
let peopleAge = lines.slice(1, peopleCount + 1).map(str => parseInt(str));   //配列を数値に変換
let action = parseInt(lines[peopleCount+1]);

let have = [];  //空の配列を作成
for (let h = 0; h < peopleCount; h++) {   //空の配列に要素を追加する、配列に追加
    have.push(0);
}
//console.log(have);

have2 = Array(peopleCount).fill(0)  //配列の作成
//console.log(have);

for (let i = peopleCount+2; i < peopleCount+action+2; i++) {
    let giveArray = lines[i];
    let giveArray2 = giveArray.split(" ").map(str => parseInt(str));  //配布詳細の配列
    let count = parseInt(giveArray2[2]);  //配布する数
    //console.log(count);

    for (let r = giveArray2[0]; r < giveArray2[1] + 1; r++) {
        let sendNumber = r - 1;
        have[sendNumber] += count;

        if (peopleAge[sendNumber] < have[sendNumber]) {
            have[sendNumber] = peopleAge[sendNumber];
        }
    }
}
have.forEach(have => console.log(have));    //配列を縦に表示　配列を列で表示