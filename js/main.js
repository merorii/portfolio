(() => {
    let yOffset = 0;
    let currentScene = 0;
    let prevScrollHeight = 0;
    let totalScrollHeight = 0;

    const mouseCursor = document.querySelector(".cursor");
    const cursorEffects = document.querySelectorAll(".cursorEffect");
    const icons = document.querySelectorAll("#scroll-section1 .animation");
    const boxs = document.querySelectorAll("#scroll-section3 .div-wrapper>div");

    function setSceneHeight() {
        scenes.forEach((scene, idx) => {
            scene.scrollHeight
                = (idx === 3)
                ?document.querySelector('#scroll-section3 .div-wrapper').offsetHeight
                :window.innerHeight * scene.heightNum;
            scene.objs.container.style.height = `${scene.scrollHeight}px`;
        });
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
                if (scrollRatio < 0.8) {
                    objs.stickyWrapper.style.height = "100%";
                    objs.stickyWrapper.classList.add('sticky');
                    for (let i = 0; i <= 10; i++) {
                        objs[`icon${i}`].style.opacity = calcValues(values[`icon${i}_op`], currentYOffset);
                        objs[`icon${i}`].style.transform = `translate3d(0, ${(calcValues(values["icon"+i+"_op"], currentYOffset, values.icon_translateY))}%, 0)`;
                    }
                }else {
                    objs.stickyWrapper.style.height = `${window.innerHeight}px`;
                    objs.stickyWrapper.classList.remove('sticky');
                }
                break;
            case 2:
                if (scrollRatio < 0.8) {
                    objs.stickyWrapper.style.height = "100%";
                    objs.stickyWrapper.classList.add('sticky');
                    ["messageA", "messageB", "messageC"].forEach((motionEle) => {
                        (scrollRatio <= startEndPoint(`${motionEle}_op`))
                            ? objs[motionEle].style.opacity = calcValues(values[`${motionEle}_op_in`], currentYOffset)
                            : objs[motionEle].style.opacity = calcValues(values[`${motionEle}_op_out`], currentYOffset);
                    });
                }else {
                    objs.stickyWrapper.style.height = `${window.innerHeight}px`;
                    objs.stickyWrapper.classList.remove('sticky');
                }
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }
    
    function scrollLoop() {
        totalScrollHeight = 0;
        for (let i = 0; i < scenes.length; i++) {
            totalScrollHeight += scenes[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `scene${currentScene}`);

        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += scenes[i].scrollHeight;
        }

        playAnimation();
    }

    window.addEventListener("mousemove", (e) => {
        mouseCursor.style.left = e.clientX + "px";
        mouseCursor.style.top = e.clientY + "px";
    });

    cursorEffects.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("cursor-grow");
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("cursor-grow");
        });
    });
    
    icons.forEach((icon) => {
        icon.addEventListener("mouseover", (e) => {
            e.target.style.transform = `translate3d(0, -30%, 0)`;
        });
        icon.addEventListener("mouseleave", (e) => {
            e.target.style.transform = `translate3d(0, 0%, 0)`;
        });
    });

    boxs.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.transform = `translate3d(0, -3%, 10px)`;
            boxs.forEach((boxx) => {
                boxx.style.opacity = 0.6;
            });
            e.target.style.opacity = 1;
        });
        box.addEventListener("mouseleave", (e) => {
            e.target.style.transform = `translate3d(0, 0%, 0)`;
            boxs.forEach((boxx) => {
                boxx.style.opacity = 1;
            });
        });
    });

    window.addEventListener('resize', () => {
        setSceneHeight();
    });

    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    window.addEventListener('load', () => {
        setSceneHeight();
        clickEvent();
    });

})();