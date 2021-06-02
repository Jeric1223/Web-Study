//prototype프로퍼티와 [[prototype]]링크 구분
function Person(name){
    this.name = name;
}
var foo = new Person('foo');

console.log(Person);
console.log(foo);