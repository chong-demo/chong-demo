// var now = new Date()

var min = document.getElementById("minutes")
var sec = document.getElementById("seconds")
var mil = document.getElementById("millis")

var startButton = document.getElementById("start-button")
var lapButton = document.getElementById("lap-button")
var stopButton = document.getElementById("stop-button")
var resetButton = document.getElementById("reset-button")

var lapList = document.getElementById("lap-list")

var minutes = 0
var seconds = 0
var milliseconds = 0
var interval

startButton.addEventListener('click', startTimer)
lapButton.addEventListener('click', lapTimer)
stopButton.addEventListener('click', stopTimer)
resetButton.addEventListener('click', resetTimer)

function startTimer() {
    interval = setInterval(updateTimer, 10)
    startButton.disabled = true
    stopButton.disabled = false
}
function lapTimer() {
    var lapTime = `
                    ${padTime(minutes)} : ${padTime(seconds)} : ${padTime(milliseconds)}
                    `
    var listItem = document.createElement('li')
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}&nbsp;</span>${lapTime}`
    lapList.appendChild(listItem)
}
function stopTimer() {
    clearInterval(interval)
    stopButton.disabled = true
    startButton.disabled = false
}
function resetTimer() {
    clearInterval(interval)
    resetTimerData()
    startButton.disabled = false
}
function updateTimer() {
    milliseconds++
    if (milliseconds === 100) {
        milliseconds = 0
        seconds++
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
    }
    displayTimer()
}

function displayTimer() {
    min.textContent = padTime(minutes)
    sec.textContent = padTime(seconds)
    mil.textContent = padTime(milliseconds)
}

function padTime(time) {
    return time.toString().padStart(2, '0')
}

function resetTimerData() {
    minutes = 0
    seconds = 0
    milliseconds = 0
    displayTimer()
}