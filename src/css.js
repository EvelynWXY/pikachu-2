const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
.skin *::before,
.skin *::after {
    box-sizing: border-box;
  }
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 60vh;
  }
  .nose {
    border: 10px solid red;
    border-color: #000 transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px; /* border10px：左边10px右边10px */
    z-index: 10;
  }
  /*声明一个动画*/
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    /*transform-origin: 50% 100%; 动画摆动基准：左右以中间为准，上下以下方为准*/
    transform-origin: center bottom; /*效果等同于上句*/
    animation: wave 500ms infinite linear;
  }
  .circle {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    margin-left: -10px;
    border-radius: 20px 20px 0px 0px;
    background: #000;
  }
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background: #2e2e2e;
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid #000;
    width: 31px;
    height: 31px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    height: 30px;
    width: 7px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
  }
  .mouth .up .lip::after {
    content: "";
    display: block;
    width: 100px;
    height: 5px;
    position: absolute;
    top: -6px;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    transform: rotate(-15deg) translateX(-53px);
  }
  
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-left-color: transparent;
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .tongue1 {
    border: 3px solid black;
    width: 150px;
    position: absolute;
    bottom: 0;
    height: 1000px;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #a40000;
    overflow: hidden;
  }
  .mouth .down .tongue1 .tongue2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #ff485f;
  }
  .face {
    position: absolute;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    left: 50%;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    background: #ff0000;
    border-radius: 50%;
  }
  .face > img {
    position: absolute;
    left: 50%;
    top: 50%;
  }
  
  .face.left {
    transform: translateX(-180px);
  }
  .face.left > img {
    transform-origin: 0 0;
    transform: rotateY(180deg);
  }
  .face.right {
    transform: translateX(180px);
  }`;
export default string;
