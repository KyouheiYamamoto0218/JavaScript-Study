require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let member = parseInt(lines[0]);
let memberObject = {};

for (let i = 0; i < member; i++) {
    let index = lines[i + 1].split(" ");
    let id = index[0];
    let name = index[1];
    memberObject[id] = name;
}
console.log(memberObject);
console.log(memberObject["3333"]);  //指定したオブジェクトを出力　対応するオブジェクトを出力


// オブジェクト作成パターン1
// object['x'] = 1
// object['y'] = 2
// {x: 1,y: 2}
//
// オブジェクト作成パターン2
// let object = {};
// object.y = y;
// object.x = x;
//
// オブジェクト作成パターン3
// let object = {
//     y: y,
//     x: x,
// };