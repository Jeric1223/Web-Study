function ending() { 
    let n = 2 , j , i=2;
    let overlap = new Array();

    let word = prompt("문자를 입력하세요.\n" + "첫번째 단어를 입력해주세요.");
    overlap[0] = word;

    if(!word){ //입력이 없을때 
        alert('입력창이 비어있습니다.');
        return;
    }

    let next = prompt("제시어는 " + word + "입니다.\n문자를 입력하세요.");
    overlap[1] = next;

    while(word[word.length - 1] === next[0]){
        overlap[i] = word;
        word = next;
        next = prompt("제시어는 " + next + "입니다.\n" + "문자를 입력하세요.");
        n++;
        i++;
        console.log(overlap);
        for(j=0;j<n;j++){  //중복단어를 검사하는 알고리즘
            if(next === overlap[j]){
                alert('중복된 단어입니다.');
                return;
            }
        }
    }
    if(word[word.length - 1] != next[0]){ //끝말잇기의 기본 조건
        alert("잘못 입력하셧습니다.");
    }
    
}