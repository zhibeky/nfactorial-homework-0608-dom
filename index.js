let video = document.getElementById("video-background");
let audio = document.getElementById("audio");
let playVideoButton = document.getElementById("btn-change-background");
let playAudioButton = document.getElementById("playpause-track");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");


function playVideo() {
    
    playVideoButton.addEventListener("click", function() {

    if (video.paused == true) {
        video.play();
        playVideoButton.innerHTML = '<i class="fa fa-solid fa-pause fa-2x" style="color:white;"></i>';
    } else {
        video.pause();
        playVideoButton.innerHTML = '<i class="fa fa-solid fa-play fa-2x" style="color:white;"></i>';
    }
    });
}
function playPauseTrack() {
    
    playAudioButton.addEventListener("click", function() {
    if (audio.paused == true) {
        audio.play();
        // playAudioButton.innerHTML = '<i class="fa fa-music fa-5x"></i>';
        // <i class="fa-regular fa-music"></i>
    } else {
        audio.pause();
        // playAudioButton.innerHTML = '<i class="fa fa-music fa-5x"></i>';
    }
    });
}

function progressValue() {
    progressBar.max = track.duration;
    progressBar.value = track.currentTime;

    currentTime.textContent = formatTime(track.currentTime);
    durationTime.textContent = formatTime(track.duration);
  }

  setInterval(progressValue, 500);

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  function changeProgressBar() {
    track.currentTime = progressBar.value;
  }

  progressBar.addEventListener("click", changeProgressBar);

  document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);

  $('#audio').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);