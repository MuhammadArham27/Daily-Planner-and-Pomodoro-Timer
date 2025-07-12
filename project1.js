const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        newTaskInput.value = ''; 
    }
});
let timerInterval;
let timerRunning = false;
let timeRemaining = 25 * 60;
const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');
const resetTimerButton = document.getElementById('reset-timer');
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
function startTimer() {
    if (timerRunning) return;
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            alert("Pomodoro session is over! Take a break!");
            timeRemaining = 5 * 60; 
            updateTimerDisplay();
        }
    }, 1000);
    timerRunning = true;
}
function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timeRemaining = 25 * 60;
    updateTimerDisplay();
}
startTimerButton.addEventListener('click', startTimer);
resetTimerButton.addEventListener('click', resetTimer);
updateTimerDisplay();