const panels = document.querySelectorAll('.panel');

const handlePanelClick = e => {
    window.console.log(e);
    e.currentTarget.classList.toggle('open');
};

const handleTransitionEnd = e => {
    if (e.propertyName.includes('flex')) {
        e.currentTarget.classList.toggle('open-active');
    };
};

panels.forEach(panel => panel.addEventListener('click', handlePanelClick));
panels.forEach(panel => panel.addEventListener('transitionend', handleTransitionEnd));