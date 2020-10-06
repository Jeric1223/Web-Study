// scope: 범위, 영역 
let x = 3; //전역변수
function myFunction() { //블록문
  let x = 5; //로컬 변수 , 지역변수 
  console.log(x);
}
myFunction();
console.log(x);