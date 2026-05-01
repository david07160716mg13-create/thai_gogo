const vocabData = {
    greetings: {
        title: "問候",
        icon: "👋",
        items: [
            { tw: "你好", th: "สวัสดี", rom: "撒哇滴 (Sa-wat-dee)" },
            { tw: "謝謝", th: "ขอบคุณ", rom: "叩昆 (Khop-khun)" },
            { tw: "不好意思 / 對不起", th: "ขอโทษ", rom: "叩透 (Kho-thot)" }
        ]
    },
    pronouns: {
        title: "代名詞",
        icon: "👤",
        items: [
            { tw: "這個", th: "อันนี้", rom: "安妮 (An-ni)" },
            { tw: "那個", th: "อันนั้น", rom: "安南 (An-nan)" },
            { tw: "我 (男/女)", th: "ผม / ฉัน", rom: "彭 / 禪 (Phom / Chan)" },
            { tw: "你", th: "คุณ", rom: "昆 (Khun)" },
            { tw: "這裡", th: "ที่นี่", rom: "替你 (Thi-ni)" },
            { tw: "那裡", th: "ที่นั่น", rom: "替難 (Thi-nan)" }
        ]
    },
    questions: {
        title: "疑問詞",
        icon: "❓",
        items: [
            { tw: "什麼", th: "อะไร", rom: "阿萊 (A-rai)" },
            { tw: "哪裡", th: "ที่ไหน", rom: "替奈 (Thi-nai)" },
            { tw: "多少錢", th: "เท่าไหร่", rom: "套萊 (Thao-rai)" }
        ]
    },
    verbs: {
        title: "動詞",
        icon: "🏃",
        items: [
            { tw: "吃", th: "กิน", rom: "斤 (Kin)" },
            { tw: "喝", th: "ดื่ม", rom: "嘟嗯 (Duem)" },
            { tw: "買", th: "ซื้อ", rom: "蘇 (Sue)" },
            { tw: "去", th: "ไป", rom: "掰 (Pai)" }
        ]
    },
    adjectives: {
        title: "形容詞",
        icon: "✨",
        items: [
            { tw: "辣", th: "เผ็ด", rom: "沛 (Phet)" },
            { tw: "甜", th: "หวาน", rom: "灣 (Wan)" },
            { tw: "熱", th: "ร้อน", rom: "龍 (Ron)" },
            { tw: "冰 / 冷", th: "เย็น", rom: "煙 (Yen)" }
        ]
    },
    adverbs: {
        title: "副詞",
        icon: "📈",
        items: [
            { tw: "非常 / 很", th: "มาก", rom: "罵克 (Mak)" },
            { tw: "一點點", th: "นิดหน่อย", rom: "尼諾伊 (Nit-noi)" }
        ]
    },
    numbers: {
        title: "數字",
        icon: "🔢",
        items: [
            { tw: "1", th: "หนึ่ง", rom: "能 (Nueng)" },
            { tw: "2", th: "สอง", rom: "頌 (Song)" },
            { tw: "3", th: "สาม", rom: "散 (Sam)" },
            { tw: "4", th: "สี่", rom: "細 (Si)" },
            { tw: "5", th: "ห้า", rom: "哈 (Ha)" },
            { tw: "6", th: "หก", rom: "吼 (Hok)" },
            { tw: "7", th: "เจ็ด", rom: "捷 (Chet)" },
            { tw: "8", th: "แปด", rom: "貝 (Paet)" },
            { tw: "9", th: "เก้า", rom: "告 (Kao)" },
            { tw: "10", th: "สิบ", rom: "洗 (Sip)" },
            { tw: "百", th: "ร้อย", rom: "樓 (Roi)" },
            { tw: "千", th: "พัน", rom: "潘 (Phan)" }
        ]
    },
    classifiers: {
        title: "量詞",
        icon: "📦",
        items: [
            { tw: "個", th: "อัน", rom: "安 (An)" },
            { tw: "杯", th: "แก้ว", rom: "告 (Kaeo)" }
        ]
    },
    sentences: {
        title: "基礎句型",
        icon: "💬",
        items: [
            { tw: "有", th: "มี", rom: "咪 (Mi)" },
            { tw: "沒有", th: "ไม่มี", rom: "賣咪 (Mai-mi)" },
            { tw: "是 / 對", th: "ใช่", rom: "菜 (Chai)" },
            { tw: "不是 / 不對", th: "ไม่ใช่", rom: "賣菜 (Mai-chai)" },
            { tw: "我要...", th: "เอา...", rom: "凹 (Ao)..." }
        ]
    },
    nouns: {
        title: "常用名詞",
        icon: "📍",
        items: [
            { tw: "廁所", th: "ห้องน้ำ", rom: "轟南 (Hong-nam)" },
            { tw: "水", th: "น้ำ", rom: "南 (Nam)" },
            { tw: "飯", th: "ข้าว", rom: "靠 (Khao)" },
            { tw: "牛肉", th: "เนื้อวัว", rom: "紐哇 (Nuea-wua)" },
            { tw: "雞肉", th: "ไก่", rom: "蓋 (Kai)" },
            { tw: "豬肉", th: "หมู", rom: "母 (Mu)" }
        ]
    },
    dining: {
        title: "餐廳點餐",
        icon: "🍽️",
        items: [
            { tw: "內用", th: "กินที่นี่", rom: "斤替你 (Kin-thi-ni)" },
            { tw: "外帶", th: "กลับบ้าน", rom: "嘎棒 (Klap-ban)" },
            { tw: "不要辣", th: "ไม่เผ็ด", rom: "賣沛 (Mai-phet)" },
            { tw: "不要加糖", th: "ไม่ใส่น้ำตาล", rom: "賣賽南丹 (Mai-sai-nam-tan)" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('category-nav');
    const flashcardContainer = document.getElementById('flashcard-container');
    const infoModal = document.getElementById('info-modal');
    const btnInfo = document.getElementById('btn-info');
    const closeBtn = document.querySelector('.close-btn');

    let currentCategory = 'greetings';

    // Initialize Categories
    function initCategories() {
        navContainer.innerHTML = '';
        Object.keys(vocabData).forEach(key => {
            const cat = vocabData[key];
            const btn = document.createElement('button');
            btn.className = `cat-btn ${key === currentCategory ? 'active' : ''}`;
            btn.innerHTML = `${cat.icon} ${cat.title}`;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = key;
                renderCards();
            });
            navContainer.appendChild(btn);
        });
    }

    // Render Note Cards
    function renderCards() {
        flashcardContainer.innerHTML = '';
        const items = vocabData[currentCategory].items;

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'note-card';
            
            card.innerHTML = `
                <h3 class="note-th">${item.th}</h3>
                <p class="note-rom"><i class="fas fa-comment-dots"></i> ${item.rom}</p>
                <div class="note-tw-container">
                    <span class="note-tw">${item.tw}</span>
                </div>
                <button class="audio-btn" aria-label="播放語音" data-text="${item.th}">
                    <i class="fas fa-volume-up"></i>
                </button>
            `;

            // Audio logic
            const audioBtn = card.querySelector('.audio-btn');
            audioBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                playAudio(item.th);
                
                // Button animation
                audioBtn.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    audioBtn.style.transform = '';
                }, 150);
            });

            flashcardContainer.appendChild(card);
        });
    }

    // Text to Speech
    function playAudio(text) {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'th-TH'; // Thai language code
            utterance.rate = 0.85; // Slightly slower for learning
            utterance.pitch = 1;
            
            window.speechSynthesis.speak(utterance);
        } else {
            alert('您的瀏覽器不支援語音合成功能。請嘗試使用最新版的 Chrome 或 Safari。');
        }
    }

    // Modal logic
    btnInfo.addEventListener('click', () => {
        infoModal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        infoModal.classList.add('hidden');
    });

    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.classList.add('hidden');
        }
    });

    // Init
    initCategories();
    renderCards();
});
