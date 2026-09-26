const ANALYTICS_ENDPOINT =
"https://script.google.com/macros/s/AKfycbyeNNDoCh8JL966OgvmIf54iAh0TBPEgDTpZ3WNgG1kX92WkJbAdot_OW-6s2Pw_weOmQ/exec";

/* =========================
   QUESTIONS
========================= */

const questions = [
  {
    title: "اگر قرار باشد استایلت را فقط با یک کلمه تعریف کنی؟",
    subtitle: "اولین چیزی که واقعاً به ذهنت می‌رسد.",
    answers: [
      ["کلاسیک و مرتب", ["classic", "clean"]],
      ["خیابانی و آزاد", ["street", "bold"]],
      ["مینیمال و ساده", ["minimal", "calm"]],
      ["خاص و متفاوت", ["unique", "artistic"]]
    ]
  },
  {
    title: "کدام vibe بیشتر جذبت می‌کند؟",
    subtitle: "چیزی که واقعاً دوست داری.",
    answers: [
      ["آرام و عمیق", ["calm", "deep"]],
      ["شوخ و پرانرژی", ["social", "energy"]],
      ["مرموز و کم‌حرف", ["mysterious", "deep"]],
      ["هنری و خلاق", ["artistic", "unique"]]
    ]
  },
  {
    title: "کدام مدل مو بیشتر vibe مورد علاقه‌ات را دارد؟",
    subtitle: "روی حس کلی تمرکز کن.",
    answers: [
      ["مرتب و کلاسیک", ["classic", "clean"]],
      ["طبیعی و کمی شلوغ", ["street", "casual"]],
      ["کوتاه و ساده", ["minimal", "clean"]],
      ["متفاوت و خاص", ["unique", "artistic"]]
    ]
  },
  {
    title: "در لباس، چه چیزی مهم‌تر است؟",
    subtitle: "چیزی که بیشترین تأثیر را روی انتخابت دارد.",
    answers: [
      ["جزئیات و تمیزی", ["clean", "classic"]],
      ["راحتی و آزادی", ["casual", "street"]],
      ["هماهنگی و سادگی", ["minimal", "calm"]],
      ["خاص بودن", ["unique", "bold"]]
    ]
  },
  {
    title: "اگر وارد یک جمع ناآشنا شوی...",
    subtitle: "واکنش طبیعی خودت را انتخاب کن.",
    answers: [
      ["اول فضا را می‌سنجم.", ["calm", "deep"]],
      ["زود با چند نفر گرم می‌گیرم.", ["social", "energy"]],
      ["با یکی دو نفر حرف می‌زنم.", ["calm", "social"]],
      ["اگر جالب باشد خودم بحث را راه می‌اندازم.", ["energy", "bold"]]
    ]
  },
  {
    title: "یک عصر آزاد داری. انتخابت؟",
    subtitle: "هیچ جواب درست یا غلطی وجود ندارد.",
    answers: [
      ["کافه و موسیقی", ["calm", "artistic"]],
      ["بیرون رفتن و برنامه ناگهانی", ["energy", "social"]],
      ["فیلم یا سریال", ["calm", "minimal"]],
      ["عکاسی، نوشتن یا ساختن چیزی", ["artistic", "unique"]]
    ]
  },
  {
    title: "وقتی چیزی واقعاً اذیتت می‌کند...",
    subtitle: "کدام واکنش به تو نزدیک‌تر است؟",
    answers: [
      ["سکوت می‌کنم و تحلیلش می‌کنم.", ["deep", "calm"]],
      ["همان موقع حرفم را می‌زنم.", ["bold", "energy"]],
      ["با یک آدم قابل اعتماد حرف می‌زنم.", ["social", "calm"]],
      ["ازش چیزی خلاقانه می‌سازم.", ["artistic", "deep"]]
    ]
  },
  {
    title: "کدام ویژگی در یک آدم بیشتر برایت جذاب است؟",
    subtitle: "نزدیک‌ترین گزینه را انتخاب کن.",
    answers: [
      ["اعتمادبه‌نفس", ["bold", "classic"]],
      ["شوخ‌طبعی", ["funny", "energy"]],
      ["فهم و عمق فکری", ["deep", "calm"]],
      ["مهربانی و خلاقیت", ["artistic", "unique"]]
    ]
  },
  {
    title: "کدام تصویر بیشتر شبیه سلیقه توست؟",
    subtitle: "فقط vibe را بگیر.",
    answers: [
      ["پیراهن ساده و ساعت کلاسیک", ["classic", "clean"]],
      ["تیشرت آزاد و شلوار بگ", ["street", "casual"]],
      ["رنگ‌های خنثی و ساده", ["minimal", "clean"]],
      ["ترکیبی که کمتر کسی می‌پوشد", ["unique", "bold"]]
    ]
  },
  {
    title: "در تصمیم‌های مهم بیشتر به چه چیزی تکیه می‌کنی؟",
    subtitle: "جواب اولت را بده.",
    answers: [
      ["منطق", ["deep", "calm"]],
      ["حس لحظه", ["energy", "bold"]],
      ["ترکیبی از منطق و حس", ["calm", "social"]],
      ["ایده‌ای کاملاً متفاوت", ["unique", "artistic"]]
    ]
  }
];


