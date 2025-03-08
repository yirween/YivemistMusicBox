// 读取数据
/*
歌曲id      歌曲名称
001         I really ∞（翻自 Carly Rae Jepsen）
002         她追逐着月光的尽头
003         焦糖星
004         来自天空的呼唤
005         前行的色彩(合唱.ver)
006         人造透明和天界线
007         好了现在可以哭了
008         「追逐月光」feat.诗岸
009         FEAR;life
010         Astronomy (English Ver.)
011         春天没有落花。
012         By the Seaside (feat. Kitsui Akira)
013         我用什么把你留住
014         自傷無色 (feat. 宵崎奏, 朝比奈まふゆ & 初音ミク)
015         
016         
017         
018         
*/
var songData = [
    // 样例
    // {
    //     "id":"",
    //     "title":"",
    //     "author":"",
    //     "tag":[],
    //     "url":"",
    //     "cover":"",
    // },
    {
        "id":"001",
        "title":"I really ∞（翻自 Carly Rae Jepsen）",
        "author":"warma/crazy bucket",
        "tag":["warma"],
        "url":"http://music.163.com/song/media/outer/url?id=1395826900",
        "cover":"https://p2.music.126.net/DwWVQH2lsnqJEpeUiNaCZA==/109951164416460276.jpg?param=300x300",
    },
    {
        "id":"002",
        "title":"她追逐着月光的尽头",
        "author":"warma/我是石榴皮",
        "tag":["warma","诗岸","翻唱"],
        "url":"http://music.163.com/song/media/outer/url?id=1868711061",
        "cover":"http://p2.music.126.net/-5kwASaP2-LcTr9VrmnmTg==/109951166273496994.jpg?param=130y130",
    },
    {
        
        "id":"003",
        "title":"焦糖星",
        "author":"warma/味素/大九_LN",
        "tag":["warma"],
        "url":"http://music.163.com/song/media/outer/url?id=1373906533",
        "cover":"http://p1.music.126.net/-_nzyXjD1hNH_Jsvqp9fDw==/109951164171342766.jpg?param=130y130",
    },
    {
        "id":"004",
        "title":"来自天空的呼唤",
        "author":"warma/沙皮/阿冰angel/胡文杰/B的站站友们",
        "tag":["warma","光遇"],
        "url":"http://music.163.com/song/media/outer/url?id=2067100070",
        "cover":"http://p2.music.126.net/mvOTYZYfea_slbXkuK1Uaw==/109951168764140491.jpg?param=130y130",
    },
    {
        "id":"005",
        "title":"前行的色彩(合唱.ver)",
        "author":"ICE SEA/栗粟音核/神崎南风kanzaki/雨落/iopoke/竹子/金子/马哥/小于凡/憨根/千奈子/凉皮/十连/春白镜子/星洢/风在/决胜的青石/气泡/盐巴/初海/wamra",
        "tag":["合唱","励志","儿歌"],
        "url":"http://music.163.com/song/media/outer/url?id=1489939340",
        "cover":"http://p2.music.126.net/Lqpcn4JzAznuzdHavlGwiw==/109951165415458516.jpg?param=130y130",
    },
    {
        "id":"006",
        "title":"人造透明和天界线",
        "author":"停電前夜/洛天依",
        "tag":["v","洛天依"],
        "url":"http://music.163.com/song/media/outer/url?id=2075673030",
        "cover":"http://p2.music.126.net/QbSEVc3hTMLo7UMTx2mJWg==/109951168860945452.jpg?param=130y130",
    },
    {
        "id":"007",
        "title":"好了现在可以哭了",
        "author":"停電前夜/洛天依",
        "tag":["v","洛天依"],
        "url":"http://music.163.com/song/media/outer/url?id=2075674757",
        "cover":"http://p2.music.126.net/QbSEVc3hTMLo7UMTx2mJWg==/109951168860945452.jpg?param=130y130",
    },
    {
        "id":"008",
        "title":"「追逐月光」feat.诗岸",
        "author":"希爾露在現世人間/诗岸/離散星",
        "tag":["v","诗岸"],
        "url":"http://music.163.com/song/media/outer/url?id=2126196744",
        "cover":"http://p2.music.126.net/ddiJwqia4t6yWzp1FTcKBw==/109951169334058109.jpg?param=130y130",
    },
    {
        "id":"009",
        "title":"FEAR;life",
        "author":"Cloudier",
        "tag":["电子"],
        "url":"http://music.163.com/song/media/outer/url?id=1376681597",
        "cover":"http://p2.music.126.net/kqeb_edOZHYePUuxcPDbGw==/109951164200738323.jpg?param=130y130",
    },
    {
        "id":"010",
        "title":"Astronomy (English Ver.)",
        "author":"Empty old City",
        "tag":[],
        "url":"http://music.163.com/song/media/outer/url?id=2650865659",
        "cover":"http://p2.music.126.net/Y6D0jBRk1D1-Q1SV4jtKwg==/109951170194301974.jpg?param=130y130",
    },
    {
        "id":"011",
        "title":"春天没有落花。",
        "author":"RAYの丼/☆花森果森森ᶻᶻᶻ",
        "tag":["v","诗岸"],
        "url":"http://music.163.com/song/media/outer/url?id=2035797254",
        "cover":"http://p2.music.126.net/gPSPa5S1tCBg6qcfdmC1xw==/109951168517433810.jpg?param=130y130",
    },
    {
        "id":"012",
        "title":"By the Seaside (feat. Kitsui Akira)",
        "author":"Kirara Magic",
        "tag":[],
        "url":"http://music.163.com/song/media/outer/url?id=2613950506",
        "cover":"http://p2.music.126.net/AJaCmp8sTBvAoWtPFqtCaQ==/109951169840669390.jpg?param=130y130",
    },
    {
        "id":"013",
        "title":"我用什么把你留住",
        "author":"福禄寿FloruitShow",
        "tag":[],
        "url":"http://music.163.com/song/media/outer/url?id=1306923998",
        "cover":"http://p2.music.126.net/RMYmJlVF2Fuvg2hmJNlmHA==/109951167343222893.jpg?param=130y130",
    },
    {
        "id":"014",
        "title":"自傷無色 (feat. 宵崎奏, 朝比奈まふゆ & 初音ミク)",
        "author":"ササノマリイ/25時、ナイトコードで。/初音ミク",
        "tag":[],
        "url":"http://music.163.com/song/media/outer/url?id=1935704598",
        "cover":"http://p1.music.126.net/-5mVUrSrFEr75VZF6aXskg==/109951167382644532.jpg?param=130y130",
    },
]
var cptData = {
    "cpts":[
        // {
        //     "cptTitle":"",
        //     "cptDetial":"",
        //     "cptImg":"",
        //     "cptList":[]
        // },
        {
            "cptTitle":"全部歌曲", // 第一个歌单为特殊入口
            "cptDetial":"所有歌曲合集",
            "cptImg":"./cover1.jpg",
        },
        {
            "cptTitle":"单曲",
            "cptDetial":"没有分类的优质曲目",
            "cptImg":"http://p2.music.126.net/kqeb_edOZHYePUuxcPDbGw==/109951164200738323.jpg?param=130y130",
            "cptList":["009","010","012","013","014"]
        },
        {
            "cptTitle":"warma",
            "cptDetial":"bilibili up主 warma",
            "cptImg":"./cover1.jpg",
            "cptList":["001","002","003","004","005"]
        },
        {
            "cptTitle":"虚拟歌姬",
            "cptDetial":"声音合成",
            "cptImg":"./SHIAN.jpg",
            "cptList":["006","007","008","011"]
        },
    ]
}


