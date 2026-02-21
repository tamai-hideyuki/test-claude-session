// ============================================================
// データ定義
// ============================================================

/** 広島ご当地グルメ */
const gourmetItems = [
  {
    name: "広島お好み焼き",
    emoji: "🥞",
    area: "広島市",
    category: "粉もの",
    tags: ["名物", "ソウルフード"],
    desc: "薄い生地の上にキャベツ・もやし・豚肉・中華麺を重ねて焼く広島流。パリッとした食感と甘いソースがたまらない！",
  },
  {
    name: "牡蠣料理",
    emoji: "🦪",
    area: "宮島・広島市",
    category: "海鮮",
    tags: ["冬の味覚", "日本一"],
    desc: "生産量日本一！焼き牡蠣・カキフライ・牡蠣の土手鍋など、冬の広島は牡蠣づくし。ぷりっぷりの味わいを堪能しよう。",
  },
  {
    name: "尾道ラーメン",
    emoji: "🍜",
    area: "尾道市",
    category: "麺",
    tags: ["ご当地ラーメン", "背脂"],
    desc: "鶏ガラと小魚の醤油スープに背脂を浮かべた一杯。平打ち麺との相性が抜群で、一度食べたらクセになる味。",
  },
  {
    name: "汁なし担々麺",
    emoji: "🌶️",
    area: "広島市",
    category: "麺",
    tags: ["辛旨", "B級グルメ"],
    desc: "広島で独自に進化した辛旨な麺料理。花椒のしびれと辣油の辛さがクセになる。よく混ぜて食べるのがコツ！",
  },
  {
    name: "あなご飯",
    emoji: "🍱",
    area: "宮島",
    category: "ごはん",
    tags: ["宮島名物", "伝統"],
    desc: "明治時代から愛される宮島の名物。ふっくら焼いた穴子をあなごの出汁で炊いたご飯にのせた、上品な味わい。",
  },
  {
    name: "もみじ饅頭",
    emoji: "🍁",
    area: "宮島",
    category: "スイーツ",
    tags: ["定番土産", "宮島名物"],
    desc: "もみじの葉をかたどった広島銘菓。こしあん・つぶあん・クリーム・チョコなど種類豊富。揚げもみじも人気！",
  },
  {
    name: "広島つけ麺",
    emoji: "🍜",
    area: "広島市",
    category: "麺",
    tags: ["辛い", "冷たい麺"],
    desc: "冷たい麺を唐辛子たっぷりの辛いつけだれで食べる広島スタイル。茹でキャベツとゆで卵がのるのが特徴。辛さ選択可能！",
  },
  {
    name: "呉海軍カレー",
    emoji: "🍛",
    area: "呉市",
    category: "その他",
    tags: ["海軍グルメ", "呉名物"],
    desc: "旧日本海軍のレシピを忠実に再現したカレー。牛脂のコクが効いた懐かしい味わい。大和ミュージアム近くで食べられる。",
  },
  {
    name: "瀬戸内レモンケーキ",
    emoji: "🍋",
    area: "瀬戸内エリア",
    category: "スイーツ",
    tags: ["レモン", "お土産"],
    desc: "国産レモン生産量日本一の広島県。爽やかなレモンの風味が広がるケーキは、お土産にもおやつにもぴったり。",
  },
  {
    name: "府中焼き",
    emoji: "🥞",
    area: "府中市",
    category: "粉もの",
    tags: ["ご当地", "ミンチ肉"],
    desc: "豚バラの代わりにミンチ肉を使う府中市発祥のお好み焼き。カリカリの食感とジューシーな旨味が特徴。",
  },
  {
    name: "三原タコ料理",
    emoji: "🐙",
    area: "三原市",
    category: "海鮮",
    tags: ["タコ", "瀬戸内"],
    desc: "瀬戸内海で獲れる三原のタコは身が引き締まって味が濃い。たこ天・たこ飯・タコ刺しなど食べ方いろいろ。",
  },
  {
    name: "広島菜漬け",
    emoji: "🥬",
    area: "広島市",
    category: "その他",
    tags: ["日本三大漬菜", "伝統"],
    desc: "日本三大漬菜のひとつ。シャキッとした歯ごたえとほのかな辛味が特徴。白ごはんとの相性は最高！おにぎりにも。",
  },
  {
    name: "因島はっさくゼリー",
    emoji: "🍊",
    area: "因島",
    category: "スイーツ",
    tags: ["はっさく発祥の地", "お土産"],
    desc: "はっさく発祥の地・因島で作られる名物ゼリー。果肉がゴロッと入ったさっぱり爽やかな味わいで、リピーター続出。",
  },
  {
    name: "鯛めし",
    emoji: "🐟",
    area: "瀬戸内エリア",
    category: "ごはん",
    tags: ["瀬戸内", "海鮮"],
    desc: "瀬戸内海で獲れた鯛をまるごと使った炊き込みご飯。上品な鯛の旨味が染み込んだご飯は絶品。",
  },
  {
    name: "ホルモン天ぷら",
    emoji: "🍤",
    area: "広島市",
    category: "その他",
    tags: ["B級グルメ", "ディープ"],
    desc: "新鮮なホルモンを天ぷらにした広島のディープなB級グルメ。甘辛いタレにつけて食べると最高！地元民に人気。",
  },
  {
    name: "美酒鍋",
    emoji: "🫕",
    area: "東広島市",
    category: "その他",
    tags: ["日本酒", "酒都"],
    desc: "酒都・西条の名物。日本酒と塩コショウだけで味付けする豪快な鍋。アルコールは飛ぶのでお子様もOK。",
  },
];

