const track = document.getElementById("track");
const thumbnail = document.getElementById("thumbnail");
const background = document.getElementById("background");
const trackArtist = document.getElementById("track-artist");
const trackTitle = document.getElementById("track-title");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");
const playVideoButton = document.getElementById("btn-change-background");


let play = document.getElementById("play");
let pause = document.getElementById("pause");
let next = document.getElementById("next-track");
let prev = document.getElementById("prev-track");
let trackIndex = 0;

let tracks = [
  "./assets/bts_audio.mp3",
  "./assets/skz_audio.mp3",
  "./assets/txt_audio.mp3"
];
let thumbnails = [
    "./assets/bts_album.jpg",
    "./assets/skz_album.jpg",
    "./assets/txt_album.jpg"
];
let videos = [
    "./assets/bts_video.mp4",
    "./assets/skz_video.mp4",
    "./assets/txt_video.mp4"
];
let trackArtists = ["BTS", "Stray Kids", "TomorrowXTogether"];
let trackTitles = ["Spring Day", "Maniac", "0X1=LOVESONG"];

// Play and Pause for Tracks. Next and previous tracks buttons
let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";

    track.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";

    thumbnail.style.transform = "scale(1)";

    track.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

track.addEventListener("ended", nextTrack);

function nextTrack() {
  trackIndex++;
  if (trackIndex > tracks.length - 1) {
    trackIndex = 0;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = videos[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

next.addEventListener("click", nextTrack);

function prevTrack() {
  trackIndex--;
  if (trackIndex < 0) {
    trackIndex = tracks.length - 1;
  }

  track.src = tracks[trackIndex];
  thumbnail.src = thumbnails[trackIndex];
  background.src = videos[trackIndex];

  trackArtist.textContent = trackArtists[trackIndex];
  trackTitle.textContent = trackTitles[trackIndex];

  playing = true;
  pausePlay();
}

prev.addEventListener("click", prevTrack);

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

// Progress Bar
function changeProgressBar() {
  track.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);

// Background changing for video
function playVideo() {
    
    if (background.paused == true) {
        background.play();
        playVideoButton.innerHTML = '<i class="fa fa-solid fa-video fa-2x" style="color:white;"></i>';
        // <i class="fa-solid fa-video"></i>
    } else {
        background.pause();
        playVideoButton.innerHTML = '<i class="fa fa-solid fa-video-slash fa-2x" style="color:white;"></i>';
        // <i class="fa-solid fa-video-slash"></i>
    }
}

// effect to video button
let buttonEffect = document.querySelector('button'), sound = null;
sound = new Audio('./assets/click.wav');

buttonEffect.addEventListener("click", ()=>{
  sound.currentTime = 0;
  sound.play();
});
