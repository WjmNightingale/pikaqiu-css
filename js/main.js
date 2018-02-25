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
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
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
    `
    writeCode('',code)
}.call()