/** 新横浜→広島 のぞみ停車駅と駅弁データ */
const stations = [
  "新横浜",
  "名古屋",
  "京都",
  "新大阪",
  "新神戸",
  "岡山",
  "広島",
];

const ekibenItems = [
  // ── 新横浜 ──
  {
    station: "新横浜",
    name: "シウマイ弁当",
    maker: "崎陽軒",
    emoji: "🥟",
    price: "¥950",
    tags: ["定番", "肉"],
    desc: "横浜といえばコレ！昭和29年発売のロングセラー。冷めても美味しいシウマイと、筍煮・鮪の照焼き・かまぼこなど多彩なおかずが魅力。",
  },
  {
    station: "新横浜",
    name: "横濱チャーハン",
    maker: "崎陽軒",
    emoji: "🍳",
    price: "¥730",
    tags: ["定番", "肉"],
    desc: "シウマイ弁当と並ぶ崎陽軒の人気者。パラパラのチャーハンにシウマイ2個付き。手軽に食べられるサイズ感が新幹線にちょうどいい。",
  },
  {
    station: "新横浜",
    name: "炒飯弁当",
    maker: "崎陽軒",
    emoji: "🍱",
    price: "¥930",
    tags: ["定番", "肉"],
    desc: "崎陽軒の隠れた名作。チャーハン＋シウマイ＋おかずの満足セット。しっかり食べたい出発時にぴったり。",
  },
  // ── 名古屋 ──
  {
    station: "名古屋",
    name: "名古屋コーチン鶏三昧",
    maker: "だるま",
    emoji: "🐔",
    price: "¥1,180",
    tags: ["ご当地", "肉"],
    desc: "名古屋コーチンを焼き・そぼろ・つくねの三通りで楽しめる贅沢弁当。地鶏の旨味をこれでもかと堪能できる。",
  },
  {
    station: "名古屋",
    name: "味噌カツ弁当 天下とり御飯",
    maker: "だるま",
    emoji: "🍖",
    price: "¥1,080",
    tags: ["ご当地", "肉"],
    desc: "名古屋名物の味噌カツがどーんとのった弁当。八丁味噌の甘辛い味噌ダレがご飯に染みて、箸が止まらない。",
  },
  {
    station: "名古屋",
    name: "ひつまぶし巻き",
    maker: "だるま",
    emoji: "🍣",
    price: "¥880",
    tags: ["ご当地", "魚介"],
    desc: "名古屋名物ひつまぶしを駅弁スタイルで。うなぎの蒲焼きを巻き寿司にアレンジ。手軽に名古屋の味を楽しめる。",
  },
  // ── 京都 ──
  {
    station: "京都",
    name: "京のおばんざい弁当",
    maker: "萩の家",
    emoji: "🍱",
    price: "¥1,100",
    tags: ["ご当地", "魚介"],
    desc: "京都のおばんざい（お惣菜）を少しずつ詰め込んだ上品なお弁当。出汁の効いた優しい味付けに京都の食文化を感じる。",
  },
  {
    station: "京都",
    name: "柿の葉寿司",
    maker: "中谷本舗",
    emoji: "🍃",
    price: "¥1,200",
    tags: ["定番", "魚介"],
    desc: "鯖・鮭を柿の葉で包んだ奈良発祥の伝統寿司。柿の葉の香りがほんのり移り、さっぱりと食べやすい。京都駅でも購入可能。",
  },
  // ── 新大阪 ──
  {
    station: "新大阪",
    name: "八角弁当",
    maker: "水了軒",
    emoji: "🍱",
    price: "¥1,350",
    tags: ["定番", "魚介"],
    desc: "八角形の容器に品よくおかずが並ぶ新大阪の定番駅弁。焼き魚・煮物・天ぷらなどバランスの良い構成が人気の秘密。",
  },
  {
    station: "新大阪",
    name: "御堂筋弁当",
    maker: "水了軒",
    emoji: "🍱",
    price: "¥1,200",
    tags: ["定番", "肉"],
    desc: "大阪の大動脈「御堂筋」の名を冠した弁当。肉と魚のおかずがバランスよく入った、ボリューム満点の一品。",
  },
  {
    station: "新大阪",
    name: "旅のにぎわい御膳",
    maker: "水了軒",
    emoji: "🍣",
    price: "¥1,300",
    tags: ["ご当地", "魚介"],
    desc: "大阪の味覚を詰め込んだ彩り豊かな御膳弁当。タコの旨煮や押し寿司など大阪らしいおかずが楽しめる。",
  },
  // ── 新神戸 ──
  {
    station: "新神戸",
    name: "ひっぱりだこ飯",
    maker: "淡路屋",
    emoji: "🐙",
    price: "¥1,180",
    tags: ["定番", "魚介"],
    desc: "蛸壺型の陶器に入った超人気駅弁！明石のタコが入った炊き込みご飯は絶品。食べ終わった壺は小物入れにも。",
  },
  {
    station: "新神戸",
    name: "神戸のステーキ弁当",
    maker: "淡路屋",
    emoji: "🥩",
    price: "¥1,500",
    tags: ["ご当地", "肉"],
    desc: "神戸ビーフの旨味を駅弁で味わえる贅沢な一品。しっかりとした肉の味わいに神戸の街を感じる。",
  },
  {
    station: "新神戸",
    name: "肉めし",
    maker: "淡路屋",
    emoji: "🍖",
    price: "¥1,050",
    tags: ["定番", "肉"],
    desc: "甘辛く炊いた牛肉をたっぷりのせた神戸の肉めし。お手頃価格でがっつり食べたい人にぴったりの一品。",
  },
  // ── 岡山 ──
  {
    station: "岡山",
    name: "桃太郎の祭ずし",
    maker: "三好野本店",
    emoji: "🍑",
    price: "¥1,150",
    tags: ["ご当地", "魚介"],
    desc: "桃の形の容器がかわいい岡山名物駅弁。瀬戸内の海の幸を使ったちらし寿司で、蓋を開けた瞬間テンションUP！",
  },
  {
    station: "岡山",
    name: "ままかり寿司",
    maker: "三好野本店",
    emoji: "🐟",
    price: "¥980",
    tags: ["ご当地", "魚介"],
    desc: "「ままかり」は隣の家からご飯（まま）を借りてくるほど美味しい魚という意味。酢〆にしたままかりの押し寿司は岡山ならでは。",
  },
  // ── 広島 ──
  {
    station: "広島",
    name: "あなごめし弁当",
    maker: "うえの",
    emoji: "🍱",
    price: "¥2,160",
    tags: ["ご当地", "魚介"],
    desc: "宮島口「うえの」の伝説的駅弁。穴子の骨と頭で炊いたご飯の上にふっくら焼き穴子を敷き詰めた、広島を代表する駅弁。",
  },
  {
    station: "広島",
    name: "しゃもじかきめし",
    maker: "広島駅弁当",
    emoji: "🦪",
    price: "¥1,300",
    tags: ["ご当地", "魚介"],
    desc: "しゃもじ型の容器に牡蠣の炊き込みご飯と牡蠣フライを詰めた広島らしい駅弁。宮島のしゃもじにちなんだ形が縁起良し。",
  },
  {
    station: "広島",
    name: "広島菜むすび",
    maker: "むさし",
    emoji: "🍙",
    price: "¥500",
    tags: ["定番", "ご当地"],
    desc: "広島菜で包んだおむすびは地元民のソウルフード。「むさし」のむすびは広島空港・駅で大人気。手軽さが旅のお供に最適。",
  },
];

