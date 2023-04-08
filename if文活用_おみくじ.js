//０以上１０未満　の間をランダムに表示
let rand010 = Math.random() * 10;
console.log(rand010);

//０以上１０未満　の間をランダムに表示　ParseIntで小数点以下を削除
let roundup = parseInt(rand010)
console.log(roundup);

//おみくじ
if (roundup <= 1){
    console.log("大吉");　//0,1
} else if (roundup <= 3){
    console.log("吉");　//2,3
} else if (roundup <= 5){
    console.log("中吉");　//4,5
} else if (roundup <= 7){
    console.log("小吉");　//6,7
} else {
    console.log("凶");　//8,9
}
