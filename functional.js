function test() {
    console.log("hello!")
}

function test2(f) {
    f()
}
test2(test);

test2(function() {
    console.log("hello!")
})

test2(() => {
    console.log("hello!")
})

test2(() => console.log("hello!"))

////////////////////////////
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filter(f) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let ok = f(array[i]);
        if (ok) {
            result.push(array[i]);
        }
    }
    return result;
}

let result = filter(function(i) {
    return i > 5;
});
console.log(result);

result = filter((i) => {
    return i > 5;
});

result = filter(i => {
    return i > 5;
});

result = filter(i => i > 5);