// ============================================================
// 状態管理
// ============================================================
let currentGourmetCategory = "all";
let currentStation = "all";
let currentEkibenTag = "all";
let filteredGourmet = [...gourmetItems];
let isSpinning = false;

// ============================================================
// 初期化
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initRoulette();
  initEkiben();
});

// ============================================================
// タブ切り替え
// ============================================================
function initTabs() {
  const btns = document.querySelectorAll(".tab-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}

// ============================================================
// ご当地グルメルーレット
// ============================================================
function initRoulette() {
  buildRouletteStrip();
  document.getElementById("spinBtn").addEventListener("click", spin);

  // カテゴリフィルター
  document.querySelectorAll("#groumetFilters .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#groumetFilters .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentGourmetCategory = btn.dataset.category;
      filteredGourmet =
        currentGourmetCategory === "all"
          ? [...gourmetItems]
          : gourmetItems.filter((g) => g.category === currentGourmetCategory);
      if (filteredGourmet.length === 0) filteredGourmet = [...gourmetItems];
      buildRouletteStrip();
    });
  });
}

function buildRouletteStrip() {
  const strip = document.getElementById("rouletteStrip");
  // 十分な数を繰り返して長いストリップを作る
  const repeated = [];
  for (let i = 0; i < 8; i++) {
    repeated.push(...filteredGourmet);
  }
  strip.innerHTML = repeated
    .map(
      (g) => `
    <div class="roulette-item">
      <span class="roulette-item-emoji">${g.emoji}</span>
      <span class="roulette-item-name">${g.name}</span>
    </div>`
    )
    .join("");
  strip.style.transform = "translateY(0)";
}

