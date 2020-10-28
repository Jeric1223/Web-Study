let myVoca = {
  addVoca: function(propertyKey,propertyValue) {
    myVoca[propertyKey] = propertyValue ;
  },
  deleteVoca: function(propertyKey) {
    delete myVoca[propertyKey];
  },
  printVoca: function(propertyKey) {
    console.log(`"${propertyKey}"의 뜻은 "${myVoca[propertyKey]}"입니다`);
  }
 };


 // addVoca메소드 테스트 코드
 myVoca.addVoca('parameter', '매개 변수');
 myVoca.addVoca('element', '요소');
 myVoca.addVoca('property', '속성');
 console.log(myVoca);
 
 // deleteVoca메소드 테스트 코드
 myVoca.deleteVoca('parameter');
 myVoca.deleteVoca('element');
 console.log(myVoca);
 
 // printVoca메소드 테스트 코드
 myVoca.printVoca('property');