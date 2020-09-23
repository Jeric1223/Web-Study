// 탬플릿 문자열
//template : 일정한 툴, 형식 


let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.')

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`)

// 2.

let myNumber = 3;
function getTwice(x){
  return x * 2;
}

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`); 


// 문제
/* 재원이는 카페 매니저입니다. 며칠 뒤면 아르바이트 근무자들 급여 정산을 해야 하는데요.
근무자 별로 근무 시간을 계산해서 총 급여를 계산하는 calcWage 함수를 만들어보려고 합니다.

파라미터로 근무자 이름(name), 근무 시간(time), 그리고 시급(wage)을 전달받고
총 급여를 계산하기 위해 total 변수에 시간과 시급을 곱한 값을 담는 것까진 작성했는데,
마지막으로 콘솔에 출력하는 부분이 남았습니다.

지난 시간에 배운 템플릿 문자열 개념을 이용해서 아래의 문장이 출력되게 작성해주세요. */

function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 금여는 ${total}원 입니다.`); // 코드를 채워 넣으세요.
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);