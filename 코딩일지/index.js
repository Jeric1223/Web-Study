/* nav바 슬라이드 */
$('#menuButton').on('click',function menuLi() {
  $('#menu').slideToggle();
  });
/* 모달창 여는 버튼 */ 
  $('#writeButton').on('click',function modals() {
  $('.modals').fadeIn();
  });
/* 모달창 닫기버튼 */
function closeButton() {
  $('.modals').fadeOut();
  document.getElementById('modalInput').value = null;
  document.getElementById('modalTitleInput').value = null;
}

let dir = document.getElementById('modalWriteButton');
let center = document.querySelector('.writeBox');
//let center = document.querySelector('section');

let today = new Date();   
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜



dir.addEventListener('click', function() {

  let mainText = document.getElementById('modalInput').value;
  let Title = document.getElementById('modalTitleInput').value;

  //제목과 내용에 대한 객체
 /*  let writeObject = {
    writeTitle: Title,
    writeMainText: mainText
   }; */
   
   mainText = mainText.replace(/(?:\r\n|\r\n)/g, '<br />');
   
   const listTemplate = `
   <div class="writeListBox" cursor: pointer;">
    <div class="writeListBoxHeader">
      <a href="#">${Title}</a>
      <p>${mainText}</p>
    </div>
      <div class="writeListBoxSetting">
        <img src="./free-icon-vertical-dots-64576.png" id="settingImage" style="width: 16px; height: 16px;">
        <div class="settingBox">
          <div><p>수정하기</p></div>
          <div><p>삭제하기</p></div>
        </div>
        <p>일시 : ${year}-${month}-${date}</p>
      </div>
    </div>
    `
    localStorage.setItem(`${Title}`,`${listTemplate}`);
    
    localStorage.getItem(`${Title}`);

    center.insertAdjacentHTML('afterbegin',localStorage.getItem(`${Title}`));
    
  //점 세개인 이미지를 클릭했을때 settingBox가 나타나는
   $('#settingImage').on('click',function()
  {
   $('.settingBox').slideToggle();
  });
  
  closeButton();
});
/* for(let z = 1; z < localStorage.length;  z++)
{
  center.insertAdjacentHTML('afterbegin',localStorage.getItem(`${Title}`));
} */

//점 세개인 이미지를 클릭했을때 settingBox가 나타나는
/* $('#settingImage').on('click',function()
{
  $('.settingBox').slideToggle();
  console.log(102)
}); */

  