/* =========================
   TYPE PROFILES
========================= */

const typeProfiles = {
  classic: {
    name: "THE CLASSIC",
    description:
      "سلیقه‌ات بیشتر سمت جزئیات مرتب، ظاهر حساب‌شده و چیزهایی می‌رود که لازم نیست برای جلب توجه داد بزنند.",
    traits: ["مرتب", "با‌جزئیات", "با‌ثبات", "سلیقه‌محور"]
  },

  street: {
    name: "THE FREE SPIRIT",
    description:
      "برای تو راحتی و آزادی فقط راحتی نیست؛ بخشی از هویت است. استایلی را می‌پسندی که شخصیت داشته باشد.",
    traits: ["آزاد", "خودجوش", "راحت", "جسور"]
  },

  minimal: {
    name: "THE MINIMALIST",
    description:
      "هماهنگی، سادگی و انتخاب دقیق برایت از انباشتن جزئیات مهم‌تر است.",
    traits: ["ساده", "دقیق", "آرام", "تمیز"]
  },

  unique: {
    name: "THE ORIGINAL",
    description:
      "اگر چیزی بیش از حد معمولی باشد احتمالاً حوصله‌ات را سر می‌برد. تفاوت و خلاقیت برایت مهم است.",
    traits: ["خاص", "خلاق", "مستقل", "جسور"]
  }
};


/* =========================
   PERSONALITY
========================= */

const personalityProfiles = {
  calm: {
    name: "THE OBSERVER",
    description:
      "پاسخ‌هایت بیشتر به سمت مشاهده، فکر کردن قبل از واکنش و توجه به لایه‌های پشت اتفاق‌ها می‌رود.",
    traits: ["مشاهده‌گر", "متفکر", "خونسرد"]
  },

  social: {
    name: "THE CONNECTOR",
    description:
      "از تعامل با آدم‌ها انرژی می‌گیری و ارتباط برایت بخش مهمی از تجربه زندگی است.",
    traits: ["اجتماعی", "ارتباط‌گیر", "گرم"]
  },

  deep: {
    name: "THE DEEP THINKER",
    description:
      "جواب‌هایت نشانه‌هایی از تحلیل‌گری و علاقه به معنی پشت اتفاق‌ها دارد.",
    traits: ["تحلیل‌گر", "عمیق", "کنجکاو"]
  },

  artistic: {
    name: "THE CREATOR",
    description:
      "ذهن تو تمایل دارد تجربه‌ها را به ایده، تصویر، نوشته یا چیز تازه‌ای تبدیل کند.",
    traits: ["خلاق", "تصویری", "ایده‌پرداز"]
  },

  energy: {
    name: "THE SPARK",
    description:
      "در جواب‌هایت انرژی، حرکت و واکنش سریع‌تر دیده می‌شود.",
    traits: ["پرانرژی", "سریع", "خودجوش"]
  },

  bold: {
    name: "THE BOLD MIND",
    description:
      "جواب‌هایت بیشتر به سمت استقلال، جسارت و انتخاب چیزی می‌رود که واقعاً خودت می‌خواهی.",
    traits: ["مستقل", "جسور", "قاطع"]
  }
};


/* =========================
   CELEBRITIES
========================= */

