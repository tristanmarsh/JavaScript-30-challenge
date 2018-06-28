// Elements
const player = document.querySelector('.player');
const video = player.querySelector('video.player__video.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreen = player.querySelector('[name="fullscreen"]');
const ranges = player.querySelectorAll('.player__slider');

let mouseDown = false;

// Functions
function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
  const icon = this.paused ? '►' : '⏸';
  toggle.textContent = icon;
}

function toggleFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  window.console.log(mouseDown);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Register Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

fullScreen.addEventListener('click', toggleFullscreen);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => { mouseDown = true; });
progress.addEventListener('mouseup', () => { mouseDown = false; });
