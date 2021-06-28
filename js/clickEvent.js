function clickEvent() {
    let scrollMove;

    document.querySelectorAll('.gnb li').forEach((ele) => {
        ele.addEventListener('click', (e) => {
            const idx = e.target.getAttribute('data-idx');
            scrollMove = 0;
            for (let i = 0; i < idx; i++) {
                scrollMove += scenes[i].scrollHeight;
            }
            window.scrollTo(0, scrollMove);

            if (idx !== '0' && idx !== '3') {
                let tempScrollCount = 0;
                let siId = setInterval(() => {
                    window.scrollTo(0, scrollMove);
                    scrollMove += 30;
                    if (tempScrollCount > 5) {
                        clearInterval(siId);
                    }
                    tempScrollCount++;
                }, 20);
            }
            
        })
    })
}