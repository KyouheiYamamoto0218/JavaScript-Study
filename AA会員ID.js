require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let menber = parseInt(lines[0]);
let menberInfo = [];

for (let i = 0; i < menber; i++) {
    let menberIndex = lines[i + 1].split(" ");
    let menberObject = {};
    menberObject.id = menberIndex[0];
    menberObject.name = menberIndex[1];

    menberInfo.push(menberObject);
}
// console.log(menberInfo);

for (let i = 0; i < menber; i++) {
    let outputId = lines[menber + 1];
    let checkIdArray = lines[i + 1].split(" ");
    let checkId = checkIdArray[0];

    if (outputId === checkId) {
        console.log(checkIdArray[1]);
    }
}