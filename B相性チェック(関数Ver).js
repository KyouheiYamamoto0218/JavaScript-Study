require = require("fshook")(__filename);

let words = []; //abcdefghijklmnopqrstuvwxyz
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    words.push(String.fromCharCode(i));
}
let object = {};    //空のオブジェクト
for (let i = 0; i < words.length; i++) {
    object[words[i]] = i + 1
}

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let namename = lines[0];
let name = namename.replace(" ","");

let nameArray = namename.split(" ");
let a = nameArray[0];
let b = nameArray[1];
let name2 = b + a;  //izapa
let patternA = calcPoint(name);
let patternB = calcPoint(name2);

if (patternA > patternB) {
    console.log(patternA);
} else {
    console.log(patternB);
}

function calcPoint(name) {
    let nameCount = name.length;
    let testArray = [];
    for (let i = 0; i < nameCount; i++) {
        let aaa = object[name[i]];
        testArray.push(aaa);
    }

    let number = testArray.length;

    for (let i = 0; i < number - 1; i++) {
        let aaaArray = [];
        for (let j = 0; j < testArray.length - 1; j++) {
            let plus = testArray[j] + testArray[j + 1];

            if (plus > 100) {
                plus -= 101;
                aaaArray.push(plus);
            } else {
                aaaArray.push(plus);
            }
        }
        testArray = aaaArray;
    }
    return testArray[0];
}