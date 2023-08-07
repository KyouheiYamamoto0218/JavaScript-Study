// filter は　元ある配列から、指定した条件を満たした値に絞った新しい配列を作る関数
// map　は　配列のそれぞれの要素に対して、指定した関数を実行して変換した新しい配列を作る関数
// forEach　は　配列のそれぞれの要素に対して、指定した関数を実行する

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1、偶数だけ抜き出した配列にする
let result1_1 = array.filter((number) => number % 2 === 0);
console.log(result1_1);

let result1_2 = array.filter(number => number % 2 === 0);
console.log(result1_2);

console.log('----------');


// 2、11~20までの配列にする
let result2 = array.map(number => number + 10);
console.log(result2);

console.log('----------');


// 3、5以上の物だけを出力する
let over5 = array.filter(number => number >= 5);
over5.forEach(number => console.log(number));

console.log();
array.filter(number => number >= 5)
    .forEach(number => console.log(number));