function spin() {
  if (isSpinning || filteredGourmet.length === 0) return;
  isSpinning = true;

  const btn = document.getElementById("spinBtn");
  btn.disabled = true;
  btn.classList.add("spinning");
  btn.querySelector(".spin-btn-text").textContent = "まわし中…";

  const resultCard = document.getElementById("resultCard");
  resultCard.classList.add("hidden");

  const strip = document.getElementById("rouletteStrip");
  const itemHeight = 64;
  const totalItems = filteredGourmet.length;

  // ランダムに止まる位置を決定（3〜6周 + ランダムオフセット）
  const spins = 3 + Math.floor(Math.random() * 4);
  const targetIndex = Math.floor(Math.random() * totalItems);
  const targetItem = filteredGourmet[targetIndex];

  // ルーレットウィンドウの中央に合わせるオフセット
  const centerOffset = 68; // (200px window / 2) - (64px item / 2) 付近
  const totalDistance = spins * totalItems * itemHeight + targetIndex * itemHeight - centerOffset;

  // CSS transition でアニメーション（ease-out で減速感）
  strip.style.transition = "none";
  strip.style.transform = "translateY(0)";

  // 強制リフロー
  strip.offsetHeight;

  const duration = 2500 + spins * 400;
  strip.style.transition = `transform ${duration}ms cubic-bezier(0.15, 0.8, 0.3, 1)`;
  strip.style.transform = `translateY(-${totalDistance}px)`;

  setTimeout(() => {
    showResult(targetItem);
    isSpinning = false;
    btn.disabled = false;
    btn.classList.remove("spinning");
    btn.querySelector(".spin-btn-text").textContent = "もう一回！";
  }, duration + 200);
}

