var myObject = {
    name : 'foo',
    sayName : function(){
        console.log(this.name);
    }
};

var otherObject ={
    name : 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName(); //this가 myObject를 가리킨다   
otherObject.sayName(); // this가 otherObject를 가르킨다