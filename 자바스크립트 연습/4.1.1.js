//함수 선언문 
function add(x,y){
    return x+y;
}
console.log(add(3,4));
//함수 표현식
var add = function(x,y){
    return x+y;
};

var plus = add;

console.log(plus(5,6));
console.log(add(3,4));