/* =============================================
   CHATBOT — Dữ liệu Q&A (chỉnh sửa nội dung ở đây)
   keywords: từ khoá nhận diện | answer: trả lời (\n xuống dòng, **đậm**, https tự thành link)
   ============================================= */
const BOT_KNOWLEDGE = [
  {
    "keywords": [
      "techlock x"
    ],
    "answer": "**TechLock X**\nGiá hiển thị: **100K – 600K VNĐ**.\nTechLock X tập trung boost và quản lý RAM/CPU, tinh chỉnh hiệu năng máy cùng cảm giác chạm nhẹ. Các tùy chọn độ nhạy và hỗ trợ AimLock hướng đến tâm ngắm linh hoạt, dễ làm quen khi chơi trên thiết bị tương thích.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "hyperlock"
    ],
    "answer": "**HyperLock**\nGiá hiển thị: **100K – 300K – 600K VNĐ**.\nHyperLock kết hợp các tùy chỉnh độ nhạy, cảm giác nhẹ tâm và phản hồi khi vuốt ngắm. Gói cũng hướng đến tối ưu mức sử dụng CPU/RAM và hỗ trợ thao tác AimLock ổn định hơn trên thiết bị tương thích.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "onehead"
    ],
    "answer": "**OneHead**\nGiá hiển thị: **300K – 600K VNĐ**.\nOneHead hướng đến cảm giác AimLock linh hoạt, tâm ngắm dễ kiểm soát và độ nhạy có thể tinh chỉnh theo tay chơi. Đồng thời hỗ trợ tối ưu RAM/CPU để thao tác nhẹ nhàng hơn trên thiết bị tương thích.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "aimlock ai"
    ],
    "answer": "**AimLock AI**\nGiá hiển thị: **300K – 600K VNĐ**.\nAimLock AI giới thiệu AI engine hỗ trợ quản lý tài nguyên RAM/CPU và tối ưu trải nghiệm hiển thị. Phần tinh chỉnh hướng đến AimLock, tâm ngắm gọn và mức nhạy dễ tùy biến; kết quả thực tế phụ thuộc thiết bị và trò chơi.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "superconfig speedlock ios v1",
      "speedlock ios v1"
    ],
    "answer": "**SuperConfig SpeedLock iOS V1**\nGiá hiển thị: **100K VNĐ**.\nSpeedLock iOS V1 là gói cấu hình cơ bản để điều chỉnh độ nhạy, cảm giác tâm ngắm và thao tác chạm. Thiết lập hướng đến trải nghiệm AimLock dễ kiểm soát, đồng thời hỗ trợ tinh gọn tài nguyên máy tùy thiết bị.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "superconfig speedlock ios v2",
      "speedlock ios v2"
    ],
    "answer": "**SuperConfig SpeedLock iOS V2**\nGiá hiển thị: **200K VNĐ**.\nSpeedLock iOS V2 chú trọng độ mượt khi vuốt, tâm nhẹ và khả năng điều chỉnh độ nhạy theo thói quen. Cấu hình cũng hướng đến trải nghiệm AimLock ổn định và tối ưu sử dụng RAM/CPU trên máy tương thích.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "superconfig speedlock ios v3",
      "speedlock ios v3"
    ],
    "answer": "**SuperConfig SpeedLock iOS V3**\nGiá hiển thị: **350K VNĐ**.\nSpeedLock iOS V3 dành cho người muốn tinh chỉnh sâu hơn cảm giác ngắm: độ nhạy linh hoạt, tâm bám tay nhẹ và thao tác AimLock dễ kiểm soát. Các thiết lập tối ưu tài nguyên CPU/RAM tùy khả năng của thiết bị.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "superconfig proaim v1",
      "proaim v1"
    ],
    "answer": "**SuperConfig ProAim V1**\nGiá hiển thị: **250K VNĐ**.\nProAim V1 mang đến bộ thông số khởi đầu cho độ nhạy và tâm ngắm, hướng đến thao tác AimLock tự nhiên hơn. Có thể kết hợp tinh chỉnh hiệu năng và mức sử dụng RAM/CPU theo cấu hình máy.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "superconfig proaim v2",
      "proaim v2"
    ],
    "answer": "**SuperConfig ProAim V2**\nGiá hiển thị: **450K VNĐ**.\nProAim V2 tập trung cá nhân hóa độ nhạy nâng cao, cảm giác nhẹ tâm và phản hồi khi rê ngắm. Gói hướng đến hỗ trợ AimLock cùng việc tối ưu CPU/RAM để trải nghiệm ổn định hơn trên thiết bị phù hợp.\n\nĐể mua hoặc hỏi tương thích, liên hệ [Zalo shop](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "mua hàng",
      "mua san pham",
      "đặt hàng",
      "dat hang",
      "thanh toán",
      "thanh toan",
      "chuyển khoản",
      "chuyen khoan"
    ],
    "answer": "Để mua hàng, bấm **Mua / Tư vấn** tại sản phẩm hoặc liên hệ [Zalo shop](https://zalo.me/0984840729). Gửi tên sản phẩm và gói muốn mua; admin xác nhận thông tin trước khi thanh toán. Không gửi mật khẩu hoặc thông tin nhạy cảm."
  },
  {
    "keywords": [
      "make file",
      "make app",
      "làm file riêng",
      "lam file rieng",
      "thông số máy",
      "thong so may"
    ],
    "answer": "Shop nhận **Make File riêng** và **Make App riêng** theo thông số máy, các gói hiển thị 300K, 500K, 700K, 1M. Khi đặt, gửi dòng máy, phiên bản hệ điều hành, nhu cầu sử dụng và gói mong muốn. Ngoài ra có dịch vụ Make File 200K/1M, Make App 500K/1M. [Liên hệ Zalo](https://zalo.me/0984840729)."
  },
  {
    "keywords": [
      "vòng quay",
      "vong quay",
      "quay thưởng",
      "quay thuong",
      "quà",
      "qua tang"
    ],
    "answer": "Theo website: **mua từ 150K nhận 1 lượt vòng quay**. Phần thưởng giới thiệu gồm File Make riêng, App Make riêng, Key App, tiền mặt 30K–100K. Vòng quay trên web là **demo**; lượt quay và quà phải được shop xác nhận trực tiếp."
  },
  {
    "keywords": [
      "bảo hành",
      "bao hanh",
      "hạn sử dụng",
      "han su dung",
      "hsd",
      "vĩnh viễn",
      "vinh vien",
      "cam kết",
      "cam ket",
      "antiban",
      "hoàn tiền",
      "hoan tien",
      "ban acc"
    ],
    "answer": "Website giới thiệu HSD vĩnh viễn, bảo hành trọn đời, cam kết TD, Antiban và chính sách hoàn X2 nếu ban acc **theo chính sách shop**. Vui lòng xác nhận điều kiện, tương thích, phạm vi bảo hành và hoàn tiền với admin trước khi thanh toán; bot không tự xác nhận đủ điều kiện."
  },
  {
    "keywords": [
      "liên hệ",
      "lien he",
      "admin",
      "zalo",
      "facebook",
      "hỗ trợ",
      "ho tro"
    ],
    "answer": "Bạn có thể liên hệ **NgxbaoIos Store** qua [Zalo 0984 840 729](https://zalo.me/0984840729) hoặc [Facebook NgxbaoIos](https://www.facebook.com/share/1coXuAtiMJ/?mibextid=wwXIfr). Website giới thiệu hỗ trợ khách hàng 24/7."
  },
  {
    "keywords": [
      "sản phẩm",
      "san pham",
      "danh sách",
      "danh sach",
      "shop bán gì",
      "shop ban gi"
    ],
    "answer": "Shop giới thiệu các gói **TechLock X, HyperLock, OneHead, AimLock AI, SpeedLock iOS, ProAim** cùng dịch vụ Make File/App và khóa học Build AimLock. Xem danh sách và giá tại mục **Sản phẩm** trên website."
  },
  {
    "keywords": [
      "khóa học",
      "khoa hoc",
      "build aimlock"
    ],
    "answer": "Shop có **Khóa học Build AimLock File & App**. Nội dung chi tiết và học phí chưa được công bố trong file; hãy [hỏi admin](https://zalo.me/0984840729)."
  }
];
const BOT_WELCOME = "Chào bạn! 👋 Mình là **Support 24/7** của NgxbaoIos Store. Mình có thể hỗ trợ thông tin sản phẩm, giá, cách mua, dịch vụ Make, vòng quay và chính sách shop. Bạn muốn hỏi gì?";
const BOT_FALLBACK = "Mình chưa tìm thấy thông tin chính xác trong nội dung shop về câu hỏi này. Bạn có thể chọn câu hỏi gợi ý hoặc liên hệ [Zalo admin](https://zalo.me/0984840729) để được tư vấn nhé!";
const BOT_QUICK = ["Shop bán gì?", "Cách mua hàng", "Giá AimLock AI", "Giá HyperLock", "Make File / Make App", "Vòng quay", "Bảo hành", "Liên hệ admin"];

