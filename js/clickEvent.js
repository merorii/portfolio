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
        })
    })
}