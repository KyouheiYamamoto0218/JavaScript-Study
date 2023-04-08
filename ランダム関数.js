//ランダム関数

//０以上１未満　の間をランダムに表示
let randamama = Math.random();
console.log(randamama);

//０以上１０未満　の間をランダムに表示
let rand010 = Math.random() * 10;
console.log(rand010);

//０以上１０未満　の間をランダムに表示　ParseIntで小数点以下を削除
let roundup = parseInt(rand010)
console.log(roundup);

//1以上１０以下　の間をランダムに表示　ParseIntで小数点以下を削除
let roundup = parseInt(rand010)
console.log(roundup + 1);