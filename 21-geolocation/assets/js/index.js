{
  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');

  navigator.geolocation.watchPosition((data) => {
    window.console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (err) => {
    window.console.error(err);
  });
}
