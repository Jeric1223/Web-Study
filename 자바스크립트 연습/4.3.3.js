/* //내부함수
function parent(){
    var a = 100;
    var b = 200;

    function child(){
        var b = 300;
        console.log(a); //부모함수의 변수에 접근이 가능하다.
        console.log(b);
    }
    child();
}
parent();
 */

 function parent(){
     var a = 100;
     var child = function(){
         console.log(a);
     }
     return child; //내부 함수를 리턴
 }
 var inner = parent();
 inner();
 //inner() 와 같은 함수를 클로저라 한다