// 播放列表
var playList = [];

var cptOpen = false;    // 标记歌单打开or关闭状态

const pauseBtn = document.querySelector('.pause-music');

// 播放器全局状态
const musicPlayer = {
    audio: new Audio(),          // 播放器实例
    currentIndex: 0,             // 当前播放索引
    playList: [],                // 当前播放列表
    isPlaying: false,            // 播放状态
    
    // 初始化播放器事件
    init: function() {
        // 绑定播放结束事件
        this.audio.addEventListener('ended', () => this.playNext());
        // 绑定播放器控制按钮
        document.querySelector('.pause-music').addEventListener('click', () => this.togglePlay());
        document.querySelector('.previous-music').addEventListener('click', () => this.playPrev());
        document.querySelector('.next-music').addEventListener('click', () => this.playNext());
        
        // 添加时间更新监听
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        
        // 绑定进度条点击事件
        document.querySelector('.music-progress').addEventListener('click', (e) => this.seek(e));
    },

    // 新增进度更新方法
    updateProgress: function() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        document.querySelector('.play-past').style.width = `${progress}%`;
    },

    // 新增进度跳转方法
    seek: function(e) {
        if (!this.audio.src) return; // 没有加载歌曲时禁止操作
        
        const progressBar = e.currentTarget;
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const percentage = clickPosition / rect.width;
        
        // 边界限制
        const validPercentage = Math.max(0, Math.min(1, percentage));
        this.audio.currentTime = this.audio.duration * validPercentage;
        
        // 立即更新进度条显示
        this.updateProgress();


    },
    
    // 修改loadSong方法添加重置进度
    loadSong: function(song) {
        this.audio.src = song.url;
        this.audio.play().then(() => {
            this.isPlaying = true;
            document.querySelector('.music-cover').style.backgroundImage = `url(${song.cover})`;
            // 重置进度条
            document.querySelector('.play-past').style.width = "0%";
        }).catch(error => {
            console.error('播放错误:', error);
        });
    },

    // 加载并播放指定歌曲
    loadSong: function(song) {
        this.audio.src = song.url;
        this.audio.play();
        this.isPlaying = true;
        // 更新封面和界面
        document.querySelector('.music-cover').style.backgroundImage = `url(${song.cover})`;
    },
    
    // 切换播放/暂停
    togglePlay: function() {
        
        if (this.isPlaying) {
            this.audio.pause();
            // 暂停状态动画图标
            pauseBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" 
                        stroke-dasharray="40" stroke-dashoffset="40" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M8 6l10 6l-10 6Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" 
                            dur="0.2s" values="40;0"/>
                    </path>
                </svg>`;
        } else {
            this.audio.play();
            // 播放状态图标
            pauseBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"/>
                </svg>`;
        }
        
        this.isPlaying = !this.isPlaying;
    },
    
    playNext: function() {
        if (this.playList.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.playList.length;
        const nextSong = this.playList[this.currentIndex];
        if (nextSong) this.loadSong(nextSong);
        pauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"/>
            </svg>`;
    },
    
    playPrev: function() {
        if (this.playList.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.playList.length) % this.playList.length;
        const prevSong = this.playList[this.currentIndex];
        if (prevSong) this.loadSong(prevSong);
        pauseBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"/>
            </svg>`;
    },
};