const maleCelebrities = [
  ["Timothée Chalamet", ["artistic", "unique", "calm", "deep"]],
  ["Tom Holland", ["social", "funny", "energy", "casual"]],
  ["Ryan Gosling", ["classic", "calm", "minimal", "clean"]],
  ["Ryan Reynolds", ["funny", "social", "energy", "bold"]],
  ["Henry Cavill", ["classic", "formal", "clean", "bold"]],
  ["Robert Pattinson", ["mysterious", "deep", "artistic", "unique"]],
  ["Cillian Murphy", ["deep", "calm", "mysterious", "classic"]],
  ["Tom Hardy", ["bold", "unique", "street", "energy"]],
  ["Keanu Reeves", ["calm", "deep", "minimal", "artistic"]],
  ["Leonardo DiCaprio", ["classic", "deep", "calm", "clean"]],
  ["Brad Pitt", ["classic", "bold", "casual", "clean"]],
  ["Johnny Depp", ["artistic", "unique", "bold", "street"]],
  ["Joaquin Phoenix", ["deep", "artistic", "unique", "mysterious"]],
  ["Andrew Garfield", ["artistic", "social", "calm", "funny"]],
  ["Oscar Isaac", ["classic", "artistic", "deep", "bold"]],
  ["Pedro Pascal", ["social", "funny", "energy", "casual"]],
  ["Dev Patel", ["artistic", "calm", "deep", "unique"]],
  ["Michael B. Jordan", ["bold", "energy", "classic", "social"]],
  ["Idris Elba", ["classic", "bold", "formal", "clean"]],
  ["Daniel Craig", ["classic", "minimal", "bold", "clean"]],
  ["Benedict Cumberbatch", ["deep", "classic", "calm", "artistic"]],
  ["Rami Malek", ["unique", "mysterious", "artistic", "deep"]],
  ["Kit Harington", ["classic", "calm", "mysterious", "deep"]],
  ["Alexander Skarsgård", ["minimal", "classic", "bold", "clean"]],
  ["Mads Mikkelsen", ["mysterious", "classic", "deep", "bold"]]
];

const femaleCelebrities = [
  ["Zendaya", ["unique", "artistic", "classic", "bold"]],
  ["Emma Stone", ["funny", "social", "artistic", "energy"]],
  ["Anya Taylor-Joy", ["unique", "mysterious", "artistic", "bold"]],
  ["Florence Pugh", ["bold", "artistic", "unique", "energy"]],
  ["Margot Robbie", ["classic", "social", "energy", "clean"]],
  ["Ana de Armas", ["classic", "calm", "artistic", "clean"]],
  ["Emma Watson", ["minimal", "classic", "calm", "deep"]],
  ["Keira Knightley", ["classic", "artistic", "calm", "deep"]],
  ["Natalie Portman", ["deep", "classic", "calm", "minimal"]],
  ["Anne Hathaway", ["classic", "social", "clean", "energy"]],
  ["Dakota Johnson", ["minimal", "calm", "mysterious", "classic"]],
  ["Saoirse Ronan", ["artistic", "deep", "calm", "unique"]],
  ["Jenna Ortega", ["mysterious", "unique", "bold", "artistic"]],
  ["Sydney Sweeney", ["social", "energy", "classic", "bold"]],
  ["Margaret Qualley", ["artistic", "unique", "calm", "deep"]],
  ["Daisy Edgar-Jones", ["calm", "classic", "artistic", "minimal"]],
  ["Gal Gadot", ["classic", "bold", "clean", "energy"]],
  ["Scarlett Johansson", ["classic", "bold", "clean", "social"]],
  ["Jennifer Lawrence", ["funny", "social", "energy", "casual"]],
  ["Kristen Stewart", ["unique", "minimal", "bold", "artistic"]],
  ["Rachel McAdams", ["classic", "social", "calm", "funny"]],
  ["Emily Blunt", ["classic", "calm", "clean", "bold"]],
  ["Rosamund Pike", ["classic", "mysterious", "deep", "formal"]],
  ["Tilda Swinton", ["artistic", "unique", "minimal", "bold"]],
  ["Carice van Houten", ["artistic", "mysterious", "deep", "classic"]]
];


/* =========================
   STATE
========================= */

const state = {
  name: "",
  gender: "",
  currentQuestion: 0,
  answers: [],
  type: null,
  personality: null,
  celebrity: null,
  scores: null
};


