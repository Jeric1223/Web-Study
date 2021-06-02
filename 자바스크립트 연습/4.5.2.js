var myObject = {
    name: 'foo',
    sayname: function(){
        console.log('My Name is ' + this.name);
    }
};

myObject.sayname();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickname'));
myObject.sayNickName();