import string from "./css.js";

const player = {
  id: undefined,
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
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents(); //先绑定事件
    player.play(); //再播放，把id存下来
  },

  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; //value的值是字符串 pause / play / slow / normal /fast
        document.querySelector(key).onclick = player[value]; //用value作为key取对应的 player.pause 等方法
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time); //setInterval函数后面第一个参数不能加(),除非()返回一个函数
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};
player.init();

// id = setInterval(() => {
//     run();
//   }, time);
//如果一个函数什么都没做只是调用了另外一个函数，则可以省略外面一个函数，上述代码等价于如下写法
//参数不能加(),除非()返回一个函数
// id = setInterval(run, time);
