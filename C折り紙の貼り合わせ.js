require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let printdate = lines[0].split(" ");
let origami = parseInt(printdate[0]);
let ippen = parseInt(printdate[1]);

let nippen = ippen;

for (let i = 1; i < origami; i++) {
    let kaburi = parseInt(lines[i]);
    let nippencount = ippen - kaburi;
    nippen += nippencount;
}

console.log(ippen * nippen);
