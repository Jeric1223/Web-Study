var foo = 100;
//함수는 값처럼 취급되므로 변수에 할당이 가능하다.
var bar = function(){
    return 100;
};
console.log(bar());
//foo와 bar의 차이점은 bar는 참조값을 가지고 있으므로 bar()

var obj = {};
obj.baz = function(){return 200;};
console.log(obj.baz());

var arr = [];
arr[0] = function(){return 300;};
console.log(arr[0]);