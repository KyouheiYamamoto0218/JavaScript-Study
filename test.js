//　関数に条件を代入するやり方　true or false

function testkeisan(x, y, z) {
    let keisan = x + y >= z;
    return keisan;
}

if (testkeisan(2, 3, 4)) {
    console.log("true");
} else {
    console.log("false");
}

if (testkeisan(1, 6, 10)) {
    console.log("true");
} else {
    console.log("false");
}

if (testkeisan(5, 11, 17)) {
    console.log("true");
} else {
    console.log("false");
}