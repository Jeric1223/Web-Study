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

dir.addEventListener('click', function() {
  let mainText = document.getElementById('modalInput').value;
  let Title = document.getElementById('modalTitleInput').value;

  mainText = mainText.replace(/(?:\r\n|\r\n)/g, '<br />');

  const listTemplate = `
  <div class="writeListBox">
    <a href="#">${Title}</a>
    <p>${mainText}</p>
    <p>일시 : 2020-10-21</p>
  </div>
  `
  
  center.insertAdjacentHTML('afterbegin', listTemplate);
  closeButton();
});

