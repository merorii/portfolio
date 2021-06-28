const scenes = [
    {
        //0
        heightNum: 5,   //sticky
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section0'),
            messageA: document.querySelector('#scroll-section0 .animation.messageA'),
            messageB: document.querySelector('#scroll-section0 .animation.messageB'),
            messageC: document.querySelector('#scroll-section0 .animation.messageC'),
        },
        values: {
            messageA_op_in: [0, 1, { start: 0.1, end: 0.2 }],
            messageA_op_out: [1, 0, { start: 0.3, end: 0.4 }],
            messageB_op_in: [0, 1, { start: 0.4, end: 0.5 }],
            messageB_op_out: [1, 0, { start: 0.6, end: 0.7 }],
            messageC_op_in: [0, 1, { start: 0.7, end: 0.8 }],
            messageC_op_out: [1, 0, { start: 0.9, end: 1 }]
        }
    },
    {
        //1
        heightNum: 6,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section1'),
            stickyWrapper: document.querySelector('#scroll-section1 .stickyWrapper'),
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
            icon0_op: [0, 1, { start: 0, end: 0.1 }],
            icon1_op: [0, 1, { start: 0.2, end: 0.3 }],
            icon2_op: [0, 1, { start: 0.4, end: 0.5 }],
            icon3_op: [0, 1, { start: 0.3, end: 0.4 }],
            icon4_op: [0, 1, { start: 0.4, end: 0.5 }],
            icon5_op: [0, 1, { start: 0.6, end: 0.7 }],
            icon6_op: [0, 1, { start: 0.3, end: 0.4 }],
            icon7_op: [0, 1, { start: 0.6, end: 0.7 }],
            icon8_op: [0, 1, { start: 0, end: 0.1 }],
            icon9_op: [0, 1, { start: 0.1, end: 0.2 }],
            icon10_op: [0, 1, { start: 0.5, end: 0.6 }],
            icon_translateY: [50, 0]
        }
    },
    {
        //2
        heightNum: 5,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section2'),
            stickyWrapper: document.querySelector('#scroll-section2 .stickyWrapper'),
            messageA: document.querySelector('#scroll-section2 .animation.messageA'),
            messageB: document.querySelector('#scroll-section2 .animation.messageB'),
            messageC: document.querySelector('#scroll-section2 .animation.messageC'),
        },
        values: {
            messageA_op_in: [0, 1, { start: 0, end: 0.1 }],
            messageA_op_out: [1, 0, { start: 0.2, end: 0.3 }],
            messageB_op_in: [0, 1, { start: 0.3, end: 0.4 }],
            messageB_op_out: [1, 0, { start: 0.5, end: 0.6 }],
            messageC_op_in: [0, 1, { start: 0.6, end: 0.7 }],
            messageC_op_out: [1, 0, { start: 0.8, end: 0.9 }]
        }
    },
    {
        //3
        heightNum: 2,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section3')
        }
    },
    {
        //4
        heightNum: 1,   //normal
        scrollHeight: 0,
        objs: {
            container: document.querySelector('#scroll-section4')
        }
    }
]