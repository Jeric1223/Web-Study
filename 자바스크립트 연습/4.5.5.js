//기본 데이터 타입의 확장
String.prototype.testMethod = function(){
    console.log('This is the String. prototype.testMethod()')
};
var str = 'this is test';
str.testMethod();
console.dir(String.prototype);