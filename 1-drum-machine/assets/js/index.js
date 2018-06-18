(function() {
    const handleKeyPress = e => {
        playSound(e);
        animateKey(e);
    };

    const playSound = e => {
        const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    };

    const animateKey = e => {
        const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
        if (key) {
            key.classList.remove('playing');
            key.classList.add('playing');
            key.addEventListener('transitionend', e => {
                if (e.propertyName == 'transform') {
                    key.classList.remove('playing');
                }
            });
        }
    };
    window.addEventListener('keydown', handleKeyPress);
})();