require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\r\n");

let wordCount = parseInt(lines[0]);

for (let i = 1; i < wordCount; i++) {
    let word = lines[i];    //しりとり単語１
    let wordLine = Array.from(word);    //単語を配列化
    let lastWord = wordLine[wordLine.length-1];     //しりとり単語１の、最後の文字列
    // console.log(lastWord);

    let word2 = lines[i+1];    //しりとりの単語２
    let wordLine2 = Array.from(word2);    //単語を配列化
    let firstWord = wordLine2[0];     //しりとり単語２の、最初の文字列
    // console.log(firstWord);

    if (lastWord !== firstWord) {
        console.log(lastWord + " " + firstWord);
        break;   //for文のループを強制終了させる
    }
    if (i === wordCount-1) {
        console.log("Yes")
    }
}