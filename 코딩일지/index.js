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
}

let dir = document.getElementById('modalWriteButton');
let center = document.querySelector('.writeBox');
//let center = document.querySelector('section');

dir.addEventListener('click', function() {
  let str = document.getElementById('modalInput').value;
  str = str.replace(/(?:\r\n|\r\n)/g, '<br />');

  const listTemplate = `
  <li>
  <span>${str}</span>
  </li>
  `
  
  center.insertAdjacentHTML('beforeend', listTemplate);
  closeButton();
});
console.log(str);