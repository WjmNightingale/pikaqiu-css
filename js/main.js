!function() {
    function writeCode(prefix,code,fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
    let code = 
    `
    /*我可爱的小仙女，男朋友今天给你演示下，什么叫做小触，2333
    *今天表演的绝活是，大变皮卡丘
    *在变之前，给你来一点看不懂的代码
    *因为这是必须的工作
    */
    .preview {
        height: 100%;
        /* width: 100%; */
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    .wrapper {
        width: 100%;
        height: 165px;
        /* border: 1px solid blue; */
        position: relative;
    }
    /*准备工作完毕，我已经有了张白纸
    *那么，我开始画皮卡丘了
    *首先,我需要画个小鼻子
    */
    .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        top: 28px;
        left: 50%;
        margin-left: -12px;
    }
    /*鼻子画完后，那就是眼睛喽
    *先画出眼睛原型
    */
    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
    }
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: white;
        position: absolute;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    /*现在开始摆置左眼*/
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    /*然后再是右眼*/
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /*好了，眼睛小工告成
    *我们可以画脸颊了
    */
    .face {
        width: 68px;
        height: 68px;
        border: 2px solid black;
        border-radius: 50%;
        background: #fc0d1c;
        position: absolute;
        top: 85px;
    }
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    .face.right {
        left: 50%;
        margin-left: 116px; 
    }
    /*
    *红扑扑的脸颊有没有很像你呢，2333
    *脸颊画好后，那就是嘴唇了
    */
    .upperlip {
        height: 25px;
        width: 80px;
        border: 3px solid black;
        position: absolute;
        top: 46px;
        background: #fee433;
    }
    .upperlip.left {
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-15deg);
    }
    .upperlip.right {
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(15deg);
    }
    /*
    *上嘴唇搞定后，我们需要一个可爱的小舌头
    */
    .lowerlip-wrapper {
        width: 300px;
        height: 110px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        bottom: 0;
        overflow: hidden;
    }
    .lowerlip {
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lowerlip::after {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background: #FC4A62;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
    }
    /*
    *好了，到这里，我们的皮卡丘已经完成了
    *希望你可以喜欢哟
    *你猜最后的代码会出现什么？
    */
    span {
        font-size: 26px;
        color: #FC4A62;
        /* border: 1px solid red; */
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -100%;
        word-break: keep-all;
        opacity: 1;
    }
    /*
    *哈哈，就是我想说的一句话，超级简单的彩蛋，爱你呦！
    */
    `
    writeCode('',code)
}.call()