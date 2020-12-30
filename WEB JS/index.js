const title = document.getElementById("background");
var circle = document.getElementById('circle');
var circle2 = document.getElementById('circle2');


function haveResize(){
  var fuckcolor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  document.body.style.backgroundColor = fuckcolor;
  document.body.style.transition = '0.5s';
  title.innerHTML = fuckcolor;
}
function circleClick(){
  var fuckcolor2 = "#" + Math.round(Math.random() * 0xffffff).toString(16);
  circle.style.backgroundColor = fuckcolor2;
  circle2.innerHTML = fuckcolor2;
  circle.style.transition = '0.5s';
}
/* function moveCircle(e) {
  TweenLite.to('circle', 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
} */

window.addEventListener('click', haveResize);
circle.addEventListener('click', circleClick);

