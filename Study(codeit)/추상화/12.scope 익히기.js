function myFunction() {  //문제 1 . 출력되는 내용은 무엇인가 
    let x = "코드잇";       // 1.코드잇 2.을지로 3.코드잇 을지로 4.오류가 발생한다. 
     x = "을지로";          // 정답 : 4;
}
  myFunction();
  console.log(x);

  let x = 120;
    
function myFunction() {   //문제 2 . 출력되는 내용은 무엇인가
    let x = 20;               // 1 20 20 2. 120 102, 3. 20 120 , 4.120 20;
    console.log(x);         // 정답: 3번 
}
myFunction();
console.log(x);