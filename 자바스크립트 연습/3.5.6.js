var arr = ['zero','one','two'];

arr.color = 'blue';
arr.name = 'number_array';

//for in 문 
for(var prop in arr){
    console.log(prop,arr[prop]);
}
//배열의 요소뿐만 아니라 프로퍼티 까지 출려된다.

//for 문
for(var i=0; i < arr.length; i++)
{
    console.log(i,arr[i]);
}
//배열의 요소만 출력된다