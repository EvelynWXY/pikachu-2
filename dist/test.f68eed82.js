var n =
  '\n.skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n.skin *::before,\n.skin *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    position: relative;\n    background: #ffe600;\n    min-height: 60vh;\n  }\n  .nose {\n    border: 10px solid red;\n    border-color: #000 transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px; /* border10px：左边10px右边10px */\n    z-index: 10;\n  }\n  /*声明一个动画*/\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    /*transform-origin: 50% 100%; 动画摆动基准：左右以中间为准，上下以下方为准*/\n    transform-origin: center bottom; /*效果等同于上句*/\n    animation: wave 500ms infinite linear;\n  }\n  .circle {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    margin-left: -10px;\n    border-radius: 20px 20px 0px 0px;\n    background: #000;\n  }\n  .eye {\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    border-radius: 50%;\n    background: #2e2e2e;\n  }\n  .eye::before {\n    content: "";\n    display: block;\n    border: 3px solid #000;\n    width: 31px;\n    height: 31px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 2px;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n  }\n  .mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 1;\n  }\n  .mouth .up .lip {\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    border-top-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    background: #ffe600;\n  }\n  .mouth .up .lip::before {\n    content: "";\n    display: block;\n    height: 30px;\n    width: 7px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n  }\n  .mouth .up .lip::after {\n    content: "";\n    display: block;\n    width: 100px;\n    height: 5px;\n    position: absolute;\n    top: -6px;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    border-right-color: transparent;\n    transform: rotate(-15deg) translateX(-53px);\n  }\n  \n  .mouth .up .lip.left::before {\n    right: -6px;\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    border-left-color: transparent;\n    transform: rotate(15deg) translateX(53px);\n  }\n  .mouth .up .lip.right::before {\n    left: -6px;\n  }\n  .mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n  }\n  .mouth .down .tongue1 {\n    border: 3px solid black;\n    width: 150px;\n    position: absolute;\n    bottom: 0;\n    height: 1000px;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background: #a40000;\n    overflow: hidden;\n  }\n  .mouth .down .tongue1 .tongue2 {\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n    background: #ff485f;\n  }\n  .face {\n    position: absolute;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    left: 50%;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n    background: #ff0000;\n    border-radius: 50%;\n  }\n  .face > img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n  }\n  \n  .face.left {\n    transform: translateX(-180px);\n  }\n  .face.left > img {\n    transform-origin: 0 0;\n    transform: rotateY(180deg);\n  }\n  .face.right {\n    transform: translateX(180px);\n  }';
const t = {
  id: void 0,
  n: 0,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    (t.ui.demo.innerText = n.substring(0, t.n)),
      (t.ui.demo2.innerHTML = n.substring(0, t.n)),
      t.bindEvents(),
      t.play();
  },
  bindEvents: () => {
    for (let n in t.events)
      if (t.events.hasOwnProperty(n)) {
        const e = t.events[n];
        document.querySelector(n).onclick = t[e];
      }
  },
  run: () => {
    (t.n += 1),
      t.n > n.length
        ? window.clearInterval(t.id)
        : ((t.ui.demo.innerText = n.substring(0, t.n)),
          (t.ui.demo2.innerHTML = n.substring(0, t.n)),
          (t.ui.demo.scrollTop = t.ui.demo.scrollHeight));
  },
  play: () => {
    t.id = setInterval(t.run, t.time);
  },
  pause: () => {
    window.clearInterval(t.id);
  },
  slow: () => {
    t.pause(), (t.time = 300), t.play();
  },
  normal: () => {
    t.pause(), (t.time = 100), t.play();
  },
  fast: () => {
    t.pause(), (t.time = 0), t.play();
  },
};
t.init();
//# sourceMappingURL=test.f68eed82.js.map
