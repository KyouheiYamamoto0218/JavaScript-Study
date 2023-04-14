require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .map(num => parseInt(num));

let dislike = lines[0];
let rooms = lines[1];
let count = 0;

for (let i = 1; i <= rooms; i++) {
    let roomNumber = lines[1 + i];
    let roomNumber2 = Array.from(String(roomNumber), Number);   //数値を配列化

    let not = roomNumber2.includes(dislike);

    if (not){
        //部屋番号を表示しない
        count = count + 1;
    }else {
        console.log(roomNumber);
    }
}

if (count === rooms) {
    console.log("none");
}