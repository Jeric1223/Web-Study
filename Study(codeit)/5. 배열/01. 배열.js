//배열 
let courseRanking = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

// indexing 
console.log(courseRanking);

// 배열문제!
/* 여기, dataType 이라는 이름의 6개의 요소를 가진 배열이 있습니다.

이 배열의 요소들을 모두 출력하는 프로그램을 작성해 보세요.

반복문의 개념을 활용하시면 어렵지 않게 해결할 수 있습니다.

코드를 잘 작성하셨다면, 다음과 같이 출력되어야 합니다.
number
string
boolean
null
undefined
object */
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

for(let i = 0; i < dataType.length; i++)
{
  console.log(dataType[i]);
}