/* //전역 객체와 전역 변수와의 관계
var foo = "I'm foo";
console.log(foo);
console.log(window.foo);
//foo라는 변수는 전역객체 window의 프로퍼티이다. */

//th

/* var test = ' this is test';
console.log(window.test);
var sayFoo = function(){
    console.log(this.test); //이는 console.log(window.test); 와 같다
                            //왜냐하면 함수를 호출할 때 this는 전역객체 window에 바인딩 되기 때문에
}
sayFoo(); */

/* var value = 100;
var myObject = {
    value:1,
func1: function(){
this.value += 1;
console.log('func() called. this.value : ' + this.value);
    func2 = function(){
    this.value += 1;
    console.log('func2() called. this.value : ' + this.value);
        func3 = function(){
        this.value += 1;
        console.log('func3() called. this.value : ' + this.value);
        }
        func3();
    } 
    func2();
}
};
myObject.func1(); */

var value = 100;
var myObject = {
    value: 1,
    func1 : function(){
        var that = this;
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 =function(){
            that.value += 1;
            console.log('func2 called. this.value : ' + that.value);

            func3 = function(){
                that.value += 1;
                console.log('fun3() called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
};
myObject.func1();