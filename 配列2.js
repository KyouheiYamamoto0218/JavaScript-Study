//
let team = ["戦士","忍者","賢者"];

for (let index in team) {
    console.log(team[index]);
}


//配列の要素を全て出力する
let team = ["2戦士","2忍者","2賢者"];

for (let value of team) {
    console.log(value);
}


//インデックスの昇順に、配列の要素が一つずつ取得できる（=>はアロー関数と呼ぶ）
team.forEach(value => {
    console.log(value);
})