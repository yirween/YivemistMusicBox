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

// 音乐播放器核心模块
const MusicPlayer = (() => {
    const audio = new Audio();
    let currentIndex = 0;
    let playList = [];
    let isPlaying = false;

    // 初始化事件
    const initEvents = () => {
        document.querySelector('.pause-music').addEventListener('click', togglePlay);
        document.querySelector('.previous-music').addEventListener('click', playPrev);
        document.querySelector('.next-music').addEventListener('click', playNext);
        audio.addEventListener('timeupdate', updateProgress);
        document.querySelector('.music-progress').addEventListener('click', seek);
    };

    // 加载歌曲（整合版）
    const loadSong = (song) => {
        if (!song?.url) return;
        
        audio.src = song.url;
        audio.play().then(() => {
            isPlaying = true;
            document.querySelector('.music-cover').style.backgroundImage = `url(${song.cover})`;
            document.querySelector('.play-past').style.width = "0%";
            updatePlayButton();
        }).catch(console.error);
    };

    // 播放控制
    const togglePlay = () => {
        isPlaying ? audio.pause() : audio.play();
        isPlaying = !isPlaying;
        updatePlayButton();
    };

    // 更新播放按钮
    const updatePlayButton = () => {
        const pauseBtn = document.querySelector('.pause-music');
        pauseBtn.innerHTML = isPlaying ? 
            `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6 19h4V5H6zm8-14v14h4V5z"/>
                </svg>`:
            `
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" 
                        stroke-dasharray="40" stroke-dashoffset="40" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M8 6l10 6l-10 6Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" 
                            dur="0.2s" values="40;0"/>
                    </path>
                </svg>`  ;
    };

    // 切歌逻辑
    const playNext = () => updatePlayIndex(currentIndex + 1);
    const playPrev = () => updatePlayIndex(currentIndex - 1);

    // 更新播放索引
    const updatePlayIndex = (newIndex) => {
        if (!playList.length) return;
        currentIndex = (newIndex + playList.length) % playList.length;
        loadSong(playList[currentIndex]);
    };

    // 进度条控制
    const updateProgress = () => {
        const progress = (audio.currentTime / audio.duration) * 100 || 0;
        document.querySelector('.play-past').style.width = `${progress}%`;
    };

    const seek = (e) => {
        const rect = e.target.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        audio.currentTime = audio.duration * Math.max(0, Math.min(1, percentage));
    };

    return {
        init: initEvents,
        getPlaylist: () => playList,
        setPlaylist: (list) => playList = list.filter(s => s?.url),
        addToPlaylist: (song) => {
            if (!playList.some(s => s.id === song.id)) {
                playList.push(song);
                return true;
            }
            return false;
        },
        loadSong,
        togglePlay,
        playNext,
        playPrev
    };
})();

// 播放列表UI模块
const PlaylistUI = (() => {
    let draggedItem = null;

    // 初始化
    const init = () => {
        document.querySelector('.music-list-botton').addEventListener('click', togglePlaylist);
        document.querySelector('.balck-mask').addEventListener('click', hidePlaylist);
        initDragEvents();
    };

    // 显示/隐藏逻辑
    const togglePlaylist = () => {
        const menu = document.querySelector('.music-play-list-menu');
        menu.style.bottom = menu.style.bottom === '0px' ? '-50%' : '110px';
        document.querySelector('.balck-mask').style.display = 
            menu.style.bottom === '110px' ? 'block' : 'none';
        if (menu.style.bottom === '110px') updatePlaylist();
    };

    const hidePlaylist = () => {
        document.querySelector('.music-play-list-menu').style.bottom = '-50%';
        document.querySelector('.balck-mask').style.display = 'none';
    };

    // 更新播放列表
    const updatePlaylist = () => {
        const container = document.querySelector('.music-play-list-menu');
        container.innerHTML = MusicPlayer.getPlaylist().map((song, index) => `
            <div class="playlist-item" data-index="${index}" draggable="true">
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
            </div>
        `).join('');

        // 绑定事件
        container.querySelectorAll('.delete-btn').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const newList = MusicPlayer.getPlaylist().filter((_, i) => i !== index);
                MusicPlayer.setPlaylist(newList);
                updatePlaylist();
            });
        });
    };

    // 拖拽事件
    const initDragEvents = () => {
        document.addEventListener('dragstart', e => {
            if (!e.target.closest('.playlist-item')) return;
            draggedItem = e.target.closest('.playlist-item');
            setTimeout(() => draggedItem.classList.add('dragging'), 0);
        });

        document.addEventListener('dragend', () => {
            draggedItem?.classList.remove('dragging');
            draggedItem = null;
        });

        document.addEventListener('dragover', e => {
            if (!draggedItem) return;
            e.preventDefault();
            
            const afterElement = getDragAfterElement(e.clientY);
            const container = document.querySelector('.music-play-list-menu');
            
            if (afterElement) {
                container.insertBefore(draggedItem, afterElement);
            } else {
                container.appendChild(draggedItem);
            }

            // 更新播放列表顺序
            const newIndex = [...container.children].indexOf(draggedItem);
            const newList = [...MusicPlayer.getPlaylist()];
            const [moved] = newList.splice(draggedItem.dataset.index, 1);
            newList.splice(newIndex, 0, moved);
            MusicPlayer.setPlaylist(newList);
        });
    };

    const getDragAfterElement = (y) => {
        return [...document.querySelectorAll('.playlist-item:not(.dragging)')]
            .reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                return offset < 0 && offset > closest.offset ? 
                    { offset, element: child } : closest;
            }, { offset: -Infinity }).element;
    };

    return { init, updatePlaylist, togglePlaylist, hidePlaylist };
})();

