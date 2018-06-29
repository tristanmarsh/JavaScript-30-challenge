{
  const keyHistory = [];
  const triggerWord = 'tristan';

  document.addEventListener('keypress', e => {
    keyHistory.push(e.key);
    keyHistory.splice(-triggerWord.length - 1, keyHistory.length - triggerWord.length);
    if (keyHistory.join('').includes(triggerWord)) {
      window.console.log('wow!');
      cornify_add();
    }
  });
}
