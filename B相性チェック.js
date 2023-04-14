require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

// let namename = lines[0];
// let name = namename.replace(" ","");
// let nameArray = name.split("");
//
// let words = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
//
// for (let i = 0; i < words.length; i++) {
//     nameArray = nameArray.replace(words[i], numbers[i]);
// }

let testArray = [16, 1, 9, 26, 1];
let number = testArray.length;
let aaaArray = [];
let number2 = number;

for (let i = 0; i < number - 1; i++) {
    for (let j = 0; j < number2 - 1; j++) {
        let plus = testArray[j] + testArray[j + 1]
        aaaArray.push(plus);
    }
    number2 -= 1;
    testArray = aaaArray;
}
console.log(testArray);