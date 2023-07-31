
// オブジェクト作成パターン1
// let object = {
//     y: y,
//     x: x,
// };

// オブジェクト作成パターン2
// let object = {};
// object.y = y;
// object.x = x;
//

// オブジェクト作成パターン3
// object['x'] = 1
// object['y'] = 2
// {x: 1,y: 2}
//

require = require("fshook")(__filename);

let lines = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");

class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    menseki() {
        return this.width * this.height;
    }
}
let rect1 = new Rect(5, 8);
let rect2 = new Rect(5, 5);
let rect3 = new Rect(4, 8);

console.log(rect1.menseki());
console.log(rect2.menseki());
console.log(rect3.menseki());


let rect = {
    width: 5,
    height: 8,
    menseki: function() {
        return this.width * this.height;　　//thisはこのオブジェクト内のものという意味、object内の関数の中でobjectの値を呼び出すために必要。
    }
};
console.log('--------------');
console.log(rect.width);
console.log(rect.menseki());　　//関数を持ったオブジェクトの実行方法