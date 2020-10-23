function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
	if(90 <= totalScore)
	{
	  console.log(`A`);
	}
	else if(80 <= totalScore && 90 > totalScore)
	{
	  console.log(`B`);
	}
		else if(70 <= totalScore && 80 > totalScore)
	{
	  console.log(`C`);
	}
		else if(60 <= totalScore && 70 > totalScore)
	{
	  console.log(`D`);
	}
		else if(60 > totalScore)
	{
	  console.log(`F`);
	}
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);