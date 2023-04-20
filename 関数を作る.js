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

//---------------------------------------

test1(1, 2, 3);
test1(4, 5, 6);

function test1(a, b, c) {
    console.log(`${a} ${b} ${c}`);
}

//---------------------------------

console.log(test3(1, 2, 3));
function test3(a, b, c) {
    return a + b + c;
}

//---------------------------------


