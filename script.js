/* ─────────────────────────────────────────
   TAMIL KAVITHAIGAL — script.js
   ───────────────────────────────────────── */

/* ══════════════════════════════════════════
   DATA — QUOTES & POEMS
   ══════════════════════════════════════════ */
const QUOTES = [
  /* ── LOVE ── */
  { id: 1,  lang: "tamil",   cat: "love",       deco: "❤️",
    text: "உன் கண்களில் கடல் இருக்கிறது,\nஆனால் நான் அதில் மூழ்கவே விரும்புகிறேன்.\nஉன் சிரிப்பில் சூரியன் இருக்கிறான்,\nஆனால் என் இதயம் அதை மட்டுமே தேடுகிறது.",
    author: "அறியப்படாத கவிஞர்" },

  { id: 2,  lang: "english", cat: "love",       deco: "💕",
    text: "You don't love someone for their looks or their clothes or their fancy car, but because they sing a song only you can hear.",
    author: "Oscar Wilde" },

  { id: 3,  lang: "tamil",   cat: "love",       deco: "🌹",
    text: "காதல் என்பது வார்த்தைகளில் சொல்ல முடியாத\nஒரு மெல்லிய உணர்வு;\nகண்கள் கலைக்க மறுக்கும்\nஒரு இனிய தொடர்பு.",
    author: "கவிஞர் வைரமுத்து" },

  { id: 4,  lang: "english", cat: "love",       deco: "💞",
    text: "The best thing to hold onto in life is each other.",
    author: "Audrey Hepburn" },

  /* ── MOTIVATION ── */
  { id: 5,  lang: "tamil",   cat: "motivation", deco: "🔥",
    text: "விழுந்தால் தூசி தட்டிக்கொண்டு\nமீண்டும் எழு;\nதோல்வி என்பது முடிவல்ல,\nஅது புதிய தொடக்கம்.",
    author: "திருவள்ளுவர்" },

  { id: 6,  lang: "english", cat: "motivation", deco: "⚡",
    text: "The secret of getting ahead is getting started. Your future is created by what you do today, not tomorrow.",
    author: "Mark Twain" },

  { id: 7,  lang: "tamil",   cat: "motivation", deco: "🌟",
    text: "சூரியன் மேகங்களால் மறைக்கப்படலாம்,\nஆனால் அது ஒளிர்வதை நிறுத்தவில்லை;\nகஷ்டங்கள் உன்னை மூடலாம்,\nஆனால் உன் உள்ளொளி எப்போதும் இருக்கும்.",
    author: "சுப்ரமண்ய பாரதி" },

  { id: 8,  lang: "english", cat: "motivation", deco: "🚀",
    text: "It does not matter how slowly you go as long as you do not stop. Rise up, start fresh, see the bright opportunity in each day.",
    author: "Confucius" },

  /* ── FRIENDSHIP ── */
  { id: 9,  lang: "tamil",   cat: "friendship", deco: "🤝",
    text: "நண்பன் என்பவன் இரண்டு உடல்களில்\nவாழும் ஒரே ஆத்மா;\nமகிழ்ச்சியில் பாதி பங்கிட்டு,\nதுயரில் முழுமையாய் தோளில் நிற்பவன்.",
    author: "அரிஸ்டாட்டில்" },

  { id: 10, lang: "english", cat: "friendship", deco: "👫",
    text: "A real friend is one who walks in when the rest of the world walks out. Friendship is born at that moment when one person says to another: 'What! You too?'",
    author: "C.S. Lewis" },

  { id: 11, lang: "tamil",   cat: "friendship", deco: "🌻",
    text: "நட்பு என்பது ஒரு மரம்;\nவெயிலில் நிழல் கொடுக்கும்,\nமழையில் தண்ணீர் தரும்,\nகாற்றில் தழுவி நிற்கும்.",
    author: "கவிஞர் கண்ணதாசன்" },

  /* ── LIFE ── */
  { id: 12, lang: "tamil",   cat: "life",       deco: "🌿",
    text: "வாழ்க்கை ஒரு புத்தகம்;\nஒவ்வொரு நாளும் ஒரு பக்கம்.\nநல்லதோ கெட்டதோ, எழுதுவது நீயே;\nமகிழ்ச்சியான இறுதி அத்தியாயம் உன் கையில்.",
    author: "தமிழ் பழமொழி" },

  { id: 13, lang: "english", cat: "life",       deco: "☀️",
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou" },

  { id: 14, lang: "tamil",   cat: "life",       deco: "🦋",
    text: "மண்ணில் விதை விழும்போது அழுகும்;\nஆனால் அதிலிருந்துதான் மரம் பிறக்கும்.\nகஷ்டம் என்பது அழிவல்ல,\nஅது உன்னுள் ஒளிந்திருக்கும் சக்தியின் முகவரி.",
    author: "கவிஞர் பாரதிதாசன்" },

  { id: 15, lang: "english", cat: "life",       deco: "🌊",
    text: "In the middle of difficulty lies opportunity. Life is 10% what happens to you and 90% how you react to it.",
    author: "Albert Einstein" },

  /* ── NATURE ── */
  { id: 16, lang: "tamil",   cat: "nature",     deco: "🌺",
    text: "மழை சொட்டுகள் கல்லையும் பிளக்கும்;\nமலர் இதழ்கள் காற்றையும் வசீகரிக்கும்.\nஆண்டவன் படைத்த இந்த பூமி\nஒவ்வொரு தினமும் கவிதை பாடுகிறது.",
    author: "இயற்கைக் கவிஞர்" },

  { id: 17, lang: "english", cat: "nature",     deco: "🌿",
    text: "Look deep into nature, and then you will understand everything better. The earth has music for those who listen.",
    author: "Albert Einstein" },

  { id: 18, lang: "tamil",   cat: "nature",     deco: "🌊",
    text: "கடல் எல்லாவற்றையும் ஏற்கும்;\nஆறு எல்லாவற்றையும் கொடுக்கும்;\nமலை எல்லாவற்றையும் தாங்கும் —\nயாரவது கற்றுக்கொள்கிறோமா?",
    author: "கவிஞர் முத்துலிங்கம்" },

  /* ── SUCCESS ── */
  { id: 19, lang: "tamil",   cat: "success",    deco: "🏆",
    text: "வெற்றி என்பது ஒரிரவில் வருவதில்லை;\nஆயிரம் தோல்விகளின் குழந்தை அது.\nமண்ணைத் தோண்டியவனுக்குத்தான்\nதண்ணீர் கிடைக்கும்.",
    author: "A.P.J. அப்துல் கலாம்" },

  { id: 20, lang: "english", cat: "success",    deco: "✨",
    text: "Success is not final, failure is not fatal — it is the courage to continue that counts. Believe you can and you're halfway there.",
    author: "Winston Churchill" },

  { id: 21, lang: "tamil",   cat: "success",    deco: "🌟",
    text: "கனவு காண்பவன் தூங்குகிறான்;\nகனவை நனவாக்குபவன் விழித்திருக்கிறான்.\nவாழ்க்கை நீண்டதல்ல, உயர்ந்ததாக இரு.",
    author: "ஜி.கே. செஸ்டர்டன்" },

  /* ── SAD ── */
  { id: 22, lang: "tamil",   cat: "sad",        deco: "🌧️",
    text: "கண்ணீர் என்பது இதயத்தின் மொழி;\nவார்த்தைகள் சொல்ல முடியாததை\nகண்கள் சொல்கின்றன.\nவலி என்பதும் வாழ்க்கையின் ஒரு பகுதியே.",
    author: "அறியப்படாத கவிஞர்" },

  { id: 23, lang: "english", cat: "sad",        deco: "🌑",
    text: "The pain you feel today is the strength you feel tomorrow. For every challenge encountered, there is opportunity for growth.",
    author: "Anonymous" },

  /* ── FAMILY ── */
  { id: 24, lang: "tamil",   cat: "family",     deco: "🏠",
    text: "அம்மா என்பவள் இந்த உலகின்\nமிகப்பெரிய கவிதை;\nவார்த்தைகளால் எழுத முடியாது,\nமனதால் மட்டுமே உணர முடியும்.",
    author: "கவிஞர் கண்ணதாசன்" },

  { id: 25, lang: "english", cat: "family",     deco: "👨‍👩‍👧‍👦",
    text: "Family is not an important thing. It's everything. In family life, love is the oil that eases friction, the cement that binds closer together.",
    author: "Friedrich Nietzsche" },

  { id: 26, lang: "tamil",   cat: "family",     deco: "❤️",
    text: "அப்பாவின் கரம் வழிகாட்டும்;\nஅம்மாவின் மடி புகலிடம்;\nஒரு குடும்பம் என்பது\nகடவுளின் மிகப்பெரிய வரம்.",
    author: "தமிழ் பழமொழி" },

  /* ── DREAMS ── */
  { id: 27, lang: "tamil",   cat: "dreams",     deco: "🌙",
    text: "கனவுகள் காண தைரியம் வேண்டும்;\nகனவுகளை துரத்த விடா மனம் வேண்டும்.\nவான் எட்டினாலும் கால் தரையிலேயே —\nஆனால் எட்டு என்பது நிறுத்தமல்ல.",
    author: "A.P.J. அப்துல் கலாம்" },

  { id: 28, lang: "english", cat: "dreams",     deco: "⭐",
    text: "All our dreams can come true, if we have the courage to pursue them. The future belongs to those who believe in the beauty of their dreams.",
    author: "Walt Disney / Eleanor Roosevelt" },

  /* ── HAPPINESS ── */
  { id: 29, lang: "tamil",   cat: "happiness",  deco: "😊",
    text: "மகிழ்ச்சி என்பது வெளியிலிருந்து வருவதில்லை;\nகுழந்தையின் சிரிப்பில் இருக்கிறது,\nமூதாட்டியின் கதையில் இருக்கிறது,\nமாலையில் சுடும் காபியில் இருக்கிறது.",
    author: "கவிஞர் சுரதா" },

  { id: 30, lang: "english", cat: "happiness",  deco: "🌈",
    text: "Happiness is not something ready made. It comes from your own actions. Count your age by friends, not years; count your life by smiles, not tears.",
    author: "Dalai Lama" },

  { id: 31, lang: "tamil",   cat: "happiness",  deco: "🌸",
    text: "ஒரு சிறிய மலர் பூக்கும்போது\nஒரு கணம் நின்று பார்;\nமகிழ்ச்சி பெரியதல்ல,\nசிறிய தருணங்களில் மறைந்திருக்கிறது.",
    author: "தமிழ் இலக்கியம்" },

  { id: 32, lang: "english", cat: "motivation", deco: "💪",
    text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.",
    author: "Rikki Rogers" },

  { id: 33, lang: "tamil",   cat: "sad",        deco: "🌧️",
    text: "பிரிவு என்பது மறதியின் ஆரம்பமல்ல;\nநினைவுகளின் மிகப்பெரிய கோட்டை.\nகல்லில் பதிந்த பெயரை அழிக்கலாம்;\nமனதில் பதிந்த காதலை எவர் அழிப்பர்?",
    author: "கவிஞர் வைரமுத்து" },

  { id: 34, lang: "english", cat: "nature",     deco: "🌸",
    text: "Adopt the pace of nature: her secret is patience. Every flower blooms in its own time — so do you.",
    author: "Ralph Waldo Emerson" },

  { id: 35, lang: "tamil",   cat: "success",    deco: "🏆",
    text: "படித்தவன் படிப்பால் வாழ்கிறான்;\nஉழைத்தவன் உழைப்பால் வாழ்கிறான்;\nமனித மேன்மை படிப்பிலும் உழைப்பிலும் அல்ல,\nமனிதாபிமானத்திலேயே இருக்கிறது.",
    author: "பெரியார் ஈ.வெ.ரா." },

  { id: 36, lang: "english", cat: "friendship", deco: "🤗",
    text: "True friendship comes when the silence between two people is comfortable. A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard" },

  { id: 37, lang: "tamil",   cat: "dreams",     deco: "🌠",
    text: "இரவில் மட்டுமே நட்சத்திரங்கள் தெரியும்;\nகனவுகளும் கஷ்டங்களின் இருளில்தான்\nமிகத் தெளிவாய் தெரியும்.",
    author: "திரு ஆர். கே. நாராயண்" },

  { id: 38, lang: "english", cat: "life",       deco: "🌻",
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived.",
    author: "Ralph Waldo Emerson" },

  { id: 39, lang: "tamil",   cat: "love",       deco: "💫",
    text: "உன்னை மறக்கச் சொன்னால்\nமழையை நிறுத்தச் சொல்லலாம்;\nசூரியனை தடுக்கலாம்,\nஆனால் இதயத்தை தடுக்க யாரால் முடியும்?",
    author: "கவிஞர் யுகபாரதி" },

  { id: 40, lang: "english", cat: "happiness",  deco: "😄",
    text: "The most wasted of days is one without laughter. Joy is the simplest form of gratitude — embrace it fully.",
    author: "E.E. Cummings" },
];

/* ── CATEGORIES ── */
const CATEGORIES = [
  { key: "all",        label: "அனைத்தும் / All", emoji: "🪷" },
  { key: "love",       label: "காதல் / Love",      emoji: "❤️" },
  { key: "motivation", label: "ஊக்கம் / Motivation", emoji: "🔥" },
  { key: "friendship", label: "நட்பு / Friendship",  emoji: "🤝" },
  { key: "life",       label: "வாழ்க்கை / Life",    emoji: "🌿" },
  { key: "nature",     label: "இயற்கை / Nature",    emoji: "🌺" },
  { key: "success",    label: "வெற்றி / Success",   emoji: "🏆" },
  { key: "sad",        label: "சோகம் / Sad",        emoji: "🌧️" },
  { key: "family",     label: "குடும்பம் / Family", emoji: "🏠" },
  { key: "dreams",     label: "கனவு / Dreams",      emoji: "🌙" },
  { key: "happiness",  label: "மகிழ்ச்சி / Happiness", emoji: "😊" },
];

/* ── FEATURED SLIDES ── */
const FEATURED_IDS = [7, 19, 29, 39, 3, 20, 11];

/* ══════════════════════════════════════════
   STATE
   ══════════════════════════════════════════ */
let currentCat  = "all";
let currentLang = "all";
let searchQuery = "";
let favourites  = JSON.parse(localStorage.getItem("kavithai_favs") || "[]");
let currentSlide = 0;
let slideTimer;
let isDark = localStorage.getItem("kavithai_theme") !== "light";

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  buildCategoryTabs();
  buildSlider();
  renderCards();
  updateFavBadge();
  renderFavPanel();

  /* Loader fade */
  setTimeout(() => document.getElementById("loader").classList.add("fade-out"), 1200);

  /* Events */
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("randomBtn").addEventListener("click", showRandom);
  document.getElementById("favsToggle").addEventListener("click", openFavPanel);
  document.getElementById("closeFavs").addEventListener("click", closeFavPanel);
  document.getElementById("overlay").addEventListener("click", closeFavPanel);
  document.getElementById("searchInput").addEventListener("input", onSearch);
  document.getElementById("clearSearch").addEventListener("click", clearSearch);

  document.querySelectorAll(".lang-btn").forEach(btn =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang))
  );
});

