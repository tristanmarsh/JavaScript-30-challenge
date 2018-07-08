{
  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');

  function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
      }).catch(error => {
        window.alert('Oh No! We can\'t access the camera!');
      });
  }

  function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');

    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src='${data}' alt='handsome boii' />`;

    strip.insertBefore(link, strip.firstChild);
  }
  window.takePhoto = takePhoto;

  function redFilter(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 200; // r
      pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // b
    }
    return pixels;
  }

  function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // r
      pixels.data[i + 500] = pixels.data[i + 1]; // g
      pixels.data[i - 500] = pixels.data[i + 2]; // b
    }
    return pixels;
  }

  function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // r
      pixels.data[i + 500] = pixels.data[i + 1]; // g
      pixels.data[i - 550] = pixels.data[i + 2]; // b
    }
    return pixels;
  }

  function greenScreen(pixels) {
    const levels = {};

    const band = {};

    [...document.querySelectorAll('.rgb input')].forEach(input => {
      levels[input.name] = input.value;
    });

    // band.min = document.querySelector('#min').value;
    // band.max = document.querySelector('#max').value;

    // ['min', 'max'].forEach(prop => {
    //   band[prop] = {
    //     r: parseInt(band[prop].slice(1, 3), 16),
    //     g: parseInt(band[prop].slice(3, 5), 16),
    //     b: parseInt(band[prop].slice(5, 7), 16),
    //   };
    // });

    for (let i = 0; i < pixels.data.length; i += 4) {
      const red = pixels.data[i + 0];
      const green = pixels.data[i + 1];
      const blue = pixels.data[i + 2];
      let alpha = pixels.data[i + 3];

      // if (red >= band.min.r.rmin
      //   && green >= band.min.g.gmin
      //   && blue >= band.min.b.bmin
      //   && red <= band.max.r.rmin
      //   && green <= band.max.g.gmax
      //   && blue <= band.max.b.gmax) {
      //   pixels.data[i + 3] = 0;
      // }
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmin
        && green <= levels.gmax
        && blue <= levels.gmax) {
        pixels.data[i + 3] = 0;
      }
    }
    return pixels;
  }

  function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);

      let pixels = ctx.getImageData(0, 0, width, height);

      // pixels = redFilter(pixels);
      pixels = rgbSplit(pixels);
      // pixels = greenScreen(pixels);
      ctx.globalAlpha = 0.1;

      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  getVideo();
  video.addEventListener('canplay', paintToCanvas);
}
