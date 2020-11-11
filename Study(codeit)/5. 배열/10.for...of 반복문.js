//for...of
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens',
 'cu_convenience24']

 for(let i = 0 ; i < influencer.length; i++) {
   console.log(influencer[i]);
 }

 for(let element of influencer) {
   console.log(element);
 }

 for( let index in influencer) {
   console.log(influencer[index]);  //for...in 문은 배열보다는 객체; 
 }

