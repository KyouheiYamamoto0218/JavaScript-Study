let numbers = [1, 2, 3, 4, 5];

//配列の要素を順に表示する。
numbers.forEach(number => {
    console.log(number);
});

console.log("----------------")

//mapはそのあとの配列を加工できる。
numbers.map(number => {
    return number + 10;
}).forEach(number => {
    console.log(number);
});

console.log("----------------")

//その後の配列に対して、フィルター条件を指定する。
numbers.filter(number => {
    return number > 2;
}).forEach(number => {
    console.log(number);
});