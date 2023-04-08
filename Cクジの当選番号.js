require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let buy = parseInt(lines[1]);
console.log(`購入した枚数は ${buy}`);

let lottery = lines[0].split(" ");  //当選番号　lottery[0]～[5]

for (let i = 0; i < buy; i++) {
    let count = 0;
    let buyNumber = (lines[i+2]).split(" ");   //購入くじの番号　buyNumber[0]～[5]

    for (let n = 0; n < 6; n++) {
        let number = buyNumber[n];
        if (lottery.includes(number)){
            count = count + 1;
        }
    }

    console.log(count);
}