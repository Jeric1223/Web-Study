//상수 (constant)
const pi= 3.14 //원주율
let radius = 0; // 반지름


function calculateArea()
{
  return pi * radius * radius;
}
// 원의 넓이를 계산하는 함수 
function printArea() {
  return `반지름이 ${radius}일 떄, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());