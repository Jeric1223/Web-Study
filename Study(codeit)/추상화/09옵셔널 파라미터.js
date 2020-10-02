function sayHello(name) {
  console.log(`안녕하세요 ${name}님!`);
}
sayHello(`코드잇`);
sayHello(`좋아요`);
sayHello(); //언디파인드

// 옵셔널 파라미터

function introduce(name, age, nationality = `한국`) //옵셔널 파라미터는 제일 뒤
{
  console.log(`제 이름은 ${name}입니다`);
  console.log(`나이는 ${age}살 이고`);
  console.log(`국적은 ${nationality}입니다`);
}

introduce(`코드잇`, 20);
