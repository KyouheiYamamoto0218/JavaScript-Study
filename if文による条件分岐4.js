require = require("fshook")(__filename);

//下のdev/stdinからnになる値を読み込んでいる（一行限定）

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split(" ");

let people = parseInt(lines[0]);
let AAA = parseInt(lines[1]);
let BBB = parseInt(lines[2]);

//console.log(people);

for (let i = 0; i < people; i++) {
    let retsu = i + 1;

    if ((retsu%AAA == 0) && (retsu%BBB == 0)){
        console.log("AB");
    } else if (retsu%BBB == 0){
        console.log("B");
    } else if (retsu%AAA == 0){
        console.log("A");
    } else {
        console.log("N");
    }

}