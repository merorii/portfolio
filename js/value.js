const scenes = [
    {
        heightNum: 5,   //sticky
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section0'),
            messageA: document.querySelector('#scroll-section0 .animation.messageA'),
            messageB: document.querySelector('#scroll-section0 .animation.messageB'),
            messageC: document.querySelector('#scroll-section0 .animation.messageC'),
        },
        values: {
            messageA_op_in: [0, 1, { start: 0.25, end: 0.3 }],
            messageA_op_out: [1, 0, { start: 0.4, end: 0.45 }],
            messageB_op_in: [0, 1, { start: 0.5, end: 0.55 }],
            messageB_op_out: [1, 0, { start: 0.6, end: 0.65 }],
            messageC_op_in: [0, 1, { start: 0.7, end: 0.75 }],
            messageC_op_out: [1, 0, { start: 0.8, end: 0.85 }]
        }
    },
    {
        heightNum: 6,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section1'),
            iconWrapper: document.querySelector('#scroll-section1 .icon-wrapper'),
            icon0: document.querySelector('#scroll-section1 .icon0'),
            icon1: document.querySelector('#scroll-section1 .icon1'),
            icon2: document.querySelector('#scroll-section1 .icon2'),
            icon3: document.querySelector('#scroll-section1 .icon3'),
            icon4: document.querySelector('#scroll-section1 .icon4'),
            icon5: document.querySelector('#scroll-section1 .icon5'),
            icon6: document.querySelector('#scroll-section1 .icon6'),
            icon7: document.querySelector('#scroll-section1 .icon7'),
            icon8: document.querySelector('#scroll-section1 .icon8'),
            icon9: document.querySelector('#scroll-section1 .icon9'),
            icon10: document.querySelector('#scroll-section1 .icon10'),
        },
        values: {
            icon0_op: [0, 1, { start: 0.1, end: 0.2 }],
            icon1_op: [0, 1, { start: 0.2, end: 0.3 }],
            icon2_op: [0, 1, { start: 0.3, end: 0.4 }],
            icon3_op: [0, 1, { start: 0.4, end: 0.5 }],
            icon4_op: [0, 1, { start: 0.5, end: 0.6 }],
            icon5_op: [0, 1, { start: 0.6, end: 0.7 }],
            icon6_op: [0, 1, { start: 0.7, end: 0.8 }],
            icon7_op: [0, 1, { start: 0.8, end: 0.9 }],
            icon8_op: [0, 1, { start: 0.9, end: 1 }],
            icon9_op: [0, 1, { start: 0.1, end: 0.2 }],
            icon10_op: [0, 1, { start: 0.1, end: 0.2 }],
            icon_translateY: [50, 0]
        }
    },
    {
        heightNum: 2,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section2')
        }
    },
    {
        heightNum: 1,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section3')
        }
    }
]