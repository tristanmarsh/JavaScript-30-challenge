{
  const speed = document.querySelector('.speed');
  const bar = speed.querySelector('.speed-bar');
  const video = document.querySelector('.flex');

  function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.1;
    const max = 10;
    const height = `${Math.round(percent * 100)}%`;
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
  };

  speed.addEventListener('mousemove', handleMove);
}
