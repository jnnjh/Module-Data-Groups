function setAlarm() {
    let unclickable = document.getElementById('set');
    unclickable.id = 'unclickable'; // i set this id so the button will not work for a while until the alarm goes off.
    let sec = 0;
    let min = 0;
    let alarmSet = document.getElementById('alarmSet').value;
    const timeRemaining = document.getElementById('timeRemaining');
    
    const timer = setInterval(() => {
        if(alarmSet < 10) timeRemaining.innerHTML = `Time Remaining: 00:0${alarmSet}`; 
        else if(alarmSet < 60) timeRemaining.innerHTML = `Time Remaining: 00:${alarmSet}`;
        else {
            min = Math.floor(alarmSet / 60);
            sec = alarmSet % 60;

            if(min < 10 && sec < 10) timeRemaining.innerHTML = `Time Remaining: 0${min}:0${sec}`;
            else if(min < 10 && sec > 10) timeRemaining.innerHTML = `Time Remaining: 0${min}:${sec}`;
            else if(min >= 10 && sec < 10) timeRemaining.innerHTML = `Time Remaining: ${min}:0${sec}`;
            else if(min >= 10 && sec > 10) timeRemaining.innerHTML = `Time Remaining: ${min}:${sec}`;
        }

        if(alarmSet === 0) {
            unclickable.id = 'set'; // i set the id back to 'set' so the button is functioning again.
            playAlarm();
            clearInterval(timer);
        } else {
            alarmSet--;
        }
    }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
