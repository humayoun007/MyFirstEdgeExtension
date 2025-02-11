
var countdown;
var timeLeft = 0;

document.getElementById('btnSetMinute').addEventListener('click', () => {
    var minuteValue = document.getElementById('txtMinuteInput').value;
    timeLeft = minuteValue * 60;
    document.getElementById('minuteSection').innerText = minuteValue + ':00';
  });

  function formatTime(seconds){
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }


  function startCountdown(){
    document.getElementById('btnStart').disabled = true;

    countdown = setInterval(()=> {
      if(timeLeft <= 0){
        clearInterval(countdown);
        alert('Time""s up!');
        document.getElementById('btnStart').disabled = false;
      }
      else{
        timeLeft--;
        document.getElementById('minuteSection').innerText = formatTime(timeLeft);
      }

    }, 1000);

  }

  document.getElementById('btnStart').addEventListener('click', () => { 
    startCountdown();
  });