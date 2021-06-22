(() => {
    let yOffset = 0;
    let currentScene = 0;
    let prevScrollHeight = 0;

    let mouseCursor = document.querySelector(".cursor");
    let cursorEffects = document.querySelectorAll(".cursorEffect");

    window.addEventListener("mousemove", cursor);
    function cursor(e) {
        mouseCursor.style.left = e.clientX + "px";
        mouseCursor.style.top = e.clientY + "px";
    }
    function mouseEffect(obj) {
        obj.addEventListener("mouseover", () => {
            mouseCursor.classList.add("cursor-grow");
        });
        obj.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("cursor-grow");
        });
    }
    cursorEffects.forEach((link) => {
        mouseEffect(link);
    });

    function setCurrentScene() {
        scenes.forEach((scene) => {
            scene.scrollHeight = window.innerHeight * scene.heightNum;
            scene.objs.container.style.height = `${scene.scrollHeight}px`;
        });

        let totalScrollHeight = 0;

        for (let i = 0; i < scenes.length; i++) {
            totalScrollHeight += scenes[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }

        document.body.setAttribute('id', `scene${currentScene}`);
    }

    function calcValues(values, currentYOffset, additionalValues) {
        let result;
        const scrollHeight = scenes[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scenes[currentScene].scrollHeight;

        if (values.length === 3) {
            const scrollStart = values[2].start * scrollHeight;
            const scrollEnd = values[2].end * scrollHeight;
            const scrollPart = scrollEnd - scrollStart;
            let startValue, endValue;

            if (additionalValues) {
                startValue = additionalValues[0];
                endValue = additionalValues[1];
            } else {
                startValue = values[0];
                endValue = values[1];
            }

            if (currentYOffset >= scrollStart && currentYOffset <= scrollEnd) {
                result = ((currentYOffset - scrollStart) / scrollPart) * (endValue - startValue) + startValue;
            } else if (currentYOffset < scrollStart) {
                result = startValue;
            } else if (currentYOffset > scrollEnd) {
                result = endValue;
            }

        } else {
            result = scrollRatio * (values[1] - values[0]) + values[0];
        }
        return result;
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += scenes[i].scrollHeight;
        }

        playAnimation();
    }

    function playAnimation() {

        let currentYOffset = yOffset - prevScrollHeight;

        let objs = scenes[currentScene].objs;
        let values = scenes[currentScene].values;
        const scrollRatio = currentYOffset / scenes[currentScene].scrollHeight;

        const startEndPoint = (animation) => {
            return (values[`${animation}_in`][2].start + values[`${animation}_out`][2].start) / 2;
        }

        switch (currentScene) {
            case 0:
                ["messageA", "messageB", "messageC"].forEach((motionEle) => {
                    (scrollRatio <= startEndPoint(`${motionEle}_op`))
                        ? objs[motionEle].style.opacity = calcValues(values[`${motionEle}_op_in`], currentYOffset)
                        : objs[motionEle].style.opacity = calcValues(values[`${motionEle}_op_out`], currentYOffset);
                });
                break;
            case 1:
                (scrollRatio <= startEndPoint("messageA_op"))
                    ? objs.messageA.style.opacity = calcValues(values.messageA_op_in, currentYOffset)
                    : objs.messageA.style.opacity = calcValues(values.messageA_op_out, currentYOffset);

                for (let i = 0; i < 10; i++) {
                    (scrollRatio <= 0.85)
                        ? (
                            objs[`icon${i}`].style.opacity = calcValues(values[`icon${i}_op`], currentYOffset),
                            objs[`icon${i}`].style.transform = `translate3d(0, ${(calcValues(values[`icon${i}_op`], currentYOffset, values.icon_translateY))}%, 0)`
                        )
                        : objs[`icon${i}`].style.opacity = calcValues(values.icon_out, currentYOffset);
                }
                break;
            case 2:
                break;
            case 3:
                break;
        }

    }

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        setCurrentScene();
        scrollLoop();
    });

    window.addEventListener('DOMContentLoaded', () => {
        setCurrentScene();
        clickEvent();
    });

})();