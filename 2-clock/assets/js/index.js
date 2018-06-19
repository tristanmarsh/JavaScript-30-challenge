(() => {
    const hands = {
        hour: document.querySelector('.hour-hand'),
        minute: document.querySelector('.min-hand'),
        second: document.querySelector('.second-hand'),
    };
    
    const handsKeys = Array.from(Object.keys(hands));

    const styleThingsInJsEvenThoughImAgainstIt = (() => {
        const clock = document.querySelector('.clock-face');
        clock.style.transform = "rotate(90deg)";
        hands.second.style.backgroundColor = "red";
        hands.second.style.height = "3px";
        hands.second.style.height = "3px";

        handsKeys.forEach(hand => {
            hands[hand].style.transformOrigin = "100% 50%";
            hands[hand].style.borderRadius = "4px";
        });
    })();

    const updateTime = () => {
        const t = new Date();

        const time = {
            hour: t.getHours(),
            minute: t.getMinutes(),
            second: t.getSeconds(),
        };

        const degrees = calculateDegrees(time);
        render(degrees, hands);
    };

    const calculateDegrees = (time) => {
        const calcDeg = (value, maxValue, degreesSpread) => ((value / maxValue * degreesSpread) % 360);

        // Basic position per time unit on a 12 hour clock face
        const positionDegrees = {
            hour: calcDeg(time.hour, 12, 360),
            minute: calcDeg(time.minute, 60, 360),
            second: calcDeg(time.second, 60, 360),
        };

        // Final degrees from all component time units
        const degrees = {
            hour: positionDegrees.hour + (positionDegrees.minute / 12) + (positionDegrees.second / 12 / 60),
            minute: positionDegrees.minute + (positionDegrees.second / 60),
            second: positionDegrees.second,
        };

        return degrees;
    };

    const render = (degrees, hands) => {
        handsKeys.forEach(hand => {
            hands[hand].style.transition = (degrees[hand] == 0) ?
                "none" :
                "all 0.1s cubic-bezier(0.68, 0, 0.265, 1.55)";

            hands[hand].style.transform = `rotate(${degrees[hand]}deg)`;
        });
    };

    window.setInterval(updateTime, 1000);
})();
