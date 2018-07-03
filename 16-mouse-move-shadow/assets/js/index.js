const hero = document.querySelector('.hero');
const h1 = hero.querySelector('h1');
const walk = 100;

const onMouseMove = e => {
  const { clientX: posX, clientY: posY } = e;
  const { offsetWidth: w, offsetHeight: h } = hero;

  const percentX = Math.round(posX / w * 100);
  const percentY = Math.round(posY / h * 100);

  const rel = {
    x: percentX - 50,
    y: percentY - 50,
  };

  const distance = Math.abs(rel.x) + Math.abs(rel.y);

  const vector = {
    x: -(walk * (percentX - 50) / 100),
    y: -(walk * (percentY - 50) / 100),
  };

  const opacity = 0.3 + distance * 0.3;
  const blur = 0.3 + distance * 0.7;

  const transform = {
    x: -vector.x,
    y: vector.y,
  };

  const shadowStyle = `${vector.x}px ${vector.y}px ${blur}px rgba(0,0,0, ${opacity})`;
  h1.style.textShadow = shadowStyle;
  h1.style.transform = `rotate3d(${transform.y}, ${transform.x}, 0, ${distance * 45 / 100}deg)`;
};

document.addEventListener('mousemove', onMouseMove);
