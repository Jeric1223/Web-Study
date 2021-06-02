/* //생성자 함수의 동작 방식
var Person = function (name){
    this.name = name;
};//함수의 표현식 방식


var foo = new Person('foo');
console.log(foo.name);
//기존 함수에 new를 붙이면 생성자 함수로 동작을 한다.
//생성자 함수로 정의되어 있음을 알리기 위해 함수 이름의 첫글자를 대문자로 사용하실 권한다

/* 생성자 함수는 새로운 객체를 만들어 낸다 */ 
/*vvar foo = {
     name: 'foo',
     age: 35,
     gender: 'man'
};
console.log(foo);

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 33, 'woman');
console.log(bar);

var baz = new Person('baz', 25, 'man');
console.log(baz);
 */

function Person(name,age,gender,position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var qux = Person('qux',20,'man');
console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);