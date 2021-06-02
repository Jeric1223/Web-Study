var foo = {
    name: 'foo',
    major: 'computer science'
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

foo.major = 'electronics enginerring';
console.log(foo.major);
console.log(foo['major']);

foo.age = 27;
console.log(foo.age);

foo['full-name'] = 'foo bar';
console.log(foo['full-name']); // -은 빼기 표시 이기 떄문에 . 으로 출력은 안된다. 
