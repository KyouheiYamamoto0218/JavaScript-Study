let words = []; //文字列を順番に表示　aから順番
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    words.push(String.fromCharCode(i));
}
console.log(words);


console.log("-----------------")


let object = {};    //空のオブジェクト
for (let i = 1; i < words.length; i++) {
    object[words[i-1]] = i
}
console.log(object["a"]);


console.log("-----------------")


let object2 = {
    "a": 1,"b": 2, "c": 3,"d": 4
};