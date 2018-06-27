{
  let lastClick = null;

  const selectRange = (fromIndex, toIndex, parent) => {
    let floor, ceiling;
    [floor, ceiling] = (fromIndex <= toIndex)
      ? [fromIndex, toIndex]
      : [toIndex, fromIndex];

    for (let i = floor; i <= ceiling; i++) {
      parent.children[i].querySelector('input').checked = true;
    }
  };

  const handleInboxClick = e => {
    const target = e.target.classList.contains('item') ? e.target : e.target.closest('.item');
    const targetIndex = Array.prototype.indexOf.call(target.parentElement.children, target);

    if (e.shiftKey) {
      selectRange(lastClick, targetIndex, target.parentElement);
    } else {
      lastClick = null;
    }

    lastClick = targetIndex;
  };

  const inbox = document.querySelector('.inbox');
  inbox.addEventListener('click', handleInboxClick);
}
