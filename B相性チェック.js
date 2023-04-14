require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let namename = lines[0];
let name = namename.replace(" ","");

let words = []; //abcdefghijklmnopqrstuvwxyz
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    words.push(String.fromCharCode(i));
}

let object = {};    //空のオブジェクト
for (let i = 0; i < words.length; i++) {
    object[words[i]] = i + 1
}

let namecount = name.length;
let testArray = [];
for (let i = 0; i < namecount; i++) {
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
let patternA = (testArray[0]);

//-----------------------------------------

let nameArray = namename.split(" ");
let a = nameArray[0];
let b = nameArray[1];
let name2 = b + a;  //izapa

let testArray2 = [];
for (let i = 0; i < namecount; i++) {
    let aaa = object[name2[i]];
    testArray2.push(aaa);
}

for (let i = 0; i < number - 1; i++) {
    let aaaArray2 = [];
    for (let j = 0; j < testArray2.length - 1; j++) {
        let plus = testArray2[j] + testArray2[j + 1];

        if (plus > 100) {
            plus -= 101;
            aaaArray2.push(plus);
        } else {
            aaaArray2.push(plus);
        }
    }
    testArray2 = aaaArray2;
}
let patternB = (testArray2[0]);

if (patternA > patternB) {
    console.log(patternA);
} else {
    console.log(patternB);
}