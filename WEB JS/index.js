const background = document.getElementById("background");
var circle = document.getElementById('circle');
var circle2 = document.getElementById('circle2');
const wifi = document.getElementById("wifi");


function haveResize(){
  var fuckcolor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  document.body.style.backgroundColor = fuckcolor;
  document.body.style.transition = '0.5s';
  background.innerHTML = fuckcolor;
}
function circleClick(){
  var fuckcolor2 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  circle.style.backgroundColor = fuckcolor2;
  circle2.innerHTML = fuckcolor2;
  circle.style.transition = '0.5s';
}
function offlinePage(){
 wifi.innerHTML = "와이파이가 꺼졌습니다";
}
function onlinePage(){
  wifi.innerHTML = "네트워크 연결되었습니다.";
}

  window.addEventListener('online', offlinePage);
  window.addEventListener('offline', offlinePage);
window.addEventListener('click', haveResize);
circle.addEventListener('click', circleClick);

