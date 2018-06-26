{
  const app = {
    canvas: document.querySelector('canvas'),
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    colour: 'hsl(0, 100%, 50%)',
    hue: 0,
    hueInc: true,
    lineWidth: 1,
    lineWidthInc: true,
  };

  const resizeCanvasToWindow = () => {
    app.canvas.width = window.innerWidth;
    app.canvas.height = window.innerHeight;
  };

  const draw = e => {
    app.ctx.beginPath();
    app.ctx.moveTo(app.lastX, app.lastY);
    app.ctx.lineTo(e.offsetX, e.offsetY);
    app.ctx.stroke();

    [app.lastX, app.lastY] = [e.offsetX, e.offsetY];
  };

  const bounce = (i, min, max, inc, reverseInc) => {
    if ((i <= min && !inc) || i >= max && inc) {
      reverseInc();
      return inc ? i + 1 : i - 1;
    }
    return inc ? i + 1 : i - 1;
  };

  const drawRainbowEffect = e => {
    app.colour = `hsl(${app.hue}, 100%, 50%)`;
    app.ctx.strokeStyle = app.colour;
    app.ctx.lineWidth = app.lineWidth;
    app.ctx.beginPath();
    app.ctx.moveTo(app.lastX, app.lastY);
    app.ctx.lineTo(e.offsetX, e.offsetY);
    app.ctx.stroke();

    app.hue = bounce(app.hue, 0, 360, app.hueInc, () => { app.hueInc = !app.hueInc; });
    app.lineWidth = bounce(app.lineWidth, 0, 75, app.lineWidthInc, () => { app.lineWidthInc = !app.lineWidthInc; });

    [app.lastX, app.lastY] = [e.offsetX, e.offsetY];
  };


  const handleMouseMove = e => {
    if (app.isDrawing) {
      drawRainbowEffect(e);
      // draw(e);
    }
  };

  const handleMouseDown = e => {
    [app.lastX, app.lastY] = [e.offsetX, e.offsetY];
    app.isDrawing = true;
  };

  const registerEventListeners = () => {
    app.canvas.addEventListener('mousemove', handleMouseMove);
    app.canvas.addEventListener('mousedown', handleMouseDown);
    app.canvas.addEventListener('mouseup', () => { app.isDrawing = false; });

    //  Intentionally continue to draw after having left the canvas
    // app.canvas.addEventListener('mouseout', () => { app.isDrawing = false; });

    resizeCanvasToWindow();
  };

  const initContext = () => {
    app.ctx = app.canvas.getContext('2d');
    app.ctx.strokeStyle = app.colour;
    app.ctx.lineJoin = 'round';
    app.ctx.lineCap = 'round';
    app.ctx.lineWidth = app.lineWidth;
  };

  (() => {
    registerEventListeners();
    initContext();
  })();
}
