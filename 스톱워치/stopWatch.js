
var stTime = 0
var endTime = 0
var timerStart
var min
var sec
var milisec
var startBtn = document.getElementById('stopWatchButtonStart')
var stopBtn = document.getElementById('stopWatchButtonReset')
var recordList = document.getElementById('stopWatchButtonCount')

startBtn.addEventListener('click', function() {
// RECORD
if(this.innerText == 'RECORD' && milisec) {
console.log(min, sec, milisec)
var li = document.createElement('li')
li.style.color = "#fff"
li.innerText = min + ' : ' + sec + ' : ' + milisec
if(! recordList.firstChild) {
recordList.append(li)
} else {
recordList.insertBefore(li, recordList.firstChild)
}
return false
}
this.innerText = 'RECORD'
if(!stTime) {
stTime = Date.now() // 최초 START
} else {
stopBtn.innerText = 'STOP'
stTime += (Date.now() - endTime) // RESTART
}
timerStart = setInterval(function() {
var nowTime = new Date(Date.now() - stTime)
min = addZero(nowTime.getMinutes())
sec = addZero(nowTime.getSeconds())
milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))
document.getElementById('stopWatchTimeMin').innerText = min
document.getElementById('stopWatchTimeSec').innerText = sec
document.getElementById('stopWatchTimeMilisec').innerText = milisec
}, 1)
})
stopBtn.addEventListener('click', function() {
if(timerStart) {
clearInterval(timerStart) // STOP
if(this.innerText == 'STOP') {
endTime = Date.now()
this.innerText = 'RESET'
startBtn.innerText = 'RESTART'
} else { // RESET
stTime = 0
min = 0
sec = 0
milisec = 0
document.getElementById('stopWatchTimeMin').innerText = '00'
document.getElementById('stopWatchTimeSec').innerText = '00'
document.getElementById('stopWatchTimeMilisec').innerText = '00'
startBtn.innerText = 'START'
this.innerText = 'STOP'
timerStart = null
recordList.innerHTML = ''
}
}
})
function addZero(num) {
return (num < 10 ? '0'+num : ''+num)
}