function showResult(item) {
  const card = document.getElementById("resultCard");
  document.getElementById("resultEmoji").textContent = item.emoji;
  document.getElementById("resultName").textContent = item.name;
  document.getElementById("resultArea").textContent = `📍 ${item.area}`;
  document.getElementById("resultDesc").textContent = item.desc;
  document.getElementById("resultTags").innerHTML = item.tags
    .map((t) => `<span class="result-tag">${t}</span>`)
    .join("");
  card.classList.remove("hidden");
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "";
}

// ============================================================
// 駅弁セレクター
// ============================================================
function initEkiben() {
  buildRouteMap();
  renderEkibenList();

  // タグフィルター
  document.querySelectorAll("#ekibenTagFilters .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#ekibenTagFilters .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentEkibenTag = btn.dataset.tag;
      renderEkibenList();
    });
  });
}

function buildRouteMap() {
  const container = document.getElementById("routeStations");
  const allOption = { name: "全駅", key: "all" };
  const stationOptions = [allOption, ...stations.map((s) => ({ name: s, key: s }))];

  container.innerHTML = stationOptions
    .map(
      (s, i) => `
    <div class="route-station ${s.key === "all" ? "active" : ""}" data-station="${s.key}">
      <span class="station-name">${s.name}</span>
      <span class="station-dot"></span>
    </div>`
    )
    .join("");

  container.querySelectorAll(".route-station").forEach((el) => {
    el.addEventListener("click", () => {
      container.querySelectorAll(".route-station").forEach((e) => e.classList.remove("active"));
      el.classList.add("active");
      currentStation = el.dataset.station;
      renderEkibenList();
    });
  });
}

function renderEkibenList() {
  const list = document.getElementById("ekibenList");
  let items = [...ekibenItems];

  if (currentStation !== "all") {
    items = items.filter((e) => e.station === currentStation);
  }
  if (currentEkibenTag !== "all") {
    items = items.filter((e) => e.tags.includes(currentEkibenTag));
  }

  if (items.length === 0) {
    list.innerHTML = `<div class="ekiben-empty">該当する駅弁がありません。<br>フィルターを変えてみてください 🍱</div>`;
    return;
  }

  list.innerHTML = items
    .map(
      (e, i) => `
    <div class="ekiben-card" style="animation-delay: ${i * 0.05}s">
      <div class="ekiben-emoji">${e.emoji}</div>
      <div class="ekiben-info">
        <div class="ekiben-header">
          <span class="ekiben-name">${e.name}</span>
          <span class="ekiben-station">${e.station}</span>
        </div>
        <div class="ekiben-maker">${e.maker}</div>
        <p class="ekiben-desc">${e.desc}</p>
        <div class="ekiben-meta">
          <span class="ekiben-price">${e.price}</span>
          <div class="ekiben-tags">
            ${e.tags.map((t) => `<span class="ekiben-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>`
    )
    .join("");
}
