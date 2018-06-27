{
  const app = {
    shiftActive: false,
    lastClick: null,
  };

  const shiftSelect = (fromIndex, toIndex, parent) => {
    if (fromIndex < toIndex) {
      for (let i = fromIndex; i <= toIndex; i++) {
        parent.children[i].querySelector('input').checked = true;
      }
    } else {
      for (let i = toIndex; i <= fromIndex; i++) {
        parent.children[i].querySelector('input').checked = true;
      }
    }
  };

  const handleInboxClick = e => {
    const target = e.target.classList.contains('item') ? e.target : e.target.closest('.item');

    const targetIndex = Array.prototype.indexOf.call(target.parentElement.children, target);

    if (app.shiftActive) {
      shiftSelect(app.lastClick, targetIndex, target.parentElement);
    } else {
      app.lastClick = null;
    }

    // leave trail for next click
    if (!app.shiftActive) {
      app.lastClick = null;
    }
    app.lastClick = targetIndex;
    app.shiftActive = e.shiftKey;
  };

  document.body.addEventListener('keypress', (e) => window.console.log(e));

  const inbox = document.querySelector('.inbox');
  inbox.addEventListener('click', handleInboxClick);
}
