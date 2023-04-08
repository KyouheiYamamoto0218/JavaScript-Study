require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let daycount = parseInt(lines[0]);
let point = 0;

for (let i = 1; i < daycount + 1; i++) {
    let daybuyArray = lines[i].split(" ");
    let day = daybuyArray[0];
    let buy = parseInt(daybuyArray[1]);

    let baicheck = day.split("");

    let point3bai = baicheck.includes("3");
    let point5bai = baicheck.includes("5");

    if (point3bai) {
        point += parseInt(buy * 0.03);
    } else if (point5bai) {
        point += parseInt(buy * 0.05);
    } else {
        point += parseInt(buy * 0.01);
    }
}
console.log(point);