/* ══════════════════════════════════════════
   THEME
   ══════════════════════════════════════════ */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.getElementById("themeToggle").innerHTML =
    isDark ? `<i class='bx bx-sun'></i>` : `<i class='bx bx-moon'></i>`;
}
function toggleTheme() {
  isDark = !isDark;
  localStorage.setItem("kavithai_theme", isDark ? "dark" : "light");
  applyTheme();
}

/* ══════════════════════════════════════════
   SLIDER
   ══════════════════════════════════════════ */
function buildSlider() {
  const container = document.getElementById("featuredSlider");
  const dotsWrap  = document.getElementById("sliderDots");
  const slides    = FEATURED_IDS.map(id => QUOTES.find(q => q.id === id)).filter(Boolean);

  slides.forEach((q, i) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (i === 0 ? " active" : "");
    slide.innerHTML = `
      <span class="slide-badge">✨ Daily Inspiration</span>
      <p class="slide-text ${q.lang === "tamil" ? "is-tamil" : "is-english"}">${nl2br(q.text)}</p>
      <span class="slide-author">— ${q.author}</span>`;
    container.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  startSlider(slides.length);
}

function startSlider(total) {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide((currentSlide + 1) % total), 4500);
}

function goToSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const dots   = document.querySelectorAll(".dot");
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = n;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

