{
  const divs = document.querySelectorAll('div');

  function logText(e) {
    window.console.log(this.classList.value);
    window.console.log(e);
    // e.stopPropagation();
  }

  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true,
  }));
}
