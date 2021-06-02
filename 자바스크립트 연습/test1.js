let objA = {value : 1};
let objB = {value : 2};

function swap(a,b){
   let objtemp = {}; 
   objtemp.value = objA.value;
   objA.value = objB.value;
   objB.value = objtemp.value;
}

swap(objA,objB);

console.log(objA.value, objB.value);
