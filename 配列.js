//カンマ区切りの一行の標準入力を出力
let player1 = "勇者";
let player2 = "魔法使い";

console.log(player1);
console.log(player2);

let team = ["戦士","忍者",player2,"聖なる" + player1];
console.log(team);


//カンマ区切りの1行の標準入力を改行して出力
let team2 = ["戦士2","忍者2","賢者2"];
console.log("0: " + team2[0]);
console.log("1: " + team2[1]);
console.log("2: " + team2[2]);


team2[1] = "格闘家2"　//後から強制的に配列を上書き
let index = 0;
console.log(team2[index]);
console.log(team2[index + 1]);
console.log(team2[index + 2]);


//length　→　indexの最後の値+1が表示される。
team2.push("遊び人");
console.log(team2[team2.length - 1]);

