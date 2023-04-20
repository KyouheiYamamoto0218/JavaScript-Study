test(1, 2, 3);
test(4, 5, 6);

function test(a, b, c) {
    console.log(`${a} ${b} ${c}`);
}

//---------------------------------

console.log(test2(1, 2, 3));
function test2(a, b, c) {
    return a + b + c;
}

//---------------------------------

