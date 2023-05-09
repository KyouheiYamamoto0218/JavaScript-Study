require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let index = lines[0].split(" ");
let column = parseInt(index[0]);
let row = parseInt(index[1]);
let saveNumber = parseInt(index[2]);
let currentLocation = [];
let saveArray = [];

for (let i = 0; i < column; i++) {
    let saveColumn = lines[i + 1];
    for (let j = 0; j < row; j++) {
        if (saveColumn[j] === "N") {
            currentLocation[0] = i + 1;
            currentLocation[1] = j + 1;
        }
    }
}
let place = currentLocation[0] + " " + currentLocation[1];
saveArray.push(place);

for (let i = 0; i < saveNumber; i++) {
    for (let j = 0; j < column; j++) {
        let saveColumn = lines[j + 1];
        for (let k = 0; k < row; k++) {
            let check = parseInt(saveColumn[k]);
            if (check === i + 1) {
                currentLocation[0] = j + 1;
                currentLocation[1] = k + 1;
                let place = currentLocation[0] + " " + currentLocation[1];
                saveArray.push(place);
            }
        }
    }
}
// console.log(saveArray);  // [ '3 5', '3 3', '4 2', '4 4', '2 6', '5 7' ]

let nearPoint = [];
for (let i = 0; i < saveNumber; i++) {
    let now = saveArray[0].split(" ");
    let now1 = parseInt(now[0]);
    let now2 = parseInt(now[1]);

    let check = saveArray[i + 1].split(" ");
    let check1 = parseInt(check[0]);
    let check2 = parseInt(check[1]);

    let point1 = Math.abs(now1 - check1);
    let point2 = Math.abs(now2 - check2);
    let point = point1 + point2;
    nearPoint.push(point);
}
// console.log(nearPoint);  // [ 2, 4, 2, 2, 4 ]

let finalArray = [0];
for (let i = 0; i , i < nearPoint.length; i++) {
    let min = Math.min(...nearPoint);
    let check = nearPoint[i];
    if (min === check) {
        finalArray[0] += 1;
        finalArray.push(i + 1);
    }
}
// console.log(finalArray);
finalArray.forEach(finalArray => console.log(finalArray));