//객체 
let codeit = {
  name: '코드잇',
  'born Year': 2017,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

//점 표기법
console.log(codeit.name);

//대괄화 표기법
console.log(codeit['born Year']);

//객체안 객체들어갈 수 있는 방법 
console.log(codeit.bestCourse.title);
console.log(codeit.bestCourse['title']);