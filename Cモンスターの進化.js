require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

let status = lines[0].split(" ").map(str => parseInt(str));
let atk = status[0];
let def = status[1];
let agi = status[2];
let monster = parseInt(lines[1]);
let hasEvo = false;

for (let i = 0; i < monster; i++) {
    let evoMon = lines[i + 2].split(" ");
    let atkEvo = 0; let atk1 = parseInt(evoMon[1]); let atk2 = parseInt(evoMon[2]);
    let defEvo = 0; let def1 = parseInt(evoMon[3]); let def2 = parseInt(evoMon[4]);
    let agiEvo = 0; let agi1 = parseInt(evoMon[5]); let agi2 = parseInt(evoMon[6]);

    let atkOk = (atk1 <= atk && atk <= atk2);
    let defOk = (def1 <= def && def <= def2);
    let agiOk = (agi1 <= agi && agi <= agi2);

    if (atkOk && defOk && agiOk) {
        console.log(evoMon[0]);
        hasEvo = true;
    }
}

if (!hasEvo) {  //！はtrueとfalseを逆転させる。　
    console.log("no evolution");
}