// 初始化播放器
musicPlayer.init();




// 创建歌单
for (var cptlenth = 0; cptlenth < cptData.cpts.length; cptlenth++) {
    var addingcpt = document.getElementById('cpts');
    addingcpt.innerHTML += '<div class="cpt"><img class="cpt-img" src="' + cptData.cpts[cptlenth]["cptImg"] + '" alt=""><div class="text-bar"><div class="cpt-title">' + cptData.cpts[cptlenth]["cptTitle"] + '</div><div class="cpt-detial">' + cptData.cpts[cptlenth]["cptDetial"] + '</div></div></div>';
}

// 歌单被点击时打开对应歌单
document.addEventListener("click", (e) => {
    const cptDiv = e.target.closest(".cpt");
    if (!cptDiv) return;

    // 标记歌单为打开状态
    cptOpen = true;

    // 获取被点击的歌单索引
    const cptindex = [...document.querySelectorAll(".cpt")].indexOf(cptDiv);

    // 隐藏歌单选择界面
    const hidcpts = document.getElementById("cpts");
    hidcpts.classList.add("cpts-hidden1");
    setTimeout(() => hidcpts.classList.add("cpts-hidden2"), 100);

    // 显示歌单详情页
    const visiincpt = document.getElementById("incpt");
    visiincpt.classList.add("incpt-visiable");

    // 清空现有歌曲列表
    const songsList = document.getElementById("songs-list");
    songsList.innerHTML = ""; // 清空容器

    // 获取目标歌曲ID列表
    let targetSongIDs = [];
    if (cptindex === 0) {
        // 合并所有歌单的歌曲ID（跳过第一个歌单自己）
        targetSongIDs = songData.map(song => song.id);
    } else {
        // 正常获取当前歌单的歌曲ID
        targetSongIDs = cptData.cpts[cptindex]?.cptList || [];
    }

    // 根据ID从songData中查找歌曲对象
    const targetSongs = targetSongIDs.map(id => 
        songData.find(song => song.id === id)
    ).filter(Boolean); // 过滤无效项

    // 向添加歌曲
    targetSongs.forEach((song, index) => {
        setTimeout(() => {
            const songDiv = document.createElement("div");
            songDiv.className = "song";

            // 构建标签HTML（带容错）
            const tagsHTML = song.tag?.map(t => 
                `<div class="tag">${t}</div>`
            ).join("") || ""; // 处理无tag情况

            songDiv.innerHTML = `
                <div class="song-title">${song.title || "无标题"}</div>
                <div class="song-author">${song.author || "未知作者"}</div>
                <div class="song-tag">${tagsHTML}</div>
            `;



            
            // 添加点击播放事件
            songDiv.addEventListener('click', () => {
                musicPlayer.currentIndex = index;
                musicPlayer.loadSong(song);
            });

            // 设置播放列表时添加有效性检查
            musicPlayer.playList = targetSongs.filter(song => song?.url); // 过滤无效歌曲
            
            // 重置当前播放索引
            musicPlayer.currentIndex = 0;

            songsList.appendChild(songDiv);
            
            // 触发入场动画
            setTimeout(() => {
                songDiv.style.opacity = "1";
                songDiv.style.transform = "translateY(0)";
            }, 10);
        }, 50 * index); // 间隔50ms添加
    });
});


