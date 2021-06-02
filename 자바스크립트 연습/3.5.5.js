var arr = ['zero','one','two'];
console.log(arr.length);

arr.color = 'blue';        //배열도 객체이기 떄문에 프로포티를 추가하는 것 이다. 
arr.name = 'number_array';
console.log(arr);
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

console.log(arr);