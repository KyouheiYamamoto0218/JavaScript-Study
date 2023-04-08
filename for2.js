//forを使って指定の条件の値になるまで出力を行う
for (let seireki = 1989; seireki < 2019; seireki++) {
    console.log("西暦" + seireki + "年");
    let heisei = seireki - 1988;
    console.log("平成" + heisei + "年です");
}

//上記を簡潔に変換
for (let seireki = 1989; seireki < 2019; seireki++) {
    let heisei = seireki - 1988;
    console.log("西暦" + seireki + "年は平成" + heisei + "年です");
}

//forをシンプルに確認
for (let count = 0; count < 6; count++) {
    console.log(count);
}
