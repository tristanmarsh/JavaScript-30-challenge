{
  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');
  const lat = document.querySelector('.lat');
  const long = document.querySelector('.long');
  const mapsLink = document.querySelector('.maps-link');

  navigator.geolocation.watchPosition((data) => {
    window.console.log(data);
    speed.textContent = data.coords.speed;

    lat.textContent = data.coords.latitude;
    long.textContent = data.coords.longitude;

    mapsLink.href = `https://www.google.com/maps/@-${data.coords.latitude},${data.coords.longitude},14z`;
    mapsLink.textContent = 'Maps Please';

    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (err) => {
    window.console.error(err);
  });
}