// 当返回箭头被点击关闭歌单详情
document.addEventListener("click", (e) => {
    const back = e.target.closest(".back");
    if (!back) return;

    // 标记歌单为关闭状态
    cptOpen = false;

    // 显示歌单选择页
    const hidcpts = document.getElementById("cpts");
    hidcpts.classList.remove("cpts-hidden1");
    hidcpts.classList.remove("cpts-hidden2");

    // 隐藏歌单详情页
    const visiincpt = document.getElementById("incpt");
    visiincpt.classList.remove("incpt-visiable");
});

// 音乐播放

// 当歌曲卡片被点击
document.addEventListener("click", (e) => {
    const playMusic = e.target.closest(".song");
    if (!playMusic) return;

    // 获取被点击的音乐索引
    const songindex = [...document.querySelectorAll(".song")].indexOf(playMusic);
    console.log(songindex)

    pauseBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"/>
    </svg>`;

});



const playlistUI = {
    // 初始化播放列表事件
    init: function() {
        // 绑定播放列表按钮点击
        document.querySelector('.music-list-botton').addEventListener('click', () => this.togglePlaylist());
        // 绑定遮罩点击事件
        document.querySelector('.balck-mask').addEventListener('click', () => this.hidePlaylist());
    },

    // 切换播放列表显示
    togglePlaylist: function() {
        const menu = document.querySelector('.music-play-list-menu');
        const mask = document.querySelector('.balck-mask');
        
        if (menu.style.bottom === '0px') {
            this.hidePlaylist();
        } else {
            this.showPlaylist();
        }
    },

    // 显示播放列表
    showPlaylist: function() {
        const menu = document.querySelector('.music-play-list-menu');
        const mask = document.querySelector('.balck-mask');
        
        menu.style.bottom = '110px';
        mask.style.display = 'block';
        this.updatePlaylist();
    },

    // 隐藏播放列表
    hidePlaylist: function() {
        const menu = document.querySelector('.music-play-list-menu');
        const mask = document.querySelector('.balck-mask');
        
        menu.style.bottom = '-50%';
        mask.style.display = 'none';
    },

    // 更新播放列表内容
    updatePlaylist: function() {
        const container = document.querySelector('.music-play-list-menu');
        container.innerHTML = '';

        musicPlayer.playList.forEach((song, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.draggable = true;
            item.dataset.index = index;
            
            item.innerHTML = `
                <div class="song-info">
                    <div class="song-title">${song.title || "无标题"}</div>
                    <div class="song-author">${song.author || "未知作者"}</div>
                </div>
                <div class="playlist-controls">
                    <div class="drag-handle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2.5 11h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"/>
                        </svg>
                    </div>
                    <div class="delete-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 20V6H5V5h4v-.77h6V5h4v1h-1v14zm1-1h10V6H7zm2.808-2h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"/>
                        </svg>
                    </div>
                </div>
            `;

            // 添加整行点击事件
            item.addEventListener('click', (e) => {
                // 排除按钮区域的点击
                if(!e.target.closest('.playlist-controls')) {
                    musicPlayer.currentIndex = index;
                    musicPlayer.loadSong(song);
                    musicPlayer.audio.play();
                    musicPlayer.isPlaying = true;
                    // 更新播放按钮状态
                    document.querySelector('.pause-music').innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"/>
                        </svg>`;
                }
            });

            // 绑定删除事件
            item.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.removeFromPlaylist(index);
            });

            container.appendChild(item);
        });

        // 初始化拖拽排序
        this.initSortable();
    },

    // 从播放列表删除歌曲
    removeFromPlaylist: function(index) {
        musicPlayer.playList.splice(index, 1);
        if(musicPlayer.currentIndex >= index) musicPlayer.currentIndex--;
        this.updatePlaylist();
    },

    // 初始化拖拽排序
    initSortable: function() {
        let draggedItem = null;

        document.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedItem = item;
                setTimeout(() => item.classList.add('dragging'), 0);
                e.dataTransfer.effectAllowed = 'move'; // 添加此行
            });

            item.addEventListener('dragend', () => {
                draggedItem = null;
                document.querySelectorAll('.playlist-item').forEach(i => {
                    i.classList.remove('dragging');
                });
            });
        });

        document.querySelector('.music-play-list-menu').addEventListener('dragover', e => {
            e.preventDefault();
            if (!draggedItem) return; // 添加空值检查
            
            const afterElement = this.getDragAfterElement(e.clientY);
            const container = document.querySelector('.music-play-list-menu');
            
            // 增强节点有效性验证
            if (draggedItem && draggedItem.parentNode === container) {
                if (afterElement && afterElement.parentNode === container) {
                    container.insertBefore(draggedItem, afterElement);
                } else {
                    container.appendChild(draggedItem);
                }

                // 添加try-catch容错
                try {
                    const newIndex = [...container.children].indexOf(draggedItem);
                    const [removed] = musicPlayer.playList.splice(draggedItem.dataset.index, 1);
                    musicPlayer.playList.splice(newIndex, 0, removed);
                    
                    if(musicPlayer.currentIndex == draggedItem.dataset.index) {
                        musicPlayer.currentIndex = newIndex;
                    }
                    // 更新所有项目的dataset.index
                    [...container.children].forEach((item, index) => {
                        item.dataset.index = index;
                    });
                } catch (error) {
                    console.error('排序出错:', error);
                }
            }
        });
    },

    // 修改getDragAfterElement方法
    getDragAfterElement: function(y) {
        const elements = [...document.querySelectorAll('.playlist-item:not(.dragging)')];
        let closestElement = null;
        let closestOffset = Number.NEGATIVE_INFINITY;

        elements.forEach(element => {
            const box = element.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closestOffset) {
                closestOffset = offset;
                closestElement = element;
            }
        });

        return closestElement;
    }
};

// 初始化播放列表UI
playlistUI.init();