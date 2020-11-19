//string
let myString = 'Hi Codeit';

// 부분 문자열 접근 slice
console.log(myString.slice(0,2));
console.log(myString.slice(3));
console.log(myString.slice());

//요소 탐색
console.log(myString.indexOf('Hi')); // 앞 부터 찾기 *없는 문자를 넣으면 -1
console.log(myString.lastIndexOf('i')); //맨 뒤부터 찾기 

//양 끝 공백 제거
console.log(myString.trim()); // trim 메소드

//대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLocaleLowerCase()); // 소문자

//요소 접근
console.log(myString[3]);
console.log(myString.charAt(3));

// 문자열 길이
console.log(myString.length);