/* ══════════════════════════════════════════
   CATEGORIES
   ══════════════════════════════════════════ */
function buildCategoryTabs() {
  const wrap = document.getElementById("categoryTabs");
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-tab" + (cat.key === "all" ? " active" : "");
    btn.dataset.cat = cat.key;
    btn.innerHTML = `<span class="emoji">${cat.emoji}</span>${cat.label}`;
    btn.addEventListener("click", () => setCategory(cat.key));
    wrap.appendChild(btn);
  });
}

function setCategory(key) {
  currentCat = key;
  document.querySelectorAll(".cat-tab").forEach(t =>
    t.classList.toggle("active", t.dataset.cat === key)
  );
  renderCards();
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
  renderCards();
}

/* ══════════════════════════════════════════
   SEARCH
   ══════════════════════════════════════════ */
function onSearch(e) {
  searchQuery = e.target.value.toLowerCase().trim();
  renderCards();
}
function clearSearch() {
  document.getElementById("searchInput").value = "";
  searchQuery = "";
  renderCards();
}

/* ══════════════════════════════════════════
   FILTER LOGIC
   ══════════════════════════════════════════ */
function getFiltered() {
  return QUOTES.filter(q => {
    if (currentCat !== "all" && q.cat !== currentCat) return false;
    if (currentLang !== "all" && q.lang !== currentLang) return false;
    if (searchQuery) {
      const hay = (q.text + " " + q.author).toLowerCase();
      if (!hay.includes(searchQuery)) return false;
    }
    return true;
  });
}

