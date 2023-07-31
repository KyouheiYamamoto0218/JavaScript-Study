require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let schedule = lines[1].split("");
let aPartsArray = lines[2].split("");
let bPartsArray = lines[3].split("");

let aAnswer = hitCheck(schedule, aPartsArray);
let bAnswer = hitCheck(schedule, bPartsArray);
console.log(`${aAnswer} ${bAnswer}`);

//   /と**で関数の詳細メモを記入できる。
/**
 *
 *
 * @param schedule 信号のスケジュールの配列
 * @param partsArray 部品の進む向きの配列
 * @return 残った部品の数
 */
function hitCheck(schedule, partsArray) {
    for (let i = 0; i < schedule.length; i++) {
        let check = schedule[i];
        let checkParts = partsArray[0];

        if (check === checkParts) {
            partsArray.shift();　　//配列から削除　配列から消す　配列減らす
        }
    }
    return partsArray.length;
}