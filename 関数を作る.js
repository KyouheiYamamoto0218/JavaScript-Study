// 関数を作る

let number = 1;
let result = test(number);
console.log(result);
function test(n) {
    n += 1;
    n += 1;
    n += 1;
    return n;
}

//--------------------------------------

let result2 = add(3, 4);
console.log(result2);
function add(a, b) {
    return a + b;
}

