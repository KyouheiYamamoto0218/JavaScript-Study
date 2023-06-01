let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

console.log('---------------------------------')

let c = [1];
let d = c;
d[0] = 2;
console.log(c);
console.log(d);

console.log('---------------------------------')
function test() {
    console.log('関数です');
}
test();

console.log('---------------------------------')
function test2(hikisu) {
    console.log('関数に渡された値を表示');
    console.log(hikisu)
}
test2('テスト');

console.log('---------------------------------')
function test3() {
    console.log('関数から戻された値を表示');
    return 'sample';
}
let val = test3();
console.log(val);

console.log('---------------------------------')

function test4(i) {
    console.log(i);
}
for (let i = 0; i <= 10; i++) {
    test4(i);
}