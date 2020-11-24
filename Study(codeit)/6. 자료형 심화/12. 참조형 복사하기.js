//참조형 복사하기
//배열도 참조형이기때문에 바뀐다. 
let number1 = [1,2,3];
let number2 = number1;
//넘버 2만 바꾸고 싶다면?
let number2 = number1.slice();

number2.push(4);

console.log(number1);
console.log(number2);

/* ---------------- */
//객체 복사 
let course1 = {
  title : '파이썬 프로그래밍 기초',
  language: 'Python'
};
let course2 = course1;
//구별하고 싶다면 ?
let course2 = Object.assign({}, course1);

console.log(course1)
console.log(course2);

//for in 문으로 객체 복사하기

let course3 = {};

for(let key in course1)
{
  course3[key] = course1[key];
}

course3.title = '자료구조';
console.log(course3);

//cloneObject 라는 함수 사용
let course4 = cloneObject(course2);