/* ══════════════════════════════════════════
   RENDER CARDS
   ══════════════════════════════════════════ */
function renderCards(list) {
  const grid = document.getElementById("cardsGrid");
  const noRes = document.getElementById("noResults");
  const data = list || getFiltered();
  grid.innerHTML = "";

  if (!data.length) {
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  data.forEach((q, i) => {
    const isFav = favourites.includes(q.id);
    const card  = document.createElement("div");
    card.className = `q-card lang-${q.lang}`;
    card.setAttribute("data-deco", q.deco);
    card.style.animationDelay = `${i * 60}ms`;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-lang-badge">${q.lang === "tamil" ? "தமிழ்" : "English"}</span>
        <span class="card-cat-badge">${catInfo(q.cat).emoji} ${catInfo(q.cat).label}</span>
      </div>
      <p class="card-quote ${q.lang === "tamil" ? "is-tamil" : "is-english"}">
        <span class="openquote">"</span>${nl2br(q.text)}
      </p>
      <span class="card-author">— ${q.author}</span>
      <div class="card-actions">
        <button class="card-btn fav-btn ${isFav ? "is-fav" : ""}" title="${isFav ? "Remove favourite" : "Add favourite"}" data-id="${q.id}">
          <i class='bx ${isFav ? "bxs-heart" : "bx-heart"}'></i>
        </button>
        <button class="card-btn copy-btn" title="Copy" data-id="${q.id}">
          <i class='bx bx-copy'></i>
        </button>
        <button class="card-btn share-btn" title="Share" data-id="${q.id}">
          <i class='bx bx-share-alt'></i>
        </button>
      </div>`;

    card.querySelector(".fav-btn").addEventListener("click",   () => toggleFav(q.id));
    card.querySelector(".copy-btn").addEventListener("click",  (e) => copyQuote(q, e.currentTarget));
    card.querySelector(".share-btn").addEventListener("click", () => shareQuote(q));

    grid.appendChild(card);
  });
}

function catInfo(key) {
  return CATEGORIES.find(c => c.key === key) || { emoji: "📖", label: key };
}

/* ══════════════════════════════════════════
   FAVOURITES
   ══════════════════════════════════════════ */
function toggleFav(id) {
  if (favourites.includes(id)) {
    favourites = favourites.filter(f => f !== id);
    toast("நேசிப்பவற்றிலிருந்து நீக்கப்பட்டது / Removed from favourites 💔");
  } else {
    favourites.push(id);
    toast("நேசமானவற்றில் சேர்க்கப்பட்டது / Added to favourites ❤️");
  }
  localStorage.setItem("kavithai_favs", JSON.stringify(favourites));
  updateFavBadge();
  renderCards();
  renderFavPanel();
}

function updateFavBadge() {
  document.getElementById("favCount").textContent = favourites.length;
}

function openFavPanel() {
  document.getElementById("favsPanel").classList.remove("hidden");
  document.getElementById("overlay").classList.remove("hidden");
}
function closeFavPanel() {
  document.getElementById("favsPanel").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
}

function renderFavPanel() {
  const list = document.getElementById("favsList");
  if (!favourites.length) {
    list.innerHTML = `<p class="empty-favs">உங்கள் நேசமான கவிதைகளை சேர்க்கவும்! / Add your favourites!</p>`;
    return;
  }
  list.innerHTML = "";
  favourites.forEach(id => {
    const q = QUOTES.find(q => q.id === id);
    if (!q) return;
    const item = document.createElement("div");
    item.className = `fav-item ${q.lang === "tamil" ? "is-tamil" : "is-english"}`;
    item.innerHTML = `
      ${nl2br(q.text)}
      <span class="card-author" style="margin-top:0.5rem;display:block;">— ${q.author}</span>
      <button class="fav-remove" data-id="${q.id}" title="Remove"><i class='bx bx-trash'></i></button>`;
    item.querySelector(".fav-remove").addEventListener("click", () => toggleFav(q.id));
    list.appendChild(item);
  });
}

/* ══════════════════════════════════════════
   COPY & SHARE
   ══════════════════════════════════════════ */
function copyQuote(q, btn) {
  navigator.clipboard.writeText(`${q.text}\n— ${q.author}`).then(() => {
    btn.classList.add("copied");
    btn.innerHTML = `<i class='bx bx-check'></i>`;
    toast("நகலெடுக்கப்பட்டது / Copied! ✅");
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = `<i class='bx bx-copy'></i>`;
    }, 2000);
  }).catch(() => toast("நகல் தோல்வி / Copy failed ❌"));
}

function shareQuote(q) {
  const text = `${q.text}\n— ${q.author}\n\n#TamilKavithai #Quotes`;
  if (navigator.share) {
    navigator.share({ title: "தமிழ் கவிதை", text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() =>
      toast("பகிர்வுக்கு நகலெடுக்கப்பட்டது / Copied for sharing! 🔗")
    );
  }
}

/* ══════════════════════════════════════════
   RANDOM
   ══════════════════════════════════════════ */
function showRandom() {
  const pick = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  renderCards([pick]);
  toast(`${catInfo(pick.cat).emoji} Random: ${catInfo(pick.cat).label}`);
  document.querySelector(".cards-section").scrollIntoView({ behavior: "smooth" });
}

/* ══════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════ */
function nl2br(str) {
  return str.replace(/\n/g, "<br>");
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.classList.add("hidden"), 350);
  }, 2500);
}