// null 과 undefined

let codeit;
console.log(codeit); //undefined
codeit = null;
console.log(codeit);
 // 일치 ,동등
console.log(null == undefined); //true
console.log(null === undefined); //false

//의도적으로 값이 없는 값을 설정 : null;
//처음부터 없는 값 : undefined;

let cup;
console.log(cup); //undefined
cup = '물';
console.log(cup); //'물'
cup = null;
console.log(cup); // null