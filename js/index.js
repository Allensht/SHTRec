let stream;
let mediaRecorder;
let blobs;
let blob;
let url;
let videoTracks;
let ale;
let span;
let word;
let delLastSpan;
let delSpan;
let video;
let a;


function start() {
    navigator.mediaDevices.getDisplayMedia({ audio:true,video: true })
        .then(function (s) {
            stream = s;
            mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'video/webm'
            });
            blobs = [], mediaRecorder;
            videoTracks = stream.getVideoTracks();
            if (videoTracks.length > 0) {
                mediaRecorder.start(100);
                mediaRecorder.ondataavailable = (e) => {
                    blobs.push(e.data);
                };
                document.body.innerHTML = `<div class="bg"></div><div class="head"><div class="topBox"><a href="https://github.com/Allensht/SHTRec/" class="github-corner" aria-label="View source on GitHub"><svg width="80"
        height="80" viewBox="0 0 250 250"
        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor" class="octo-body"></path></svg></a><ul class="ui"><li><a href="/SHTRec/"><img src="https://pic.imgdb.cn/item/65178840c458853aef354ab3.png" alt=""><span>SHTRec</span></a></li></ul></div></div><div class="main"><div class="container"><span style="--d: 7"></span><span style="--d: 6"></span><span style="--d: 5"></span><span style="--d: 4"></span><span style="--d: 3"></span><span style="--d: 2"></span><span style="--d: 1"></span><span style="--d: 0"></span><span style="--d: 1"></span><span style="--d: 2"></span><span style="--d: 3"></span><span style="--d: 4"></span><span style="--d: 5"></span><span style="--d: 6"></span><span style="--d: 7"></span></div></div><div class="downBtn"><button class="home" onclick="window.location.href='/%E5%BD%95%E5%B1%8F/web/'">首页</button><button class="stop" onclick="stop()">停止</button><button class="replay" onclick="replay()">播放</button><button class="download" onclick="download()">下载</button></div></div>`;
            }
        })

        .catch(function (error) {
            console.log(error);
        });
        
    function startLog() {
        ale = document.querySelector(".alert");
        span = document.createElement("span");
        span.className = "lastSpan";
        word = "1.选择您要共享的内容<br>2.选择是否要共享音频<br>3.点击共享<br>4.录制完毕后点击停止<br>5.点击播放或下载";
        span.innerHTML = word;
        if (document.querySelector(".alert").contains(document.querySelector(".lastSpan"))) {
            delLastSpan = document.querySelector(".lastSpan");
            delLastSpan.remove();
        }
        ale.appendChild(span);
        setTimeout(function startLogDelete() {
            delSpan = document.querySelector(".lastSpan");
            delSpan.remove();
        }, 5000);
    }
    startLog();
}


function stop() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    document.body.innerHTML = `<div class="bg"></div><div class="head"><div class="topBox"><a href="https://github.com/Allensht/SHTRec/" class="github-corner" aria-label="View source on GitHub"><svg width="80"
        height="80" viewBox="0 0 250 250"
        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor" class="octo-body"></path></svg></a><ul class="ui"><li><a href="/SHTRec/"><img src="https://pic.imgdb.cn/item/65178840c458853aef354ab3.png" alt=""><span>SHTRec</span></a></li></ul></div></div><div class="main"><div class="scr"><span class="stopLog">录制完毕！</span></div></div><div class="downBtn"><button class="home" onclick="window.location.href='/SHTRec/'">首页</button><button class="stop" onclick="stop()">停止</button><button class="replay" onclick="replay()">播放</button><button class="download" onclick="download()">下载</button></div></div>`;
}  


function replay() {
    blob = new Blob(blobs, {
        type: 'video/webm'
    });
    document.body.innerHTML = `<div class="bg"></div><div class="head"><div class="topBox"><a href="https://github.com/Allensht/SHTRec/" class="github-corner" aria-label="View source on GitHub"><svg width="80"
        height="80" viewBox="0 0 250 250"
        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
        aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor" class="octo-body"></path></svg></a><ul class="ui"><li><a href="/SHTRec/"><img src="https://pic.imgdb.cn/item/65178840c458853aef354ab3.png" alt=""><span>SHTRec</span></a></li></ul></div></div><div class="main"><div class="scr"><video class="vid" autoplay controls width="800px" height="280px"></video></div></div><div class="downBtn"><button class="home" onclick="window.location.href='/SHTRec/'">首页</button><button class="stop" onclick="stop()">停止</button><button class="replay" onclick="replay()">播放</button><button class="download" onclick="download()">下载</button></div></div>`;
    video = document.querySelector(".vid");
    video.src = URL.createObjectURL(blob);
}


function download() {
    blob = new Blob(blobs, {
        type: 'video/webm'
    });
    url = URL.createObjectURL(blob);
    a = document.createElement('a');
    a.href = url;
    a.download = 'record.webm';
    a.style.display = 'none';
    a.click();
}