//if문 
let temprature = 1;

if(temprature <= 0)
{
  consoles.log(`물이 업니다.`);
} else {
  console.log(`물이 얼지 않습니다.`);
}
/* 문제 
이 롤러코스터는 140cm 이상만 탑승할 수 있다고 하는데요.
 놀이기구를 타고 싶은 마음은 간절하지만 안전상의 문제로 위험한 상황이 발생할 수 있으니,
  만약 기준을 통과하지 못한다면 아쉽지만 다음을 기약하는 것이 좋겠죠?

그럼, if문을 활용해서 키 140cm를 기준으로 탑승 가능 유무를 알려주는 checkHeight 함수를 작성해 주세요. */
// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
function checkHeight(height) {
	if(height >= 140)
	{
	  console.log('탑승이 가능합니다.');
	} else{
	  console.log('탑승이 불가능합니다.');
	}
}

// 테스트 코드
checkHeight(141);
checkHeight(135);
checkHeight(170);