/* =========================
   HELPERS
========================= */

const $ = id => document.getElementById(id);

function fa(number) {
  return String(number).replace(
    /\d/g,
    d => "۰۱۲۳۴۵۶۷۸۹"[d]
  );
}

function showScreen(screen) {
  if (!screen) return;

  document.querySelectorAll(".screen").forEach(el => {
    el.classList.remove("active");
  });

  screen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateTheme() {
  document.body.dataset.theme =
    state.gender === "female"
      ? "female"
      : "male";
}


/* =========================
   QUESTIONS
========================= */

function renderProgress() {
  const current = state.currentQuestion + 1;
  const total = questions.length;
  const percent = Math.round(
    current / total * 100
  );

  $("progressArea")?.classList.remove("hidden");

  if ($("progressText")) {
    $("progressText").textContent =
      `${fa(current)} از ${fa(total)}`;
  }

  if ($("progressPercent")) {
    $("progressPercent").textContent =
      `${fa(percent)}٪`;
  }

  if ($("progressBar")) {
    $("progressBar").style.width =
      `${percent}%`;
  }

  if ($("stepCounter")) {
    $("stepCounter").textContent =
      `0${current} / ${String(total).padStart(2,"0")}`;
  }
}

function renderQuestion() {
  const question =
    questions[state.currentQuestion];

  if (!question) return;

  $("questionKicker").textContent =
    `QUESTION ${String(
      state.currentQuestion + 1
    ).padStart(2,"0")}`;

  $("questionTitle").textContent =
    question.title;

  $("questionSubtitle").textContent =
    question.subtitle;

  const answers = $("answers");

  answers.innerHTML = "";

  question.answers.forEach(
    (item,index) => {

      const button =
        document.createElement("button");

      button.className = "answer";
      button.type = "button";

      if (
        state.answers[state.currentQuestion]
        === index
      ) {
        button.classList.add("selected");
      }

      const radio =
        document.createElement("span");

      radio.className = "radio";

      const text =
        document.createElement("span");

      text.textContent = item[0];

      button.append(radio,text);

      button.addEventListener(
        "click",
        () => {

          state.answers[
            state.currentQuestion
          ] = index;

          document
            .querySelectorAll(".answer")
            .forEach(
              x =>
                x.classList.remove(
                  "selected"
                )
            );

          button.classList.add("selected");

          $("nextBtn").disabled = false;
        }
      );

      answers.appendChild(button);
    }
  );

  $("nextBtn").disabled =
    state.answers[state.currentQuestion] == null;

  renderProgress();
}


/* =========================
   SCORING
========================= */

function calculateScores() {

  const typeScores = {
    classic: 0,
    street: 0,
    minimal: 0,
    unique: 0
  };

  const personalityScores = {
    calm: 0,
    social: 0,
    deep: 0,
    artistic: 0,
    energy: 0,
    bold: 0
  };

  state.answers.forEach(
    (answerIndex,qIndex) => {

      if (answerIndex == null) return;

      const tags =
        questions[qIndex]
          .answers[answerIndex][1];

      tags.forEach(tag => {

        if (
          typeScores[tag] !== undefined
        ) {
          typeScores[tag]++;
        }

        if (
          personalityScores[tag] !== undefined
        ) {
          personalityScores[tag]++;
        }

      });
    }
  );

  return {
    typeScores,
    personalityScores
  };
}

function percentages(scores) {

  const total =
    Object.values(scores)
      .reduce((a,b) => a+b,0) || 1;

  const result = {};

  Object.entries(scores)
    .forEach(([key,value]) => {

      result[key] =
        Math.round(
          value / total * 100
        );

    });

  return result;
}

function topScore(scores) {

  const sorted =
    Object.entries(scores)
      .sort((a,b) => {

        if (b[1] !== a[1]) {
          return b[1] - a[1];
        }

        return a[0].localeCompare(b[0]);
      });

  const winner = sorted[0];

  const total =
    Object.values(scores)
      .reduce((a,b) => a+b,0) || 1;

  return {
    key: winner[0],
    score: winner[1],
    percentage:
      Math.round(
        winner[1] / total * 100
      )
  };
}


/* =========================
   CELEBRITY MATCH
========================= */

function celebrityMatch(type) {

  const scores =
    calculateScores();

  const pool =
    state.gender === "male"
      ? femaleCelebrities
      : maleCelebrities;

  const ranked =
    pool.map(person => {

      let score = 0;

      person[1].forEach(tag => {

        score +=
          (scores.typeScores[tag] || 0) * 2;

        score +=
          scores.personalityScores[tag] || 0;
      });

      if (
        person[1].includes(type.key)
      ) {
        score += 3;
      }

      return {
        name: person[0],
        tags: person[1],
        score
      };

    }).sort(
      (a,b) => b.score - a.score
    );

  const winner = ranked[0];

  const percentage =
    Math.max(
      58,
      Math.min(
        97,
        Math.round(
          winner.score / 45 * 100
        )
      )
    );

  return {
    name: winner.name,
    description:
      `یک match در سمت vibe ${winner.tags.join("، ")}.`,
    percentage
  };
}


/* =========================
   ANALYSIS
========================= */

function startAnalysis() {

  $("progressArea")
    ?.classList.add("hidden");

  if ($("stepCounter")) {
    $("stepCounter").textContent =
      "ANALYSIS";
  }

  showScreen(
    $("analysisScreen")
  );

  const messages = [
    [
      "دارم الگوهای انتخابت رو پیدا می‌کنم...",
      "ظاهر فقط نصف ماجراست."
    ],
    [
      "دارم جواب‌ها رو کنار هم می‌چینم...",
      "هر انتخاب یه تکه از پازله."
    ],
    [
      "تقریباً آماده‌ست...",
      "ببینیم TYPE تو چی میگه."
    ]
  ];

  let index = 0;

  $("analysisTitle").textContent =
    messages[0][0];

  $("analysisText").textContent =
    messages[0][1];

  const timer =
    setInterval(() => {

      index++;

      if (
        index < messages.length
      ) {

        $("analysisTitle")
          .textContent =
          messages[index][0];

        $("analysisText")
          .textContent =
          messages[index][1];
      }

    },700);

  setTimeout(() => {

    clearInterval(timer);

    generateResult();

  },2400);
}

function generatePrivateAnalysis() {

  const type =
    typeProfiles[state.type.key];

  const personality =
    personalityProfiles[
      state.personality.key
    ];

  const typePercent =
    percentages(
      state.scores.typeScores
    );

  const personalityPercent =
    percentages(
      state.scores.personalityScores
    );

  const strongestType =
    Object.entries(typePercent)
      .sort((a,b) => b[1]-a[1])[0];

  const strongestPersonality =
    Object.entries(
      personalityPercent
    ).sort(
      (a,b) => b[1]-a[1]
    )[0];

  const creativity =
    Math.min(
      100,
      Math.round(
        (
          personalityPercent.artistic +
          personalityPercent.unique * 0.6 +
          personalityPercent.deep * 0.4
        ) / 2
      )
    );

  const independence =
    Math.min(
      100,
      Math.round(
        (
          personalityPercent.bold +
          typePercent.unique * 0.7 +
          typePercent.street * 0.4
        ) / 2
      )
    );

  return {

    creativity,

    independence,

    privateAnalysis:
`الگوی کلی پاسخ‌ها بیشتر به ${type.name} و ${personality.name} نزدیک است.
در بخش استایل، ${strongestType[1]}٪ از امتیازهای تیپ مربوط به ${strongestType[0]} بوده است.
در بخش رفتاری، ${strongestPersonality[1]}٪ از امتیازهای شخصیت مربوط به ${strongestPersonality[0]} بوده است.
شاخص خلاقیت حدود ${creativity}٪ و شاخص استقلال حدود ${independence}٪ برآورد شده است.
این تحلیل فقط از روی انتخاب‌های همین پرسشنامه ساخته شده و ارزیابی علمی یا تشخیص قطعی شخصیت نیست.`,

    bluntAnalysis:
`این فرد در انتخاب‌ها بیشتر روی vibe، جزئیات و حس کلی تمرکز دارد.
الگوی پاسخ‌ها بیشتر به ${personality.name} نزدیک است و در سلیقه ظاهری ${type.name} دیده می‌شود.
این نتیجه فقط از همین ده سؤال ساخته شده و قرار نیست مغز انسان را اسکن کند.`
  };
}


/* =========================
   RESULT
========================= */

function generateResult() {

  state.scores =
    calculateScores();

  state.type =
    topScore(
      state.scores.typeScores
    );

  state.personality =
    topScore(
      state.scores.personalityScores
    );

  state.celebrity =
    celebrityMatch(
      state.type
    );

  const type =
    typeProfiles[state.type.key];

  const personality =
    personalityProfiles[
      state.personality.key
    ];

  const typePercentages =
    percentages(
      state.scores.typeScores
    );

  const personalityPercentages =
    percentages(
      state.scores.personalityScores
    );

  const analysis =
    generatePrivateAnalysis();

  if ($("resultGreeting")) {
    $("resultGreeting").textContent =
      `${state.name}، این شد نتیجه‌ات`;
  }

  if ($("typeName")) {
    $("typeName").textContent =
      type.name;
  }

  if ($("typeDescription")) {
    $("typeDescription").textContent =
      type.description;
  }

  if ($("typeScore")) {
    $("typeScore").textContent =
      state.type.percentage;
  }

  if ($("personalityName")) {
    $("personalityName").textContent =
      personality.name;
  }

  if ($("personalityDescription")) {
    $("personalityDescription").textContent =
      personality.description;
  }

  if ($("traitList")) {
    $("traitList").innerHTML =
      personality.traits
        .map(
          x =>
            `<span class="trait">${x}</span>`
        )
        .join("");
  }

  if ($("celebrityName")) {
    $("celebrityName").textContent =
      state.celebrity.name;
  }

  if ($("celebrityDescription")) {
    $("celebrityDescription").textContent =
      state.celebrity.description;
  }

  if ($("celebrityMatch")) {
    $("celebrityMatch").textContent =
      `${state.celebrity.percentage}%`;
  }

  if ($("summaryText")) {
    $("summaryText").textContent =
      `ترکیب جواب‌ها بیشتر به ${type.name} و ${personality.name} نزدیک شد. این نتیجه صرفاً سرگرمی‌محور است و تشخیص علمی شخصیت نیست.`;
  }

  showScreen(
    $("resultScreen")
  );

  sendReport(
    typePercentages,
    personalityPercentages,
    analysis
  );
}


/* =========================
   GOOGLE SHEETS
========================= */

function sendReport(
  typePercentages,
  personalityPercentages,
  analysis
) {

  if (!ANALYTICS_ENDPOINT) return;

  const report = {

    timestamp:
      new Date().toISOString(),

    name:
      state.name,

    gender:
            state.gender,

    answers:
      state.answers.map(
        (answer,q) => ({
          question:
            questions[q].title,

          answer:
            questions[q]
              .answers[answer][0]
        })
      ),

    type:
      typeProfiles[
        state.type.key
      ].name,

    typeKey:
      state.type.key,

    typeScore:
      state.type.percentage,

    personality:
      personalityProfiles[
        state.personality.key
      ].name,

    personalityKey:
      state.personality.key,

    celebrity:
      state.celebrity.name,

    matchPercentage:
      state.celebrity.percentage,

    classicPercentage:
      typePercentages.classic,

    streetPercentage:
      typePercentages.street,

    minimalPercentage:
      typePercentages.minimal,

    uniquePercentage:
      typePercentages.unique,

    calmPercentage:
      personalityPercentages.calm,

    socialPercentage:
      personalityPercentages.social,

    deepPercentage:
      personalityPercentages.deep,

    artisticPercentage:
      personalityPercentages.artistic,

    energyPercentage:
      personalityPercentages.energy,

    boldPercentage:
      personalityPercentages.bold,

    creativity:
      analysis.creativity,

    independence:
      analysis.independence,

    privateAnalysis:
      analysis.privateAnalysis,

    bluntAnalysis:
      analysis.bluntAnalysis
  };

  const data =
    JSON.stringify(report);

  try {

    if (navigator.sendBeacon) {

      const blob =
        new Blob(
          [data],
          {
            type:
              "text/plain;charset=utf-8"
          }
        );

      if (
        navigator.sendBeacon(
          ANALYTICS_ENDPOINT,
          blob
        )
      ) {
        return;
      }
    }

  } catch(error) {}

  fetch(
    ANALYTICS_ENDPOINT,
    {
      method:"POST",
      mode:"no-cors",
      headers:{
        "Content-Type":
          "text/plain;charset=utf-8"
      },
      body:data,
      keepalive:true
    }
  ).catch(
    error =>
      console.log(
        "Report error:",
        error
      )
  );
}


/* =========================
   RESET
========================= */

function reset() {

  state.name = "";
  state.gender = "";
  state.currentQuestion = 0;
  state.answers = [];
  state.type = null;
  state.personality = null;
  state.celebrity = null;
  state.scores = null;

  if ($("nameInput")) {
    $("nameInput").value = "";
  }

  if ($("nameCount")) {
    $("nameCount").textContent =
      "۰/۴۰";
  }

  document
    .querySelectorAll(".gender-choice")
    .forEach(
      x =>
        x.classList.remove(
          "selected"
        )
    );

  if ($("identityNextBtn")) {
    $("identityNextBtn").disabled =
      true;
  }

  $("progressArea")
    ?.classList.add("hidden");

  if ($("stepCounter")) {
    $("stepCounter").textContent =
      "START";
  }

  updateTheme();

  showScreen(
    $("introScreen")
  );
}


/* =========================
   INITIALIZATION
========================= */

function initTYPE() {

  console.log(
    "TYPE. JavaScript loaded."
  );

  const startBtn =
    $("startBtn");

  if (startBtn) {

    startBtn.addEventListener(
      "click",
      function() {

        console.log(
          "START clicked"
        );

        if ($("stepCounter")) {
          $("stepCounter").textContent =
            "IDENTITY";
        }

        showScreen(
          $("identityScreen")
        );
      }
    );

  } else {

    console.error(
      "TYPE.: startBtn پیدا نشد."
    );
  }


  const nameInput =
    $("nameInput");

  if (nameInput) {

    nameInput.addEventListener(
      "input",
      function(event) {

        state.name =
          event.target.value
            .slice(0,40);

        if ($("nameCount")) {

          $("nameCount").textContent =
            `${fa(state.name.length)}/۴۰`;
        }

        if ($("identityNextBtn")) {

          $("identityNextBtn").disabled =
            !state.name.trim() ||
            !state.gender;
        }

      }
    );
  }


  document
    .querySelectorAll(".gender-choice")
    .forEach(button => {

      button.addEventListener(
        "click",
        function() {

          document
            .querySelectorAll(
              ".gender-choice"
            )
            .forEach(
              x =>
                x.classList.remove(
                  "selected"
                )
            );

          button.classList.add(
            "selected"
          );

          state.gender =
            button.dataset.gender;

          updateTheme();

          if ($("identityNextBtn")) {

            $("identityNextBtn").disabled =
              !state.name.trim();
          }

        }
      );

    });


  if ($("identityNextBtn")) {

    $("identityNextBtn")
      .addEventListener(
        "click",
        function() {

          if (
            !state.name.trim() ||
            !state.gender
          ) {
            return;
          }

          state.currentQuestion = 0;

          renderQuestion();

          showScreen(
            $("quizScreen")
          );

        }
      );
  }


  if ($("identityBackBtn")) {

    $("identityBackBtn")
      .addEventListener(
        "click",
        function() {

          showScreen(
            $("introScreen")
          );

          if ($("stepCounter")) {
            $("stepCounter")
              .textContent = "START";
          }

        }
      );
  }


  if ($("nextBtn")) {

    $("nextBtn")
      .addEventListener(
        "click",
        function() {

          if (
            state.answers[
              state.currentQuestion
            ] == null
          ) {
            return;
          }

          if (
            state.currentQuestion <
            questions.length - 1
          ) {

            state.currentQuestion++;

            renderQuestion();

          } else {

            startAnalysis();

          }

        }
      );
  }


  if ($("backBtn")) {

    $("backBtn")
      .addEventListener(
        "click",
        function() {

          if (
            state.currentQuestion === 0
          ) {

            showScreen(
              $("identityScreen")
            );

            $("progressArea")
              ?.classList.add(
                "hidden"
              );

            return;
          }

          state.currentQuestion--;

          renderQuestion();

        }
      );
  }


  if ($("restartBtn")) {

    $("restartBtn")
      .addEventListener(
        "click",
        reset
      );
  }


  updateTheme();
}


/* =========================
   DOM READY
========================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initTYPE
  );

} else {

  initTYPE();

}
