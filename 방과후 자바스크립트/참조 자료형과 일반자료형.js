var a =100;
var objA = { value : 100};

function changeArt(num, obj){
  num = 200;
  obj.value = 200;
  console.log(num);
  console.log(obj);
}

changeArt(a,objA);
console.log(a);
console.log(objA);

/* 출력결과
200
{ value: 200 }
100
{ value: 200 } */