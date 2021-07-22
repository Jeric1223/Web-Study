//오늘의 서울온도 출력
function getWeather() {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&units=metric&appid=e9185b28e9969fb7a300801eb026de9c";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var temperature = json.main.temp;
        var weather = json.weather[0].description;
        var date = json.dt;
        var dateString = new Date(date * 1000).toLocaleDateString();
        var time = new Date(date * 1000).toLocaleTimeString();
        document.getElementById("weather").innerHTML =
          "오늘의 서울온도는 " +
          temperature +
          "도 이며, " +
          weather +
          "입니다.";
        document.getElementById("date").innerHTML =
          "오늘은 " + dateString + "입니다.";
        document.getElementById("time").innerHTML =
          "오늘은 " + time + "입니다.";
      }
    }
  };
  xhr.send(null);
}

getWeather();

// 강아지 이미지 출력
function getDog() {
  var url =
    "https://dog.ceo/api/breeds/image/random" +
    "?primary_breed_only=true&" +
    "breed_ids=&" +
    "random_breed_number=1&" +
    "breed_names=&" +
    "size=medium&" +
    "format=jpeg";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var img = json.message;
        document.getElementById("dog").innerHTML =
          '<img src="' + img + '" width="100" height="100">';
      }
    }
  };
  xhr.send(null);
}

getDog();

// 유튜브 랄로에 대한 정보 출력
function getYoutube() {
  var url =
    "https://www.googleapis.com/youtube/v3/search?part=snippet" +
    "&q=Official+Dopa&type=channel&key=AIzaSyB-Fvdp8U39iiegcZx3SC71-GbB6cOKfxE" +
    "&maxResults=1";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var title = json.items[0].snippet.title;
        var description = json.items[0].snippet.description;
        var thumbnail = json.items[0].snippet.thumbnails.default.url;
        document.getElementById("youtube").innerHTML =
          '<div class="youtube-title">' +
          title +
          "</div>" +
          '<div class="youtube-description">' +
          description +
          "</div>" +
          '<img src="' +
          thumbnail +
          '" width="100" height="100">';
      }
    }
  };
  xhr.send(null);
}
getYoutube();

//오늘 대전 날씨 정보 출력
function getWeatherKr() {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=Daejeon,kr&units=metric&appid=e9185b28e9969fb7a300801eb026de9c";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var temperature = json.main.temp;
        var weather = json.weather[0].description;
        var date = json.dt;
        var dateString = new Date(date * 1000).toLocaleDateString();
        var time = new Date(date * 1000).toLocaleTimeString();
        document.getElementById("weatherD").innerHTML =
          "오늘의 대전온도는 " +
          temperature +
          "도 이며, " +
          weather +
          "입니다.";
        document.getElementById("dateD").innerHTML =
          "오늘은 " + dateString + "입니다.";
        document.getElementById("timeD").innerHTML =
          "오늘은 " + time + "입니다.";
      }
    }
  };
  xhr.send(null);
}

getWeatherKr();

// github에 hoohoo0889사용자 커밋수 출력
function getCommit() {
  var url =
    "https://api.github.com/repos/hoohoo0889/web-development-with-jquery/commits";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var json = JSON.parse(xhr.responseText);
        var commit = json[0].sha;
        document.getElementById("commit").innerHTML =
          "최근 커밋은 " + commit + "입니다.";
      }
    }
  };
  xhr.send(null);
}

getCommit();
