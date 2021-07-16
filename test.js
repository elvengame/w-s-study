function chicken(price, num){
    this.t1 = price;
    this.t2 = 3;
    this.t3 = false;
    this.t4 = num;

    this.eat = function (name){
        return "치킨" + name +"을 먹었습니다";
    }
}

let c1 = new chicken(10000, 3);

console.log(c1.eat("왜 안됌"));