require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let namename = lines[0];
let name = namename.replace(" ","");
let words = "abcdefghijklmnopqrstuvwxyz"

let words2 = [];
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    words2.push(String.fromCharCode(i));
}
console.log(words2);



let object = {};    //空のオブジェクト
for (let i = 1; i < words.length; i++) {
    object[words[i]] = i
}
console.log(object["c"]);

let object2 = {
    "a": 1,
};



let testArray = [16, 1, 9, 26, 1];
let number = testArray.length;

for (let i = 0; i < number - 1; i++) {
    let aaaArray = [];
    for (let j = 0; j < testArray.length - 1; j++) {
        let plus = testArray[j] + testArray[j + 1];
        aaaArray.push(plus);
    }
    testArray = aaaArray;
}
console.log(testArray);