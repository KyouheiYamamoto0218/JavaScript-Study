require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let wordCount = parseInt(lines[0]);
let point = 0;

for (let i = 1; i < wordCount+1; i++) {
    let wordArray = lines[i].split(" ");
    let wordA = wordArray[0];
    let wordB = wordArray[1];

    let wordAcount = wordA.length;  //文字列の数をカウント
    let wordBcount = wordB.length;

    if (wordA === wordB) {
        point += 2;
    } else if (wordAcount === wordBcount) {
        if (ngCount(wordA, wordB) <= 1) {
            point += 1;
        }
    }
}
console.log(point);

function ngCount(A, B) {    //関数の作成
    let count = 0;
    for (let w = 0; w < A.length; w++) {
        if (A[w] !== B[w]) {
            count += 1;
        }
    }
    return count;
}


// 例)
// 正解: apple, 解答: aple → 0 点 (長さが異なる) point += 0;
// 正解: orange, 解答: olange → 1 点 (長さは同じだが 1 文字だけ異なる) point += 1;
// 正解: grape, 解答: glepe → 0 点 (長さは同じだが 2 文字異なる) point += 0;
// 正解: lemon, 解答: lemon → 2 点 (完全一致) point += 2;