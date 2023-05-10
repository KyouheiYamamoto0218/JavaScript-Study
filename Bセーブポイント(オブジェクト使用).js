require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let rowCount = parseInt(index[0]);
let columnCount = parseInt(index[1]);
let saveNumber = parseInt(index[2]);
let currentLocation = {};
let saveArray = [];

for (let y = 0; y < rowCount; y++) {
    let row = lines[y + 1];
    for (let x = 0; x < columnCount; x++) {
        let masu = row[x];
        if (masu === "N") {
            currentLocation.y = y;      //空のオブジェクトを先に作るパターン
            currentLocation.x = x;
        } else if (masu !== "#") {     //ノットイコール　イコールじゃないとき
            let savePoint = {   //オブジェクトを同時に作るパターン
                savePointNumber: masu,
                y: y,
                x: x,
            };
            saveArray.push(savePoint);
        }
    }
}
// console.log(currentLocation);
// console.log(saveArray);

let min = 9999;
let results = [];
for (let i = 0; i < saveNumber; i++) {
    let savePoint = saveArray[i];
    let distance = 0;
    distance += Math.abs(currentLocation.y - savePoint.y);
    distance += Math.abs(currentLocation.x - savePoint.x);

    if (distance < min) {
        min = distance;
        results = [savePoint.savePointNumber];
    } else if (distance === min) {
        results.push(savePoint.savePointNumber);
    }
}
// console.log(results);

console.log(results.length);

results = results.sort();
results.forEach(results => console.log(results));