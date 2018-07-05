{
  const videos = document.querySelectorAll('[data-time]');

  const timeStampToSeconds = timeStampString => {
    const [mins, secs] = timeStampString.split(':');
    return parseInt(mins, 10) * 60 + parseInt(secs, 10);
  };

  const secondsToTimeStamp = seconds => {
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft %= 3600;

    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft %= 60;

    return `${hours} Hours ${minutes} Minutes ${secondsLeft} Seconds`;
  };

  const totalSeconds = Array.from(videos).reduce((acc, value) => (acc + timeStampToSeconds(value.dataset.time)), 0);

  window.console.log(secondsToTimeStamp(totalSeconds));
}
