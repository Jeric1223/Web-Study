/* function Person(name,age,gender)
{
    this.name = name;
    this.age =age;
    this.gender = gender;
}
var foo = {}
Person.apply(foo,['foo',30,'man']);
console.dir(foo) */

/* function myFunction() {
    console.dir(arguments);

    // arguments.shift() 에러발생

    var args = Array.prototype.slice.apply(arguments);
    //배열의 매서드인 silce를 arguments에 적용시킨 것이다.
    //(apply를 사용하여 this를 arguments에 바인딩 시킴)

    console.dir(args);
}
myFunction(1,2,3); */

var arrA = [1,2,3];
var arrB = arrA.slice(0);
var arrC = arrA.slice();
var arrD = arrA.slice(1);
var arrE = arrA.slice(1,2);

console.log(arrA);
console.log(arrB);
console.log(arrC);
console.log(arrD);
console.log(arrE);