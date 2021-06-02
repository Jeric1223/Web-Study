var colorsArray = ['orange','yellow','green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

var colorsOBj = {
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'green'
};

console.log(colorsOBj[0]);
console.log(colorsOBj[1]);
console.log(colorsOBj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsOBj);

console.log(colorsArray.length);
console.log(colorsOBj.length);

colorsArray.push('red');
colorsOBj.push('red');