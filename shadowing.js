function shadowing_example() {
    var val = 5;
    // 함수 안쪽에서 바깥에서 선언한 변수와 이름이 같은 변수 val을 선언하고 초기화 
    console.log("F", val);
    val++;
}

var val = 0;
// 여기서 다시 선언이 되지 때문에 위의 함수와 관련이 없게 된다.
shadowing_example();
console.log("O",val);