// 歌单管理模块
const PlaylistManager = (() => {
    const init = () => {
        // 初始化歌单显示
        document.getElementById('cpts').innerHTML = cptData.cpts.map(cpt => `
            <div class="cpt">
                <img class="cpt-img" src="${cpt.cptImg}">
                <div class="text-bar">
                    <div class="cpt-title">${cpt.cptTitle}</div>
                    <div class="cpt-detial">${cpt.cptDetial}</div>
                </div>
            </div>
        `).join('');

        // 歌单点击事件
        document.addEventListener('click', e => {
            const cptDiv = e.target.closest('.cpt');
            if (!cptDiv) return;

            // 界面切换逻辑
            document.getElementById('cpts').classList.add('cpts-hidden1');
            setTimeout(() => document.getElementById('cpts').classList.add('cpts-hidden2'), 100);
            document.getElementById('incpt').classList.add('incpt-visiable');
            
            // 清空并加载歌曲列表
            const songsList = document.getElementById('songs-list');
            songsList.innerHTML = '';
            getSongsByCpt(cptDiv).forEach((song, index) => {
                setTimeout(() => createSongElement(song, index), 20 * index);
            });
        });

        // 返回按钮
        document.querySelector('.back').addEventListener('click', () => {
            document.getElementById('cpts').classList.remove('cpts-hidden1', 'cpts-hidden2');
            document.getElementById('incpt').classList.remove('incpt-visiable');
        });
    };

    // 获取歌单对应歌曲
    const getSongsByCpt = (cptDiv) => {
        const index = [...document.querySelectorAll('.cpt')].indexOf(cptDiv);
        return index === 0 ? 
            songData : 
            (cptData.cpts[index]?.cptList || [])
                .map(id => songData.find(s => s.id === id))
                .filter(Boolean);
    };

    // 创建歌曲元素
    const createSongElement = (song, index) => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song';
        songDiv.dataset.song = JSON.stringify(song);
        songDiv.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div class="song-author">${song.author}</div>
            <div class="song-tag">
                ${(song.tag || []).map(t => `<div class="tag">${t}</div>`).join('')}
            </div>
        `;

        // 点击事件
        songDiv.addEventListener('click', () => {
            if (MusicPlayer.addToPlaylist(song)) {
                songDiv.classList.add('added');
                setTimeout(() => songDiv.classList.remove('added'), 1000);
            }
            MusicPlayer.loadSong(song);
        });

        document.getElementById('songs-list').appendChild(songDiv);
        setTimeout(() => songDiv.style.cssText = 'opacity:1; transform:translateY(0)', 10);
    };

    return { init };
    
})();

// 初始化整个应用
window.addEventListener('load', () => {
    // 初始化播放列表为全部有效歌曲
    MusicPlayer.setPlaylist(songData.filter(s => s.url));
    
    // 初始化各模块
    MusicPlayer.init();
    PlaylistUI.init();
    PlaylistManager.init();
});