function initChatbot() {
  const fab    = document.getElementById('chatFab');
  const widget = document.getElementById('chatWidget');
  const closeBtn = document.getElementById('chatClose');
  const body   = document.getElementById('cwBody');
  const quick  = document.getElementById('cwQuick');
  const input  = document.getElementById('cwInput');
  const sendBtn = document.getElementById('cwSend');
  if (!fab || !widget) return;

  let started = false;

  // Bộ hiểu câu hỏi chạy hoàn toàn trong trình duyệt, không gọi API.
  const noAccent = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d')
    .replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
  const stop = new Set('cho minh toi em ban shop oi a ah nha nhe la co khong duoc voi ve cua cai nay kia thi the nao bao nhieu xin hoi tu van giup muon can'.split(' '));
  const tokens = s => noAccent(s).split(' ').filter(w => w.length > 1 && !stop.has(w));
  const productIds = [0,1,2,3,4,5,6,7,8];
  let lastProduct = null;
  function distance(a,b) {
    if (Math.abs(a.length-b.length)>2) return 3;
    const v=Array.from({length:b.length+1},(_,i)=>i);
    for(let i=1;i<=a.length;i++) { let prev=v[0];v[0]=i;
      for(let j=1;j<=b.length;j++){const tmp=v[j];v[j]=Math.min(v[j]+1,v[j-1]+1,prev+(a[i-1]===b[j-1]?0:1));prev=tmp;}
    } return v[b.length];
  }
  const aliases = [
    ['techlock x','tech lock'],['hyperlock','hyper lock'],['onehead','one head'],
    ['aimlock ai','aim lock ai'],['speedlock ios v1','speedlock v1','speed lock v1'],
    ['speedlock ios v2','speedlock v2','speed lock v2'],['speedlock ios v3','speedlock v3','speed lock v3'],
    ['proaim v1','pro aim v1'],['proaim v2','pro aim v2']
  ];
  function identify(q) {
    let found=[];
    aliases.forEach((names,i)=>{if(names.some(n=>q.includes(n)))found.push(i);});
    if (!found.length) {
      const words=tokens(q);
      aliases.forEach((names,i)=>{if(names.some(n=>n.split(' ').every(w=>words.some(x=>x===w || (w.length>=5 && distance(w,x)<=1)))))found.push(i);});
    }
    return found;
  }
  function findAnswer(text) {
    const q=noAccent(text), words=tokens(text);
    if (!q) return BOT_FALLBACK;
    if (/^(hi|hello|helo|chao|xin chao|alo|ad oi|shop oi)$/.test(q)) return 'Chào bạn 👋 Mình là **Support 24/7**. Bạn muốn xem giá sản phẩm, tư vấn gói, cách mua hay liên hệ admin?';
    if (/^(cam on|thanks|thank you|ok|oke|oki)$/.test(q)) return 'Rất vui được hỗ trợ bạn! Nếu còn câu hỏi về sản phẩm hoặc cách mua, cứ nhắn mình nhé 😊';
    const found=identify(q);
    const isCompare=/so sanh|khac nhau|hay hon|tot hon|nen chon|voi/.test(q);
    if(found.length>=2 && isCompare) {
      lastProduct=found[found.length-1];
      return found.slice(0,3).map(i=>BOT_KNOWLEDGE[i].answer).join('\n\n---\n\n')+'\n\nBạn cho mình biết dòng máy và ngân sách để admin tư vấn chính xác hơn nhé.';
    }
    if(found.length) {lastProduct=found[0];return BOT_KNOWLEDGE[found[0]].answer;}
    if(lastProduct!==null && /^(gia|bao nhieu|may tien|co gi|chi tiet|ban nay|goi nay|mua sao|tu van them|noi them|co tot khong|dung cho may nao)/.test(q))
      return BOT_KNOWLEDGE[lastProduct].answer;
    let best=null, scoreBest=0;
    BOT_KNOWLEDGE.forEach((item,i)=>{
      let score=0;
      item.keywords.forEach(kw=>{
        const k=noAccent(kw), kt=tokens(k);
        if(q===k) score=Math.max(score,100+k.length);
        else if(q.includes(k) && k.length>=4) score=Math.max(score,30+k.length);
        else if(kt.length){
          const matched=kt.filter(w=>words.some(x=>x===w || (w.length>=5 && distance(w,x)<=1))).length;
          const ratio=matched/kt.length;
          if(matched && ratio>=0.65) score=Math.max(score,ratio*15+matched*3);
        }
      });
      if(score>scoreBest){best=item;scoreBest=score;}
    });
    return best && scoreBest>=9 ? best.answer : BOT_FALLBACK;
  }
  const GAME_ICONS = {};

  /* ===== ICON SVG (thay emoji xấu) ===== */
  const SVG_ICONS = {
    android: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18a.4.4 0 00-.7-.4l-1.86 3.23a11.4 11.4 0 00-9.76 0L5.26 5.9a.4.4 0 10-.7.4L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52M7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5m10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5"/></svg>',
    apple:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>',
    key:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.65 10A6 6 0 001 12a6 6 0 0011.65 2H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 110-4 2 2 0 010 4z"/></svg>',
    warn:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
    check:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
    tool:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1a5.5 5.5 0 00-7.4-6.9l3.7 3.7-2.6 2.6-3.7-3.7a5.5 5.5 0 006.9 7.4l9.1 9.1a1 1 0 001.4 0l1.7-1.7a1 1 0 000-1.4z"/></svg>',
    play:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    bot:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h4a3 3 0 013 3v9a3 3 0 01-3 3H7a3 3 0 01-3-3v-9a3 3 0 013-3h4V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 12a1.5 1.5 0 000 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 000 3 1.5 1.5 0 000-3z"/></svg>',
    phone:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1H7a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2m0 18H7V5h10v14z"/></svg>',
    game:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2M11 13H9v2H7v-2H5v-2h2V9h2v2h2v2m4.5 2a1.5 1.5 0 110-3 1.5 1.5 0 010 3m4-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>',
    shield:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
    telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>',
    dot:     '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>',
    info:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20m1 15h-2v-6h2v6m0-8h-2V7h2v2z"/></svg>',
  };

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function fmt(text) {
    let out = esc(text);

    // ===== 1. Icon game (ảnh thật): [[icon:pubg]] =====
    out = out.replace(/\[\[icon:(\w+)\]\]/g, (m, key) => {
      const src = GAME_ICONS[key];
      return src ? `<img class="cw-game-icon" src="${src}" alt="${key}">` : '';
    });

    // ===== 1b. Icon SVG: [[svg:android]] =====
    out = out.replace(/\[\[svg:(\w+)\]\]/g, (m, key) => {
      const svg = SVG_ICONS[key];
      return svg ? `<span class="cw-svg-icon">${svg}</span>` : '';
    });

    // ===== 2. Video preview card: [[video:URL|Tiêu đề|Mô tả]] =====
    out = out.replace(/\[\[video:([^\|\]]+)\|([^\|\]]*)\|?([^\]]*)\]\]/g, (m, url, title, sub) => {
      const isYT = /youtu\.be|youtube\.com/.test(url);
      const thumbMatch = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
      const thumb = thumbMatch ? `https://img.youtube.com/vi/${thumbMatch[1]}/mqdefault.jpg` : '';
      return `
      <a class="cw-video-card" href="${url}" target="_blank" rel="noopener">
        <div class="cw-video-thumb">
          ${thumb
            ? `<img src="${thumb}" alt="${title}" loading="lazy">`
            : `<div class="cw-video-ph"><i class="bi bi-play-circle-fill"></i></div>`}
          <div class="cw-video-play"><i class="bi bi-play-fill"></i></div>
        </div>
        <div class="cw-video-meta">
          <div class="cw-video-src">${isYT ? 'youtube.com' : 'Video hướng dẫn'}</div>
          <div class="cw-video-title">${title || 'Xem video hướng dẫn'}</div>
          ${sub ? `<div class="cw-video-sub">${sub}</div>` : ''}
        </div>
      </a>`;
    });

    // ===== 3. Chip bấm nhanh: [[chip:Nội dung]] =====
    out = out.replace(/\[\[chip:([^\]]+)\]\]/g, (m, label) =>
      `<button class="cw-inline-chip" data-q="${label}">${label}</button>`);

    // ===== 4. Link gọn: [tại đây](url) =====
    out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a class="cw-link-btn" href="$2" target="_blank" rel="noopener">$1 <i class="bi bi-box-arrow-up-right"></i></a>');

    // ===== 5. Chữ đậm + xuống dòng =====
    out = out.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');

    // ===== 6. Link trần còn lại (chưa được bọc thẻ) =====
    out = out.replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener">$2</a>');

    return out;
  }

  function tnow() {
    const d = new Date();
    return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
  }

  function addMsg(text, sender) {
    const m = document.createElement('div');
    m.className = 'cw-msg ' + sender;
    const av = sender === 'bot'
      ? '<div class="cw-msg-av"><i class="bi bi-robot"></i></div>'
      : '<div class="cw-msg-av"><i class="bi bi-person-fill"></i></div>';
    m.innerHTML = av + '<div><div class="cw-bubble">' + fmt(text) + '</div><span class="cw-time">' + tnow() + '</span></div>';

    // Chip bấm nhanh trong tin nhắn → gửi luôn câu hỏi
    m.querySelectorAll('.cw-inline-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.q;
        addMsg(q, 'user');
        reply(q);
      });
    });

    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'cw-typing'; t.id = 'cwTyping';
    t.innerHTML = '<div class="cw-msg-av" style="background:linear-gradient(135deg,#3730a3,#818cf8);color:#fff;display:flex;align-items:center;justify-content:center"><i class="bi bi-robot"></i></div><div class="cw-typing-bubble"><span></span><span></span><span></span></div>';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }
  function hideTyping() { const t = document.getElementById('cwTyping'); if (t) t.remove(); }

  function reply(text) {
    showTyping();
    const ans = findAnswer(text);
    setTimeout(() => { hideTyping(); addMsg(ans, 'bot'); }, Math.min(400 + ans.length * 10, 2000));
  }

  function send() {
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = ''; input.style.height = 'auto';
    reply(text);
  }

  function renderQuick() {
    quick.innerHTML = '';
    BOT_QUICK.forEach(q => {
      const c = document.createElement('button');
      c.className = 'cw-chip'; c.textContent = q;
      c.onclick = () => { addMsg(q, 'user'); reply(q); };
      quick.appendChild(c);
    });
  }

  function openChat() {
    widget.classList.add('open');
    fab.classList.add('hidden');
    // Ẩn nút menu ≡ khi chat mở
    const menuFab = document.getElementById('menuToggle');
    if (menuFab) menuFab.style.display = 'none';
    if (!started) {
      started = true;
      renderQuick();
      setTimeout(() => addMsg(BOT_WELCOME, 'bot'), 300);
    }
    setTimeout(() => input.focus(), 350);
  }
  function closeChat() {
    widget.classList.remove('open');
    fab.classList.remove('hidden');
    // Hiện lại nút menu ≡
    const menuFab = document.getElementById('menuToggle');
    if (menuFab) menuFab.style.display = '';
  }

  fab.addEventListener('click', openChat);
  closeBtn.addEventListener('click', closeChat);
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
  input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 90) + 'px';
  });
}


document.addEventListener("DOMContentLoaded", initChatbot);
