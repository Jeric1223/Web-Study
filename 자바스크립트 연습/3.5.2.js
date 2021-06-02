
var emptyarr = [];
console.log(emptyarr[0]);

emptyarr[0] = 100;
emptyarr[3] ='eight';
emptyarr[7] = true;
console.log(emptyarr);

/* 배열의 경우는 값을 순차적으로 넣을 필요없이
아무 인덱스 위치에나 값을 동적으로 추가할 수 있다. */

console.log(emptyarr.length); //lenght = 길이 