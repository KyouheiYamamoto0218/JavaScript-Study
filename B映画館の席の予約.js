require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let movieDate = lines[0].split(" ");
let seat = parseInt(movieDate[0]);
let colum = parseInt(movieDate[1]);
let row = parseInt(movieDate[2]);
let easyColum = parseInt(movieDate[3]);
let easyRow = parseInt(movieDate[4]);
let minManhattan = Number.MAX_VALUE　　//マックスの数値
let result = [];

for (let c = 0; c < colum; c++) {
    for (let r = 0; r < row; r++) {

        if (isReserved(c, r) === false) {
            let manhattanC = Math.abs(easyColum - c);
            let manhattanR = Math.abs(easyRow - r);
            let manhattan = manhattanC + manhattanR;

            if (manhattan < minManhattan) {
                minManhattan = manhattan;    //マンハッタン距離の最小// 値を更新
                result = [[c,r]];   //初回がマンハッタン距離最小値だった場合の為
            } else if (manhattan === minManhattan) {
                result.push([c,r]);
            }
        }
    }
}
result.forEach(result => console.log(result[0] + " " + result[1]));

function isReserved (c, r) {
    for (let i = 1; i < seat + 1; i++) {
        let reserveArray = lines[i].split(" ");
        let reserveColum = parseInt(reserveArray[0]);
        let reserveRow = parseInt(reserveArray[1]);

        if (c === reserveColum && r === reserveRow) {   //&&で両方の式が一致した場合　（||の場合はor）　両条件の一致
            return true;
        }
    }
    return false;
}