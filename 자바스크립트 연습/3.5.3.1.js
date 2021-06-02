
//배열의 push 매서드
/* push 라는 매서드는 배열에 있는 프로토 타입에 있기때문에 
다른 타입에서 사용을 하면 사용이 안된다. 
push 는 length 값에 쓰여진다. */

var arr = ['zero','one','two']; //length = 3

arr.push('three');
console.log(arr);
console.log(arr.length); //lenght = 4

arr.length = 5;
arr.push('four'); //length =6 // [ 'zero', 'one', 'two', 'three', <1 empty item>, 'four' ] 
console.log(arr);

console.log(arr.length);