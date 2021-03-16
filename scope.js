function a() {
    var v_a = "a";

function b() { 
    var v_b = "b";
    console.log("b:", typeof(v), typeof(v_a), typeof(v_b));
}

b();

console.log("a:", typeof(v), typeof(v_a), typeof(v_b)); 
// 함수 안에서 적용 된것은 함수 안에서만 적용 된다. 그렇기에 b 가 undefined 으로 나오게 된다.

}

var v = "v";
a();
console.log("o:", typeof(v), typeof(v_a), typeof(v_b));
// a 와 b 가 전부 함수 안에 적용 되어 있기 때문에 v 만 값이 나오게 되고 나머지는 undefined 으로 나온다.

