// 형 변환(type conversion)

//산술연산 (+,-,*,/,%,**)

console.log(4+'2');
console.log(4+2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2'); //2라는 문자열이 숫자 2로 변환 
console.log(4 ** true);
console.log(4 % 'two');

//관계 비교 연산
console.log(2 < '3');
console.log(2 > true);
console.log(2 <= false);
console.log('two' >= 1);

//같은 비교 연산 
console.log(1 === '1');  //일치 , 불일치 (!==) 형변환이 안되기 때문에 false
console.log(1 === true);
console.log(1 == '1'); //동등 ,부등(!= ) 동등비교는 숫자형으로 형변환이 되기때문에 true
console.log(1 == true);
