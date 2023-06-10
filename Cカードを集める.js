require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let cardCount = parseInt(index[0]);
let cardTypeCount = parseInt(index[1]);

let cardArray = [];
for (let i = 0; i < cardCount; i++) {
    let cardNumber = parseInt(lines[i + 1]);
    cardArray.push(cardNumber);
}

let answer = getCompleteNumber(cardArray, cardTypeCount);
if (answer === undefined) {
    console.log("unlucky")
} else {
    console.log(answer);
}


function isAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            return false;
        }
    }
    return true;
}

//JS DOC(ジェーエスドック）
/**
 * カードが全部揃ったときが何枚目か調べる
 * @param cardArray　カードの配列
 * @param cardTypeCount　カードの種類の数
 * @return {number} カードが全部揃った時点で引いた枚数
 */
function getCompleteNumber(cardArray, cardTypeCount) {
    let array = [];
    for (let i = 0; i < cardTypeCount; i++) {
        array.push(false);
    }
    for (let i = 0; i < cardArray.length; i++) {
        let cardJudge = parseInt(cardArray[i]);
        array[cardJudge - 1] = true;

        if (isAllTrue(array)) {
            return i + 1;
        }
    }
}